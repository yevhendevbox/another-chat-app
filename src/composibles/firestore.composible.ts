import { type Ref, ref, onUnmounted, computed } from 'vue';
import { collection, addDoc } from "firebase/firestore";
// import { db } from '@/composibles/auth.composible';

// export const useDbCollection = async () => {
//   try {
//     const docRef = await addDoc(collection(db, 'messages'), {

//     });
//   } catch (error) {

//   }
// };
