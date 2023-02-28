<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
  import { useRoute } from "vue-router";
  import { computed } from "vue";
  import constant from "./config/constant";
  import DefaultLayout from "@/layouts/Default.vue";
  import AuthLayout from "@/layouts/Auth.vue";

  export default {
    components: {DefaultLayout, AuthLayout},
    setup() {
      const route = useRoute();
      return {
        layout: computed(() => (route.meta.layout || constant.PUBLIC_LAYOUT) + "-layout")
      };
    },
  };
</script>