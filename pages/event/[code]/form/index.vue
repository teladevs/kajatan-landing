<template>
  <div>Form By Code</div>
  <div>{{ router.currentRoute.value.params.code }}</div>
</template>
<script setup>
const router = useRouter();
console.log(router);
</script>
