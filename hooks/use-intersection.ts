import { useInView } from "react-intersection-observer"

interface UseIntersectionOptions {
  threshold?: number
  triggerOnce?: boolean
}

export function useIntersection(options: UseIntersectionOptions = {}) {
  const { threshold = 0.1, triggerOnce = true } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  return { ref, inView }
}

