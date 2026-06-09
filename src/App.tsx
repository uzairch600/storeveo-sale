import { ClientTrustSection } from './components/ClientTrustSection'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CampaignSimulator } from './components/CampaignSimulator'
import { PricingSectionBlock } from './components/PricingSection'
import { WhyStoreveoSection } from './components/WhyStoreveoSection'
import { ZainiProfileSection } from './components/ZainiProfileSection'
import { HANDLER_NAME } from './config/site'
import { pricingSections } from './data/packages'

export default function App() {
  return (
    <div className="min-h-svh bg-black text-white">
      <Header />
      <Hero />

      <section
        id="simulator"
        aria-label="Campaign results preview"
        className="scroll-mt-24 border-b border-white/5 bg-black px-4 py-10 md:px-6 md:py-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <CampaignSimulator />
        </div>
      </section>

      <WhyStoreveoSection />
      <ClientTrustSection />
      <ZainiProfileSection />

      <main
        id="packages"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 md:px-6 md:py-20 lg:px-8"
      >
        <div className="mb-14 max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#1DB954] uppercase">
            Invest in growth
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Choose your wave
          </h2>
          <p className="mt-3 text-[#b3b3b3]">
            Ready after seeing the proof? Pick a package and WhatsApp {HANDLER_NAME} direct.
            No forms. Campaign kickoff in 48 hours.
          </p>
        </div>

        <div className="space-y-20 rounded-2xl bg-[#121212] p-5 md:space-y-24 md:p-8 lg:p-10">
          {pricingSections.map((section) => (
            <PricingSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
