<script>
  let num1 = 0;
  let num2 = 0;
  let sum = 0;

  function addNumbers() {
    sum = Number(num1) + Number(num2);
  }
</script>

<div>
  <label for="num1">How many pets do you have? </label>
  <input type="number" id="num1" bind:value={num1}>
</div>

<div>
  <label for="num2">How many visits per day do you need?</label>
  <input type="number" id="num2" bind:value={num2}>
</div>

<button on:click={addNumbers}>Calculate</button>

<div>
  <p>Pet care estimate: ${sum}</p>
</div>