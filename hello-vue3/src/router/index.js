import { createWebHistory, createRouter } from "vue-router";
import ComputedVsWatch from "../views/ComputedVsWatch.vue";

const routes = [
  {
    path: "/",
    name: "ComputedVsWatch",
    component: ComputedVsWatch,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;