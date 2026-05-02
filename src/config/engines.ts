export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: string;
  shortcut: string;
}

export const ENGINES: SearchEngine[] = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s', icon: '/engineicon/google-logo-search-new-svgrepo-com.svg', shortcut: 'g' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s', icon: '/engineicon/microsoft-bing-svgrepo-com.svg', shortcut: 'b' },
  { id: 'yahoo', name: 'Yahoo', url: 'https://search.yahoo.com/search?p=%s', icon: '/engineicon/yahoo-svgrepo-com.svg', shortcut: 'y' },
  { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s', icon: '/engineicon/duckduckgo-svgrepo-com.svg', shortcut: 'd' },
  { id: 'brave', name: 'Brave', url: 'https://search.brave.com/search?q=%s', icon: '/engineicon/brave-svgrepo-com.svg', shortcut: 'br' },
  { id: 'wikipedia', name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=%s', icon: '/engineicon/wikipedia-svgrepo-com.svg', shortcut: 'w' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=%s', icon: '/engineicon/github-142-svgrepo-com.svg', shortcut: 'gh' },
  { id: 'yandex', name: 'Yandex', url: 'https://yandex.com/search/?text=%s', icon: '/engineicon/yandex.png', shortcut: 'yx' },
  { id: 'startpage', name: 'StartPage', url: 'https://www.startpage.com/do/search?query=%s', icon: '/engineicon/Startpage_idPApWmQen_1.svg', shortcut: 'sp' },
  { id: 'mojeek', name: 'Mojeek', url: 'https://www.mojeek.com/search?q=%s', icon: '/engineicon/moojek.svg', shortcut: 'mj' },
  { id: 'baidu', name: 'Baidu', url: 'https://www.baidu.com/s?wd=%s', icon: '/engineicon/Baidu_id_R7siBYP_0.svg', shortcut: 'ba' },
  { id: 'ecosia', name: 'Ecosia', url: 'https://www.ecosia.org/search?q=%s', icon: '/engineicon/ecosia.svg', shortcut: 'e' },
  { id: 'qwant', name: 'Qwant', url: 'https://www.qwant.com/?q=%s', icon: '/engineicon/Qwant.svg', shortcut: 'q' },
  { id: 'gibiru', name: 'Gibiru', url: 'https://gibiru.com/results.html?q=%s', icon: '/engine-default.svg', shortcut: 'gi' },
  { id: 'presearch', name: 'Presearch', url: 'https://presearch.com/search?q=%s', icon: '/engineicon/presearch-svgrepo-com.svg', shortcut: 'p' },
  { id: 'sogou', name: 'Sogou', url: 'https://www.sogou.com/web?query=%s', icon: '/engineicon/sogou-svgrepo-com.svg', shortcut: 'so' },
  { id: 'so-com', name: 'So.com', url: 'https://www.so.com/s?q=%s', icon: '/engineicon/so.com.ico', shortcut: 's3' },
  { id: 'perplexity', name: 'Perplexity', url: 'https://www.perplexity.ai/search?q=%s', icon: '/engineicon/perplexity.png', shortcut: 'pp' },
];
