import type { Nutrition } from '../model'

export interface NutritionRecord {
  date: string
  type: string
  nutrition: Nutrition
}
