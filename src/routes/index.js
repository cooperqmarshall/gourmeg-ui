import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";
import Register from "@/views/Register.vue";
import Landing from "@/views/Landing.vue";
import Lists from "@/views/Lists.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    component: Landing,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/lists",
    component: Lists,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth & !store.state.user) {
    await store.dispatch("getUser");
    if (!store.state.user) {
      next({
        path: "/about",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
