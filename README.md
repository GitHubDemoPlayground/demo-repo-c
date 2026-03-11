# Demo App (demo-repo-c)

A React application that consumes **UI components** from `demo-repo-a` and **shared utilities** from `demo-repo-b`, automatically synced via the [Component Sync GitHub App](https://github.com/GitHubDemoPlayground/GitHubApp).

## How It Works

```mermaid
flowchart TD
    subgraph Source Repos
        A["demo-repo-a\n(UI Components)"]
        B["demo-repo-b\n(Shared Utils)"]
    end

    subgraph GitHub App
        GA["Component Sync App\nListens for pushes"]
    end

    subgraph Target Repo
        C["demo-repo-c\n(This App)"]
        PR["Sync PR Created"]
        BUILD["Build & Type Check"]
    end

    A -- "push to main" --> WA["trigger-sync.yml\n(repo-a workflow)"]
    B -- "push to main" --> WB["trigger-sync.yml\n(repo-b workflow)"]

    WA -- "repository_dispatch" --> GA
    WB -- "repository_dispatch" --> GA

    GA -- "Fetches files via\nGit Trees API" --> SYNC["sync-components.yml\n(repo-c workflow)"]

    SYNC -- "Creates/updates\nbranch & PR" --> PR
    PR -- "on merge" --> BUILD

    style A fill:#3b82f6,color:#fff
    style B fill:#10b981,color:#fff
    style C fill:#8b5cf6,color:#fff
    style GA fill:#f59e0b,color:#fff
    style PR fill:#ec4899,color:#fff
    style BUILD fill:#06b6d4,color:#fff
```

## Architecture

```mermaid
graph LR
    subgraph "demo-repo-a (Source)"
        A1[Button] --> A2[Input]
        A1 --> A3[Badge]
        A4[Card] --> A5[Container]
        A6[Modal] --> A7[Alert]
    end

    subgraph "demo-repo-b (Source)"
        B1[formatCurrency]
        B2[formatDate / timeAgo]
        B3[isEmail / validators]
        B4[useDebounce]
        B5[useLocalStorage]
    end

    subgraph "demo-repo-c (This App)"
        C1["App.tsx"]
        C1 --> A1
        C1 --> A4
        C1 --> A6
        C1 --> A7
        C1 --> A2
        C1 --> A3
        C1 --> B1
        C1 --> B2
        C1 --> B3
        C1 --> B4
    end

    style A1 fill:#3b82f6,color:#fff
    style A2 fill:#3b82f6,color:#fff
    style A3 fill:#3b82f6,color:#fff
    style A4 fill:#3b82f6,color:#fff
    style A5 fill:#3b82f6,color:#fff
    style A6 fill:#3b82f6,color:#fff
    style A7 fill:#3b82f6,color:#fff
    style B1 fill:#10b981,color:#fff
    style B2 fill:#10b981,color:#fff
    style B3 fill:#10b981,color:#fff
    style B4 fill:#10b981,color:#fff
    style B5 fill:#10b981,color:#fff
    style C1 fill:#8b5cf6,color:#fff
```

## Project Structure

```
demo-repo-c/
├── src/
│   ├── App.tsx              # Main application (imports synced components)
│   ├── index.tsx            # Entry point
│   └── pages/               # App pages
├── components/              # ← Auto-synced by GitHub App
│   ├── repo-a/              # UI components from demo-repo-a
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Badge.tsx
│   │   ├── layout/
│   │   │   ├── Card.tsx
│   │   │   └── Container.tsx
│   │   ├── feedback/
│   │   │   ├── Modal.tsx
│   │   │   └── Alert.tsx
│   │   └── index.ts         # Barrel exports
│   └── repo-b/              # Shared utils from demo-repo-b
│       ├── formatters/
│       │   ├── currency.ts
│       │   ├── date.ts
│       │   └── number.ts
│       ├── validators/
│       │   ├── string.ts
│       │   └── form.ts
│       ├── hooks/
│       │   ├── useDebounce.ts
│       │   └── useLocalStorage.ts
│       └── index.ts         # Barrel exports
├── .github/
│   └── workflows/
│       └── sync-components.yml  # Sync + Build pipeline
├── package.json
├── tsconfig.json
└── README.md
```

## Synced Components

### From `demo-repo-a` → `components/repo-a/`

| Component | Type | Description |
|-----------|------|-------------|
| `Button` | UI | Multi-variant button (primary, secondary, danger, ghost) with loading state |
| `Input` | UI | Form input with label, validation error, and helper text |
| `Badge` | UI | Colored status badges (success, warning, error, info) |
| `Card` | Layout | Content card with optional title, subtitle, and footer |
| `Container` | Layout | Responsive max-width wrapper |
| `Modal` | Feedback | Accessible dialog with backdrop and ESC-to-close |
| `Alert` | Feedback | Dismissible notification banners |

### From `demo-repo-b` → `components/repo-b/`

| Export | Category | Description |
|--------|----------|-------------|
| `formatCurrency` | Formatter | Locale-aware currency formatting |
| `formatDate`, `timeAgo` | Formatter | Date display and relative timestamps |
| `formatCompact` | Formatter | Number abbreviation (48.2K, 1.2M) |
| `isEmail`, `isUrl` | Validator | String format validation |
| `validateField`, `required` | Validator | Composable form validation |
| `useDebounce` | Hook | Debounced value for search/filter |
| `useLocalStorage` | Hook | Persistent state via localStorage |

## Workflow

The sync pipeline runs automatically when source repos push to `main`:

1. **Source repo** pushes to `main` → `trigger-sync.yml` fires
2. **Repository dispatch** sends `component-sync` event to this repo
3. **Sync workflow** runs the Component Sync Action:
   - Authenticates as the GitHub App
   - Fetches directory trees from source repos via Git Trees API
   - Creates a sync branch with updated files
   - Opens (or updates) a PR with the changes
4. **Build job** runs type-checking to verify the synced code compiles
5. **Review & Merge** the PR to integrate the updated components

## Development

```bash
# Install dependencies
npm install

# Type check
npm run typecheck

# Run dev server
npm run dev
```
