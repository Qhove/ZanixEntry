import { useState, useEffect } from 'react'
import { SearchHub } from './components/SearchHub'
import { TopNav } from './components/TopNav'

const WALLPAPERS = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', // Forest
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', // Mountains
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', // Sunlight forest
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470', // Lake
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa', // Earth from space
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', // Architecture
  'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', // Ocean
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d', // Fall colors
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716', // Waterfall
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', // Night concert/lights
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e', // Nature valley
  'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5', // Scenic landscape
]

function App() {
  const [wallpaper, setWallpaper] = useState('')

  useEffect(() => {
    const randomImg = WALLPAPERS[Math.floor(Math.random() * WALLPAPERS.length)]
    setWallpaper(`${randomImg}?auto=format&fit=crop&w=1920&q=80`)
  }, [])

  return (
    <div 
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <TopNav />
      
      {/* Attribution & Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2">
        <button 
          onClick={() => {
            const randomImg = WALLPAPERS[Math.floor(Math.random() * WALLPAPERS.length)]
            setWallpaper(`${randomImg}?auto=format&fit=crop&w=1920&q=80`)
          }}
          className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white/60 hover:text-white px-3 py-1.5 rounded-lg text-xs transition-all mb-1"
        >
          Next Wallpaper
        </button>
        <a 
          href="https://unsplash.com/?utm_source=ZanixEntry&utm_medium=referral" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/80 text-[10px] transition-colors"
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
