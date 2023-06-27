import { GoogleAuthProvider, type User, getAuth, signInWithPopup } from 'firebase/auth';
import { type Ref, ref, onUnmounted, computed } from 'vue';
import { firebaseApp } from '@/firebaseReference';

firebaseApp();
const auth = getAuth();

export const useAuth = () => {
  const user: Ref<User | null> = ref(null);
  const unsubscribe = auth.onAuthStateChanged(_user => user.value = _user);

  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider).then((result) => {
        if (isLogin.value) {
          return;
        }
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        // const token = credentials?.accessToken;
        user.value = result.user;
      }).catch((error) => {
        throw new Error(error);
      });
    });
  };

  const signOut = () => auth.signOut();

  return {
    isLogin,
    user,
    signIn,
    signOut,
  }
}
