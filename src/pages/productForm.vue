<template>
  <q-page class="flex flex-center">
    <div class="productForm">
       <div class="q-pa-md" style="max-width: 400px">
    <q-card>
        <q-card-section style="padding:20px; padding-right:20px;background-color:#f95f5f;" > 
            <h4 style="text-align:center;color:white">Fill In The <br> Details of Product</h4>
        </q-card-section>
            <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            >
    <q-card-section>
     <q-item>
          <q-item-section>
            <q-item-label caption>
            <q-input
             filled
             v-model="prodID"
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
             v-model="prodName"
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
            v-model="prodPrice"
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
        <q-btn label="Submit" type="submit" color="red"/>
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
export default {
    name:'productForm',
    data () {
    return{
      prodID: '',
      prodName: '',
      prodPrice: ''
    }
  },
    methods: {
    onSubmit () {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
    },

    onReset () {
      this.prodID = null
      this.prodName = null
      this.prodPrice = null
    }
  }
}
</script>

<style scoped>
</style>