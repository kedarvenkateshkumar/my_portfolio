import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-pad scroll-mt-24">
      <SectionHeading kicker="06 — Contact" title="Let’s talk about Java, backends, and building software." />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="text-sm leading-7 text-muted">{profile.closing}</p>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm hover:text-accent">
            <Mail size={16} className="text-accent" />
            {profile.email}
          </a>
          <p className="flex items-center gap-3 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            {profile.location}
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 transition hover:border-accent hover:text-accent light:border-black/10"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 transition hover:border-accent hover:text-accent light:border-black/10"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass grid gap-4 rounded-3xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 outline-none focus:border-accent light:border-black/10 light:bg-white"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 outline-none focus:border-accent light:border-black/10 light:bg-white"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            Subject
            <input
              required
              name="subject"
              value={form.subject}
              onChange={onChange}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 outline-none focus:border-accent light:border-black/10 light:bg-white"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Message
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className="resize-y rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 outline-none focus:border-accent light:border-black/10 light:bg-white"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#07080d] transition hover:brightness-110"
          >
            Send message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
