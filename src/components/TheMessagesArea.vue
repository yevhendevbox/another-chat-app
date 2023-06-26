<template>
  <main class="bg-lime-100 flex-grow">
    <div class="flex flex-col h-full">
      <div class="p-4 flex-grow">
        <h2 class="text-lg font-semibold mb-4">Повідомлення</h2>
        <ul v-if="messages.length > 0">
          <li v-for="message in messages" :key="message.id" class="py-2">
            <div :class="[message.isMyMessage ? 'justify-end' : 'justify-start', 'flex']">
              <div :class="[message.isMyMessage ? myMessageClasses : otherMessageClasses, commonClasses]">
                <p class="text-sm leading-normal break-words">{{ message.text }}</p>
              </div>
            </div>
          </li>
        </ul>
        <p v-else class="text-center">No messages!</p>
      </div>
      <input
        class="p-2 border border-gray-300 rounded sticky bottom-[56px]"
        v-model="newMessageText"
        @keydown.enter="sendMessage"
        placeholder="Type a message..."
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useMessagesStore } from '../stores/messages.ts';

const messagesStore = useMessagesStore();
const messages = ref([]);
const newMessageText = ref('');

const commonClasses = ref('max-w-[70%] rounded-full p-2');
const myMessageClasses = ref('bg-blue-500 text-white');
const otherMessageClasses = ref('bg-gray-200 text-gray-800');

onMounted(async () => {
  await messagesStore.setMessagesList();
  messages.value = messagesStore.messages;
});

const sendMessage = () => {
  const newMessage = {
    id: messages.value.length + 1,
    text: newMessageText.value,
    isMyMessage: true,
  };

  messagesStore.addMessage(newMessage);
  nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  newMessageText.value = '';
};
</script>

<style lang="scss" scoped></style>
