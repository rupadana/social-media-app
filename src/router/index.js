import VueRouter from "vue-router";
import { routes } from "./routes";
console.log(routes);
const router = new VueRouter({
  routes, // short for `routes: routes`
});

export default router;
