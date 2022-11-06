<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore()

const { userData } = storeToRefs(userStore)
</script>


<template>
    <div class="bg-red-200">
        HomeView
        {{userData?.email}}
    </div>
</template>


<style scoped>

</style>
