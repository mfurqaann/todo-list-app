'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-6 bg-gradient-to-br from-card to-card/80 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">Tambah Todo Baru</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="text"
              placeholder="Apa yang ingin kamu lakukan hari ini?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1"
              maxLength={200}
            />
            <Button 
              type="submit" 
              disabled={!text.trim()}
              className="px-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah
            </Button>
          </form>
          {text.length > 0 && (
            <p className="text-xs text-muted-foreground mt-2">
              {text.length}/200 karakter
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}; 