import type { KeyVerification, SeamsUnkey } from '../index'

export const createFakeSeamsUnkey = (verification: KeyVerification = { valid: false }): SeamsUnkey => ({
  verifyKey: () => verification,
})
