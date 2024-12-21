<script lang="ts">
  import type { NutritionRecord } from './model'

  interface Props {
    append: (record: NutritionRecord) => void
  }

  const {
    append
  }: Props = $props()

  let date: string = $state(new Date().toISOString().split('T')[0]!);
  let type: string = $state('breakfast');
  let calories: number = $state(0);
  let protein: number = $state(0);
  let carbs: number = $state(0);
  let fiber: number = $state(0);
  let fat: number = $state(0);

  function submit(event: SubmitEvent) {
    event.preventDefault();
    append({ date, type, nutrition: {
      calories, protein, carbs: {
        total: carbs,
        fiber
      }, fat }});
  }
</script>

<form onsubmit="{submit}">
  <label>
    Date
    <input type="date" name="date" bind:value={date} required/>
  </label>
  <label>
    Date
    <select name="type" bind:value={type} required>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
  </label>
  <label>
    Calories
    <input type="number" name="calories" bind:value={calories} min="0" required/>
  </label>
  <label>
    Protein
    <input type="number" name="protein" bind:value={protein} min="0" required/>
  </label>
  <label>
    Carbs
    <input type="number" name="carbs" bind:value={carbs} min="0" required/>
  </label>
  <label>
    Fiber
    <input type="number" name="fiber" bind:value={fiber} min="0" required/>
  </label>
  <label>
    Fat
    <input type="number" name="fat" bind:value={fat} min="0" required/>
  </label>
  <button type="submit">Add</button>
</form>
