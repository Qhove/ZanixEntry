import { useState } from 'react'
import { SearchHub } from './components/SearchHub'
import { TopNav } from './components/TopNav'

function App() {
  const [wallpaper] = useState('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')

  return (
    <div 
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <TopNav />
      
      {/* Attribution */}
      <div className="absolute bottom-4 right-4 z-20">
        <a 
          href="https://unsplash.com/?utm_source=ZanixEntry&utm_medium=referral" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/80 text-xs transition-colors"
        >
          Photo by Unsplash
        </a>
      </div>

      <div className="relative z-10 w-full max-w-2xl px-4">
        <h1 className="text-white text-6xl font-black text-center mb-12 drop-shadow-2xl tracking-tighter">
          Zanix Entry
        </h1>
        
        <SearchHub />
      </div>
    </div>
  )
}

export default App
