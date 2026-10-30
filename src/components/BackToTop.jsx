import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-50 rounded-full bg-accent p-3 text-[#07080d] shadow-lg transition hover:brightness-110"
        >
          <ArrowUp size={18} />
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
