<script setup>
import { inject, ref, onMounted } from 'vue';

const infoIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>;

const launches = ref("");

const getAllLaunches =  async () => {
  const datas = await inject("api").get("/launches");
  launches.value = datas.data;
} 

onMounted(() => {
  getAllLaunches();
})
</script>

<template>
  <div class="my-10 mx-20">
    <h1 class="text-2xl font-bold mb-16 text-center bg-gray-300 py-5">LIST OF LAUNCHES</h1>
    <div class="flex flex-row flex-wrap justify-evenly">
      <div class="w-80 flex flex-col border-solid border-4 mb-5 border-gray-200 mx-2" v-for="launch in launches" :key="launch.id">
        <div class="flex flex-row border-solid border-b-4 bg-gray-100 p-4 justify-end h-20 items-center">
          <h2 class="text-xl font-bold mx-auto">
            {{ launch.name }}
          </h2>
          <RouterLink :to="{path: `launches/${launch.id}`}">
            <infoIcon class="my-auto text-blue-500 hover:animate-bounce hover:text-yellow-500 cursor-pointer"></infoIcon>
          </RouterLink>
        </div>        
        <img :src="launch.links.patch.small" class="w-[180px] mx-auto my-4 flex justify-center items-center" v-if="launch.links.patch.small"/>
        <div v-else class="w-[180px] mx-auto my-4 flex justify-center items-center">No image</div>
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Flight Number</div>
        <div class="text-center px-5 py-3 text-sm bg-blue-100">
            <span v-if="launch.flight_number">
              {{ launch.flight_number }}
            </span>
            <span v-else>
              -
            </span>
        </div>
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Description</div>
        <div class="text-center px-5 overflow-ellipsis overflow-hidden bg-blue-100 py-3 text-sm whitespace-nowrap">
            <span v-if="launch.details">
              {{ launch.details }}
            </span>
            <span v-else>
              -
            </span>
        </div>
      </div>
    </div>
  </div>
</template>
