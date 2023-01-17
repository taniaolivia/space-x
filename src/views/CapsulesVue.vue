<script setup>
import { inject, ref, onMounted } from 'vue';

const infoIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>;

const capsules = ref("");

const getAllCapsules =  async () => {
  const datas = await inject("api").get("/capsules");
  capsules.value = datas.data;
} 

onMounted(() => {
  getAllCapsules();
})
</script>

<template>
  <div class="my-10 mx-20">
    <h1 class="text-2xl font-bold mb-16 text-center bg-gray-300 py-5">LIST OF CAPSULES</h1>
    <div class="flex flex-row flex-wrap justify-evenly">
      <div class="w-80 flex flex-col border-solid border-4 mb-5 border-gray-200 mx-2" v-for="capsule in capsules" :key="capsule.id">
        <div class="flex flex-row border-solid border-b-4 bg-gray-100 p-4">
          <h2 class="text-xl font-bold ml-20">
            Serial {{ capsule.serial }}
          </h2>
          <RouterLink :to="{path: `capsules/${capsule.id}`}">
            <infoIcon class="my-auto text-right text-blue-500 hover:animate-bounce hover:text-yellow-500 ml-12 cursor-pointer"></infoIcon>
          </RouterLink>
        </div>
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Last Update</div>
        <div class="text-center px-5 py-2 text-sm h-20 flex items-center justify-center">
            <span v-if="capsule.last_update">
              {{ capsule.last_update }}
            </span>
            <span v-else>
              -
            </span>
        </div>
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Type</div>
        <div class="text-center mt-2 text-sm">{{ capsule.type }}</div>
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center mt-2">Status</div>
        <div class="text-center py-2 bg-orange-400 text-sm" v-if="capsule.status === 'retired'">
            <span>{{ capsule.status }}</span>
        </div>
        <div class="text-center py-2 bg-green-400 text-sm" v-if="capsule.status === 'active'">
            <span>{{ capsule.status }}</span>
        </div>
        <div class="text-center py-2 bg-gray-400 text-sm" v-if="capsule.status === 'unknown'">
            <span>{{ capsule.status }}</span>
        </div>
        <div class="text-center py-2 bg-red-400 text-sm" v-if="capsule.status === 'destroyed'">
            <span>{{ capsule.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>