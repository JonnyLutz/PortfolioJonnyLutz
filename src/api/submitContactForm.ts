export type ContactFormPayload = {
  name: string
  email: string
  message: string
}

function errWithCode(message: string, code: string): Error & { code: string } {
  const e = new Error(message) as Error & { code: string }
  e.code = code
  return e
}

/**
 * POST to Formspree or an AWS Lambda + SES URL (same contract as semantic-portfolio).
 *
 * - `VITE_FORMSPREE_URL` — https://formspree.io/f/xxxxxxxx
 * - `VITE_CONTACT_FORM_URL` — Lambda function URL
 */
export async function submitContactForm({ name, email, message }: ContactFormPayload): Promise<unknown> {
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL?.trim()
  const lambdaUrl = import.meta.env.VITE_CONTACT_FORM_URL?.trim()

  const payload = { name, email, message, _replyto: email }

  if (formspreeUrl) {
    const res = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    let data: { error?: string } = {}
    try {
      data = (await res.json()) as { error?: string }
    } catch {
      /* ignore */
    }

    if (!res.ok) {
      throw errWithCode(data.error || `Request failed (${res.status})`, 'REQUEST_FAILED')
    }

    return data
  }

  if (lambdaUrl) {
    const res = await fetch(lambdaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    let data: { error?: string } = {}
    try {
      data = (await res.json()) as { error?: string }
    } catch {
      /* ignore */
    }

    if (!res.ok) {
      throw errWithCode(data.error || `Request failed (${res.status})`, 'REQUEST_FAILED')
    }

    return data
  }

  throw errWithCode('Contact form URL is not configured', 'NOT_CONFIGURED')
}

export function getContactErrorCode(err: unknown): string | undefined {
  if (typeof err === 'object' && err !== null && 'code' in err) {
    const c = (err as { code: unknown }).code
    return typeof c === 'string' ? c : undefined
  }
  return undefined
}
