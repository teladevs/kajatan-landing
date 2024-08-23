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
      return "default";
  }
});

loadComponent.value = defineAsyncComponent(
  () => import(`@/components/${componentName.value}/index.vue`)
);
</script>

<template>
  <component :is="loadComponent" />
</template>
