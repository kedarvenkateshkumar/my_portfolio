import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <SectionHeading
        kicker="01 — About"
        title="Building reliable Java systems with a full-stack lens."
        copy="Backend-first, product-aware, and committed to continuous learning."
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 text-base leading-7 text-muted"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.languages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted light:border-black/10"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {profile.highlights.map((item) => (
            <div key={item.label} className="glass rounded-2xl px-5 py-4">
              <p className="text-xs tracking-[0.18em] text-accent uppercase">{item.label}</p>
              <p className="mt-1 text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
