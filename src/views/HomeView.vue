<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import { useDatabaseStore } from "@/stores/database";

const userStore = useUserStore()
const databaseStore = useDatabaseStore()

const { userData } = storeToRefs(userStore)

const { getUrls } = databaseStore
const { documents, loadingDocs } = storeToRefs(databaseStore)

getUrls()

</script>


<template>
    <div class="bg-red-200">
        HomeView
        {{userData?.email}}
        <p v-if="loadingDocs">Loading docs...</p>
        <ul v-else>
            <li v-for="item in documents" :key="item.id">
                Id: {{item.id}} - Name: {{item.name}}
                <br />
                Short: {{item.short}}
            </li>
        </ul>
    </div>
</template>


<style scoped>

</style>
