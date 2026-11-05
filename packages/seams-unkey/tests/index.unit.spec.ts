import { describe, expect, it } from 'vitest'

import { createSeamsUnkey } from '../src/index'
import { createFakeSeamsUnkey } from '../src/testing/index'

describe('createSeamsUnkey', () => {
  it('verifies no key as valid while the seam is a skeleton', () => {
    expect(createSeamsUnkey().verifyKey('key_123')).toEqual({ valid: false })
  })
})

describe('createFakeSeamsUnkey', () => {
  it('verifies keys as invalid by default', () => {
    expect(createFakeSeamsUnkey().verifyKey('key_123')).toEqual({ valid: false })
  })

  it('returns the verification it was given', () => {
    const verification = { valid: true }
    expect(createFakeSeamsUnkey(verification).verifyKey('key_123')).toBe(verification)
  })
})
