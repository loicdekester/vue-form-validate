<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">VeeValidate</h1>
        <h2 class="subtitle">This is the form with validation using VeeValidate Library</h2>
      </div>
    </section>
    <div class="container">
      <ValidationObserver ref="observer">
      <form @submit.prevent="onSubmit" novalidate="true">
        <div class="field">
          <label class="label" for="firstName">First Name</label>
          <ValidationProvider name="first name" rules="required|min:3|alpha" mode="passive" v-slot="{errors}">
          <input class="input"
            id="firstName"
            v-model.trim="firstName"
            type="text"
            name="firstName"
          >
          <span class="help is-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          </div>
          <div class="field">
            <label class="label" for="lastName">Last Name</label>
            <ValidationProvider name="last name" rules="required|alpha" mode="passive" v-slot="{errors}">
            <input class="input"
                id="lastName"
                v-model.trim="lastName"
                type="text"
                name="lastName"
            >
            <span class="help is-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="field">
            <label class="radio">
              <input type="radio" name="sex">
            Female</label>
            <label class="radio">
              <input type="radio" name="sex">
            Male</label>
          </div>
        <div class="field">
          <label class="label" for="age">Age</label>
          <ValidationProvider rules="required|min_value:0|integer" mode="passive" v-slot="{errors}">
          <input class="input"
              id="age"
              v-model.trim="age"
              type="number"
              name="age"
              min="0"
          >
          <span class="help is-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="field">
          <label class="label" for="email">Email</label>
          <ValidationProvider rules="required|email" vmode="passive" v-slot="{errors}">
          <input class="input"
              id="email"
              v-model.trim="email"
              type="email"
              name="email"
          >
          <span class="help is-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="field">
          <label class="label" for="religion">Religion</label>
          <select
            class="select is-medium is-primary"
              id="religion"
              v-model="religion"
              name="religion"
          >
            <option v-for="option in options" :key="option.id" :value="option.value"> {{ option.text }} 
            </option>
          </select>
        </div>
        <button class="button is-black">
          Submit
        </button>
      </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

export default {
  name: "VeeValidate",
  components:{
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      options: [{id:1, text:"Christian"}, {id:2, text:"Muslim"}, {id:3, text:"Hindu"}, {id:5, text:"Buddhist"}, {id:6, text:"Jew"}, {id:7, text:"Other"}],
      firstName: null,
      lastName: null,
      sex: null,
      age: null,
      email: null,
      religion: null
    }
  },
  methods:{
    onSubmit() {
      this.$refs.observer.validate();
    }, 
  }
};
</script>
