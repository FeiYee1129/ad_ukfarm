<template>
  
  <div>
    <q-list bordered separator class="rounded-borders">
      <q-item-label header>
        <h5>Edit Dormitory Package</h5>
        <q-btn 
            to="/dormForm"
                icon="add_circle"
                size="14px"
                color="secondary"
                label="Add" />
      </q-item-label>

      <q-item v-for="dorm in resort" :key="dorm.id">

        <q-item-section>
          <q-item-label>
            {{dorm.title}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{dorm.priceA}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{dorm.priceK}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{dorm.features.free1}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{dorm.features.free2}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{dorm.features.meal}}
          </q-item-label>
        </q-item-section>
        <!-- delete -->
        <q-item-section side>
          <q-btn 
            dense
            round
            flat
            icon="delete" 
            @click="showConfirmDelete(dorm.id)"
          />
          <!-- edit -->
          <q-btn 
            dense
            round
            flat
            icon="edit" 
            @click="showForm(dorm.id)"
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
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Tour Id',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
        },
        { name: 'title', align: 'center', label: 'Tour Title', field: 'title', sortable: true },
        { name: 'priceA', align: 'center', label: 'Tour Price(RM)', field: 'priceA', sortable: true },
        { name: 'priceK', align: 'center', label: 'Tour Price(RM)', field: 'priceK', sortable: true },
        { name: 'meal', align: 'center', label: 'Meal', field: 'price', sortable: true },
        { name: 'free1', align: 'center', label: 'Free 1', field: 'free1', sortable: true },
        { name: 'free2', align: 'center', label: 'Free 2', field: 'free2', sortable: true },
        { name: 'action', align: 'center', label: 'Delete', field: 'action' }
        
        
      ],
      data: [
        {
          id: 'D01',
          title:'Dormitory 2D1N',
          priceA:243.8,
          priceK:222.6,
          meal:'Provided',
          free1:'Kong Ming Lantern',
          free2:'In-Farm activities'
        },
        {
          id: 'D02',
          title:'Dormitory 3D2N',
          priceA:381.60,
          priceK:349.80,
          meal:'Provided',
          free1:'Kong Ming Lantern',
          free2:'In-Farm activities'
        },
      ]

    }
  },


  methods: {
    ...mapActions('store', ['firebaseGetDorm']),
    removeElement: function(index){
      this.data.splice(index,1);
    }
  },
  mounted(){
    this.firebaseGetDorm()
  },
  computed:{
    ...mapGetters('store', ['resort'])
  }
}

</script>
