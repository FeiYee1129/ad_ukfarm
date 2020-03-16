<template>
  <q-layout view="hHh Lpr lFf" style="background-color:white">
    <q-header elevated style="background-color:#e45555">
      <q-toolbar>
        <q-toolbar-title>
          UK Farm Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
    
      <q-list>

        <q-item style="padding:50px; padding-right:20px;background-color:#f95f5f;">
          <q-icon name="account_circle" style="font-size: 50px; color:white; margin:10px" ></q-icon>
          <q-item-section right>
          <q-btn flat style="background-color:transparent; color:white" icon-right="arrow_drop_down" label="Admin">
          <q-menu fit anchor="bottom left" self="top left">
             <q-item to="/" exact clickable>
          <q-item-section avatar>
            <q-icon name="keyboard_tab" style="margin:auto"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
          </q-menu>
          </q-btn>
          <q-item-section caption style="padding-left:20px;color:white; font-size:12px">   Administrator</q-item-section>
          </q-item-section>
      </q-item>
         
        <q-item to="/dashboard" clickable>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item
          expand-separator
          icon="hotel"
          label="Manage Tour Package">

          <q-item to="/editTourMain" clickable>
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Edit Tour Package</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/viewBooking" clickable>
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>View Booking</q-item-label>
          </q-item-section>
        </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="shopping_basket"
          label="Manage Purchase Item">

          <q-item to="/editProMain" clickable>
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Edit Product</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/viewOrder" clickable>
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>View Order</q-item-label>
          </q-item-section>
        </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>
      
    <q-page-container>
     <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>
<style>
.pageTitle{
    position: relative;
    left: 0px;  
    margin:-30px 0px -40px 30px;
  }
  .directory{
    position:absolute; 
    top:-5px;
    right: 30px;
    margin:10px 0px 0px 30px;
    font-size:16px;
  }

</style>
