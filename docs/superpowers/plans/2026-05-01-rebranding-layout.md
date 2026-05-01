# Rebranding & Base Layout Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand "Zanix Hub" to "Zanix Entry" and implement a `TopNav` component for future expansion.

**Architecture:** Create a `TopNav` component as a layout shell at the top of the viewport. Update `App.tsx` to render this nav and update the branding typography.

**Tech Stack:** React (TypeScript), Tailwind CSS.

---

### Task 1: Create TopNav Component

**Files:**
- Create: `src/components/TopNav.tsx`

- [ ] **Step 1: Write the TopNav component**

```tsx
import React from 'react';

export const TopNav: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-30">
      <div id="nav-left" className="flex items-center gap-4">
        {/* Placeholder for left-side widgets */}
      </div>
      <div id="nav-right" className="flex items-center gap-4">
        {/* Placeholder for right-side settings/profile */}
      </div>
    </nav>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TopNav.tsx
git commit -m "feat: add TopNav component structure"
```

### Task 2: Rebrand and Integrate TopNav in App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Update branding and integrate TopNav**

```tsx
import { useState } from 'react'
import { SearchHub } from './components/SearchHub'
import { TopNav } from './components/TopNav'

function App() {
  const [wallpaper] = useState('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <TopNav />
      
      {/* Attribution */}
      <div className="absolute bottom-4 right-4 z-20">
        <a 
          href="https://unsplash.com/?utm_source=ZanixEntry&utm_medium=referral" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/80 text-xs transition-colors"
        >
          Photo by Unsplash
        </a>
      </div>

      <div className="relative z-10 w-full max-w-2xl px-4">
        <h1 className="text-white text-6xl font-black text-center mb-12 drop-shadow-2xl tracking-tighter">
          Zanix Entry
        </h1>
        
        <SearchHub />
      </div>
    </div>
  )
}

export default App
```

- [ ] **Step 2: Run build to verify**

Run: `npm run build`
Expected: Success

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: rebrand to Zanix Entry and integrate TopNav"
```
