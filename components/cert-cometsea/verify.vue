<template>
  <Error404
    v-if="isExpired"
    title="QR Expired"
    description="Sorry, the QR session you scanned has expired"
  />
  <div
    v-else
    class="flex items-center justify-center min-h-screen text-slate-500"
  >
    Verifying...
  </div>
</template>

<script setup>
import { io } from "socket.io-client";

const route = useRoute();
const REDIRECT_URL = "https://cert-cometsea2026.telanusa.com/";
const tokenCookie = useCookie("cert_cometsea_token", {
  path: "/",
  sameSite: "lax",
  secure: true,
  expires: new Date(Date.now() + 15 * 60 * 1000),
});

const config = useRuntimeConfig();
const isExpired = ref(false);

const EVENT_NAME = "check_qr_status";

let socket = null;

onMounted(() => {
  const wsUrl = config.public.wsUrl;
  if (!wsUrl) return;

  const token = route.query.token;
  socket = io(wsUrl);

  socket.emit(EVENT_NAME, { token: token });

  socket.on(EVENT_NAME, (payload) => {
    if (payload) {
      if (payload.valid) {
        if (token) {
          tokenCookie.value = token;
          window.location.href = REDIRECT_URL;
        }
      } else {
        isExpired.value = true;
      }
    }
  });
});

onBeforeUnmount(() => {
  socket?.disconnect();
});
</script>
