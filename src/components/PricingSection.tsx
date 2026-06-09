import { Globe, Package } from 'lucide-react'
import { buildWhatsAppLink } from '../config/site'
import type { PricingSectionData } from '../data/packages'
import { PricingCard } from './PricingCard'

type Props = {
  section: PricingSectionData
}

export function PricingSectionBlock({ section }: Props) {
  const Icon = section.region === 'south-asia' ? Package : Globe

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-24"
    >
      <div className="mb-8 max-w-3xl md:mb-10">
        <div className="mb-3 flex items-center gap-2 text-[#1DB954]">
          <Icon className="h-5 w-5" aria-hidden />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">
            {section.region === 'south-asia'
              ? 'Regional · India & Pakistan'
              : 'International · Tier 1 Markets'}
          </span>
        </div>
        <h2
          id={`${section.id}-heading`}
          className="text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          {section.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[#b3b3b3] md:text-lg">
          {section.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 md:items-stretch">
        {section.packages.map((pkg) => (
          <PricingCard
            key={pkg.id}
            pkg={pkg}
            icon={
              <Icon
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            }
            whatsappHref={buildWhatsAppLink(pkg.name, pkg.price, section.title)}
          />
        ))}
      </div>
    </section>
  )
}
