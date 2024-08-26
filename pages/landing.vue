<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from "vue";
import { useRequestURL } from "#app";

const url = useRequestURL();
const loadComponent = ref<any>(null);

const componentName = computed(() => {
  switch (url.host) {
    case "mmw24.kajatan.telanusa.id":
      return "mmw24";
    case "pencatar.kajatan.telanusa.id":
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
      loadingComponent: () => import("@/components/spinner.vue"), // optional loading component
      errorComponent: () => import("@/components/Error.vue"), // optional error component
      delay: 200, // optional delay before showing loading component
      timeout: 30000, // optional timeout for loading the component
    });
  },
  { immediate: true }
);
</script>

<template>
  <component :is="loadComponent" />
</template>
