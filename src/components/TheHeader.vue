<template>
  <nav class="navbar is-black">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/home" class="navbar-item">
          Home
        </router-link>
        <router-link to="/vanilla" class="navbar-item">
          Vanilla
        </router-link>
        <router-link to="/vuelidate" class="navbar-item">
          Vuelidate
        </router-link>
        <router-link to="/veevalidate" class="navbar-item">
          VeeValidate
        </router-link>
      </div>
    </div>
  </nav>  
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
