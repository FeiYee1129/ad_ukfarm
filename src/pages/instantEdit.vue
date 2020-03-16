<template>
  <!-- <div class="q-pa-md">
    <q-table
      title="Edit Instant Product"
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >

    <template slot="top-right">
        <q-btn 
           to="/instantForm"
            icon="add_circle"
            size="14px"
            color="secondary"
            label="Add" />
    </template>

     
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="price" :props="props">
            {{ props.row.price }}
            <q-popup-edit v-model="props.row.price" title="Update price" buttons>
              <q-input type="number" v-model="props.row.price" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td class="row justify-center">
              <q-btn v-on:click="removeElement(props.row.__index)"
              flat
              round
              dense
              icon="delete"/>
          </q-td>
        </q-tr>
       
      </template>
    </q-table>
  </div> -->
  <div>
    <q-list bordered separator class="rounded-borders">
      <q-item-label header>
        <h5>Edit Instant Product Detail</h5>
        <q-btn 
            to="/instantForm"
                icon="add_circle"
                size="14px"
                color="secondary"
                label="Add" />
      </q-item-label>

      <q-item v-for="ins in instant" :key="ins.id">
        <q-item-section>
          <q-item-label>
            <img :scr="ins.img" />
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ins.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ins.price}}
          </q-item-label>
        </q-item-section>
        <!-- delete -->
        <q-item-section side>
          <q-btn 
            dense
            round
            flat
            icon="delete" 
            @click="showConfirmDelete(ins.id)"
          />
          <!-- edit -->
          <q-btn 
            dense
            round
            flat
            icon="edit" 
            @click="showForm(ins.id)"
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
          label: 'Product Id',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
        },
        { name: 'name', align: 'center', label: 'Product Name', field: 'name', sortable: true },
        { name: 'price', align: 'center', label: 'Product Price(RM)', field: 'price', sortable: true },
        { name: 'action', align: 'center', label: 'Delete', field: 'action' }
        
      ],
      data: [
        {
          id:'PM01',
          name:'Goats Milk Orignal 820ml',
          price:23.00
        },
        {
          id:'PM02',
          name:'Goats Milk Orignal 160ml',
          price:5.80
        },
        {
          id:'PM03',
          name:'Goats Milk Chocolate 820ml',
          price:23.00
        },
        {
          id:'PM04',
          name:'Goats Milk Chocolate 160ml',
          price:5.80
        },
        {
          id:'PM05',
          name:'Goats Milk Yogurt 820ml',
          price:23.00
        },
        {
          id:'PM06',
          name:'Goats Milk Yogurt 160ml',
          price:5.80
        },
      ]

    }

},

  methods: {
    ...mapActions('store', ['firebaseGetInstant']),
    removeElement: function(index){
      this.data.splice(index,1);
    }
  },
  mounted(){
    this.firebaseGetInstant()
  },
  computed:{
    ...mapGetters('store', ['instant'])
  }
}

</script>

<style scoped>

</style>