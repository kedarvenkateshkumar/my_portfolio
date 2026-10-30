import { motion } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-24">
      <SectionHeading
        kicker="03 — Projects"
        title="Work that shows how I design and ship software."
        copy="Featured: ShopPlus, a Spring Boot + React e-commerce platform built around REST APIs, JPA, and JWT security."
      />
      <div className="space-y-6">
        {profile.projects.map((project) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="glass overflow-hidden rounded-3xl"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-white/8 p-7 lg:border-r lg:border-b-0 light:border-black/8">
                <p className="mb-3 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-accent uppercase">
                  <Layers size={14} />
                  Featured project
                </p>
                <h3 className="font-display text-3xl font-bold">{project.name}</h3>
                <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>

                <h4 className="mt-7 text-xs tracking-[0.2em] text-accent uppercase">Architecture</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {project.architecture.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                    >
                      <GithubIcon size={16} />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-2 text-sm text-muted">
                      <GithubIcon size={16} />
                      Repository link not listed
                    </span>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#07080d]"
                    >
                      <ExternalLink size={16} />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="p-7">
                <h4 className="text-xs tracking-[0.2em] text-accent uppercase">Key features</h4>
                <ul className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-muted light:border-black/8 light:bg-black/4"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-7 text-xs tracking-[0.2em] text-accent uppercase">Technologies</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
