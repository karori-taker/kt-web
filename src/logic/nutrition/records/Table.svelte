<script lang="ts">
  import type { NutritionRecord } from './model'
  import type { Atom } from 'nanostores'
  import Record from './Record.svelte'
  import type { Snippet } from 'svelte'

  interface Props {
    readonly records: Atom<NutritionRecord[]>
    update: (index: number, record: NutritionRecord) => void
    remove: (index: number) => void

    appender: Snippet
  }

  const { records, update, remove, appender }: Props = $props()

  let activeRow: number | undefined = $state(undefined)
  function isActive(index: number) {
    return activeRow === index
  }
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
    {#each $records as _, index}
      <tr>
        <Record bind:record={$records[index]!} disabled={!isActive(index)} />
        {#if isActive(index)}
          <td
            ><button
              onclick={() => {
                update(index, $records[index]!)
                activeRow = undefined
              }}>Confirm</button
            ></td>
          <td><button onclick={() => (activeRow = undefined)}>Cancel</button></td>
        {:else}
          <td><button onclick={() => (activeRow = index)}>Edit</button></td>
          <td><button onclick={() => remove(index)}>Remove</button></td>
        {/if}
      </tr>
    {/each}
    {@render appender()}
  </tbody>
</table>
