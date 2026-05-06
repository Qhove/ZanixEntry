import { useState, useEffect, useRef } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ENGINES } from "@/config/engines"
import type { SearchEngine } from "@/config/engines"
import { EngineSelector } from "./EngineSelector"
import { ShortcutChip } from "./ShortcutChip"
import { useEngines } from "@/hooks/useEngines"
import { Search } from "lucide-react"

export function SearchHub() {
  const { allEngines } = useEngines()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [query, setQuery] = useState(() => {
    if (typeof window === 'undefined') return ''
    const params = new URLSearchParams(window.location.search)
    return params.get('q') || ''
  })
  const [activeEngine, setActiveEngine] = useState<SearchEngine>(ENGINES[0])
  const [overriddenEngine, setOverriddenEngine] = useState<SearchEngine | null>(null)

  // Auto-expand textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [query])

  useEffect(() => {
    const savedEngine = localStorage.getItem('preferredEngine')
    if (savedEngine) {
      const found = allEngines.find(e => e.id === savedEngine)
      if (found) {
        setActiveEngine(found)
        return
      }
    }
    if (allEngines.length > 0) {
      setActiveEngine(allEngines[0])
    }
  }, [allEngines])

  useEffect(() => {
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

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const executeSearch = () => {
    if (!query.trim()) return

    let finalQuery = query
    let engine = activeEngine

    if (overriddenEngine) {
      engine = overriddenEngine
      const match = query.match(/^![a-z0-9]+\s+(.*)/)
      if (match) {
        finalQuery = match[1]
      }
    }

    if (!finalQuery.trim()) return

    const searchUrl = engine.url.replace('%s', encodeURIComponent(finalQuery))
    window.open(searchUrl, '_blank')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      executeSearch()
    }
  }

  const handleEngineSelect = (engine: SearchEngine) => {
    setActiveEngine(engine)
    localStorage.setItem('preferredEngine', engine.id)
  }

  return (
    <div className="w-full">
      <form onSubmit={(e) => { e.preventDefault(); executeSearch(); }} className="relative group flex items-center">
        {overriddenEngine && (
          <div className="absolute left-4 z-10">
            <ShortcutChip engine={overriddenEngine} />
          </div>
        )}
        <Textarea
          ref={textareaRef}
          placeholder={`Search with ${activeEngine.name}...`}
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          autoFocus
          rows={1}
          className={`min-h-[3.5rem] py-4 text-lg bg-white/10 border-none text-white placeholder:text-white/50 backdrop-blur-xl rounded-2xl shadow-2xl focus-visible:ring-1 focus-visible:ring-white/30 resize-none overflow-hidden pr-16 ${
            overriddenEngine ? 'pl-32' : ''
          }`}
        />
        <Button 
          type="submit"
          size="icon"
          className="absolute right-2 bg-white/20 hover:bg-white/30 text-white rounded-xl w-10 h-10 transition-all active:scale-95"
        >
          <Search className="w-5 h-5" />
        </Button>
      </form>
      <EngineSelector 
        activeEngine={activeEngine} 
        onEngineChange={handleEngineSelect} 
        engines={allEngines}
      />
    </div>
  )
}
