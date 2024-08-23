import { defineNuxtRouteMiddleware, navigateTo, useRequestHeaders } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    const headers = useRequestHeaders(['host']);
    const host = headers['host'];

    if (host === 'mmw24.kajatan.telanusa.id') {
      return navigateTo('/landing/mmw24', { replace: true });
    }
  } else {
    const host = window.location.host;

    if (host === 'mmw24.kajatan.telanusa.id') {
      return navigateTo('/landing/mmw24', { replace: true });
    }
  }
});
