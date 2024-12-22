<script lang="ts">
  import type { NutritionRecord } from './model'
  import Record from './Record.svelte'

  interface Props {
    send: (record: NutritionRecord) => void
  }

  const { send }: Props = $props()

  const unenteredRecord = () => ({
    date: new Date().toISOString().split('T')[0]!,
    type: 'breakfast',
    nutrition: {
      calories: 0,
      protein: 0,
      carbs: {
        total: 0,
        fiber: 0,
      },
      fat: 0,
    },
  })

  // svelte-ignore non_reactive_update
  let record = unenteredRecord()

  function submit(event: Event) {
    event.preventDefault()
    send(record)
    record = unenteredRecord()
  }
</script>

<tr>
  <Record bind:record disabled={false} />
  <td>
    <button onclick={submit}>Add</button>
  </td>
</tr>
