<template>
<div class ="grid-container">
  <div class = "text">
<p>Overview</p>
<h3>Dashboard</h3>
</div>
<div class = "buttons">
<a href='#' class="new-btn">New View</a>
<a href='#' class="create-btn"><i class="fas fa-plus"></i>Create New Report</a>
</div>
</div>
</template>

<script>
export default {
  name: 'Overview',
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";
      margin: 10px;
}

p{
  text-align: left;
margin: 0px;
}
h3{
  text-align: left;
  margin: 0px;
  }
.buttons{
    text-align: right;

  }
.new-btn{
margin-right: 10px;
background-color:#ffffff;
	border-radius:5px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:15px;
	padding:11px 23px;
	text-decoration:none;

}
.new-btn:hover{
  background-color:#f6f6f6;
}
.create-btn{
  background-color:#007bf5;
	border-radius:5px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:11px 23px;
	text-decoration:none;

}
.create-btn:hover{
  background-color:#378de5;
}
.fas
{
  margin-right: 10px;
}
@media screen and (max-width: 600px) {
  .new-btn{

    margin:5px;
  }
  

}
</style>
