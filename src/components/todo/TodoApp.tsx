'use client';

import { motion } from 'framer-motion';
import { useTodos } from '@/hooks/useTodos';
import { TodoForm } from './TodoForm';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    getCounts,
  } = useTodos();

  const counts = getCounts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-4"
    >
      <div className="flex justify-between items-center mb-8">
        <div className="text-center w-full">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2"
          >
            Todo List
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Kelola tugas harian kamu dengan mudah ✨
          </motion.p>
        </div>
      </div>

      <TodoForm onAddTodo={addTodo} />
      <TodoFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        counts={counts}
      />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
        filter={filter}
      />
    </motion.div>
  );
}; 