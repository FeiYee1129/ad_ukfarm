<template>
    <q-card class="q-pa-md">
        <div class="text-h6
        text-center">
            <b>==Customer Details==</b>
        </div>
        <div v-for="(order, key) in orders"
        :key="key"
        v-if="orderID==key">
            <div v-for="item in order[0]"
            :key="item.id">
            <div v-for="prod in products"
            :key="prod.id"
            v-if="item.id==prod.id">
                <div class="row">
                    <div class="col-4">
                        Name
                    </div>
                    <div class="col-7">
                        {{ prod.name }}
                    </div>
                    <div class="col-4">
                        Price
                    </div>
                    <div class="col-5">
                        {{ prod.price }}
                    </div>
                    <div class="col-4">
                        Quantity
                    </div>
                    <div class="col-5">
                        {{ item.quantity }}
                    </div>
                </div>
                <br>
            </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <b>Total</b>
                </div>
                <div class="col-5">
                    <b>RM {{ total=calculateCartTotal2() }}</b>
                </div>
            </div>
            <br>
        </div>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props:['orderID'],
    methods:{
        ...mapActions('store', [
        'firebaseGetOrder',
        'firebaseGetProducts']),
        calculateCartTotal2(){
            var total = 0
            Object.keys(this.products).forEach(productKey=>{
                Object.keys(this.orders).forEach(ordersKey=>{
                for (var i=0; i<this.orders[ordersKey][0].length; i++){
                    if (this.products[productKey].id === this.orders[ordersKey][0][i].id)
                    {
                    total += (parseFloat(this.products[productKey].price) * this.orders[ordersKey][0][i].quantity)
                    }
                }
                })
            })
            return total
        }
    },
    computed:{
        ...mapGetters('store', [
        'orders', 
        'products'])
    },
    mounted(){
        this.firebaseGetOrder()
        this.firebaseGetProducts()
    }
}
</script>