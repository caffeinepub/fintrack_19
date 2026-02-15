import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, AlertCircle } from 'lucide-react';

export default function Goals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Savings Goals</h1>
          <p className="text-muted-foreground">Track progress toward your financial goals</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700" disabled>
          <Plus className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </div>

      {/* Backend Incomplete Notice */}
      <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Backend Not Implemented:</strong> Savings goals functionality requires backend methods that are not yet available.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Your Goals</CardTitle>
          <CardDescription>Monitor your savings progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Goals management will be available once backend methods are implemented
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
