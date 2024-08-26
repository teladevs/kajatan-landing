<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from "vue";
import { useRequestURL } from "#app";

const url = useRequestURL();
const loadComponent = ref<any>(null);

const componentName = computed(() => {
  switch (url.host) {
    case "mmw24.kajatan.telanusa.id":
      return "mmw24";
    case "siepncatar.kajatan.telanusa.id":
      return "sipencatar";
    default:
      return "mmw24";
  }
});

watch(
  componentName,
  async () => {
    loadComponent.value = defineAsyncComponent({
      loader: () => import(`@/components/${componentName.value}/landing.vue`),
      loadingComponent: () => import("@/components/spinner.vue"),
      errorComponent: () => import("@/components/error.vue"),
      delay: 200,
      timeout: 30000,
    });
  },
  { immediate: true }
);
</script>

<template>
  <component :is="loadComponent" />
</template>
