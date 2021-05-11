<template>
  <div>
  <table class="feedback">
    <thead>
      <tr>
        <th>Buyer</th>
        <th>Comment</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img class="thumb" :src='picture'></td>
        <td>{{comment}}</td>
        <td>{{date}}</td>
      </tr>
      <tr>
        <td><img class="thumb" :src='picture1'></td>
        <td>{{comment1}}</td>
        <td>{{date1}}</td>
      </tr>
      <tr>
        <td><img class="thumb" :src='picture2'></td>
        <td>{{comment2}}</td>
        <td>{{date2}}</td>
      </tr>
      <tr>
        <td><img class="thumb" :src='picture3'></td>
        <td>{{comment3}}</td>
        <td>{{date3}}</td>
      </tr>
      <tr>
        <td><img class="thumb" :src='picture4'></td>
        <td>{{comment4}}</td>
        <td>{{date4}}</td>
      </tr>
      <tr>
        <td><img class="thumb" :src='picture5'></td>
        <td>{{comment5}}</td>
        <td>{{date5}}</td>
      </tr>
      <tr>
        <td><img class="thumb" :src='picture6'></td>
        <td>{{comment6}}</td>
        <td>{{date6}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'Customers',
  data() {
    return {
      comment: '',
      picture: '',
      date:'',
      comment1: '',
      picture1: '',
      date1:'',
      comment2: '',
      picture2: '',
      date2:'',
      comment3: '',
      picture3: '',
      date3:'',
      comment4: '',
      picture4: '',
      date4:'',
      comment5: '',
      picture5: '',
      date5:'',
      comment6: '',
      picture6: '',
      date6:'',
    }
  },
  mounted:function(){
         this.getFeedback()
   },
  methods:{
    async getFeedback(){
    const res = await fetch('api/people')
    const results = await res.json()


      this.comment= results[0].comment
      this.date= results[0].date
      this.picture= results[0].picture
      this.comment1= results[1].comment
      this.date1= results[1].date
      this.picture1= results[1].picture
      this.comment2= results[2].comment
      this.date2= results[2].date
      this.picture2= results[2].picture
      this.comment3= results[3].comment
      this.date3= results[3].date
      this.picture3= results[3].picture
      this.comment4= results[4].comment
      this.date4= results[4].date
      this.picture4= results[4].picture
      this.comment5= results[5].comment
      this.date5= results[5].date
      this.picture5= results[5].picture
      this.comment6= results[6].comment
      this.date6= results[6].date
      this.picture6= results[6].picture
    }
  }
}
</script>

<style scoped>
table.feedback {
  width: 100%;
  background-color: #F0F1F3;
  border-collapse: collapse;
  color: #000000;
}
table.feedback th{
  border-width: 1px;
  border-color: grey;
  border-style: solid none;
}


table.feedback td {
  background-color: white;
}
.thumb{
  margin: 3px;
}
</style>
