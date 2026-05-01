import { useEffect, useState } from 'react'

function App() {
  const [wallpaper, setWallpaper] = useState('')

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
        {/* Search Hub will go here */}
        <h1 className="text-white text-4xl font-bold text-center mb-8 drop-shadow-lg">Zanix Hub</h1>
      </div>
    </div>
  )
}

export default App
