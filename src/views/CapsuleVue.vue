<script setup>
import { inject, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const capsule = ref("");

const getCapsule =  async () => {
  const datas = await inject("api").get(`/capsules/${route.params.idCapsule}`);
  capsule.value = datas.data;
} 

onMounted(() => {
  getCapsule();
})
</script>

<template>
  <div class="my-10 mx-20">
    <h1 class="text-2xl font-bold mb-5 text-center bg-gray-300 py-5">Serial {{ capsule.serial }}</h1>
    <div class="flex flex-row flex-wrap justify-evenly">
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">ID</div>
        <div class="text-center text-sm py-5">
          {{ capsule.id }}
        </div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Last Update</div>
        <div class="text-center py-5 text-sm flex items-center justify-center">
          {{ capsule.last_update }}
        </div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Launches</div>
        <div v-if="capsule.launches && capsule.launches.length !== 0" class="py-5">
          <div class="text-center text-sm pb-2" v-for="launch in capsule.launches" :key="launch">
            <RouterLink :to="{path: `/launches/${launch}`}">
              <u class="text-blue-500">{{ launch }}</u>
            </RouterLink>
          </div>
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Type</div>
        <div class="text-center text-sm py-5">
          {{ capsule.type }}
        </div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center mt-2">Status</div>
        <div class="text-center py-3 bg-orange-400 text-sm mb-5" v-if="capsule.status === 'retired'">
            <span>{{ capsule.status }}</span>
        </div>
        <div class="text-center py-3 bg-green-400 text-sm mb-5" v-if="capsule.status === 'active'">
            <span>{{ capsule.status }}</span>
        </div>
        <div class="text-center py-3 bg-gray-400 text-sm mb-5" v-if="capsule.status === 'unknown'">
            <span>{{ capsule.status }}</span>
        </div>
        <div class="text-center py-3 bg-red-400 text-sm mb-5" v-if="capsule.status === 'destroyed'">
            <span>{{ capsule.status }}</span>
        </div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Water Landings</div>
        <div class="text-center my-2 text-sm py-3">
          {{ capsule.water_landings }}
        </div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Reuse Count</div>
        <div class="text-center my-2 text-sm py-3">
          {{ capsule.reuse_count }}
        </div>
      </div>
    </div>
  </div>
</template>