import { useState, useCallback } from "react";
import { Todo, TodoFilter } from "@/types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>("all");

  const addTodo = useCallback(async (text: string) => {
    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        text: text,
        completed: false,
        createdAt: new Date(),
      },
      ...prev,
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((td) =>
        td.id === id
          ? {
              ...td,
              completed: !td.completed,
            }
          : td
      )
    );
  }, []);

  const editTodo = useCallback((id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((td) =>
        td.id === id
          ? {
              ...td,
              text: newText,
              createdAt: new Date(),
            }
          : td
      )
    );
  }, []);

  const deleteTodo = useCallback(async (id: string) => {
    setTodos((prev) => prev.filter((td) => td.id !== id));
  }, []);

  const filteredTodos = useCallback(() => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const getCounts = useCallback(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
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
