import { motion } from 'framer-motion'

export default function SectionHeading({ kicker, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 font-mono text-xs tracking-[0.28em] text-accent uppercase">{kicker}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-ink light:text-[#12141c]">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-relaxed text-muted dark:text-muted light:text-[#4b5160]">{copy}</p>
      ) : null}
    </motion.div>
  )
}
