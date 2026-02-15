import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import CategoriesRules from './pages/CategoriesRules';
import BudgetsAlerts from './pages/BudgetsAlerts';
import Goals from './pages/Goals';
import Settings from './pages/Settings';
import AppLayout from './components/layout/AppLayout';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

// Root component for authenticated routing
function RootComponent() {
  const { identity, isInitializing } = useInternetIdentity();

  if (isInitializing) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!identity) {
    return <SignIn />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

// Root route with layout for authenticated users
const rootRoute = createRootRoute({
  component: RootComponent,
});

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});

const transactionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/transactions',
  component: Transactions,
});

const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/categories',
  component: CategoriesRules,
});

const budgetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/budgets',
  component: BudgetsAlerts,
});

const goalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/goals',
  component: Goals,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  transactionsRoute,
  categoriesRoute,
  budgetsRoute,
  goalsRoute,
  settingsRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
