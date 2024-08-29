<script setup lang="ts">
const url = useRequestURL();
const loadComponent = ref<any>(null);

const doLoadComponent = async (componentName: string) => {
  loadComponent.value = defineAsyncComponent(
    () => import(`@/components/${componentName}/index.vue`)
  );
};

const loadData = async () => {
  if (url.host === "kajatan.telanusa.id" || url.host === "localhost:3000") {
    console.log("arema");
    doLoadComponent("default");
  } else {
    let response = await useCustomFetch(`api/event/domain/${url.host}`, "get", {}, true);
    if (response.data.value.status) {
      console.log("arimi");
      doLoadComponent(response.data.value.data.config.value.name);
    } else {
      console.log("areme");
      loadComponent.value = defineAsyncComponent(() => import(`@/components/error.vue`));
    }
  }
};

loadData();
</script>

<template>
  <component :is="loadComponent" />
</template>
