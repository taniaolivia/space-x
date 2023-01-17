import { createWebHistory, createRouter } from "vue-router";
import LaunchesVue from "@/views/LaunchesVue";
import LaunchVue from "@/views/LaunchVue";
import CapsulesVue from "@/views/CapsulesVue";
import CapsuleVue from "@/views/CapsuleVue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CapsulesVue,
  },
  {
    path: "/capsules",
    name: "Capsules",
    component: CapsulesVue,
  },
  {
    path: "/capsules/:idCapsule",
    name: "Capsule",
    component: CapsuleVue,
  },
  {
    path: "/launches",
    name: "Launches",
    component: LaunchesVue,
  },
  {
    path: "/launches/:idLaunch",
    name: "Launch",
    component: LaunchVue,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;