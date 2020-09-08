<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Vuelidate</h1>
        <h2 class="subtitle">This is the form with validation using Vuelidate Library</h2>
      </div>
    </section>
    <div class="container">
      <form @submit.prevent="onSubmit" novalidate="true">
        <div class="field">
          <label class="label" for="firstName">First Name</label>
          <input class="input"
            id="firstName"
            v-model.trim="firstName"
            type="text"
            name="firstName"
          >
          <div v-if="$v.firstName.$dirty" >
            <div class="help is-danger" v-if="!$v.firstName.required">Field is required</div>
            <div class="help is-danger" v-if="!$v.firstName.minLength">Name must have at least {{$v.firstName.$params.minLength.min}} letters.</div>
          </div>  
        </div>
        <div class="field">
          <label class="label" for="lastName">Last Name</label>
            <input class="input"
                id="lastName"
                v-model.trim="lastName"
                type="text"
                name="lastName"
            >
            <div v-if="$v.lastName.$dirty" >
              <div class="help is-danger" v-if="!$v.lastName.required">Field is required</div>
            </div>  
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
              v-model.trim="age"
              type="number"
              name="age"
              min="0"
          >
          <div v-if="$v.age.$dirty" >
            <div class="help is-danger" v-if="!$v.age.required">Field is required</div>
            <div class="help is-danger" v-if="!$v.age.integer">Use only integers</div>
            <div class="help is-danger" v-if="!$v.age.minValue">You cannot be less than 0 years old</div>
          </div>
        </div>
        <div class="field">
          <label class="label" for="email">Email</label>
          <input class="input"
              id="email"
              v-model.trim="email"
              type="email"
              name="email"
          >
          <div v-if="$v.email.$dirty" >
            <div class="help is-danger" v-if="!$v.email.required">Field is required</div>
            <div class="help is-danger" v-if="!$v.email.email">Email is not valid</div>
          </div>
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
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, minValue, integer, email, alpha } from 'vuelidate/lib/validators'

export default {
  name: "Vuelidate",
  mixins: [validationMixin],
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
  validations:{
    firstName: {
      required,
      alpha,
      minLength: minLength(3)
    },
    lastName: {
      required,
      alpha
    },
    age: {
      required,
      integer,
      minValue: minValue(0)
    },
    email: {
      required,
      email
    }
  },
  methods:{
    onSubmit() {
      this.$v.$touch();
    }, 
  }
};
</script>
