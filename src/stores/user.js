import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig.js';


export const useUserStore = defineStore('userStore', () => {

    const userData = ref({});
    const router = useRouter();

    const loadingUser = ref(false);
    const loadingSession = ref(true);


    const registerUser = async (email, password) => {
        loadingUser.value = true;
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            userData.value = {
                email: user.email,
                uid: user.uid
            };
            router.push('/');

        } catch (error) {
            console.log(error);
        } finally {
            loadingUser.value = false;
        }
    }

    const loginUser = async (email, password) => {
        loadingUser.value = true;
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            userData.value = {
                email: user.email,
                uid: user.uid
            };
            router.push('/');
        } catch (error) {
            console.log(error);

        } finally {
            loadingUser.value = false;
        }
    }

    // usuario que esta activo



    // logaut

    const logoutUser = async () => {
        try {
            await signOut(auth);
            userData.value = null;

            router.push('/login');
        } catch (error) {
            console.log(error);
        }
    }


    const currentUser = () => {
        return new Promise((resolve, reject) => {
            const unSuscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    userData.value = {
                        email: user.email,
                        uid: user.uid
                    };
                }
                else {
                    userData.value = null;
                }
                resolve(user);
            }, (e) => reject(e));

            unSuscribe();
        });
    }






    return {
        userData,
        registerUser,
        loginUser,
        logoutUser,
        currentUser,
        loadingUser,
        loadingSession,
    }

});

