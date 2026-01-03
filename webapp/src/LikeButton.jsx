import React, { useState, useEffect } from 'react'

const LikeButton = () => {
  // Load likes from localStorage or default to 0
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem('likes')
    return saved ? parseInt(saved) : 0
  })
  const [hearts, setHearts] = useState([])

  const handleClick = () => {
    const newLikes = likes + 1
    setLikes(newLikes)
    localStorage.setItem('likes', newLikes) // save to localStorage

    // Heart particle
    const id = Date.now()
    setHearts((prev) => [...prev, { id, left: Math.random() * 40 - 20 }])
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id))
    }, 600)
  }

  // Optional: Sync likes if localStorage changes outside
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('likes')
      if (saved) setLikes(parseInt(saved))
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
      <button
        onClick={handleClick}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '50px',
          border: 'none',
          backgroundColor: '#ff4757',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        ❤️ {likes}
      </button>

      {/* Heart particles */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: `calc(50% + ${heart.left}px)`,
            fontSize: '20px',
            color: '#ff6b81',
            animation: 'spill 0.6s ease-out forwards',
            pointerEvents: 'none',
          }}
        >
          ❤️ 
        </span>
      ))}

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes spill {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            50% { transform: translateY(-20px) scale(1.5); opacity: 1; }
            100% { transform: translateY(-50px) scale(0); opacity: 0; }
          }
        `}
      </style>
    </div>
  )
}

export default LikeButton