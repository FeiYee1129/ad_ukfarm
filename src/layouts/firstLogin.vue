<template>
  <q-layout view="lHh Lpr lFf" style="background-color:#ff7d7d;">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'firstLogin',

  data () {
    return {
    }
  }
}
</script>
<style>
  .login{
    background-color: white;
    color: black;
    margin: 100px;
    padding: 50px;
    box-shadow: 0px 0px 25px grey, 0 0 5px #509cb6;
  }
  input{
    border:none;
    border-bottom: 1px solid grey;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }

  input:focus {
  background-color: transparent;
  border-bottom: 2px solid #64b2cd;
  }
  
  hr{
    border:none;
  }

  .label{
    text-align:center;
    font-size: 12px;
  }

</style>

