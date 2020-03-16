<template>
  <q-page class="flex flex-center">
    <div class="productForm">
       <div class="q-pa-md" style="max-width: 800px">
    <q-card>
        <q-card-section style="padding:20px; padding-right:20px;background-color:#f95f5f;" > 
            <h4 style="text-align:center;color:white">Fill In The Details<br> of Chalet Package </h4>
        </q-card-section>
            <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            >
    <q-card-section>
    <div class="row">
      <div class="col-12">
      <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             v-model= "formData.title"
             label="Tour Title *"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type the tour title']"
         />
            </q-item-label>
          </q-item-section>
     </q-item>
     </div>
    </div>
    <div class="row">
      <div class="col-6">
     <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
            filled
            type="number"
            v-model="formData.priceA"
            label="Price for adult(RM) *"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type the price',
            val => val > 0 && val < 500 || 'Please type the real price'
            ]"
        /></q-item-label>
        </q-item-section>
     </q-item>
     </div>
        <div class="col-6">
        <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
            filled
            type="number"
            v-model="formData.priceK"
            label="Price for kid(RM) *"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type the price',
            val => val > 0 && val < 500 || 'Please type the real price'
            ]"
        /></q-item-label>
        </q-item-section>
     </q-item>
     </div>
     </div>

      <div class="row">
      <div class="col-12">
      <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             v-model= "formData.meal"
             label="Meal(Provided/Not Provided) *"
         />
            </q-item-label>
          </q-item-section>
     </q-item>
     </div>
    </div>
      
      <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             type = "text"
             v-model= "formData.free1"
             label="Free gift included in package"
         />
            </q-item-label>
          </q-item-section>
     </q-item>

      <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             type = "text"
             v-model= "formData.free2"
             label="Free gift included in package"
         />
            </q-item-label>
          </q-item-section>
     </q-item>

    </q-card-section>
    <q-card-section>
      <div>
        <q-btn label="Submit" type="submit" color="red" to="/chaletEdit" @click="onSubmit()"/>
        <q-btn label="Reset" type="reset" color="red" flat class="q-ml-sm" />
      </div>
    </q-card-section>
    </q-form>
    </q-card>       
  </div>
  </div>

    </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'productForm',
    data () {
    return{
      formData:{
        tourTitle: '',
        priceA: '',
        priceK:'',
        meal:'',
        free1:'',
        free2:''
      }
    }
  },

  methods: {
    ...mapActions('store',[
        'addToChalet'
      ]),

    onSubmit () {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
        this.addToChalet(this.formData)
    },

    onReset () {
      this.tourTitle = null
      this.priceA = null
      this.priceK = null
      this.meal = null
      this.free1 = null
      this.free2 = null
      this.accept = false
    }
  },
computed:{
  ...mapGetters('store',['resort'])
}

}
</script>

<style scoped>

</style>