# Design Specification: Zanix Entry (Phase 3)

**Date:** 2026-05-02
**Status:** Draft
**Topic:** Engine Expansion, Grid UI, and Scroll Locking

## 1. Purpose
Scaling the Zanix Entry hub to support a massive list of search engines while maintaining a focused, non-scrolling single-page experience.

## 2. Success Criteria
*   **Engine Expansion**: Default engine list expanded to 15+ providers including Yandex, Baidu, Ecosia, and Privacy-focused alternatives.
*   **Grid UI**: Engine selector refactored into a multi-column grid layout for better scannability.
*   **Scroll Lock**: The application interface is strictly non-scrollable (`overflow: hidden`).
*   **Unified Assets**: Introduction of a generic, high-quality SVG icon used as the default for all search engines.

## 3. Tech Stack (Extensions)
*   **Assets**: SVG (Scalable Vector Graphics) for the unified engine icon.
*   **CSS**: Tailwind `overflow-hidden` and viewport-unit constraints.

## 4. Architecture & Components

### 4.1. Global Layout
*   **Scroll Management**: Apply `overflow: hidden` to the `body` and root container.
*   **Height Constraints**: Ensure the `LayoutContainer` is exactly `100vh` to prevent layout shift.

### 4.2. Engine Grid Selector
*   **Container**: A wide `Popover` or `DropdownMenuContent` using a grid layout (`grid-cols-3` or `grid-cols-4`).
*   **Item Styling**: Each engine rendered as a vertical stack (Icon above Text) or horizontal compact tile within the grid.

### 4.3. Asset Management
*   **Generic Icon**: Create `src/assets/search-engine.svg` containing a minimalist magnifying glass or geometric search symbol.
*   **Component Update**: `EngineSelector` and `ShortcutChip` will import and use this SVG by default.

## 5. Logic & Data Flow
1.  **Expanded Config**: Update `src/config/engines.ts` with the new URLs and shortcuts.
2.  **Grid Rendering**: Map the consolidated engine list into the new grid-based dropdown.

## 6. List of Added Engines
*   **Yandex**: `https://yandex.com/search/?text=%s`
*   **StartPage**: `https://www.startpage.com/do/search?query=%s`
*   **Moojek**: `https://www.mojeek.com/search?q=%s`
*   **Baidu**: `https://www.baidu.com/s?wd=%s`
*   **Ecosia**: `https://www.ecosia.org/search?q=%s`
*   **Qwant**: `https://www.qwant.com/?q=%s`
*   **Gibiru**: `https://gibiru.com/results.html?q=%s`
*   **Presearch**: `https://presearch.com/search?q=%s`
*   **Sogou**: `https://www.sogou.com/web?query=%s`
*   **So.com**: `https://www.so.com/s?q=%s`

## 7. Git & Recording Strategy
*   Atomic commits for "Asset creation", "Layout constraints", and "Grid refactor".
*   Work to be merged into `master` upon completion.
