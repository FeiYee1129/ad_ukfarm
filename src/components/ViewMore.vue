<template>
    <q-card class="q-pa-md">
        <div class="text-h6
        text-center">
            <b>==Customer Details==</b>
        </div>
        <div v-for="(order, key) in orders"
        :key="key">
            <div class="row"
            v-if="orderID==key">
                <div class="col-5">
                    Name
                </div>
                <div class="col-5">
                    {{ order[1].name }}
                </div>
                <div class="col-5">
                    Email
                </div>
                <div class="col-5">
                    {{ order[1].email }}
                </div>
                <div class="col-5">
                    Address
                </div>
                <div class="col-5">
                    {{ order[1].address }}
                    , {{ order[1].city }}
                    , {{ order[1].postcode }}
                </div>
                <div class="col-5">
                    Tel
                </div>
                <div class="col-5">
                    {{ order[1].tel }}
                </div>
            </div>
        </div>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props:['orderID'],
    methods:{
        ...mapActions('store', ['firebaseGetOrder'])
    },
    computed:{
        ...mapGetters('store', ['orders'])
    },
    mounted(){
        this.firebaseGetOrder()
    }
}
</script>