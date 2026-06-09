export const BRAND_NAME = 'Storeveo'
export const HANDLER_NAME = 'Zaini'
export const WHATSAPP_NUMBER = '923137575399'
export const WHATSAPP_DISPLAY = '+92 313 7575399'
export const LOGO_URL =
  'https://res.cloudinary.com/dveyqayhf/image/upload/v1781016455/storeveo_logo_srddje.png'

/** Set when Zaini's photo is ready. Empty string shows initials placeholder. */
export const ZAINI_PHOTO_URL = ''

export function buildWhatsAppLink(
  packageName: string,
  price: number,
  sectionLabel: string,
): string {
  const message = [
    `Hi ${HANDLER_NAME}! 👋`,
    '',
    `I'm interested in the *${packageName}* package ($${price} USD) on *${BRAND_NAME}*.`,
    '',
    `Category: ${sectionLabel}`,
    '',
    "I'd like to start my music promotion campaign. Please share the next steps.",
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildGeneralWhatsAppLink(): string {
  const message = [
    `Hi ${HANDLER_NAME}! 👋`,
    '',
    `I found *${BRAND_NAME}* and I'd like to discuss music promotion packages.`,
    '',
    'Can you help me pick the right tier for my release?',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
