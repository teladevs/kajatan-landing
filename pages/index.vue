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
      return "defaultLanding";
  }
});

loadComponent.value = defineAsyncComponent(
  () => import(`@/components/${componentName.value}.vue`)
);

console.log("Component to load:", componentName.value);
</script>

<template>
  <!-- <p>URL is: {{ url }}</p>
  <p>Path is: {{ url.pathname }}</p> -->
  <component :is="loadComponent" />
</template>
