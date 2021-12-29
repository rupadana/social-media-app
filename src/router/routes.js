import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
const nav_menus = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    name: "About",
    path: "/foo",
    component: About,
  },
];
const routes = [
  ...nav_menus,
  {
    path: "/bar",
    component: { template: "<span>Bar</span>" },
  },
];

export { routes, nav_menus };
