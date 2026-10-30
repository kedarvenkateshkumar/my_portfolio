import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#achievements', id: 'achievements', label: 'Achievements' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            KVK<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active === link.id
                    ? 'bg-white/10 text-white light:bg-[#12141c] light:text-white'
                    : 'text-muted hover:text-ink light:text-[#4b5160] light:hover:text-[#12141c]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-white/10 p-2 text-muted transition hover:text-ink light:border-black/10"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={profile.resumeFile}
              download
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#07080d] transition hover:brightness-110 sm:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="rounded-full border border-white/10 p-2 lg:hidden light:border-black/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl px-4 lg:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    active === link.id ? 'bg-white/10' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeFile}
                download
                className="mt-1 rounded-xl bg-accent px-3 py-2 text-center text-sm font-medium text-[#07080d]"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
