<template>
  <div>
    <q-list bordered separator class="rounded-borders">
      <q-item-label header>
        <h5>Edit Fresh Milk Details</h5>
        <q-btn 
            to="/milkForm"
                icon="add_circle"
                size="14px"
                color="secondary"
                label="Add" />
      </q-item-label>

      <q-item 
      class="row text-h6">
        <q-item-section
        class="col-7">
          <q-item-label>
            <b>Product Name</b>
          </q-item-label>
        </q-item-section>

        <q-item-section
        class="col-3">
          <q-item-label>
            <b>Price</b>
          </q-item-label>
        </q-item-section>
        <!-- delete -->
        <q-item-section 
        class="col-1">
          <b>Delete</b>
        </q-item-section>
          <!-- edit -->
        <q-item-section
        class="col-1">
          <b>Edit</b>
        </q-item-section>
      </q-item>

      <q-item 
      class="row"
      v-for="milk in btns" 
      :key="milk.id">

        <q-item-section
        class="col-7">
          <q-item-label>
            {{milk.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section
        class="col-3">
          <q-item-label>
            {{milk.price}}
          </q-item-label>
        </q-item-section>
        <!-- delete -->
        <q-item-section 
        class="col-1">
          <q-btn 
            dense
            round
            flat
            icon="delete" 
            @click="deleteItem(milk.id)"
          />
        </q-item-section>
          <!-- edit -->
        <q-item-section
        class="col-1">
          <q-btn 
            dense
            round
            flat
            icon="edit" 
            @click="showForm(milk.id)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('store', [
      'firebaseGetMilk',
      'deleteItem']),
    removeElement: function(index){
      this.data.splice(index,1);
    },
    deleteItem(id){
      console.log('id', id)
      console.log('delete1')
      this.deleteItem(id)
    }
  },
  mounted(){
    this.firebaseGetMilk()
  },
  computed:{
    ...mapGetters('store', ['btns'])
  }
}
</script>

<style scoped>

</style>