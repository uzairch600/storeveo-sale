import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyStoreveo } from './components/WhyStoreveo'
import { ValueProposition } from './components/ValueProposition'
import { Vision } from './components/Vision'
import { SocialProof } from './components/SocialProof'
import { PricingCTA } from './components/PricingCTA'
import { Footer } from './components/Footer'
import { FloatingOffer } from './components/FloatingOffer'

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="focus:bg-[var(--color-gold)] sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-[#141210]"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <WhyStoreveo />
        <ValueProposition />
        <Vision />
        <SocialProof />
        <PricingCTA />
      </main>
      <Footer />
      <FloatingOffer />
    </>
  )
}
