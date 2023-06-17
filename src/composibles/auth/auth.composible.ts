import { localUser } from '@/types';
import { type Ref, ref } from 'vue';

export const useAuth = () => {
  const isLoading = ref(false);
  const hasFailed = ref(false);
  const localError: Ref<unknown> = ref(null);

  return {
    isLoading,
    hasFailed,
    user: localUser,
    error: localError,
  }
}
