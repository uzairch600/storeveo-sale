export type PricingPackage = {
  id: string
  name: string
  price: number
  target: string
  deliveryTime: string
  includes: string[]
  popular?: boolean
}

export type PricingSectionData = {
  id: string
  title: string
  description: string
  region: 'south-asia' | 'global'
  packages: PricingPackage[]
}

export const pricingSections: PricingSectionData[] = [
  {
    id: 'south-asia',
    title: 'South Asia Growth Packages',
    description:
      'India & Pakistan focus. Perfect for regional tracks, Desi Hip-Hop, Indie-Pop, and artists looking for massive engagement at a highly affordable price point.',
    region: 'south-asia',
    packages: [
      {
        id: 'starter-spin',
        name: 'Starter Spin',
        price: 49,
        target: '~1,000 Verified Streams + New Listeners',
        deliveryTime: '3-5 Days',
        includes: [
          'Basic Meta Ads Setup',
          'Single Genre Targeting',
          'Smart-Link Page Setup',
          'Campaign Report',
        ],
      },
      {
        id: 'amplified-wave',
        name: 'Amplified Wave',
        price: 199,
        target: '~5,000 Verified Streams + Listener Spike',
        deliveryTime: '7-10 Days',
        popular: true,
        includes: [
          'Advanced Meta Ads Setup',
          'Multi-Artist Competitor Targeting',
          'Smart-Link Page Setup',
          'Continuous Pixel Optimization',
          'Detailed Analytics Dashboard',
        ],
      },
      {
        id: 'mainstream-anthem',
        name: 'Mainstream Anthem',
        price: 399,
        target: '~10,000 Verified Streams + Heavy Playlist Pull',
        deliveryTime: '10-14 Days',
        includes: [
          'Full Campaign Management',
          'Custom Retargeting Audiences',
          'Lookalike Audience Expansion (1% Core Mix)',
          'Priority Support',
          'Video Ad Creative Consultation',
        ],
      },
    ],
  },
  {
    id: 'global',
    title: 'Global Expansion Packages',
    description:
      'USA, UK & Europe focus. Designed for artists aiming to chart internationally. We target premium, high-paying Tier 1 streaming countries.',
    region: 'global',
    packages: [
      {
        id: 'global-launch',
        name: 'Global Launch',
        price: 109,
        target: '~1,000 Premium Global Streams',
        deliveryTime: '5-7 Days',
        includes: [
          'Tier 1 Country Targeting (USA/UK/CA)',
          'Active Spotify User Filtering',
          'Smart-Link Page Setup',
        ],
      },
      {
        id: 'global-horizon',
        name: 'Global Horizon',
        price: 429,
        target: '~5,000 Premium Global Streams',
        deliveryTime: '7-12 Days',
        includes: [
          'Advanced Global Audience Narrowing',
          'Retargeting setup for music video viewers',
          'Pixel optimization',
          'Weekly Progress Reports',
        ],
      },
      {
        id: 'global-chart-topper',
        name: 'Global Chart-Topper',
        price: 849,
        target: '~10,000 Premium Global Streams',
        deliveryTime: '14-21 Days',
        includes: [
          'Complete Meta Ads Funnel Setup',
          '1% Global Lookalike Audience implementation',
          'Multi-variable creative testing',
          'Dedicated Account Manager',
          'Full post-campaign data transfer',
        ],
      },
    ],
  },
]

export const allPackages = pricingSections.flatMap((s) =>
  s.packages.map((p) => ({
    ...p,
    sectionTitle: s.title,
  })),
)
