<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const { logoutUser } = userStore
const { userData, loadingSession } = storeToRefs(userStore)
</script>


<template>
    <div class="">
        <h1>App.vue</h1>
        <nav v-if="!loadingSession">
            <router-link v-if="userData" :to="{name: 'home'}">Home</router-link> |
            <router-link v-if="!userData" :to="{name: 'login'}">Login</router-link> |
            <router-link v-if="!userData" :to="{name: 'register'}">Register</router-link>
            <button v-if="userData" @click="logoutUser" class="py-1 px-2 border border-teal-500 hover:bg-teal-200">Logout</button>
        </nav>
        <div v-else>Loading session...</div>
        <router-view></router-view>
    </div>
</template>


<style scoped>

</style>
