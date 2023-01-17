<script setup>
import { inject, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const launch = ref("");
const patch = ref("");

const getLaunch =  async () => {
  const datas = await inject("api").get(`/launches/${route.params.idLaunch}`);
  launch.value = datas.data;
  patch.value = datas.data.links.patch;
} 

onMounted(() => {
  getLaunch();
})
</script>

<template>
  <div class="my-10 mx-20">
    <h1 class="text-2xl font-bold mb-5 text-center bg-gray-300 py-5">{{ launch.name }}</h1>
    <img :src="patch.large" class="w-40 mx-auto my-8 flex justify-evenly" v-if="patch.large"/>
    <div class="flex flex-row flex-wrap justify-center mt-5">
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">ID</div>
        <div class="text-center text-sm py-5">
          {{ launch.id }}
        </div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Flight Number</div>
        <div class="text-center py-5 text-sm flex items-center justify-center" v-if="launch.flight_number">
          {{ launch.flight_number }}
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Crews</div>
        <div v-if="launch.crews && launch.crews.length !== 0" class="py-5">
          <div class="text-center text-sm mb-2" v-for="crew in launch.crews" :key="crew">
              {{ crew }}
          </div>
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Capsules</div>
        <div v-if="launch.capsules && launch.capsules.length !== 0" class="py-5">
          <div class="text-center text-sm mb-2" v-for="capsule in launch.capsules" :key="capsule">
            <RouterLink :to="{path: `/capsules/${capsule}`}" >
              <u class="text-blue-500">{{ capsule }}</u>
            </RouterLink>
          </div>
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Failures</div>
        <div v-if="launch.failures && launch.failures.length !== 0" class="py-5">
          <div class="text-center text-sm mb-2" v-for="failure in launch.failures" :key="failure">
              {{ failure.reason }} (Time : {{ failure.time }})
          </div>
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Cores</div>
        <div v-if="launch.cores && launch.cores.length !== 0" class="py-5">
          <div class="text-center text-sm mb-2" v-for="core in launch.cores" :key="core.core">
              {{ core.core }}
          </div>
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Launch Pad</div>
        <div class="text-center text-sm py-5" v-if="launch.launchpad">
          {{ launch.launchpad }}
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Rocket</div>
        <div class="text-center text-sm py-5" v-if="launch.rocket">
          {{ launch.rocket }}
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Payloads</div>
        <div v-if="launch.payloads && launch.payloads.length !== 0" class="py-5">
          <div class="text-center my-2 text-sm mb-2" v-for="payload in launch.payloads" :key="payload">
            <span>{{ payload }}</span>
          </div>
        </div>
        <span v-else class="text-center py-3">-</span>
      </div>
      <div class="flex flex-col w-96 mr-10">
        <div class="font-medium border-2 border-red-200 bg-red-200 text-center">Ships</div>
        <div v-if="launch.ships && launch.ships.length !== 0" class="py-5">
          <div class="text-center my-2 text-sm mb-2" v-for="ship in launch.ships" :key="ship" >
            <span>{{ ship }}</span>
          </div>
        </div>
        <div class="text-center py-3" v-else>-</div>
      </div>
    </div>
  </div>
</template>
