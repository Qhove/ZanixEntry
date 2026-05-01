import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { ENGINES } from "@/config/engines"
import type { SearchEngine } from "@/config/engines"
import { EngineSelector } from "./EngineSelector"

export function SearchHub() {
  const [query, setQuery] = useState(() => {
    if (typeof window === 'undefined') return ''
    const params = new URLSearchParams(window.location.search)
    return params.get('q') || ''
  })
  const [activeEngine, setActiveEngine] = useState<SearchEngine>(() => {
    if (typeof window === 'undefined') return ENGINES[0]
    const savedEngine = localStorage.getItem('preferredEngine')
    if (savedEngine) {
      const found = ENGINES.find(e => e.id === savedEngine)
      if (found) return found
    }
    return ENGINES[0]
  })

  useEffect(() => {
    // Sync state if URL changes (e.g. back button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const q = params.get('q')
      if (q !== query) setQuery(q || '')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [query])

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    const url = new URL(window.location.href)
    if (val) {
      url.searchParams.set('q', val)
    } else {
      url.searchParams.delete('q')
    }
    window.history.replaceState({}, '', url)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    const searchUrl = activeEngine.url.replace('%s', encodeURIComponent(query))
    window.location.href = searchUrl
  }

  const handleEngineSelect = (engine: SearchEngine) => {
    setActiveEngine(engine)
    localStorage.setItem('preferredEngine', engine.id)
  }

  return (
    <div className="w-full">
      <EngineSelector activeEngine={activeEngine} onEngineChange={handleEngineSelect} />
      <form onSubmit={handleSearch} className="relative group">
        <Input
          type="text"
          placeholder={`Search with ${activeEngine.name}...`}
          value={query}
          onChange={handleQueryChange}
          autoFocus
          className="h-14 text-lg bg-white/10 border-none text-white placeholder:text-white/50 backdrop-blur-xl rounded-2xl shadow-2xl focus-visible:ring-1 focus-visible:ring-white/30"
        />
      </form>
    </div>
  )
}
