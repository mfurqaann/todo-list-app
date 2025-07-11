import { useState, useCallback, useEffect } from 'react';
import { Todo, TodoFilter } from '@/types/todo';
import Cookies from 'js-cookie';
import { Data } from '@/types/data';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  // Ambil token dari cookies
  const getToken = () => Cookies.get('token');

  // Fetch todos dari backend saat mount
  useEffect(() => {
    const fetchTodos = async () => {
      const token = getToken();
      if (!token) return;
      try {
        const res = await fetch('http://localhost:3001/todos', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Gagal mengambil data todo');
        const data = await res.json();
        setTodos(data.map((t: Data) => ({
          id: t.id.toString(),
          text: t.text,
          completed: !!t.completed,
          createdAt: new Date(t.createdAt),
        })));
      } catch {
        setTodos([]);
      }
    };
    fetchTodos();
  }, []);

  // Add new todo
  const addTodo = useCallback(async (text: string) => {
    const token = getToken();
    if (!token || !text.trim()) return;
    try {
      const res = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error('Gagal menambah todo');
      const t = await res.json();
      setTodos(prev => [{
        id: t.id.toString(),
        text: t.text,
        completed: !!t.completed,
        createdAt: new Date(t.created_at),
      }, ...prev]);
    } catch {}
  }, []);

  // Toggle todo completion
  const toggleTodo = useCallback(async (id: string) => {
    const token = getToken();
    const todo = todos.find(t => t.id === id);
    if (!token || !todo) return;
    try {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: todo.text, completed: !todo.completed }),
      });
      if (!res.ok) throw new Error('Gagal update todo');
      const t = await res.json();
      setTodos(prev => prev.map(td => td.id === id ? {
        id: t.id.toString(),
        text: t.text,
        completed: !!t.completed,
        createdAt: new Date(t.created_at),
      } : td));
    } catch {}
  }, [todos]);

  // Edit todo text
  const editTodo = useCallback(async (id: string, newText: string) => {
    const token = getToken();
    const todo = todos.find(t => t.id === id);
    if (!token || !todo || !newText.trim()) return;
    try {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: newText.trim(), completed: todo.completed }),
      });
      if (!res.ok) throw new Error('Gagal update todo');
      const t = await res.json();
      setTodos(prev => prev.map(td => td.id === id ? {
        id: t.id.toString(),
        text: t.text,
        completed: !!t.completed,
        createdAt: new Date(t.created_at),
      } : td));
    } catch {}
  }, [todos]);

  // Delete todo
  const deleteTodo = useCallback(async (id: string) => {
    const token = getToken();
    if (!token) return;
    try {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Gagal hapus todo');
      setTodos(prev => prev.filter(td => td.id !== id));
    } catch {}
  }, []);

  // Filter todos
  const filteredTodos = useCallback(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  // Get counts
  const getCounts = useCallback(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  return {
    todos: filteredTodos(),
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    getCounts,
  };
}; 