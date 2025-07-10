'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TodoApp } from '@/components/todo/TodoApp';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('token');
      if (!token) {
        router.replace('/login');
        return;
      }
      try {
        const res = await fetch('http://localhost:3001/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Unauthorized');
        setLoading(false);
      } catch {
        Cookies.remove('token');
        router.replace('/login');
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="text-lg text-muted-foreground animate-pulse">Memuat...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <TodoApp />
    </div>
  );
}
