import { buildGeneralWhatsAppLink, HANDLER_NAME } from '../config/site'
import { WhatsAppIcon } from './WhatsAppIcon'

export function FloatingWhatsApp() {
  return (
    <a
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${HANDLER_NAME}`}
      className="fixed right-4 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_-4px_rgb(37_211_102_/_0.55)] transition-transform hover:scale-110 active:scale-95 md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
