<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col space-y-6 justify-start" @submit.prevent="onSubmit">
        <div class="row">
          <label for="fullname" class="flex flex-col">
            <span class="">Full Name</span>
            <input
              id="fullname"
              type="text"
              placeholder="iMoney..."
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              v-model="infoUser.fullname"
            />
          </label>
        </div>

        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="">Email</span>
            <input
              id="email"
              type="text"
              placeholder="example@gmail.com"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              v-model="infoUser.email"
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
              v-model="infoUser.password"
            />
          </label>
        </div>

        <div class="row">
          <button type="submit" class="py-3 text-center w-full bg-primary text-white">Sign up</button>
        </div>
      </form>

      <div v-if="error" class="mt-4 text-red text-left">
        <span>{{ error }}</span>
      </div>

      <div class="w-full text-center mt-6">
        <span>I'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {}}" class="text-primary font-bold">&nbsp;Sign in</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, reactive } from 'vue';
  import { useSighUp } from '@/composables/useSignUp'
  
  export default {

    setup() {
      const infoUser = reactive({
        fullname: '',
        email: '',
        password: ''
      });

      const { error, isPending, sigup } = useSighUp();

      async function onSubmit() {
        await sigup(infoUser);
      }

      return {infoUser, onSubmit, error, isPending}
    },
  };
</script>
