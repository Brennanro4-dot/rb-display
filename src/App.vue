<template>
  <div id="app">
    <Navbar/>
    <Overview/>
  <newOrders/>
  <Overtime/>
  <Customers/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Overview from './components/Overview.vue'
import newOrders from './components/newOrders.vue'
import Overtime from './components/Overtime.vue'
import Customers from './components/customers.vue'



export default {
  name: 'App',
  components: {
    Navbar,
    Overview,
    newOrders,
    Overtime,
    Customers,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F0F1F3;

}
</style>
