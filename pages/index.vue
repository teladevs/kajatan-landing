<script setup lang="ts">
const url = useRequestURL();
const loadComponent = ref<any>(null);

const doLoadComponent = async (componentName: string) => {
  loadComponent.value = defineAsyncComponent(
    () => import(`@/components/${componentName}/index.vue`)
  );
};

const loadData = async () => {
  let response = await useCustomFetch(
    `https://api-dev-new.kajatan.telanusa.id/api/event/domain/${url.host}`,
    "get",
    {},
    true
  );

  if (response.data.value.status) {
    doLoadComponent(response.data.value.data.config.value.name);
  } else {
    doLoadComponent("default");
  }
};

loadData();
</script>

<template>
  <component :is="loadComponent" />
</template>
