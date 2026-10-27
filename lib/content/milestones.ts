export type BuildBattle = {
  id: string
  title: string
  date?: string
  description: string
  status: "live" | "upcoming" | "past"
  highlight?: string
}

export const buildBattles: BuildBattle[] = [
  {
    id: "monad-blitz-pune",
    title: "Monad Blitz Pune",
    date: undefined, // TODO: Add month and year when available
    description: "Monad hackathon, Pune",
    status: "past",
    highlight: "Top 5 finalist",
  },
]

export type Achievement = {
  title: string
  date: string
  description: string
}

export const achievements: Achievement[] = []