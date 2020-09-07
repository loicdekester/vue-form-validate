import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home"),
    },
    {
      name: "vuelidate",
      path: "/vuelidate",
      component: () => import("@/views/Vuelidate")
    },
    {
      name: "veevalidate",
      path: "/veevalidate",
      component: () => import("@/views/VeeValidate")
    },
    {
      name: "vanilla",
      path: "/vanilla",
      component: () => import("@/views/Vanilla")
    }
  ]
});
