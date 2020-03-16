<template>
  <div>
    <h4>List Item</h4>
    <q-table class="table table-striped">
      <q-thead>
        <q-tr>
          <q-th>Item Name</q-th>
          <q-th>Item Price</q-th>
          <q-th colspan="2">Action</q-th>
        </q-tr>
      </q-thead>
      <q-tbody>
          <q-tr v-for="goatMilk in goatMilks" :key="goatMilk.key">
            <q-td>{{ goatMilk.id }}</q-td>
            <q-td>{{ goatMilk.name }}</q-td>
            <q-td>{{ goatMilk.price }}</q-td>
            <q-td class="row justify-center">
              <q-btn v-on:click="removeElement(props.row.__index)"
              flat
              round
              dense
              icon="delete"/>
          </q-td>
          </q-tr>
      </q-tbody>
    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goatMilks: [
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
    },

}
}
</script>
