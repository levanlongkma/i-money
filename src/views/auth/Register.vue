<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col space-y-6 justify-start" @submit="onSubmit">
        <div class="row">
          <label for="fullname" class="flex flex-col">
            <span class="">Full Name</span>
            <input
              id="fullname"
              type="text"
              placeholder="iMoney..."
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
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
          <button type="submit" class="py-3 text-center w-full bg-dark">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    console.log(11111);
    function onSubmit() {}
  },
};
</script>
