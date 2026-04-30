/**
 * Contact form validation utilities.
 *
 * Pure functions — no React, no side effects, no 'use client' needed.
 */

export type ContactFormState = {
  name: string
  email: string
  message: string
}

export type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

/**
 * Validate a single contact form field.
 *
 * Returns `undefined` when valid, or an error message string when invalid.
 */
export function validateField(field: keyof ContactFormState, value: string): string | undefined {
  switch (field) {
    case 'name':
      return value.trim().length < 2 ? 'Name must be at least 2 characters' : undefined
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : 'Enter a valid email address'
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters' : undefined
  }
}

/**
 * Validate the entire contact form.
 *
 * Returns an object with per-field errors and a boolean indicating
 * whether any errors exist.
 */
export function validateForm(data: ContactFormState): { errors: FieldErrors; hasErrors: boolean } {
  const errors: FieldErrors = {}
  for (const field of ['name', 'email', 'message'] as const) {
    const error = validateField(field, data[field])
    if (error) errors[field] = error
  }
  return { errors, hasErrors: Object.keys(errors).length > 0 }
}
