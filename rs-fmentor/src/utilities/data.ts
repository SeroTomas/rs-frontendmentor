
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
    "icon": "../../../assetsassets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "../../../assetsassets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "../../../assetsassets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "../../../assetsassets/images/icon-visual.svg"
  }
]
