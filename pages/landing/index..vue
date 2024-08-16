<template>
  <div>
    Landing By {{ route?.params?.code }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: eventDetail } = await useAsyncData('photos', () => {
  if (route?.params?.code) {
    return $fetch(`https://api.kajatan.com/api/event/slug/${route.params.code}`)
  }
  return Promise.resolve(null)
})

useHead({
  title: eventDetail?.value?.data?.name ?? 'Default Title',
  meta: [
    { name: 'description', content: 'Landing Page Sesuai Code.' }
  ],
})
</script>
