export type TrendingSong = {
  id: string
  title: string
  artists: string
  /** Tailwind gradient classes for album-art placeholder */
  artGradient: string
  streamsFrom: number
  streamsTo: number
  listenersFrom: number
  listenersTo: number
  chartStart: number
}

export const trendingSongs: TrendingSong[] = [
  {
    id: 'aarzu',
    title: 'Aarzu (with Asim Azhar)',
    artists: 'Asim Azhar, Noor, Khan, Madhurxo',
    artGradient: 'from-[#d4b896] via-[#8b7355] to-[#3d342a]',
    streamsFrom: 1840,
    streamsTo: 9210,
    listenersFrom: 410,
    listenersTo: 2680,
    chartStart: 312,
  },
  {
    id: 'jackpot',
    title: 'Jackpot',
    artists: 'Cheema Y, Gur Sidhu',
    artGradient: 'from-[#1e3a5f] via-[#2563eb] to-[#0f172a]',
    streamsFrom: 3200,
    streamsTo: 14800,
    listenersFrom: 620,
    listenersTo: 4100,
    chartStart: 189,
  },
  {
    id: 'woh',
    title: 'Woh',
    artists: 'Murtaza Qizilbash',
    artGradient: 'from-[#7c2d12] via-[#c2410c] to-[#292524]',
    streamsFrom: 980,
    streamsTo: 7650,
    listenersFrom: 280,
    listenersTo: 1920,
    chartStart: 524,
  },
  {
    id: 'sadi-sun',
    title: 'Sadi Sun',
    artists: 'Harsh Nussi',
    artGradient: 'from-[#f472b6] via-[#db2777] to-[#1f2937]',
    streamsFrom: 1560,
    streamsTo: 10400,
    listenersFrom: 390,
    listenersTo: 3010,
    chartStart: 241,
  },
  {
    id: 'udi-udi',
    title: 'Udi Udi',
    artists: 'Aneesh, Sarkar, Hruday',
    artGradient: 'from-[#7c3aed] via-[#4c1d95] to-[#0f0a1a]',
    streamsFrom: 2240,
    streamsTo: 11900,
    listenersFrom: 510,
    listenersTo: 3520,
    chartStart: 156,
  },
]
