export type BuildBattle = {
  id: string
  title: string
  date: string
  description: string
  status: "live" | "upcoming" | "past"
  highlight?: string
}

export const buildBattles: BuildBattle[] = [
  {
    id: "road-to-devcon-ii",
    title: "Road To Devcon - II",
    date: "Aug 2026",
    description: "Art, Culture & Ethereum in India",
    status: "past",
    highlight: "Top 3 in Week 1",
  },
]

export type Achievement = {
  title: string
  date: string
  description: string
}

export const achievements: Achievement[] = []
