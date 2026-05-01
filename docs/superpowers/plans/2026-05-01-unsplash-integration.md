# Unsplash Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finalize the Unsplash background integration in `src/App.tsx` with smooth transitions and proper attribution.

**Architecture:** Update `src/App.tsx` to handle background image loading more gracefully and add a stylized attribution link.

**Tech Stack:** React, Tailwind CSS, Unsplash Source API.

---

### Task 1: Update Background Image and Transition

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Update Unsplash URL and add transition styles**

Update the initial wallpaper URL to a high-quality landscape and ensure the transition is smooth.

```tsx
// src/App.tsx

// ...
  const [wallpaper, setWallpaper] = useState('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')

  // We can eventually add a refresh function here
// ...
```

- [ ] **Step 2: Add Attribution Link**

Add a small, subtle attribution link in the bottom-right corner.

```tsx
// src/App.tsx

// ...
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
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
// ...
```

- [ ] **Step 3: Verify changes visually (simulated)**

Since I cannot see the UI, I will rely on `npm run build` to ensure no syntax errors were introduced.

Run: `npm run build`
Expected: SUCCESS

- [ ] **Step 4: Commit changes**

```bash
git add src/App.tsx
git commit -m "feat: finalize background image integration and attribution"
```
