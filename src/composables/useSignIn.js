import { ref, reactive } from "vue";
import { projectAuth } from "@/config/firebase";

const error = ref(null);
const isPending = ref(false);

async function login(userData) {
    isPending.value = true;

    try {
        const res = await projectAuth.signInWithEmailAndPassword(userData.email, userData.password);

        console.log(res);

        if (!res) throw new Error("Login failed");

        res.user.updateProfile({
            displayName: infoUser.fullname
        })

        return res;

    } catch (e) {
        console.log(e.code);
        error.value = e.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignIn() {
    return { error, isPending, login };
}