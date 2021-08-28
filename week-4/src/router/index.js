import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CategoryPage from "../views/CategoryPage.vue";
import ContentPage from "../views/ContentPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:category",
    name: "Category",
    props: true,
    component: CategoryPage,
  },
  {
    path: "/:category/:id",
    name: "Content",
    props: true,
    component: ContentPage,
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active-route",
  mode: "history",
  routes,
});

export default router;
