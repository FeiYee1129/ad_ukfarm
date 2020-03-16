import { firebaseAuth, firebaseDb } from 'boot/firebase'
import Vue from 'vue'

const state = {
    prodDetails: {},
    btns: {},
    instant: {},
    toilet: {},
    tour: {},
    resort: {},
    program: {},
    products: [],
    cartProducts: [],
    cartTotal : [],
    booking: {},
    orders: {}
}
const mutations = {
    setProdDetails(state, snapshot){
        state.prodDetails = snapshot
    },
    addProd(state, snapshot){
        Vue.set(state.btns, snapshot.prodID, snapshot.prodDetails)
    },
    addInstant(state, snapshot){
        Vue.set(state.instant, snapshot.prodID, snapshot.prodDetails)
    },
    addToilet(state, snapshot){
        Vue.set(state.toilet, snapshot.prodID, snapshot.prodDetails)
    },
    addResort(state, snapshot){
        Vue.set(state.resort, snapshot.prodID, snapshot.prodDetails)
    },
    addTour(state, snapshot){
        Vue.set(state.tour, snapshot.prodID, snapshot.prodDetails)
    },
    addProgram(state, snapshot){
        Vue.set(state.program, snapshot.prodID, snapshot.prodDetails)
    },
    addBooking(state, snapshot){
        Vue.set(state.booking, snapshot.prodID, snapshot.prodDetails)
    },
    addOrder(state, snapshot){
        Vue.set(state.orders, snapshot.prodID, snapshot.prodDetails)
    },
    //from liphong
    pushProductToCart (state, {id}){
        state.cartProducts.push({
            id,
            quantity: 1
        })
    },
    removeCartItems (state, { id }) {
    const index = state.cartProducts.findIndex(item => item.id === id)
    state.cartProducts.splice(index, 1)
    },
    incrementItemQuantity (state, { id }) {
    const cartItem = state.cartProducts.find(item => item.id === id)
    cartItem.quantity++
    },
    decreaseItemQuantity (state, { id }) {
    const cartItem = state.cartProducts.find(item => item.id === id)
    cartItem.quantity--
    },
    setProduct(state, payload) {
        state.products = payload
    },
    setCartTotal(state,payload){
    state.cartTotal = payload
    }
}
const actions = {
    loginUser({},payload){
        firebaseAuth.signInWithEmailAndPassword(payload.email,payload.password)
            .then(response =>{
                console.log(response)
                this.$router.push('/dashboard')
            })
            .catch(error =>{
                console.log(error.message)
               })
    },
    addToMilk({}, payload){
        var order = firebaseDb.ref('products/milk');
        var data = {
            name: payload.name,
            price: payload.price,
        }
        order.push(data);
    },
    addToInstant({}, payload){
        var order = firebaseDb.ref('products/instant');
        var data = {
            name: payload.name,
            price: payload.price,
        }
        order.push(data);
    },
    addToToilet({}, payload){
        var order = firebaseDb.ref('products/toiletries');
        var data = {
            name: payload.name,
            price: payload.price,
        }
        order.push(data);
    },
    addToTour({}, payload){
        var order = firebaseDb.ref('program/tour');
        var data = {
            title: payload.title,
            priceA: payload.priceA,
            priceK: payload.priceK,
            free2: payload.free2,
        }
        order.push(data);
    },
    addToChalet({}, payload){
        var order = firebaseDb.ref('program/chalet');
        var data = {
            title: payload.title,
            priceA: payload.priceA,
            priceK: payload.priceK,
            features:{
                free2: payload.free2,
                free1: payload.free1,
                meal: payload.meal,
            }
            
        }
        order.push(data);
    },
    addToDorm({}, payload){
        var order = firebaseDb.ref('program/dorm');
        var data = {
            title: payload.title,
            priceA: payload.priceA,
            priceK: payload.priceK,
            features:{
                free2: payload.free2,
                free1: payload.free1,
                meal: payload.meal,
            }
            
        }
        order.push(data);
    },
    addToCart({}, list){
        console.log(list)
        var cart = firebaseDb.ref('cart/');
        cart.push(list);
    },
    firebaseGetMilk({ commit }){
        firebaseDb.ref('products/milk').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addProd', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetInstant({ commit }){
        firebaseDb.ref('products/instant').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addInstant', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetToilet({ commit }){
        firebaseDb.ref('products/toiletries').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addToilet', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetTour({ commit }){
        firebaseDb.ref('program/tour').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addTour', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetChalet({ commit }){
        firebaseDb.ref('program/chalet').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addResort', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetDorm({ commit }){
        firebaseDb.ref('program/dorm').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addResort', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetProgram({ commit }){
        firebaseDb.ref('program').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addProgram', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetBooking({ commit }){
        firebaseDb.ref('booking').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addBooking', {
                prodID,
                prodDetails
            })
        })
    },
    firebaseGetOrder({ commit }){
        firebaseDb.ref('order').on('child_added', snapshot => {
            let prodDetails = snapshot.val()
            let prodID = snapshot.key
            commit('addOrder', {
                prodID,
                prodDetails
            })
        })
    },
    deleteItem({}, id){
        console.log('delete')
        var prod = firebaseDb.ref('products/milk')
        prod.child(id).remove()
    },
    //from liphong
    loadData( {dispatch}){
        dispatch('firebaseGetProducts')
    },
    firebaseGetProducts({commit}){
        var productsArray = []
        firebaseDb.ref('products').on('value', snapshot => {
            snapshot.forEach(function(childSnapshot){
                childSnapshot.forEach(function(grandChildSnapshot){
                    var typeDict = { "type" : childSnapshot.key}
                    var idDict = { "id" : grandChildSnapshot.key}
                    var detailsDict =grandChildSnapshot.val()
                    var item = Object.assign({}, typeDict, idDict, detailsDict)
                    productsArray.push(item)
                })
            })
            commit('setProduct', productsArray)
        })
    },
    calculateCartTotal({state,commit}){
        var total = 0
        Object.keys(state.products).forEach(productKey=>{
            Object.keys(state.cartProducts).forEach(cartProductKey=>{
            // console.log(state.cartProducts[cartProductKey].id)
            // console.log(state.products[productKey].id)
            if ( state.products[productKey].id === state.cartProducts[cartProductKey].id)
            {
                // console.log(state.products[productKey].id.localeCompare(state.cartProducts[cartProductKey]))
                // console.log(state.products[productKey].price)
                total += (parseFloat(state.products[productKey].price) * state.cartProducts[cartProductKey].quantity)
                // console.log("total",total)
                commit('setCartTotal',total)
            }
            // console.log("cartprod",state.cartProducts[cartProductKey].id)
            })
            // console.log("prod", state.products[productKey].id)
        })
    },
    addProductToCart ({ state, commit }, productId) {
        console.log(productId);
        const cartItem = state.cartProducts.find(item => item.id === productId)
        if (!cartItem) {
            commit('pushProductToCart', { id: productId })
        } else {
            commit('incrementItemQuantity', cartItem)
        }
    },
    removeProductFromCart ({ state, commit }, productId) {
        const cartItem = state.cartProducts.find(item => item.id === productId)
        if (cartItem && cartItem.quantity > 1) {
            commit('decreaseItemQuantity', cartItem)
        } else {
            commit('removeCartItems', productId)
        }
    },
}

const getters = {
    btns: state => {
        return state.btns
    },
    instant: state => {
        return state.instant
    },
    toilet: state => {
        return state.toilet
    },
    program: state => {
        return state.program
    },
    tour: state => {
        return state.tour
    },
    resort: state => {
        return state.resort
    },
    booking: state => {
        return state.booking
    },
    orders: state => {
        return state.orders
    },
    //from liphong
    products: state => {
		return  state.products
    },
    cartProducts: state => {
        return state.cartProducts
    },
    cartTotal: state => {
        return state.cartTotal
    },
    instantType: state => {
        let productFiltered = {}
        Object.keys(state.products).forEach(key =>{
            if (state.products[key].type == "instant"){
            productFiltered[key] = state.products[key]
            }
        })
        return productFiltered
    },
    toiletriesType: state => {
        let productFiltered = {}
        Object.keys(state.products).forEach(key =>{
            if (state.products[key].type == "toiletries"){
            productFiltered[key] = state.products[key]
            }
        })
        return productFiltered
    },
    milkType: state => {
        let productFiltered = {}
        Object.keys(state.products).forEach(key =>{
            if (state.products[key].type == "milk"){
            productFiltered[key] = state.products[key]
            }
        })
        return productFiltered
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}