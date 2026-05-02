export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: string;
  shortcut: string;
}

export const ENGINES: SearchEngine[] = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s', icon: '/engine-default.svg', shortcut: 'g' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s', icon: '/engine-default.svg', shortcut: 'b' },
  { id: 'yahoo', name: 'Yahoo', url: 'https://search.yahoo.com/search?p=%s', icon: '/engine-default.svg', shortcut: 'y' },
  { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s', icon: '/engine-default.svg', shortcut: 'd' },
  { id: 'brave', name: 'Brave', url: 'https://search.brave.com/search?q=%s', icon: '/engine-default.svg', shortcut: 'br' },
  { id: 'wikipedia', name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=%s', icon: '/engine-default.svg', shortcut: 'w' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=%s', icon: '/engine-default.svg', shortcut: 'gh' },
  { id: 'yandex', name: 'Yandex', url: 'https://yandex.com/search/?text=%s', icon: '/engine-default.svg', shortcut: 'yx' },
  { id: 'startpage', name: 'StartPage', url: 'https://www.startpage.com/do/search?query=%s', icon: '/engine-default.svg', shortcut: 'sp' },
  { id: 'mojeek', name: 'Mojeek', url: 'https://www.mojeek.com/search?q=%s', icon: '/engine-default.svg', shortcut: 'mj' },
  { id: 'baidu', name: 'Baidu', url: 'https://www.baidu.com/s?wd=%s', icon: '/engine-default.svg', shortcut: 'ba' },
  { id: 'ecosia', name: 'Ecosia', url: 'https://www.ecosia.org/search?q=%s', icon: '/engine-default.svg', shortcut: 'e' },
  { id: 'qwant', name: 'Qwant', url: 'https://www.qwant.com/?q=%s', icon: '/engine-default.svg', shortcut: 'q' },
  { id: 'gibiru', name: 'Gibiru', url: 'https://gibiru.com/results.html?q=%s', icon: '/engine-default.svg', shortcut: 'gi' },
  { id: 'presearch', name: 'Presearch', url: 'https://presearch.com/search?q=%s', icon: '/engine-default.svg', shortcut: 'p' },
  { id: 'sogou', name: 'Sogou', url: 'https://www.sogou.com/web?query=%s', icon: '/engine-default.svg', shortcut: 'so' },
  { id: 'so-com', name: 'So.com', url: 'https://www.so.com/s?q=%s', icon: '/engine-default.svg', shortcut: 's3' },
];
