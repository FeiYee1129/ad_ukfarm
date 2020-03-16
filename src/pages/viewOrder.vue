<template>
  <div>
    <q-list bordered separator class="rounded-borders">
        <q-item-label header>
          <h5>View Order</h5>
            </q-item-label>
            <q-item class="row">
              <q-item-section class="col-1">
                <q-item-label>
                    Customer Name
                  </q-item-label>
                </q-item-section>

              <q-item-section class="col-3">
                <q-item-label>
                  Address
                </q-item-label>
              </q-item-section>

              <q-item-section class="col-2">
                <q-item-label>
                  E-mail
                </q-item-label>
              </q-item-section>

              <q-item-section class="col-2">
                <q-item-label>
                  Contact No.
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
          <div v-if="item[0][0]!=null">
          <q-item class="row">
            <q-item-section class="col-1">
              <q-item-label>
                {{ item[1].name }}
              </q-item-label>
            </q-item-section>

            <q-item-section class="col-3">
              <q-item-label>
                {{ item[1].address }},{{ item[1].city }},{{ item[1].postcode }}
              </q-item-label>
            </q-item-section>

            <q-item-section class="col-2">
              <q-item-label>
                {{ item[1].email }}
              </q-item-label>
            </q-item-section>

            <q-item-section class="col-2">
              <q-item-label>
              {{ item[1].tel }}
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
            <viewCart :orderID="currentID"/>
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
    'viewCart': require('components/viewMore2.vue').default
  }
}

</script>

<style scoped>

</style>