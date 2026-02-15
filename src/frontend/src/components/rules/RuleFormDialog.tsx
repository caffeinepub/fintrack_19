import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface RuleFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RuleFormDialog({ open, onOpenChange }: RuleFormDialogProps) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.error('Cannot create rule: Backend method requires category selection, but category list is not available');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Auto-Categorization Rule</DialogTitle>
          <DialogDescription>
            Automatically categorize transactions based on keywords
          </DialogDescription>
        </DialogHeader>

        <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
          <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
            Rules require a category to be selected, but the backend doesn't provide a method to fetch the categories list.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Keyword</Label>
              <Input
                id="keyword"
                placeholder="e.g., Starbucks, Amazon, Uber"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Transactions containing this keyword will be auto-categorized
              </p>
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Input placeholder="Category selection unavailable" disabled />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled className="bg-emerald-600 hover:bg-emerald-700">
              Create Rule
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
