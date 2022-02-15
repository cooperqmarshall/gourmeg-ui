import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'
import Register from '@/views/Register.vue'
import store from '@/store'
import axios from 'axios'
import _ from 'lodash'


const routes = [{
    path: '/',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.user) {
      axios.get('http://localhost:5000/api/v1/me', {
        withCredentials: true
      }).then((response) => {
        console.log(response.data)
        if (_.isEmpty(response.data)) {
          next({
            path: "/signin"
          });
        } else {
          store.commit("login", response.data);
          next();
        }
      }).catch((error) => {
        console.log(error)
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router