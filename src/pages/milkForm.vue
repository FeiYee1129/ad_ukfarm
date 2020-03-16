<template>
  <q-page class="flex flex-center">
    <div class="productForm">
       <div class="q-pa-md" style="max-width: 400px">
    <q-card>
        <q-card-section style="padding:20px; padding-right:20px;background-color:#f95f5f;" > 
            <h4 style="text-align:center;color:white">Fill In The <br> Details of Fresh Milk</h4>
        </q-card-section>
            <q-form
            
            @reset="onReset"
            class="q-gutter-md"
            >
    <q-card-section>
     <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             v-model="ID"
             label="Product ID *"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type the product ID']"
            />
            </q-item-label>
          </q-item-section>
     </q-item>

      <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             type="text"
             v-model="formData.name"
             label="Product Name *"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type the product name']"
         />
            </q-item-label>
          </q-item-section>
     </q-item>

     <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
            filled
            type="number"
            v-model="formData.price"
            label="Product Price *"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type the price',
            val => val > 0 && val < 500 || 'Please type the real price'
            ]"
        />
            </q-item-label>
          </q-item-section>
     </q-item>
    </q-card-section>
    <q-card-section>
      <div>
        <q-btn label="Submit" type="submit" color="red" @click="onSubmit()" to="/milkEdit"/>
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
    name:'milkForm',
    data () {
    return{
      ID: '',
      formData:{
        name: '',
        price: ''
      }

    }
  },
methods: {

      ...mapActions('store',[
        'addToMilk'
      ]),


    onSubmit () {
         this.$q.notify({
         color: 'green-4',
         textColor: 'white',
         icon: 'cloud_done',
         message: 'Submitted'
         })
        console.log('milk')
        this.addToMilk(this.formData)
    },

    onReset () {
      this.name = null
      this.price = null
    }
  },

computed:{
  ...mapGetters('store',['btns'])
}
}
</script>

<style scoped>

</style>