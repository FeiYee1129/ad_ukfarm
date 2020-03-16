<template>
  <q-page class="flex flex-center">
    <div class="productForm">
       <div class="q-pa-md" style="max-width: 400px">
    <q-card>
        <q-card-section style="padding:20px; padding-right:20px;background-color:#f95f5f;" > 
            <h4 style="text-align:center;color:white">Choose The Category <br> You Want To Update</h4>
        </q-card-section>
        <q-card-section style="padding:20px">
            <div class="row justify-center">
            <q-btn color="red" 
                style="width: 200px"
                size="15px"
                @click="$router.replace('/milkEdit')">
                Fresh Milk
            </q-btn>
            </div>
        </q-card-section>
        <q-card-section style="padding:20px">
            <div class="row justify-center">
            <q-btn color="red" 
                style="width: 200px"
                size="15px"
                @click="$router.replace('/instantEdit')">
                Instant Product
            </q-btn>
            </div>
        </q-card-section>
        <q-card-section style="padding:20px">
            <div class="row justify-center">
            <q-btn color="red" 
                style="width: 200px"
                size="15px"
                @click="$router.replace('/toiletriesEdit')">
                Toiletries Product
            </q-btn>
            </div>
        </q-card-section>
    </q-card>
    </div>
    </div>
    </q-page>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>