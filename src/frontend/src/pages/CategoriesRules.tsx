import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, AlertCircle } from 'lucide-react';
import CategoryFormDialog from '../components/categories/CategoryFormDialog';
import RuleFormDialog from '../components/rules/RuleFormDialog';

export default function CategoriesRules() {
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [isRuleDialogOpen, setIsRuleDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Categories & Rules</h1>
        <p className="text-muted-foreground">Organize transactions and automate categorization</p>
      </div>

      {/* Backend Incomplete Notice */}
      <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Limited Functionality:</strong> You can add categories and rules, but viewing, editing, and deleting require additional backend methods.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="rules">Auto-Categorization Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Create and manage transaction categories</CardDescription>
              </div>
              <Button onClick={() => setIsCategoryDialogOpen(true)} size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Categories list will appear here once backend fetch methods are implemented
                </p>
                <Button variant="outline" onClick={() => setIsCategoryDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Category
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Auto-Categorization Rules</CardTitle>
                <CardDescription>Automatically categorize transactions based on keywords</CardDescription>
              </div>
              <Button onClick={() => setIsRuleDialogOpen(true)} size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Rule
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Rules list will appear here once backend fetch methods are implemented
                </p>
                <Button variant="outline" onClick={() => setIsRuleDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Rule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CategoryFormDialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen} />
      <RuleFormDialog open={isRuleDialogOpen} onOpenChange={setIsRuleDialogOpen} />
    </div>
  );
}
