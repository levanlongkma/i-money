import { ref } from "vue";
import { projectAuth } from "@/config/firebase";

const error = ref(null);
const isPending = ref(false);

async function sigup(infoUser) {
    isPending.value = true;

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(infoUser.email, infoUser.password);

        if (!res) throw new Error("Create failed");

        res.user.updateProfile({
            displayName: infoUser.fullname
        })

        return res;

    } catch (e) {
        error.value = e.message;
    } finally {
        isPending.value = false;
    }
}

export function useSighUp() {
    return { error, isPending, sigup };
}