import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { validateField, validateForm } from '../validation'

/**
 * Property 1: Field validation correctness
 *
 * For any string value, validateField returns undefined if and only if
 * the value satisfies the field's specific validation rule.
 *
 * **Validates: Requirements 9.2, 9.3, 9.4**
 */
describe('Property 1: Field validation correctness', () => {
  it('validateField("name", v) returns undefined iff v.trim().length >= 2', () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        const result = validateField('name', v)
        const isValid = v.trim().length >= 2
        expect(result === undefined).toBe(isValid)
      }),
      { numRuns: 100 }
    )
  })

  it('validateField("email", v) returns undefined iff v matches email regex', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    fc.assert(
      fc.property(fc.string(), (v) => {
        const result = validateField('email', v)
        const isValid = emailRegex.test(v)
        expect(result === undefined).toBe(isValid)
      }),
      { numRuns: 100 }
    )
  })

  it('validateField("message", v) returns undefined iff v.trim().length >= 10', () => {
    fc.assert(
      fc.property(fc.string(), (v) => {
        const result = validateField('message', v)
        const isValid = v.trim().length >= 10
        expect(result === undefined).toBe(isValid)
      }),
      { numRuns: 100 }
    )
  })
})

/**
 * Property 2: Form validation aggregation
 *
 * For any ContactFormState object, validateForm(data).hasErrors is true
 * if and only if at least one field fails its corresponding validateField check.
 *
 * **Validates: Requirement 9.5**
 */
describe('Property 2: Form validation aggregation', () => {
  it('validateForm(data).hasErrors is true iff at least one field fails validateField', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string(),
          email: fc.string(),
          message: fc.string(),
        }),
        (data) => {
          const { hasErrors } = validateForm(data)
          const anyFieldFails =
            validateField('name', data.name) !== undefined ||
            validateField('email', data.email) !== undefined ||
            validateField('message', data.message) !== undefined
          expect(hasErrors).toBe(anyFieldFails)
        }
      ),
      { numRuns: 100 }
    )
  })
})
