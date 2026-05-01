# Browser Homepage - Background & Basic Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the core layout structure in `src/App.tsx` with a dynamic background image and a semi-transparent overlay.

**Architecture:** Use a centered container layout with absolute positioning for background elements. Background state is managed via React's `useState`.

**Tech Stack:** React, TypeScript, Tailwind CSS.

---

### Task 1: Basic Layout Structure

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace default content with base layout**

```tsx
import { useEffect, useState } from 'react'

function App() {
  const [wallpaper, setWallpaper] = useState('')

  useEffect(() => {
    // Initial high-res placeholder from Unsplash
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
        <h1 className="text-white text-4xl font-bold text-center mb-8 drop-shadow-lg">Zanix Hub</h1>
      </div>
    </div>
  )
}

export default App
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Successful build with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add dynamic background layout with overlay"
```
