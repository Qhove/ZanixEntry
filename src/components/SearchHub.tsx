import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { ENGINES } from "@/config/engines"
import type { SearchEngine } from "@/config/engines"
import { EngineSelector } from "./EngineSelector"
import { ShortcutChip } from "./ShortcutChip"
import { useEngines } from "@/hooks/useEngines"

export function SearchHub() {
  const { allEngines } = useEngines()
  const [query, setQuery] = useState(() => {
    if (typeof window === 'undefined') return ''
    const params = new URLSearchParams(window.location.search)
    return params.get('q') || ''
  })
  const [activeEngine, setActiveEngine] = useState<SearchEngine>(ENGINES[0])
  const [overriddenEngine, setOverriddenEngine] = useState<SearchEngine | null>(null)

  useEffect(() => {
    const savedEngine = localStorage.getItem('preferredEngine')
    if (savedEngine) {
      const found = allEngines.find(e => e.id === savedEngine)
      if (found) {
        setActiveEngine(found)
        return
      }
    }
    // Default to first engine if saved one is not found (e.g. deleted)
    if (allEngines.length > 0) {
      setActiveEngine(allEngines[0])
    }
  }, [allEngines])

  useEffect(() => {
    // Sync state if URL changes (e.g. back button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const q = params.get('q')
      if (q !== query) {
        setQuery(q || '')
        detectShortcut(q || '')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [query, allEngines])

  const detectShortcut = (val: string) => {
    const match = val.match(/^!([a-z0-9]+)\s/)
    if (match) {
      const shortcut = match[1]
      const engine = allEngines.find(e => e.shortcut === shortcut)
      if (engine) {
        setOverriddenEngine(engine)
        return
      }
    }
    setOverriddenEngine(null)
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    detectShortcut(val)
    
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

    let finalQuery = query
    let engine = activeEngine

    if (overriddenEngine) {
      engine = overriddenEngine
      // Strip the bang prefix (e.g., "!w ")
      const match = query.match(/^![a-z0-9]+\s+(.*)/)
      if (match) {
        finalQuery = match[1]
      }
    }

    if (!finalQuery.trim()) return

    const searchUrl = engine.url.replace('%s', encodeURIComponent(finalQuery))
    window.open(searchUrl, '_blank')
  }

  const handleEngineSelect = (engine: SearchEngine) => {
    setActiveEngine(engine)
    localStorage.setItem('preferredEngine', engine.id)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative group flex items-center">
        {overriddenEngine && (
          <div className="absolute left-4 z-10">
            <ShortcutChip engine={overriddenEngine} />
          </div>
        )}
        <Input
          type="text"
          placeholder={`Search with ${activeEngine.name}...`}
          value={query}
          onChange={handleQueryChange}
          autoFocus
          className={`h-14 text-lg bg-white/10 border-none text-white placeholder:text-white/50 backdrop-blur-xl rounded-2xl shadow-2xl focus-visible:ring-1 focus-visible:ring-white/30 ${
            overriddenEngine ? 'pl-32' : ''
          }`}
        />
      </form>
      <EngineSelector 
        activeEngine={activeEngine} 
        onEngineChange={handleEngineSelect} 
        engines={allEngines}
      />
    </div>
  )
}
