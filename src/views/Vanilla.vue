<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Vanilla</h1>
        <h2 class="subtitle">This is the form with validation using nothing but Vue.js</h2>
      </div>
    </section>
    <div class="container">
      <form @submit.prevent="onSubmit" novalidate="true">
        <div class="field">
          <label class="label" for="firstName">First Name</label>
          <input class="input"
            id="firstName"
            v-model="firstName"
            type="text"
            name="firstName"
          >
          <FormError :errors="errors.firstName" />
          </div>
          <div class="field">
            <label class="label" for="lastName">Last Name</label>
            <input class="input"
                id="lastName"
                v-model="lastName"
                type="text"
                name="lastName"
            >
            <FormError :errors="errors.lastName" />
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
          <input class="input"
              id="age"
              v-model="age"
              type="number"
              name="age"
              min="0"
          >
          <FormError :errors="errors.age" />
        </div>
        <div class="field">
          <label class="label" for="email">Email</label>
          <input class="input"
              id="email"
              v-model="email"
              type="email"
              name="email"
          >
          <FormError :errors="errors.email" />
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
          <FormError :errors="errors.religion" />
        </div>
        <button class="button is-black">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import FormError from "@/components/FormError";

export default {
  name: "Vanilla",
  components:{
    FormError
  },
  data() {
    return {
      errors:{
        firstName:[],
        lastName:[],
        age:[],
        email:[],
        religion:[]
      },
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
      return this.checkForm();
    }, 
    checkForm() {
      this.resetErrors();
      if (!this.firstName) {
        this.errors.firstName.push("First Name required")
      }
      if (!this.lastName) {
        this.errors.lastName.push("Last Name required")
      }
      if (!this.age) {
        this.errors.age.push("Age required")
      }
      if (!this.email) {
        this.errors.email.push("Email required")
      }
      if (!this.validEmail(this.email)) {
        this.errors.email.push("Email not valid")
      }
    },
    resetErrors() {
      this.errors = { 
        "firstName":[],
        "lastName":[],
        "age":[],
        "email":[],
        "religion":[]
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
