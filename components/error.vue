<template>
  <NuxtLayout name="default">
    <section id="404-section">
      <div class="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
        <div class="global-container">
          <div class="mx-auto max-w-[954px] text-center">
            <h1
              class="bg-[url(../img/th-1/404-text-image.jpg)] bg-contain bg-clip-text bg-center bg-no-repeat text-[150px] text-transparent sm:text-[220px] lg:text-[300px] xl:text-[350px]"
            >
              404
            </h1>
            <h2 class="mb-[50px]">The page you are looking for cannot be found</h2>
            <a
              href="/"
              class="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
              >Go to homepage</a
            >
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>
