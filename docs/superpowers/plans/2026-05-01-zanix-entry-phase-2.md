# Zanix Entry Phase 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the search hub into Zanix Entry with widgets, bang shortcuts, dropdown UI, and engine management.

**Architecture:** Refactor the core `SearchHub` to support bang detection and a dropdown selector. Add a `TopNav` for widgets (Clock, Weather) and Help/Settings access. Use shadcn/ui components (`DropdownMenu`, `Dialog`, `Sheet`) for new interfaces.

**Tech Stack:** React, Vite, Tailwind CSS, shadcn/ui, Lucide Icons.

---

### Task 0: Rebranding & Base Layout Refactor

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/TopNav.tsx`

- [ ] **Step 1: Rename "Zanix Hub" to "Zanix Entry" and update title styling**

```tsx
// src/App.tsx
// ...
<h1 className="text-white text-6xl font-black text-center mb-12 drop-shadow-2xl tracking-tighter">
  Zanix Entry
</h1>
// ...
```

- [ ] **Step 2: Create a placeholder TopNav component**

```tsx
// src/components/TopNav.tsx
export function TopNav() {
  return (
    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-30">
      <div id="nav-left"></div>
      <div id="nav-right"></div>
    </div>
  )
}
```

- [ ] **Step 3: Integrate TopNav into App.tsx**

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/components/TopNav.tsx
git commit -m "feat: rebrand to Zanix Entry and add TopNav structure"
```

### Task 1: Status Widgets (Clock & Weather)

**Files:**
- Create: `src/components/widgets/StatusWidgets.tsx`
- Modify: `src/components/TopNav.tsx`

- [ ] **Step 1: Implement Clock and minimalist Weather**

```tsx
// src/components/widgets/StatusWidgets.tsx
import { useState, useEffect } from 'react'

export function StatusWidgets() {
  const [time, setTime] = useState(new Date())
  const [temp, setTemp] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Fetch temp from Open-Meteo (minimalist, no key)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true')
      .then(res => res.json())
      .then(data => setTemp(`${Math.round(data.current_weather.temperature)}°C`))
      .catch(() => setTemp('--°C'))
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  }

  return (
    <div className="text-white text-right drop-shadow-md">
      <div className="text-3xl font-bold">{formatTime(time)}</div>
      <div className="text-sm opacity-80">{formatDate(time)}</div>
      {temp && <div className="text-sm font-medium mt-1">{temp}</div>}
    </div>
  )
}
```

- [ ] **Step 2: Add StatusWidgets to TopNav**

- [ ] **Step 3: Commit**

```bash
git add src/components/widgets/StatusWidgets.tsx src/components/TopNav.tsx
git commit -m "feat: add 24h clock and minimalist weather widget"
```

### Task 2: Help & Tips Dialog

**Files:**
- Create: `src/components/HelpDialog.tsx`
- Modify: `src/components/TopNav.tsx`
- Install: `npx shadcn@latest add dialog`

- [ ] **Step 1: Install Dialog component**

Run: `npx shadcn@latest add dialog`

- [ ] **Step 2: Implement HelpDialog with Hints, Credits, and GitHub link**

```tsx
// src/components/HelpDialog.tsx
import { Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white/50 hover:text-white transition-colors">
          <Info className="w-6 h-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle>Zanix Entry Help</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <section>
            <h4 className="font-bold mb-1">Hints & Tips</h4>
            <ul className="text-sm text-zinc-400 list-disc ml-4">
              <li>Use !bangs to search directly (e.g., !w for Wiki)</li>
              <li>Press Enter to search instantly</li>
              <li>Your engine preference is saved automatically</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold mb-1">Credits</h4>
            <p className="text-sm text-zinc-400">Built with React, shadcn/ui, and Lucide.</p>
          </section>
          <section>
            <h4 className="font-bold mb-1">Repository</h4>
            <a href="https://github.com/your-repo/zanix-entry" target="_blank" className="text-sm text-blue-400 hover:underline">
              GitHub: ZanixEntry
            </a>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/HelpDialog.tsx src/components/TopNav.tsx
git commit -m "feat: add HelpDialog with hints, credits, and links"
```

### Task 3: Dropdown Engine Selector

**Files:**
- Modify: `src/components/SearchHub.tsx`
- Modify: `src/components/EngineSelector.tsx`
- Install: `npx shadcn@latest add dropdown-menu`

- [ ] **Step 1: Install DropdownMenu component**

Run: `npx shadcn@latest add dropdown-menu`

- [ ] **Step 2: Refactor EngineSelector to use DropdownMenu**

- [ ] **Step 3: Reposition EngineSelector below SearchInput in SearchHub**

- [ ] **Step 4: Commit**

```bash
git add src/components/SearchHub.tsx src/components/EngineSelector.tsx
git commit -m "feat: refactor engine selector to centered dropdown below search"
```

### Task 4: Bang Shortcuts & Visual Chip

**Files:**
- Modify: `src/components/SearchHub.tsx`
- Create: `src/components/ShortcutChip.tsx`

- [ ] **Step 1: Implement ShortcutChip component**

- [ ] **Step 2: Add bang detection logic to SearchHub**

```typescript
// Logic snippet for SearchHub
const bangMatch = query.match(/^!([a-z]+)\s(.*)/)
// If match, display chip for ENGINES[match[1]] and use match[2] for query
```

- [ ] **Step 3: Commit**

```bash
git add src/components/SearchHub.tsx src/components/ShortcutChip.tsx
git commit -m "feat: implement !bang shortcuts with visual chip feedback"
```

### Task 5: Engine Management & Backup

**Files:**
- Create: `src/components/EngineManager.tsx`
- Modify: `src/components/HelpDialog.tsx`

- [ ] **Step 1: Add Engine Management UI (Add/Remove)**

- [ ] **Step 2: Implement Import/Export JSON functionality**

```typescript
const exportConfig = () => {
  const data = JSON.stringify(localStorage.getItem('preferredEngine')) // and custom engines
  const blob = new Blob([data], { type: 'application/json' })
  // ... download logic
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/EngineManager.tsx src/components/HelpDialog.tsx
git commit -m "feat: add engine management with JSON import/export backup"
```
