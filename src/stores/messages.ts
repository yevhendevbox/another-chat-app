import { defineStore } from 'pinia';

export const useMessagesStore = defineStore('message', {
  state: () => ({
    messages: [] as { id: number; text: string; isMyMessage: boolean }[],
  }),
  actions: {
    setMessagesList() {
      try {
        // TODO when endpoints will exist, create request to backend -> GET axios
        const staticMessages = [
          { id: 1, text: 'Привіт! Як справи?', isMyMessage: false },
          { id: 2, text: 'Все гаразд, дякую!', isMyMessage: true },
          { id: 3, text: 'А твої як?', isMyMessage: true },
          { id: 4, text: 'Краще всіх!!!', isMyMessage: false },
        ];

        this.messages = staticMessages;
      } catch (error) {
        console.log('Щось пішло не так!', error);
      }
    },

    addMessage(newMessage: { id: number; text: string; isMyMessage: boolean }) {
      this.messages.push(newMessage);
    },
  },
});
