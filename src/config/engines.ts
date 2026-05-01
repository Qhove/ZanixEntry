export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: string;
  shortcut: string;
}

export const ENGINES: SearchEngine[] = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s', icon: 'G', shortcut: 'g' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s', icon: 'B', shortcut: 'b' },
  { id: 'yahoo', name: 'Yahoo', url: 'https://search.yahoo.com/search?p=%s', icon: 'Y', shortcut: 'y' },
  { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s', icon: 'D', shortcut: 'd' },
  { id: 'brave', name: 'Brave', url: 'https://search.brave.com/search?q=%s', icon: 'Br', shortcut: 'br' },
  { id: 'wikipedia', name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=%s', icon: 'W', shortcut: 'w' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=%s', icon: 'Gh', shortcut: 'gh' },
];
