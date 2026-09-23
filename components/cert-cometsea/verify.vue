<template>
  <div class="flex items-center justify-center min-h-screen text-slate-500">
    Verifying...
  </div>
</template>

<script setup>
import { io } from "socket.io-client";
import Swal from "sweetalert2";

const route = useRoute();
const REDIRECT_URL = "https://cert-cometsea2026.telanusa.com/";
const tokenCookie = useCookie("cert_cometsea_token", {
  path: "/",
  sameSite: "lax",
  secure: true,
  expires: new Date(Date.now() + 15 * 60 * 1000),
});

const config = useRuntimeConfig();

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
        Swal.fire({
          icon: "error",
          title: "Expired",
          text: "Token has expired",
        }).then((result) => {
          window.location.href = "https://qr.event.telanusa.com/";
        });
      }
    }
  });
});

onBeforeUnmount(() => {
  socket?.disconnect();
});
</script>
