'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Todo } from '@/types/todo';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Check, X } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-primary/10 ${todo.completed ? 'bg-muted/50' : 'bg-gradient-to-r from-card to-card/90'
        }`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => onToggle(todo.id)}
              className="mt-1"
            />

            <div className="flex-1 min-w-0">
              {isEditing ? (
                <div className="flex gap-2">
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleEdit();
                      if (e.key === 'Escape') handleCancel();
                    }}
                    className="flex-1"
                    autoFocus
                  />
                  <Button size="sm" onClick={handleEdit} variant="outline">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="sm" onClick={handleCancel} variant="outline">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className={`text-sm leading-relaxed ${todo.completed ? 'line-through text-muted-foreground' : ''
                    }`}>
                    {todo.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {formatDate(todo.createdAt)}
                    </Badge>
                    {todo.completed && (
                      <Badge variant="default" className="text-xs">
                        Selesai
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!isEditing && (
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsEditing(true)}
                  className="h-8 w-8 p-0"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onDelete(todo.id)}
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 