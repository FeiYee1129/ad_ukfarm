<template>
  <div class="q-pa-md">
    <q-table
      title="Edit Product"
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >

    <template slot="top-right">
        <q-btn 
           to="/productForm"
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
  </div>
</template>

<script>
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
    removeElement: function(index){
      this.data.splice(index,1);
    }
}
}
</script>

<style scoped>

</style>