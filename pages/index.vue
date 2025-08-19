<script setup lang="ts">
const url = useRequestURL();
const loadComponent = ref<any>(null);

const doLoadComponent = async (componentName: string) => {
  loadComponent.value = defineAsyncComponent(
    () => import(`@/components/${componentName}/index.vue`)
  );
};

const loadData = async () => {
  if (url.host === "landing.kajatan.com" || url.host === "localhost:3000") {
    doLoadComponent("wisuda53poltekpelsby");
  } else {
    let response = await useCustomFetch(
      `api/event/domain/${url.host}`,
      "get",
      {},
      true
    );
    if (response.data.value.status) {
      var template = response.data.value.data.feature.value.landing_template;
      if (template == null || template == undefined) {
        template = response.data.value.data.config.value.name;
      }
      doLoadComponent(template);
    } else {
      loadComponent.value = defineAsyncComponent(
        () => import(`@/components/error.vue`)
      );
    }
  }
};

loadData();
</script>

<template>
  <component :is="loadComponent" />
</template>
