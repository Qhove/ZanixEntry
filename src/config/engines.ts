export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const ENGINES: SearchEngine[] = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s', icon: 'G' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s', icon: 'B' },
  { id: 'yahoo', name: 'Yahoo', url: 'https://search.yahoo.com/search?p=%s', icon: 'Y' },
  { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s', icon: 'D' },
  { id: 'brave', name: 'Brave', url: 'https://search.brave.com/search?q=%s', icon: 'Br' },
  { id: 'wikipedia', name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=%s', icon: 'W' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=%s', icon: 'Gh' },
];
