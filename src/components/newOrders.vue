<template>
  <div class="grid-container">
    <div class = "text">
  <p class="left">New orders</p>
  <p class="right">Last 7 days <i class="fas fa-chevron-down"></i></p>
  <h4 class="number">1,338<span class = "neutral">0% - </span></h4>
  <canvas id="newOrders"></canvas>
  </div>
  <div class = "text">
<p class="left">Returns Volume</p>
<p class="right">Last 7 days <i class="fas fa-chevron-down"></i></p>
<h4 class="number">778<span class = "good">7% <i class="fas fa-arrow-up"></i></span></h4>
<canvas id="returnData"></canvas>

</div>

</div>


</template>

<script>
import Chart from 'chart.js'
import newOrderData from '../newOrderData.js'
import returnData from '../returnData.js'

export default {
  name: 'newOrders',
  data() {
    return {
      newOrderData: newOrderData,
      returnData: returnData
    }
  },
  mounted() {
    const ctx = document.getElementById('newOrders');
    new Chart(ctx, this.newOrderData);
    const ctx1 = document.getElementById('returnData');
    new Chart(ctx1, this.returnData);
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  background-color: #F0F1F3;
  padding: 10px;
}

.grid-container > div {
  background-color: #FFF;
  padding: 10px;
  border: 1px solid #717E8E;
}

p.left{
float: left;
width:50%;
text-align:left;
font-size: 12px;
color: #717E8E;
margin: 0px;

}
p.right{
float: right;
width:50%;
text-align:right;
font-size: 14px;
color: #717E8E;
margin: 0px;
}
p.right i {
font-size: 10px;
color: #717E8E;
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

  @media screen and (max-width: 600px) {

    .grid-container{
      grid-template-columns: auto;
    }
  }

</style>
