import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="section-pad scroll-mt-24">
      <SectionHeading
        kicker="02 — Technical Skills"
        title="A focused Java and full-stack toolkit."
        copy="Skills listed here are taken directly from my resume — no extras."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {profile.skills.map((group, index) => (
          <motion.article
            key={group.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="font-display text-xl font-semibold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted transition hover:border-accent/50 hover:text-ink light:border-black/10 light:bg-black/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
