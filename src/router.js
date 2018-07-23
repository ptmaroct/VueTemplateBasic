import Vue from "vue";
import Router from "vue-router";

//import components
import Home from "./components/Home";
import Map from "./components/Map";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/map", component: Map }
];

export default new Router({
  routes // short for `routes: routes`
});
