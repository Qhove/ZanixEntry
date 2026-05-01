import { useEffect, useState } from 'react'
import { EngineSelector } from './components/EngineSelector'
import { ENGINES } from './config/engines'
import type { SearchEngine } from './config/engines'

function App() {
  const [wallpaper, setWallpaper] = useState('')
  const [activeEngine, setActiveEngine] = useState<SearchEngine>(ENGINES[0])

  useEffect(() => {
    // Initial high-res placeholder from Unsplash
    setWallpaper('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')
  }, [])

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="relative z-10 w-full max-w-2xl px-4">
        <h1 className="text-white text-5xl font-bold text-center mb-12 drop-shadow-2xl tracking-tight">
          Zanix Hub
        </h1>
        
        <EngineSelector 
          activeEngine={activeEngine} 
          onEngineChange={setActiveEngine} 
        />

        {/* Search Input will go here in Task 3 */}
      </div>
    </div>
  )
}

export default App
