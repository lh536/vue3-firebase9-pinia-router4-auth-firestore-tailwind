import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { computed, ref } from "vue";
import { auth } from "../firebaseConfig"
import router from "@/router";

export const useUserStore = defineStore('user', () => {
    const userData = ref(null)
    const loading = ref(false)
    const loadingSession = ref(false)

    const registerUser = async (email, password) => {
        loading.value = true
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            userData.value = {email: user.email, uid: user.uid}
            router.push({name: 'home'})
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false
        }
    }

    const loginUser = async (email, password) => {
        loading.value = true
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            userData.value = {email: user.email, uid: user.uid}
            router.push({name: 'home'})
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false
        }
    }

    const logoutUser = async () => {
        try {
            await signOut (auth)
            userData.value = null
            router.push({name: 'login'})
        } catch (error) {
            console.log(error)
        }
    }

    const currentUser = () => {
        return new Promise ((resolve, reject) => {
            const unsuscribe = onAuthStateChanged (auth, (user) => {
                if (user) {
                    userData.value = {email: user.email, uid: user.uid}
                } else {
                    userData.value = null
                }
                resolve(user)
            }, error => reject(error))
            unsuscribe()

        })
    }



    return { registerUser, loginUser, logoutUser, loading, currentUser, userData, loadingSession }
})
