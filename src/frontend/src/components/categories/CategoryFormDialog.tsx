import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddCategory } from '../../hooks/useQueries';
import { toast } from 'sonner';

interface CategoryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CategoryFormDialog({ open, onOpenChange }: CategoryFormDialogProps) {
  const [title, setTitle] = useState('');

  const addCategory = useAddCategory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('Please enter a category name');
      return;
    }

    try {
      await addCategory.mutateAsync(title.trim());
      toast.success('Category created successfully!');
      setTitle('');
      onOpenChange(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to create category');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Create a new category to organize your transactions
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Category Name</Label>
              <Input
                id="title"
                placeholder="e.g., Groceries, Entertainment, Utilities"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={addCategory.isPending} className="bg-emerald-600 hover:bg-emerald-700">
              {addCategory.isPending ? 'Creating...' : 'Create Category'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
