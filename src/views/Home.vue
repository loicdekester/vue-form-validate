<template>
  <div>
    <div class="container">
      <div class="hero-body">
        <h1 class="title">Home</h1>
        <h2 class="subtitle">This is the home page</h2>
      </div>
      <div class="column is-half is-offset-one-fifth">
      <div class="box">
        <div class="media-content">
          <figure class="image has-text-centered">
            <img src="../../public/vue.jpg" alt="Image">
          </figure>
        </div>
        <div class="content">
        <p>
          This app is an example of how to manage errors and form validation in Vue.js.<br>
          You can use the header to see the same default form using either no external library: Vanilla.<br>
          Or using Vuelidate or hte VeeValidate libraries.<br>
        </p>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
};
</script>
