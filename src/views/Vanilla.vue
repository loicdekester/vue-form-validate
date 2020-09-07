<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Vanilla</h1>
        <h2 class="subtitle">This is the form with validation using nothing but Vue.js</h2>
      </div>
    </section>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <!-- Display error message -->
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{error }}</li>
          </ul>
        </p>
        <!-- Form -->
          <div class="field">
            <label class="label" for="firstName">First Name</label>
            <input class="input"
                id="firstName"
                v-model="firstName"
                type="text"
                name="firstName"
            >
          </div>
          <div class="field">
            <label class="label" for="lastName">Last Name</label>
            <input class="input"
                id="lastName"
                v-model="lastName"
                type="text"
                name="lastName"
            >
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
        </div>
        <div class="field">
          <label class="label" for="email">Email</label>
          <input class="input"
              id="email"
              v-model="email"
              type="email"
              name="email"
          >
        </div>
        <div class="field">
          <label class="label" for="religion">Religion</label>
          <select
            class="select"
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
export default {
  name: "Vanilla",
  data() {
    return {
      errors:[],
      options: [{id:1, text:"Christian"}, {id:2, text:"Muslim"}, {id:3, text:"Hindu"}, {id:5, text:"Buddhist"}, {id:6, text:"Jew"}, {id:7, text:"Other"}],
      firstName: null,
      lastName: null,
      age: null,
      email: null,
      religion: null
    }
  },
  methods:{
    onSubmit() {
      console.log(this.firstName);
      console.log(this.lastName);
      console.log(this.age);
      console.log(this.email);
      console.log(this.religion);
    }
  }
};
</script>
