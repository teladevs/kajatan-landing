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
      <!-- <qrcode-vue v-if="qrUrl" :value="qrUrl" :size="260" level="M" />
      <div v-else class="text-slate-400">Menunggu data...</div>
      <div v-if="qrUrl" class="mt-4 text-slate-600 text-xl font-semibold">
        <span v-if="remaining > 0">QR expires in {{ formattedRemaining }}</span>
        <span v-else class="text-red-500">QR has expired</span>
      </div> -->
      <div class="text-slate-400">Event has already expired</div>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from "qrcode.vue";
import { io } from "socket.io-client";

const config = useRuntimeConfig();
const qrUrl = ref("");
const expiresAt = ref(0);
const now = ref(Date.now());

const EVENT_NAME = "request_link";

let socket = null;
let timer = null;

const remaining = computed(() =>
  Math.max(0, Math.floor((expiresAt.value - now.value) / 1000)),
);

const formattedRemaining = computed(() => {
  const minutes = String(Math.floor(remaining.value / 60)).padStart(2, "0");
  const seconds = String(remaining.value % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
});

onMounted(() => {
  const wsUrl = config.public.wsUrl;
  if (!wsUrl) return;

  socket = io(wsUrl);

  socket.emit(EVENT_NAME);

  socket.on(EVENT_NAME, (payload) => {
    if (payload) {
      qrUrl.value = payload.link;
      expiresAt.value = payload.expiresAt;
      now.value = Date.now();
    }
  });

  timer = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onBeforeUnmount(() => {
  socket?.disconnect();
  clearInterval(timer);
});
</script>
