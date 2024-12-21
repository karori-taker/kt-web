<script lang="ts">
  import NutritionRecorder from "../logic/nutrition/records/NutritionRecorder.svelte"
  import NutritionRecords from "../logic/nutrition/records/NutritionRecords.svelte";
  import app from "./app";
</script>

<NutritionRecords records={app.nutritionRecordService.store}
                  remove={(index) => app.nutritionRecordService.remove(index)}/>
<NutritionRecorder append={value => app.nutritionRecordService.append(value)}/>
