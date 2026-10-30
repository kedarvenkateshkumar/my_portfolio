import { motion } from 'framer-motion'
import { ArrowDownRight, Download } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(122,162,255,0.22),transparent_62%)] blur-2xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(155,135,245,0.18),transparent_64%)] blur-2xl" />

      <div className="section-pad grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.2em] text-muted uppercase"
          >
            Available for internships &amp; entry-level roles
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl"
          >
            {profile.shortName}
            <span className="mt-2 block text-2xl font-semibold text-muted sm:text-3xl">
              venkatesh
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-lg text-accent"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#07080d] transition hover:brightness-110"
            >
              View My Projects
              <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/5 light:border-black/15 light:hover:bg-black/5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-muted transition hover:border-accent hover:text-accent light:border-black/10"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-muted transition hover:border-accent hover:text-accent light:border-black/10"
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-5"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#6ee7b7]" />
            <span className="ml-3 font-mono text-xs text-muted">shopplus · spring-boot</span>
          </div>
          <pre className="overflow-x-auto font-mono text-[12px] leading-6 text-[#c9d4f0]">
{`@RestController
@RequestMapping("/api")
class ShopPlusAPI {
  // 31 REST mappings
  // JWT + Spring Security
  // USER | ADMIN roles
}

entities: 11 JPA mappings
store:    PostgreSQL (11 tables)
client:   React.js  ⇄  REST`}
          </pre>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {['Spring Boot', 'React.js', 'PostgreSQL'].map((item) => (
              <div key={item} className="rounded-xl border border-white/8 bg-white/5 px-2 py-3 text-xs text-muted">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
