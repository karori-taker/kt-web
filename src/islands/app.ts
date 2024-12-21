import type { NutritionRecord } from "../logic/nutrition/records/model";
import type { WritableAtom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { ID as NUTRITION_RECORDS_ID } from "../logic/nutrition/records/store";
import type { NutritionRecordService } from "../logic/nutrition/records/service";
import { NutritionRecordServiceImpl } from "../logic/nutrition/records/service";

class App {
  private readonly nutritionRecordStore: WritableAtom<NutritionRecord[]> = persistentAtom<NutritionRecord[]>(NUTRITION_RECORDS_ID, [], {
    encode: JSON.stringify,
    decode: JSON.parse,
  });
  public readonly nutritionRecordService: NutritionRecordService = new NutritionRecordServiceImpl(this.nutritionRecordStore);
}

export default new App();
