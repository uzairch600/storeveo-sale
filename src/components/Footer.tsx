import { BRAND_NAME, HANDLER_NAME, buildGeneralWhatsAppLink } from '../config/site'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-black px-4 py-10 md:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">{BRAND_NAME}</p>
          <p className="mt-1 text-sm text-[#b3b3b3]">
            Music promotion packages · Handled by {HANDLER_NAME}
          </p>
        </div>
        <a
          href={buildGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1DB954] hover:text-[#1ed760]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Message {HANDLER_NAME} on WhatsApp
        </a>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-center text-xs text-[#727272] md:text-left">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </p>
    </footer>
  )
}
