import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { auth, db } from "@/firebaseConfig";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDatabaseStore = defineStore('database', () => {

    const documents = ref([])
    const loadingDocs = ref(false)

    const getUrls = async () => {

        if (documents.value.length !== 0) {
            return
        }

        loadingDocs.value = true

        try {
            const q = query(collection (db, "urls"), where("user", "==", auth.currentUser.uid) )
            const querySnapshot = await getDocs (q)
            querySnapshot.forEach(doc => {
                console.log(doc.id, doc.data());
                documents.value.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })

        } catch (error) {
            console.log(error);
        } finally {
            loadingDocs.value = false
        }
    }

    return { documents, loadingDocs, getUrls }
})
