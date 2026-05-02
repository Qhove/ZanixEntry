# Zanix Entry

A minimalist, high-performance browser homepage designed for speed, versatility, and focus. **Zanix Entry** is a modern search hub that brings 18+ search providers, productivity widgets, and dynamic aesthetics into a single, lightning-fast "New Tab" experience.

## ✨ Features

- **Multi-Engine Search**: Switch between 18+ default search providers (Google, Bing, Yahoo, DuckDuckGo, Brave, Wikipedia, GitHub, Yandex, Baidu, Ecosia, Qwant, etc.) with a single click.
- **Power-User Shortcuts (!bangs)**: Type shortcuts like `!w` for Wikipedia or `!gh` for GitHub directly in the search bar. Includes visual chip feedback to confirm the active engine.
- **Productivity Widgets**:
    - **24h Clock & Date**: Clean, minimalist time tracking.
    - **Weather**: Real-time temperature text using Open-Meteo.
- **Dynamic Wallpapers**: A curated gallery of high-resolution Unsplash wallpapers that rotate randomly every time you open a tab. Includes manual "Next Wallpaper" controls.
- **Engine Management**:
    - **Add/Remove Engines**: Completely customize your list of search providers.
    - **Backup & Restore**: Export your custom configuration to a JSON file and import it anywhere.
- **Refined UI**:
    - **Glassmorphism**: Sleek, semi-transparent interface with backdrop-blur.
    - **Grid Selector**: Compact multi-column dropdown for easy engine selection.
    - **Scroll Locked**: A solid, single-page experience with no vertical scrolling.
- **URL Synchronization**: Your search state is reflected in the URL (`?q=...`), making it easy to share or bookmark specific searches.

## 🛠️ Tech Stack

- **Framework**: [React 18+](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **APIs**: [Open-Meteo](https://open-meteo.com/) (Weather), [Unsplash](https://unsplash.com/) (Backgrounds)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/zanix-entry.git
    cd zanix-entry
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run in development**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📄 License

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2026 Zanix Entry Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🎭 Vibe Code Disclaimer

**Zanix Entry** was built with a focus on "Vibe Code"—the art of rapid, iterative development where technical rigor meets creative flow. 

> This codebase was sculpted through a collaborative dialogue between a human visionary and an AI architect. It prioritizes the "vibe" of the user experience—speed, aesthetic harmony, and intuitive interaction—over legacy boilerplate. It is provided as-is: a functional prototype that works because it feels right. Use it, break it, and make it your own.
