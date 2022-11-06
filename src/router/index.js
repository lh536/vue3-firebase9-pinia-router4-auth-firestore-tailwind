import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from "@/stores/user.js";
import { storeToRefs } from 'pinia';


const requireAuth = async (to, from, next) => {

    const userStore = useUserStore()
    const { currentUser } = userStore
    const { loadingSession } = storeToRefs(userStore)

    loadingSession.value = true
    const user = await currentUser()

    if (user) {
        next()
    } else {
        next({name: 'login'})
    }
    loadingSession.value = false
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            beforeEnter: requireAuth
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/RegisterView.vue')
        },
    ]
})

export default router
