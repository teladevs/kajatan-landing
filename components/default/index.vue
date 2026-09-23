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
      The Conference in Maritime Education and Training in Southeast Asia 2026
    </div>
    <div class="mt-5 text-slate-800 text-xl text-center">
      Global Maritime Future: Innovation, Human Capital Development, Safety and
      Secure Ocean Governance
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

const parseMessage = (raw) => {
  if (typeof raw === "string") {
    try {
      const data = JSON.parse(raw);
      return data.url ?? data.qr ?? raw;
    } catch {
      return raw;
    }
  }
  if (raw && typeof raw === "object") {
    return raw.url ?? raw.qr ?? "";
  }
  return "";
};

onMounted(() => {
  const wsUrl = config.public.wsUrl;
  if (!wsUrl) return;

  socket = io(wsUrl, { transports: ["websocket"] });

  socket.on(EVENT_NAME, (payload) => {
    console.log("tes payload", payload);
    const value = parseMessage(payload);
    if (value) qrUrl.value = value.link;
  });
});

onBeforeUnmount(() => {
  socket?.disconnect();
});
</script>
