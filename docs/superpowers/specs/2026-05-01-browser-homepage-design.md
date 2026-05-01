# Design Specification: Zanix Search Hub

**Date:** 2026-05-01
**Status:** Draft
**Topic:** Browser Homepage with Multi-Engine Search

## 1. Purpose
A minimalist, high-performance browser homepage that allows users to search across multiple engines from a single interface. It prioritizes speed, visual appeal through dynamic wallpapers, and shareable search states via URL parameters.

## 2. Success Criteria
*   Instant load time for the search interface.
*   Seamless switching between 7 search engines (Google, Bing, Yahoo, DuckDuckGo, Brave, Wikipedia, GitHub).
*   Dynamic high-resolution wallpapers from Unsplash.
*   URL synchronization: typing in the search bar updates the URL query parameter (`?q=...`) for shareability.
*   Persistence: remembers the user's last selected search engine via `localStorage`.

## 3. Tech Stack
*   **Framework:** React 18+ (Vite)
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui (Input, Button, Card)
*   **Icons:** 
    *   Lucide React (UI actions)
    *   Simple Icons / SVGs (Brand icons for engines)
*   **API:** Unsplash Image API (for dynamic wallpapers)
*   **Version Control:** Git (local repository with atomic, descriptive commits)

## 4. Architecture & Components

### 4.1. Layout & Theme
*   **WallpaperContainer**: A full-viewport container with a `background-image` fetched from Unsplash. Includes a semi-transparent dark/light overlay to ensure search UI contrast.
*   **CenterHub**: A vertically and horizontally centered container holding the search bar and engine buttons.

### 4.2. UI Components (shadcn/ui)
*   **SearchInput**: A prominent text input with auto-focus.
*   **EngineToggleGroup**: A horizontal list of buttons. Each button contains the engine's brand icon and name.
*   **AttributionLink**: A small, subtle text link in the corner for Unsplash photo credit.

### 4.3. State Management
*   **Search Query**: Tracked via React state and synced to the URL `q` parameter.
*   **Active Engine**: Tracked via React state, persisted in `localStorage`, and defaults to Google.

## 5. Data Flow & Interaction
1.  **On Load**: 
    *   Check URL for `?q=` parameter. If present, populate the search input.
    *   Check `localStorage` for `preferredEngine`. Default to Google if not found.
    *   Fetch a daily wallpaper from Unsplash.
2.  **Input Change**: 
    *   As user types, update the query state.
    *   Update the browser URL using `window.history.replaceState` (non-reloading).
3.  **Engine Switch**: 
    *   User clicks an engine button.
    *   Update `activeEngine` state.
    *   Save selection to `localStorage`.
4.  **Search Execution (Enter Key)**:
    *   Construct the target URL using the selected engine's search template.
    *   Example: `activeEngine.url.replace('%s', encodeURIComponent(query))`.
    *   Redirect the current window to the search results.

## 7. Implementation Notes
*   **Engine Templates**:
    *   Google: `https://www.google.com/search?q=%s`
    *   Bing: `https://www.bing.com/search?q=%s`
    *   Yahoo: `https://search.yahoo.com/search?p=%s`
    *   DuckDuckGo: `https://duckduckgo.com/?q=%s`
    *   Brave: `https://search.brave.com/search?q=%s`
    *   Wikipedia: `https://en.wikipedia.org/wiki/Special:Search?search=%s`
    *   GitHub: `https://github.com/search?q=%s`
*   **Performance**: Use Vite's production build to minimize bundle size.

## 8. Git & Recording Strategy
*   **Atomic Commits**: Every logical change (e.g., "Add engine data structure", "Implement URL sync") will be its own commit.
*   **Conventional Commits**: Commit messages will follow the format: `feat:`, `fix:`, `docs:`, `chore:`.
*   **History Preservation**: No force-pushing or rebasing that destroys the chronological development history.

## 9. Future Considerations

*   Custom shortcut triggers (e.g., typing `!w` at the start of a query switches to Wikipedia).
*   User-configurable engine list.
*   Weather widget integration.
