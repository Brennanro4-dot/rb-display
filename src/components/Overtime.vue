<template>
  <div class="grid-container">
    <div class = "text">
  <h4 class="number">Orders Over Time</h4>
  <canvas id="newOvertime"></canvas>
  </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import newOvertimeData from '../newOvertimeData.js'

export default {
  name: 'Overtime',
  data() {
    return {
      newOvertimeData: newOvertimeData
    }
  },
  mounted() {
    const ctx = document.getElementById('newOvertime');
    new Chart(ctx, this.newOvertimeData);
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  background-color: #F0F1F3;
  padding: 10px;
}

.grid-container > div {
  background-color: #FFF;
  padding: 10px;
  border: 1px solid #717E8E;
}

h4.number{

  text-align: left;
  margin: 0px;
  }
span.neutral{
  font-size: 12px;
  color: orange;
  margin-left: 5px;
}
span.good{
  font-size: 12px;
  color: green;
  margin-left: 5px;
}
</style>
