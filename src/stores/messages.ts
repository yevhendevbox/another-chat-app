import type { MessageInterface } from '@/types';
import { defineStore } from 'pinia';

export const useMessagesStore = defineStore('message', {
  state: () => ({
    messages: [] as Array<MessageInterface>,
  }),
  actions: {
    setMessagesList() {
      try {
        // TODO when endpoints will exist, create request to backend -> GET axios
        const staticMessages = [
          { id: 1, content: 'Привіт! Як справи?', isMyMessage: false },
          { id: 2, content: 'Все гаразд, дякую!', isMyMessage: true },
          { id: 3, content: 'А твої як?', isMyMessage: true },
          { id: 4, content: 'Краще всіх!!!', isMyMessage: false },
        ];

        this.messages = staticMessages;
      } catch (error) {
        console.log('Щось пішло не так!', error);
      }
    },

    addMessage(newMessage: MessageInterface) {
      if (newMessage.content.trim().length) {
        this.messages.push(newMessage);
      }
    },
  },
});
