import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, AlertCircle } from 'lucide-react';

export default function BudgetsAlerts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Budgets & Alerts</h1>
        <p className="text-muted-foreground">Set spending limits and track budget alerts</p>
      </div>

      {/* Backend Incomplete Notice */}
      <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Backend Not Implemented:</strong> Budget and alert functionality requires backend methods that are not yet available.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="budgets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="budgets" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Monthly Budgets</CardTitle>
                <CardDescription>Track your spending against budget limits</CardDescription>
              </div>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" disabled>
                <Plus className="h-4 w-4 mr-2" />
                Add Budget
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Budget management will be available once backend methods are implemented
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Budget Alerts</CardTitle>
              <CardDescription>Notifications when you approach budget limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Alerts will appear here once backend methods are implemented
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
