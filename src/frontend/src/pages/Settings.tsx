import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { LogOut, User, Shield } from 'lucide-react';

export default function Settings() {
  const { identity, clear } = useInternetIdentity();

  const principal = identity?.getPrincipal().toString() || '';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Account Information
          </CardTitle>
          <CardDescription>Your Internet Identity details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Principal ID</label>
            <div className="mt-1 p-3 bg-muted rounded-lg font-mono text-sm break-all">
              {principal}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This is your unique identifier on the Internet Computer
            </p>
          </div>

          <Separator />

          <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
            <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-emerald-900 dark:text-emerald-100">
                Your data is secure
              </h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
                All your financial data is stored on the Internet Computer blockchain and is only accessible by you using your Internet Identity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sign Out</CardTitle>
          <CardDescription>Disconnect your Internet Identity from this device</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={clear} variant="destructive" className="w-full sm:w-auto">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
