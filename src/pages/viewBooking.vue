<template>
  <!-- <div class="q-pa-md">
    <q-table
      title="View Booking"
      :data="data"
      :columns="columns"
      row-key="bookingID"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="bookingID" :props="props">{{ props.row.bookingID }}</q-td>
          <q-td key="title" :props="props">{{ props.row.title }}
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.date }}
          </q-td>

          <q-td class="row justify-center">
              <q-btn 
              flat
              round
              dense
              icon="more"/>
          </q-td>
        </q-tr>
       
      </template>
    </q-table>
  </div> -->
<div>
  <q-list bordered separator class="rounded-borders">
      <q-item-label header>
        <h5>View Booking</h5>
          </q-item-label>
          <q-item class="row">
            <q-item-section class="col-2">
              <q-item-label>
                  Type of Booking
                </q-item-label>
              </q-item-section>

            <q-item-section class="col-2">
                <q-item-label>
                  Booking Date
                </q-item-label>
              </q-item-section>

            <q-item-section class="col-2">
                <q-item-label>
                  No. Of Adult
                </q-item-label>
              </q-item-section>

            <q-item-section class="col-2">
                <q-item-label>
                  No. Of Kid
                </q-item-label>
              </q-item-section>

              <q-item-section class="col-2">
                <q-item-label>
                  Total Price(RM)
                </q-item-label>
              </q-item-section>

              <q-item-section class="col-2">
                <q-item-label>
                  More Details
                </q-item-label>
              </q-item-section>
            </q-item>

        <div v-for="(item, key) in orders" :key="key">
          <div v-if="item[0][0]==null">
        <q-item class="row">

          <q-item-section class="col-2">
            <q-item-label>
              {{ item[0].title }}
            </q-item-label>
          </q-item-section>

          <q-item-section class="col-2">
            <q-item-label>
              {{item[0].date}}
            </q-item-label>
          </q-item-section>

          <q-item-section class="col-2">
            <q-item-label>
              {{item[0].adult}}
            </q-item-label>
          </q-item-section>

          <q-item-section class="col-2">
            <q-item-label>
              {{item[0].kid}}
            </q-item-label>
          </q-item-section>

          <q-item-section class="col-2">
            <q-item-label>
              {{item[0].total}}
            </q-item-label>
          </q-item-section>
          <q-item-section class="col-2 justify-center">
              <q-btn 
              flat
              round
              dense
              @click="showMore=true;
              currentID=key"
              icon="more"/>
          </q-item-section>
        </q-item>
          <q-dialog v-model="showMore">
            <viewMore :orderID="currentID"/>
          </q-dialog>
        </div>
      </div>
    </q-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      showMore: false,
      currentID: ''
    }
  },
  methods:{
      ...mapActions('store', ['firebaseGetOrder']),
  },
  mounted(){
    this.firebaseGetOrder()
  },
  computed:{
    ...mapGetters('store', ['orders'])
  },
  components:{
    'viewMore': require('components/ViewMore.vue').default
  }
}

</script>

<style scoped>

</style>