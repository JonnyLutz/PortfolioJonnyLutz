import { useState, type ChangeEvent, type FormEvent } from 'react'
import { toast } from 'sonner'
import { site } from '../content/site'
import { getContactErrorCode, submitContactForm } from '../api/submitContactForm'

const fieldClass =
  'w-full rounded-md border border-white/10 bg-navy-light px-4 py-3 text-sm text-slate-light placeholder:text-slate/45 outline-none transition focus:border-blue/40 focus:ring-2 focus:ring-blue/20'

function emailFromMailto(href: string) {
  return href.replace(/^mailto:/i, '').trim()
}

export function ContactSection() {
  const displayEmail = emailFromMailto(site.links.email)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      await submitContactForm(formData)
      toast.success("Thanks for reaching out — I'll get back to you soon.")
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      if (getContactErrorCode(err) === 'NOT_CONFIGURED') {
        toast.error(
          'Contact form is not configured. Add VITE_FORMSPREE_URL or VITE_CONTACT_FORM_URL to .env (see .env.example).',
        )
      } else {
        toast.error(
          err instanceof Error ? err.message : 'Something went wrong. Please try again or use email.',
        )
      }
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 pb-24" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="border-l-2 border-orange/60 pl-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-light"
      >
        <span className="mr-2 inline-block align-middle opacity-60" aria-hidden>
          <svg viewBox="0 0 20 20" fill="currentColor" className="inline h-4 w-4 text-orange"><path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" /><path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" /></svg>
        </span>
        {site.contact.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">{site.contact.body}</p>

      <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="space-y-8 md:col-span-5">
          <div>
            <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-orange">Email</h3>
            <a
              href={site.links.email}
              className="text-base text-slate-light transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              {displayEmail}
            </a>
          </div>
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-orange">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-slate-light transition hover:border-blue/35 hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-slate-light transition hover:border-blue/35 hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="scroll-mt-24 space-y-4 md:col-span-7"
        >
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${fieldClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-md bg-orange px-8 py-3 text-sm font-semibold text-navy transition hover:bg-orange-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:pointer-events-none disabled:opacity-50 md:w-auto"
          >
            {sending ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
