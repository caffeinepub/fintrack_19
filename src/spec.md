# Specification

## Summary
**Goal:** Build a simplified personal finance tracker on the Internet Computer with Internet Identity authentication, core finance modules (transactions, categories + rules, budgets + in-app alerts, goals), and a basic analytics dashboard.

**Planned changes:**
- Add Internet Identity sign-in/sign-out on the frontend and gate authenticated screens; use the authenticated principal for all data access.
- Implement a single Motoko backend canister with stable storage and per-principal data models for transactions, categories, auto-categorization rules, budgets, budget alerts (in-app), and savings goals.
- Build Transactions UI + API: add/edit/delete and list transactions with basic filtering (date range, category, income/expense) and sorting (newest first).
- Build Categories UI + API: create/rename/delete categories and assign categories to transactions, with graceful handling when deleting categories.
- Build Auto-categorization Rules UI + API: CRUD + enable/disable rules; deterministically apply matching rules on transaction creation and show why a category was auto-applied.
- Build Budgets UI + API: CRUD monthly budgets (overall or per-category) and compute utilization from transactions consistently across views.
- Build in-app Budget Alerts: per-budget threshold configuration; generate alerts when utilization crosses thresholds; persist read/dismiss state.
- Build Savings Goals UI + API: CRUD goals with target amount and optional target date; add manual contributions and show progress.
- Create an Analytics dashboard with basic charts/summaries (income/expense/net, category breakdown, budget utilization summary, goals progress) with time range selection and empty states.
- Add core navigation for Dashboard, Transactions, Categories/Rules, Budgets/Alerts, Savings Goals, and Settings (account/sign-out).
- Apply a coherent app-wide visual theme suitable for finance tracking, avoiding blue/purple as primary brand colors.

**User-visible outcome:** Users can sign in with Internet Identity to manage their own transactions, categories and auto-categorization rules, budgets with in-app alerts, and savings goals, and view a dashboard with basic analytics and charts across selectable time ranges.
