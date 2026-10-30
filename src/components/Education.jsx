import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="section-pad scroll-mt-24">
      <SectionHeading kicker="04 — Education" title="Academic foundation in Computer Science." />
      <div className="relative ml-2 border-l border-white/10 pl-8 light:border-black/10">
        {profile.education.map((item) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative pb-2"
          >
            <span className="absolute top-1.5 -left-[39px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-[#07080d]" />
            <p className="text-xs tracking-[0.2em] text-accent uppercase">{item.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{item.degree}</h3>
            <p className="mt-1 text-sm text-muted">{item.institution}</p>
            {item.cgpa ? <p className="mt-2 text-sm">CGPA: {item.cgpa}</p> : null}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted light:border-black/10"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
