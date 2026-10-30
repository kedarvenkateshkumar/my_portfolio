import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-8 text-center text-sm text-muted light:border-black/8">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  )
}
