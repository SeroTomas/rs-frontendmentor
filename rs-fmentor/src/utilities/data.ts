
export interface UnitType{
  category: Category
  score: number
  icon: string
}

export type Category = 'Reaction' | 'Memory' | 'Verbal' | 'Visual'

export const data : UnitType[] = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "https://rs-frontendmentor-serotomas.vercel.app/public/assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./public/assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./public/assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./public/assets/images/icon-visual.svg"
  }
]
