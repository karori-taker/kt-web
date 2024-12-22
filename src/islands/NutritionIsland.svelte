<script lang="ts">
  import NutritionRecorder from '../logic/nutrition/records/Editor.svelte'
  import NutritionRecords from '../logic/nutrition/records/Table.svelte'
  import app from './app'
</script>

<NutritionRecords
  records={app.nutritionRecordService.store}
  update={(index, record) => app.nutritionRecordService.update(index, record)}
  remove={index => app.nutritionRecordService.remove(index)}>
  {#snippet appender()}
    <NutritionRecorder send={value => app.nutritionRecordService.append(value)} />
  {/snippet}
</NutritionRecords>
