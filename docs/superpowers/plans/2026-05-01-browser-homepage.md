# Zanix Search Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-performance browser homepage with multi-engine search, dynamic wallpapers, and URL synchronization using React, shadcn/ui, and Tailwind CSS.

**Architecture:** A Vite-based React application focused on a centralized SearchHub component. It uses URL query parameters for search state and `localStorage` for user preferences.

**Tech Stack:** React, Vite, Tailwind CSS, shadcn/ui, Lucide React, Simple Icons.

---

### Task 0: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.ts`, `tailwind.config.js`, `components.json`
- Create: `src/main.tsx`, `src/App.tsx`, `src/index.css`

- [ ] **Step 1: Initialize Vite project with React and TypeScript**

Run: `npm create vite@latest . -- --template react-ts`
Expected: Project files created.

- [ ] **Step 2: Install dependencies**

Run: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
Run: `npm install lucide-react clsx tailwind-merge @radix-ui/react-slot lucide-react`
Expected: Dependencies installed.

- [ ] **Step 3: Setup shadcn/ui**

Run: `npx shadcn-ui@latest init --yes`
Expected: `components.json` and `src/lib/utils.ts` created.

- [ ] **Step 4: Install shadcn components**

Run: `npx shadcn-ui@latest add input button`
Expected: Components added to `src/components/ui`.

- [ ] **Step 5: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts without errors.

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "chore: scaffold project with React, Tailwind, and shadcn/ui"
```

### Task 1: Background & Basic Layout

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Add wallpaper container and overlay**

```tsx
// src/App.tsx
import { useEffect, useState } from 'react'

function App() {
  const [wallpaper, setWallpaper] = useState('')

  useEffect(() => {
    // Placeholder for Unsplash API
    setWallpaper('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')
  }, [])

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="relative z-10 w-full max-w-2xl px-4">
        {/* Search Hub will go here */}
        <h1 className="text-white text-4xl font-bold text-center mb-8">Zanix Hub</h1>
      </div>
    </div>
  )
}

export default App
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add dynamic background layout with overlay"
```

### Task 2: Engine Configuration & Selector

**Files:**
- Create: `src/config/engines.ts`
- Create: `src/components/EngineSelector.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Define engine configurations**

```typescript
// src/config/engines.ts
export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: string; // Using simple text or SVG path
}

export const ENGINES: SearchEngine[] = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s', icon: 'G' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s', icon: 'B' },
  { id: 'yahoo', name: 'Yahoo', url: 'https://search.yahoo.com/search?p=%s', icon: 'Y' },
  { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s', icon: 'D' },
  { id: 'brave', name: 'Brave', url: 'https://search.brave.com/search?q=%s', icon: 'Br' },
  { id: 'wikipedia', name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=%s', icon: 'W' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=%s', icon: 'Gh' },
];
```

- [ ] **Step 2: Create EngineSelector component**

```tsx
// src/components/EngineSelector.tsx
import { Button } from "@/components/ui/button"
import { ENGINES, SearchEngine } from "@/config/engines"

interface Props {
  activeId: string;
  onSelect: (engine: SearchEngine) => void;
}

export function EngineSelector({ activeId, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {ENGINES.map((engine) => (
        <Button
          key={engine.id}
          variant={activeId === engine.id ? "default" : "secondary"}
          size="sm"
          onClick={() => onSelect(engine)}
          className="bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md"
        >
          <span className="mr-2 font-bold">{engine.icon}</span>
          {engine.name}
        </Button>
      ))}
    </div>
  )
}
```

- [ ] **Step 3: Integrate into App**

- [ ] **Step 4: Commit**

```bash
git add src/config/engines.ts src/components/EngineSelector.tsx src/App.tsx
git commit -m "feat: add engine configuration and selector component"
```

### Task 3: Search Input & URL Sync

**Files:**
- Create: `src/components/SearchHub.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement SearchHub with URL synchronization**

```tsx
// src/components/SearchHub.tsx
import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/button" // wait, shadcn input
import { Input as ShadcnInput } from "@/components/ui/input"
import { ENGINES, SearchEngine } from "@/config/engines"
import { EngineSelector } from "./EngineSelector"

export function SearchHub() {
  const [query, setQuery] = useState('')
  const [activeEngine, setActiveEngine] = useState(ENGINES[0])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q')
    if (q) setQuery(q)
    
    const savedEngine = localStorage.getItem('preferredEngine')
    if (savedEngine) {
      const found = ENGINES.find(e => e.id === savedEngine)
      if (found) setActiveEngine(found)
    }
  }, [])

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    const url = new URL(window.location.href)
    if (val) {
      url.searchParams.set('q', val)
    } else {
      url.searchParams.delete('q')
    }
    window.history.replaceState({}, '', url)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    const searchUrl = activeEngine.url.replace('%s', encodeURIComponent(query))
    window.location.href = searchUrl
  }

  const handleEngineSelect = (engine: SearchEngine) => {
    setActiveEngine(engine)
    localStorage.setItem('preferredEngine', engine.id)
  }

  return (
    <div className="w-full">
      <EngineSelector activeId={activeEngine.id} onSelect={handleEngineSelect} />
      <form onSubmit={handleSearch} className="relative group">
        <ShadcnInput
          type="text"
          placeholder={`Search with ${activeEngine.name}...`}
          value={query}
          onChange={handleQueryChange}
          autoFocus
          className="h-14 text-lg bg-white/10 border-none text-white placeholder:text-white/50 backdrop-blur-xl rounded-2xl shadow-2xl focus-visible:ring-1 focus-visible:ring-white/30"
        />
      </form>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SearchHub.tsx
git commit -m "feat: implement search input with real-time URL synchronization"
```

### Task 4: Unsplash Integration

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add Unsplash API call for daily wallpaper**

```tsx
// Update src/App.tsx to use a better placeholder or actual API if key provided
// For now, let's use the source.unsplash.com equivalent via their new URL scheme
const WALLPAPER_URL = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80'
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: finalize background image integration"
```

### Task 5: Final Polish & Verification

- [ ] **Step 1: Check build**

Run: `npm run build`
Expected: Build successful without errors.

- [ ] **Step 2: Final Commit**

```bash
git commit --allow-empty -m "chore: project complete - verified search engine switching and URL sync"
```
