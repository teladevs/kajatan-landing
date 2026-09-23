<template>
  <div class="flex items-center justify-center min-h-screen text-slate-500">
    Verifying...
  </div>
</template>

<script setup>
const route = useRoute();
const REDIRECT_URL = "https://cert-cometsea2026.telanusa.com/";

onMounted(async () => {
  const token = route.query.token;
  try {
    if (token) {
      await $fetch("/api/cert/verify", { query: { token } });
    }
  } finally {
    window.location.href = REDIRECT_URL;
  }
});
</script>
