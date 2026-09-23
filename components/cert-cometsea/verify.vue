<template>
  <div class="flex items-center justify-center min-h-screen text-slate-500">
    Verifying...
  </div>
</template>

<script setup>
const route = useRoute();
const REDIRECT_URL = "https://cert-cometsea2026.telanusa.com/";
const tokenCookie = useCookie("cert_cometsea_token", {
  path: "/",
  sameSite: "lax",
  secure: true,
  expires: new Date(Date.now() + 15 * 60 * 1000),
});

onMounted(() => {
  const token = route.query.token;
  if (token) {
    tokenCookie.value = token;
  }
  window.location.href = REDIRECT_URL;
});
</script>
