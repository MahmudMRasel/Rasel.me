import { useEffect, useRef, useState } from 'react'

export const useScrollReveal = (options = {}) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true)
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          } else if (options.once === false) {
            setIsRevealed(false)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [elementRef, isRevealed]
}

