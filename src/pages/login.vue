<template>
  <q-page class="flex flex-center">
    <q-card style="width: 350px">
        <q-card-section style="padding:20px; padding-right:20px;background-color:#f95f5f;" > 
            <h4 style="text-align:center;color:white">UK Farm <br>Administrative Site </h4>
        </q-card-section>

      <q-card-section style="padding:20px">
        <q-input outlined
          ref="email"
          v-model="formData.email"
          label="Email"
          type="email"
          placeholder=""
          hint=""
          :rules="[
            val => !!val || 'Email is needed',
            val => this.validateEmail(val) || 'Email format invalid'
          ]">
          <template v-slot:prepend>
              <q-icon name="email" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section>
        <q-input outlined
          ref="password"
          v-model="formData.password"
          label="Password"
          type="password"
          placeholder=""
          hint=""
          :rules="[val => !!val || 'Password is needed']" >
          <template v-slot:prepend>
              <q-icon name="lock" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section>
        <q-btn 
          push
          color="red"
          label="login"
          class="full-width"
          size="lg"
          @click="tryLogin" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import isEmail from 'validator/lib/isEmail'
export default {
  name: 'PageMasuk',
  data() {
    return {
      formData:{
        email: '',
        password: ''
      }
      
    }
  },
  methods: {
    ...mapActions('store',['loginUser']),
    validateEmail(value) {
      return isEmail(value)
    },
    tryLogin() {
      const emailSelector = this.$refs.email
      const passwordSelector = this.$refs.password
      emailSelector.validate()
      passwordSelector.validate()
      if (emailSelector.hasError || passwordSelector.hasError) return 
      else {
        this.loginUser(this.formData)
    }
    
    }
  }
}
</script>

<style>
</style>