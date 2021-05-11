<template>
  <div class="navbar">
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i>Home</a>
  <div class="dropdown">
    <button class="dropbtn"><i class="fa fa-fw fa-cube"></i>Units
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Something About Units</a>
      <a href="#">Something else about them</a>
    </div>
    <a href="#"><i class="fa fa-fw fa-tasks"></i>Customers</a>
  </div>
  <div class="searchbar">
    <input type="text" placeholder="Search.." name="Search" >
  </div>


</div>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<style scoped>
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: #fff;
  font-family: Arial;
}

.active
{
  border-bottom:1px blue solid;
}
.active i{
  color: black !important;
}
.active {
  color: black !important;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: #717E8E;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: #717E8E;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: whitesmoke;
  color: #333;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: #717E8E;;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: whitesmoke;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

.searchbar input[type=text] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  border:1px solid #717E8E;
}
/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .navbar a, .navbar input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;

  }
  .navbar input[type=text] {
    border: 1px solid #ccc;
  }
  .active{
      border-bottom:0px;
  }
}
</style>
