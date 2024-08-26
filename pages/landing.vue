<script setup lang="ts">
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

const nameComponent = "mmw24";

loadComponent.value = defineAsyncComponent(
  () => import(`@/components/${nameComponent}/landing.vue`)
);
</script>

<template>
  <component :is="loadComponent" />
</template>
