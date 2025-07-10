'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare, Plus } from 'lucide-react';

interface EmptyStateProps {
  filter: string;
}

export const EmptyState = ({ filter }: EmptyStateProps) => {
  const getMessage = () => {
    switch (filter) {
      case 'completed':
        return {
          title: 'Belum ada todo yang selesai',
          description: 'Selesaikan beberapa todo untuk melihatnya di sini',
          icon: CheckSquare,
        };
      case 'active':
        return {
          title: 'Tidak ada todo aktif',
          description: 'Semua todo sudah selesai! Selamat!',
          icon: CheckSquare,
        };
      default:
        return {
          title: 'Belum ada todo',
          description: 'Mulai dengan menambahkan todo pertama kamu',
          icon: Plus,
        };
    }
  };

  const message = getMessage();
  const Icon = message.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center py-12 bg-gradient-to-br from-card to-card/80 border-primary/20">
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {message.title}
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              {message.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 