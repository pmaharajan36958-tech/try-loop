import { useState, useRef, useEffect, useCallback } from 'react'

const ClickMe = () => {
  // Single state object - ATOMIC UPDATES
  const [state, setState] = useState({
    visible: false,
    liked: false,
    count: 0,
    pop: false,
    heartPop: false,
    isLocked: false
  })
  
  const timeoutRef = useRef(null)
  const heartTimeoutRef = useRef(null)
  const lockRef = useRef(null)

  const toggleVisible = useCallback(() => {
    setState(prev => ({ ...prev, visible: !prev.visible }))
  }, [])

  const toggleLike = useCallback(() => {
    if (state.isLocked) return
    
    // Lock immediately
    setState(prev => ({ ...prev, isLocked: true }))
    
    // Clear and set lock timeout
    clearTimeout(lockRef.current)
    lockRef.current = setTimeout(() => {
      setState(prev => ({ ...prev, isLocked: false }))
    }, 500)

    // SINGLE ATOMIC UPDATE - no race conditions
    setState(prev => {
      const nextLiked = !prev.liked
      const nextCount = nextLiked ? prev.count + 1 : Math.max(0, prev.count - 1)
      
      // Trigger animations only on like
      const nextPop = nextLiked
      const nextHeartPop = nextLiked
      
      if (nextLiked) {
        clearTimeout(timeoutRef.current)
        clearTimeout(heartTimeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setState(s => ({ ...s, pop: false }))
        }, 420)
        heartTimeoutRef.current = setTimeout(() => {
          setState(s => ({ ...s, heartPop: false }))
        }, 420)
      }

      return {
        ...prev,
        liked: nextLiked,
        count: nextCount,
        pop: nextPop,
        heartPop: nextHeartPop
      }
    })
  }, [state.isLocked])

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
      clearTimeout(heartTimeoutRef.current)
      clearTimeout(lockRef.current)
    }
  }, [])

  return (
    <div className="card click-card feedback-card">
      <button className="toggle-btn" onClick={toggleVisible}>
        {state.visible ? 'Hide' : 'Click me'}
      </button>

      {state.visible && (
        <div className="message-row">
          <p className="message-text">
            Thanks for your feedback! Your support helps us improve.
          </p>

          <div className="right-actions" aria-hidden>
            <div 
              className={`like-count-mini ${state.pop ? 'pop' : ''}`} 
              aria-live="polite"
            >
              {state.count}
            </div>

            <button
              className={`mini-heart ${state.liked ? 'liked' : ''} ${state.heartPop ? 'pop' : ''}`}
              onClick={toggleLike}
              aria-pressed={state.liked}
              aria-label={state.liked ? 'Unlike' : 'Like'}
              disabled={state.isLocked}
            >
              <svg className="heart-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClickMe