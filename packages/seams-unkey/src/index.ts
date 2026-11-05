export interface KeyVerification {
  readonly valid: boolean
}

export interface SeamsUnkey {
  readonly verifyKey: (key: string) => KeyVerification
}

export const createSeamsUnkey = (): SeamsUnkey => ({
  verifyKey: () => ({ valid: false }),
})
