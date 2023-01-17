<script setup>
</script>

<template>
  <div class="bg-gray-600 w-screen py-2 text-white flex flex-row space-x-28">
    <span class="font-bold ml-8 flex items-center justify-center hover:animate-pulse"><RouterLink to="/">Space X</RouterLink></span>
    <div class="flex flex-row">
      <RouterLink to="/capsules" class="font-medium border-r-2 px-10 py-1 hover:animate-pulse hover:bg-gray-200 hover:text-black hover:rounded-tl-md hover:rounded-bl-md">Capsules</RouterLink>
      <RouterLink to="/launches" class="font-medium px-10 py-1 hover:animate-pulse hover:bg-gray-200 hover:text-black hover:rounded-tr-md hover:rounded-br-md">Launches</RouterLink>
    </div>
  </div>
</template>