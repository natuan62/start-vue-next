import { createWebHistory, createRouter } from "vue-router";
import ComputedVsWatch from "../views/ComputedVsWatch.vue";
import Props from "../views/Props.vue";

const routes = [
  {
    path: "/",
    name: "ComputedVsWatch",
    component: ComputedVsWatch,
  },
  {
    path: "/props",
    name: "Props",
    component: Props,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;