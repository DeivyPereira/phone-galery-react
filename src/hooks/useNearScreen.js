import { useEffect, useState, useRef } from 'react'
export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    const Observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        Observer.disconnect()
      }
    })
    Observer.observe(element.current)
  }, [element])
  return [show, element]
}
