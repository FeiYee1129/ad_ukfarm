<template>
  <div class="q-pa-md">
    <q-table
      title="Edit Tour Package"
      :data="data"
      :columns="columns"
      row-key="id"
      binary-state-sort
      
    >

        <template slot="top-right">
            <q-btn 
            to="/tourForm"
                icon="add_circle"
                size="14px"
                color="secondary"
                label="Add" />
        </template>


      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="title" :props="props">
            {{ props.row.title }}
            <q-popup-edit v-model="props.row.title">
              <q-input v-model="props.row.title" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="priceA" :props="props">
            {{ props.row.priceA }}
            <q-popup-edit v-model="props.row.priceA" title="Update price adult" buttons>
              <q-input type="number" v-model="props.row.priceA" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="priceK" :props="props">
            {{ props.row.priceK }}
            <q-popup-edit v-model="props.row.priceK" title="Update price kids" buttons>
              <q-input type="number" v-model="props.row.priceK" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="meal" :props="props">
            {{ props.row.meal }}
            <q-popup-edit v-model="props.row.meal">
              <q-input v-model="props.row.meal" dense autofocus counter />
            </q-popup-edit>
          </q-td>

          <q-td key="free1" :props="props">
            {{ props.row.free1 }}
            <q-popup-edit v-model="props.row.free1">
              <q-input v-model="props.row.free1" dense autofocus counter />
            </q-popup-edit>
          </q-td>

          <q-td key="free2" :props="props">
            {{ props.row.free2 }}
            <q-popup-edit v-model="props.row.free2">
              <q-input v-model="props.row.free2" dense autofocus counter />
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
          label: 'Tour Id',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
        },
        { name: 'title', align: 'center', label: 'Tour Title', field: 'title', sortable: true },
        { name: 'priceA', align: 'center', label: 'Tour Price(RM)', field: 'priceA', sortable: true },
        { name: 'priceK', align: 'center', label: 'Tour Price(RM)', field: 'priceK', sortable: true },
        { name: 'meal', align: 'center', label: 'Meal', field: 'price', sortable: true },
        { name: 'free1', align: 'center', label: 'Free Gift 1', field: 'free1', sortable: true },
        { name: 'free2', align: 'center', label: 'Free Gift 2', field: 'free2', sortable: true },
        { name: 'action', align: 'center', label: 'Delete', field: 'action' }
        
        
      ],
      data: [
        {
          id: 'C01',
          title:'Chalet 2D1N',
          priceA:243.80,
          priceK:222.60,
          meal:'Provided',
          free1:'Kong Ming Lantern',
          free2:'In-Farm activities'
        },
        {
          id: 'C02',
          title:'Chalet 3D2N',
          priceA:381.60,
          priceK:349.80,
          meal:'Provided',
          free1:'Kong Ming Lantern',
          free2:'In-Farm activities'
        },
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
        {
          id: 'tourID',
          title:'Normal Entrance Fee',
          priceA:47.70,
          priceK:37.10,
          meal:'No',
          free1:'No',
          free2:'In-Farm activities'
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
