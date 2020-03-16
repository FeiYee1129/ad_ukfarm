<template>
  
  <div>
    <q-list bordered separator class="rounded-borders">
      <q-item-label header>
       <h5>Edit Fresh Milk Details</h5>
        <q-btn 
            to="/tourForm"
                icon="add_circle"
                size="14px"
                color="secondary"
                label="Add" />
      </q-item-label>
      
      <q-item 
      class="row"
      v-for="tou in tour" 
      :key="tou.id">
        <q-item-section
        class="col-4">
          <q-item-label>
            {{tou.title}}
          </q-item-label>
        </q-item-section>

        <q-item-section
        class="col-2">
          <q-item-label>
            {{tou.priceA}}
          </q-item-label>
        </q-item-section>

        <q-item-section
        class="col-2">
          <q-item-label>
            {{tou.priceK}}
          </q-item-label>
        </q-item-section>

        <q-item-section
        class="col-2">
          <q-item-label>
            {{tou.free2}}
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
            @click="showConfirmDelete(tou.id)"
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
            @click="showForm(tou.id)"
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
    ...mapActions('store', ['firebaseGetTour']),
    removeElement: function(index){
      this.data.splice(index,1);
    }
  },
  mounted(){
    this.firebaseGetTour()
  },
  computed:{
    ...mapGetters('store', ['tour'])
  }
}

</script>
