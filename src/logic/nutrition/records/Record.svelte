<script lang="ts">
  import type { NutritionRecord } from './model'

  interface Props {
    readonly record: NutritionRecord
    disabled: boolean
  }

  let { record = $bindable(), disabled = $bindable(false) }: Props = $props()

  let date = $state(record.date)
  let type = $state(record.type)
  let calories = $state(record.nutrition.calories)
  let protein = $state(record.nutrition.protein)
  let carbs = $state(record.nutrition.carbs.total)
  let fiber = $state(record.nutrition.carbs.fiber)
  let fat = $state(record.nutrition.fat)

  $effect(() => {
    record = {
      date,
      type,
      nutrition: {
        calories,
        protein,
        carbs: {
          total: carbs,
          fiber,
        },
        fat,
      },
    }
  })
</script>

<td><input type="date" bind:value={date} required {disabled} /></td>
<td>
  <select name="type" bind:value={type} required {disabled}>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="dinner">Dinner</option>
  </select>
</td>
<td><input type="number" bind:value={calories} min="0" required {disabled} /></td>
<td><input type="number" bind:value={protein} min="0" required {disabled} /></td>
<td><input type="number" bind:value={carbs} min="0" required {disabled} /></td>
<td><input type="number" bind:value={fiber} min="0" required {disabled} /></td>
<td><input type="number" bind:value={fat} min="0" required {disabled} /></td>
