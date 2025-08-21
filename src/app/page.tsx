'use client'
import { TodoApp } from '@/components/todo/TodoApp';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <TodoApp />
    </div>
  );
}
