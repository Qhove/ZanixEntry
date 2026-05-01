# Design Specification: Zanix Entry (Phase 2)

**Date:** 2026-05-01
**Status:** Draft
**Topic:** Shortcuts, Widgets, and Refined Engine Management

## 1. Purpose
Evolution of the Zanix Hub into **Zanix Entry**, a more powerful and personalized browser homepage. This phase adds productivity widgets (Clock, Weather), power-user features (Shortcuts), and enhanced configuration (Backup/Import).

## 2. Success Criteria
*   **Rebranding**: UI reflects "Zanix Entry" branding.
*   **Widgets**: Top-right corner displays 24h Clock, Date, and Temperature (text only).
*   **Shortcuts**: Support for "!bang" shortcuts (e.g., `!w` for Wikipedia) with visual chip feedback.
*   **Dropdown UI**: Engine selector moved to a centered dropdown below the search bar.
*   **Help System**: Top-left Help icon reveals Tips, Credits, and GitHub link.
*   **Engine Management**: UI for adding/removing engines + JSON Import/Export for backups.

## 3. Tech Stack (Extensions)
*   **Icons**: Lucide React.
*   **UI Components**: shadcn/ui (DropdownMenu, Dialog/Sheet for Help and Settings).
*   **APIs**: 
    *   Open-Meteo (for minimalist temperature data).
    *   Unsplash (dynamic wallpaper, continued).

## 4. Architecture & Components

### 4.1. Top Navigation Bar
*   **Left**: `HelpDialog` (Lucide `Info` icon).
*   **Right**: `StatusWidgets` (Vertical stack: Time [24h], Date, Temperature [text]).

### 4.2. Main Hub (Centered)
*   **Title**: "Zanix Entry" in bold, tracking-tight typography.
*   **SearchInput**: 
    *   Integrated `ShortcutChip` component that appears when a bang prefix is detected.
    *   Refined styling to support the chip layout.
*   **EngineSelect**: Centered `DropdownMenu` from shadcn/ui, replacing the previous button row.

### 4.3. Settings & Data
*   **EngineEditor**: Form to manage the list of engines in `localStorage`.
*   **DataPersistence**: 
    *   `exportConfig()`: Generates and downloads `zanix-config.json`.
    *   `importConfig(file)`: Validates and writes JSON to `localStorage`.

## 5. Logic & Data Flow
1.  **Bang Detection**: 
    *   On `SearchInput` change: check if query starts with `![key]`.
    *   If matched, show `ShortcutChip` and strip the prefix from the internal search execution query.
2.  **Weather Fetch**: 
    *   Use browser Geolocation API (with user permission) or IP-based lookup.
    *   Fetch temperature every 30 minutes to minimize API calls.
3.  **Engine Switching**: 
    *   Dropdown selection updates the default engine.
    *   Shortcut detection overrides the engine for the current search only.

## 6. Git & Recording Strategy
*   Continued use of atomic, descriptive commits.
*   Separate branch `feature/phase-2` for this work.

## 7. Future Considerations
*   Custom CSS themes.
*   Integration with local LLMs via API.
