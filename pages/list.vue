<script setup lang="ts">
const listRegistrasi = ref([]);
const loadData = async () => {
  let response = await useCustomFetch(
    `api/invitations/by-event/36`,
    "get",
    {},
    true
  );
  listRegistrasi.value = response.data.value.data;
};

loadData();
</script>

<template>
  <NuxtLayout name="blank">
    <div class="max-w-[500px] mx-auto py-5 px-5">
      <div class="relative overflow-x-auto">
        <div class="w-full">
          <a href="/">
            <button
              type="button"
              class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Kembali Ke Form
            </button>
          </a>
        </div>
        <div class="my-5 text-lg text-center">Daftar Registrasi Sementara</div>
        <table class="w-full text-sm text-left rtl:text-right text-slate-100">
          <thead class="text-xs text-slate-900 uppercase bg-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Nama</th>
              <th scope="col" class="px-6 py-3">Kehadiran</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b border-gray-500 bg-gray-800"
              v-for="(item, index) in listRegistrasi"
              :key="index"
            >
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ item?.contact_name }}</td>
              <td class="px-6 py-4">
                {{ JSON.parse(item.detail)[0].detail.kehadiran }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>
