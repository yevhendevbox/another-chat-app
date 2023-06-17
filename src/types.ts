import { type User } from 'firebase/auth';
import { type Ref, ref } from 'vue';

export interface MessageInterface {
  id: number,
  content: string,
  isMyMessage: boolean,
}

export const localUser: Ref<User | null> = ref(null);