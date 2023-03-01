<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col space-y-6 justify-start"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="">Email</span>
            <input
              id="email"
              type="text"
              placeholder="example@gmail.com"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            />
          </label>
        </div>

        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="">Password</span>
            <input
              id="password"
              type="password"
              placeholder=""
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            />
          </label>
        </div>

        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white"
          >
            Sign in
          </button>
        </div>
      </form>

      <div class="w-full text-center mt-6">
        <span>I'm a new member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >&nbsp;Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, reactive, watch } from 'vue';

  export default {
    setup() {
      const userName = ref('');
      const user = reactive({
        name: 'longkma'
      });

      function onSubmit() {
        userName.value = 'longkma';
      }

      return {
        userName
      }
    },
  };
</script>
