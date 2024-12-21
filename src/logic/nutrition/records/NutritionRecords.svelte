<script lang="ts">
  import type { NutritionRecord } from './model'
  import type { Atom } from 'nanostores'

  interface Props {
    readonly records: Atom<NutritionRecord[]>
    remove: (index: number) => void
  }

  const {
    records, remove
  }: Props = $props()
</script>

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Calories</th>
      <th>Protein</th>
      <th>Carbs</th>
      <th>Fiber</th>
      <th>Fat</th>
    </tr>
  </thead>
  <tbody>
    {#each $records as record, index}
      <tr>
        <td>{record.date}</td>
        <td>{record.type}</td>
        <td>{record.nutrition.calories}</td>
        <td>{record.nutrition.protein}</td>
        <td>{record.nutrition.carbs.total}</td>
        <td>{record.nutrition.carbs.fiber}</td>
        <td>{record.nutrition.fat}</td>
        <td><button onclick={() => remove(index)}>Remove</button></td>
      </tr>
    {/each}
  </tbody>
</table>
