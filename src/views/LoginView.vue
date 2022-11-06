<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
// import { useRouter } from 'vue-router'


// const router = useRouter()
const userStore = useUserStore()
const email = ref('gato21@gmail.com')
const password = ref('123456')

const { loginUser } = userStore
const { loading } = storeToRefs(userStore)

const handleSumbit = async () => {
    if (!email.value || password.value.length < 6) {
        return alert ('llena los campos')
    }
    await loginUser (email.value, password.value)
    // router.push({name: 'home'})
}

</script>


<template>
    <div class="bg-yellow-200">
        Login
        <form @submit.prevent="handleSumbit">
            <input v-model.trim="email" type="email" placeholder="Ingrese Email" class="border">
            <input v-model.trim="password" type="password" placeholder="Ingrese Contraseña" class="border">
            <button :disabled="loading" type="submit" class="disabled:bg-neutral-200 px-2">Acceder</button>
        </form>
    </div>
</template>


<style scoped>

</style>
