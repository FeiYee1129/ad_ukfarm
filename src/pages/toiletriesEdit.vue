<template>
  <!-- <div class="q-pa-md">
    <q-table
      title="Edit Toileteries Product"
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >

    <template slot="top-right">
        <q-btn 
           to="/toiletriesForm"
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
        <h5>Edit Toiletries Details</h5>
        <q-btn 
            to="/toiletriesForm"
                icon="add_circle"
                size="14px"
                color="secondary"
                label="Add" />
      </q-item-label>

      <q-item 
      class="row">
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
      v-for="item in toilet" 
      :key="item.id">
        <q-item-section
        class="col-7">
          <q-item-label>
            {{item.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section
        class="col-3">
          <q-item-label>
            {{item.price}}
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
            @click="showConfirmDelete(item.id)"
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
            @click="showForm(item.id)"
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
    ...mapActions('store', ['firebaseGetToilet']),
    removeElement: function(index){
      this.data.splice(index,1);
    }
  },
  mounted(){
    this.firebaseGetToilet()
  },
  computed:{
    ...mapGetters('store', ['toilet'])
  }
}

</script>

<style scoped>

</style>