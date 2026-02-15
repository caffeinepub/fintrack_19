import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Wallet, TrendingUp, PiggyBank, BarChart3 } from 'lucide-react';

export default function SignIn() {
  const { login, isLoggingIn } = useInternetIdentity();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-emerald-600 p-3 rounded-2xl">
                <Wallet className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              FinTrack
            </h1>
            <p className="text-xl text-muted-foreground">
              Your personal finance manager on the Internet Computer
            </p>
          </div>

          {/* Main Sign In Card */}
          <Card className="max-w-md mx-auto mb-12 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome to FinTrack</CardTitle>
              <CardDescription>
                Sign in securely with Internet Identity to manage your finances
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={login}
                disabled={isLoggingIn}
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                {isLoggingIn ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                    Connecting...
                  </>
                ) : (
                  'Sign In with Internet Identity'
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Your data is stored securely on the blockchain and only accessible by you
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl w-fit mb-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Track Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Add, edit, and categorize your income and expenses with ease
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl w-fit mb-2">
                  <BarChart3 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-lg">Smart Budgets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Set budgets and get alerts when you're approaching limits
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-xl w-fit mb-2">
                  <PiggyBank className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="text-lg">Savings Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Set and track progress toward your financial goals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Built with ❤️ using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'fintrack'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
