<template>
  <!--<q-page class="flex flex-center">-->
    <q-page>
      <div class="pageTitle"><h5> Dashboard </h5></div>
     
      <div class="box" style="background-color:#eadff9; color:white;">
        <q-item style="padding-left:50px" to="/viewOrder" clickable>
            <q-icon name="assignment" style="font-size: 30px; color:white; margin:auto" ></q-icon>
            <q-item-section right style="margin-left:-80px; font-size:16px">
              <q-item-label>Total Order</q-item-label>
            </q-item-section>
        </q-item>
          
        <p style="font-size:30px; margin-top:-5px; margin-bottom:20px;">28</p>
        <q-btn id="op" to="/viewOrder" icon-right="arrow_right">More Info</q-btn>
      </div>

     <div class="box" style="background-color:#dcdbf4; color:white;">
        <q-item style="padding-left:50px" to="/viewBooking">
            <q-icon name="person_pin" style="font-size: 30px; color:white; margin:auto" ></q-icon>
            <q-item-section right style="margin-left:-80px; font-size:16px">
              <q-item-label>Total Booking</q-item-label>
            </q-item-section>
        </q-item>
          
        <p style="font-size:30px; margin-top:-5px; margin-bottom:20px;">6</p>
        <q-btn id="op" to="/viewBooking" icon-right="arrow_right">More Info</q-btn>
      </div>

      <div class="box" style="background-color:#d7e2ee; color:white;">
        <q-item style="padding-left:50px">
            <q-icon name="attach_money" style="font-size: 30px; color:white; margin:auto" ></q-icon>
            <q-item-section right style="margin-left:-80px; font-size:16px">
              <q-item-label>Total Sales</q-item-label>
            </q-item-section>
        </q-item>
          
        <p style="font-size:30px; margin-top:-5px; margin-bottom:20px;">3596.00</p>
        <q-btn id="op" to="/" icon-right="arrow_right">More Info</q-btn>
      </div>
         
      

  </q-page>
</template>

<script>



export default {
  name: 'Dashboard',

  computed: {
      dataForGraph () {
        return {
          booking: 2396,
          order: 1200,
          total: 3596
        }
      }
    },
}
</script>

<style>
  
  .box{
    margin:10px 20px 20px 20px;
    width:300px; /*240px*/
    height:150px; /*120px*/
    padding:10px;
    display:inline-block;
    text-align:center;
  }

  #op{
  
    background: rgba(0, 0, 0, 0.2); 
    color:white;
    width:107%;
    margin-left: -10px;
    margin-top:-12px;
    padding:10px;
  }
</style>

