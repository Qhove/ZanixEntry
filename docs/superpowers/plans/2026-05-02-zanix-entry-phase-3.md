# Zanix Entry Phase 3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand search engines, refactor the selector into a grid UI, and enforce a non-scrollable single-page layout.

**Architecture:** Update the global CSS and root container for scroll locking. Create a unified SVG asset for search engines. Refactor the `EngineSelector` dropdown to use a CSS grid for multiple columns.

**Tech Stack:** React, Tailwind CSS, shadcn/ui.

---

### Task 0: Assets & Layout Constraints

**Files:**
- Create: `public/engine-default.svg`
- Modify: `src/index.css`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create a generic search SVG icon**

```html
<!-- public/engine-default.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>
```

- [ ] **Step 2: Implement Scroll Lock in CSS**

```css
/* src/index.css */
@layer base {
  html, body, #root {
    @apply h-full overflow-hidden;
  }
}
```

- [ ] **Step 3: Update App.tsx container height**

Ensure the main `div` has `h-screen` or `min-h-screen` correctly to fill the locked viewport.

- [ ] **Step 4: Commit**

```bash
git add public/engine-default.svg src/index.css src/App.tsx
git commit -m "feat: add generic engine icon and implement scroll lock"
```

### Task 1: Engine Configuration Expansion

**Files:**
- Modify: `src/config/engines.ts`

- [ ] **Step 1: Add the new requested engines to the default list**

Engines to add: Yandex, StartPage, Moojek, Baidu, Ecosia, Qwant, Gibiru, Presearch, Sogou, So.com.

- [ ] **Step 2: Update existing engines to point to the new SVG asset**

- [ ] **Step 3: Commit**

```bash
git add src/config/engines.ts
git commit -m "feat: expand default engine list to 15+ providers"
```

### Task 2: Grid UI Refactor

**Files:**
- Modify: `src/components/EngineSelector.tsx`
- Modify: `src/components/ShortcutChip.tsx`
- Modify: `src/components/EngineManager.tsx`

- [ ] **Step 1: Update components to use the SVG icon instead of text/brand icons**

- [ ] **Step 2: Refactor EngineSelector dropdown to a Multi-Column Grid**

```tsx
// Update src/components/EngineSelector.tsx
<DropdownMenuContent className="grid grid-cols-3 gap-1 p-2 w-[480px]">
  {/* Engine items as grid tiles */}
</DropdownMenuContent>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/EngineSelector.tsx src/components/ShortcutChip.tsx src/components/EngineManager.tsx
git commit -m "feat: refactor engine selector to multi-column grid UI"
```

### Task 3: Final Polish & Verification

- [ ] **Step 1: Verify all engines work**
- [ ] **Step 2: Verify scroll lock prevents page movement**
- [ ] **Step 3: Check build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git commit --allow-empty -m "chore: phase 3 complete - verified expanded grid UI and scroll lock"
```
