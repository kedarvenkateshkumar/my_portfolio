import { motion } from 'framer-motion'
import { Award, Code, Trophy } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad scroll-mt-24">
      <SectionHeading
        kicker="05 — Achievements & Certifications"
        title="Proof of practice, not just coursework."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-accent">
            <Award size={18} />
            <h3 className="font-display text-xl">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {profile.certifications.map((item) => (
              <li key={item} className="rounded-2xl border border-white/8 px-4 py-3 text-sm text-muted light:border-black/8">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-accent">
            <Trophy size={18} />
            <h3 className="font-display text-xl">Achievements & activities</h3>
          </div>
          <ul className="space-y-3">
            {profile.achievements.map((item) => (
              <li key={item} className="rounded-2xl border border-white/8 px-4 py-3 text-sm text-muted light:border-black/8">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            <Code size={16} />
            View LeetCode profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
