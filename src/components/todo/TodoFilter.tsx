'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TodoFilter as FilterType } from '@/types/todo';
import { ListTodo, CheckCircle, Clock } from 'lucide-react';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    total: number;
    active: number;
    completed: number;
  };
}

export const TodoFilter = ({ currentFilter, onFilterChange, counts }: TodoFilterProps) => {
  const filters = [
    {
      key: 'all' as FilterType,
      label: 'Semua',
      icon: ListTodo,
      count: counts.total,
    },
    {
      key: 'active' as FilterType,
      label: 'Aktif',
      icon: Clock,
      count: counts.active,
    },
    {
      key: 'completed' as FilterType,
      label: 'Selesai',
      icon: CheckCircle,
      count: counts.completed,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="mb-6 bg-gradient-to-br from-card to-card/80 border-primary/20">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = currentFilter === filter.key;
              
              return (
                <Button
                  key={filter.key}
                  variant={isActive ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onFilterChange(filter.key)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {filter.label}
                  <Badge 
                    variant={isActive ? 'secondary' : 'outline'} 
                    className="ml-1 text-xs"
                  >
                    {filter.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 