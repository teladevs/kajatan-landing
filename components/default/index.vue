<template>
  <div class="mx-auto px-7 py-5 mt-10">
    <div class="flex items-center justify-center">
      <img
        src="/cometsea/kemenhub-bpsdmp-stip-logo.png"
        alt="image-kemenhub"
        class="w-[150px]"
      />
    </div>
    <div class="flex justify-center items-center mt-3">
      <img
        src="/cometsea/cometsea-logo.png"
        alt="image-kemenhub"
        class="w-[150px]"
      />
    </div>
    <div class="mt-5 text-slate-800 text-2xl font-bold text-center">
      Scan For Certificate
    </div>
    <div class="mt-10 flex flex-col items-center justify-center">
      <qrcode-vue v-if="qrUrl" :value="qrUrl" :size="260" level="M" />
      <div v-else class="text-slate-400">Menunggu data...</div>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from "qrcode.vue";
import { io } from "socket.io-client";

const config = useRuntimeConfig();
const qrUrl = ref("");

const EVENT_NAME = "request_link";

let socket = null;

onMounted(() => {
  const wsUrl = config.public.wsUrl;
  if (!wsUrl) return;

  socket = io(wsUrl);

  socket.emit(EVENT_NAME);

  socket.on(EVENT_NAME, (payload) => {
    if (payload) qrUrl.value = payload.link;
    console.log(payload);
  });
});

onBeforeUnmount(() => {
  socket?.disconnect();
});
</script>
