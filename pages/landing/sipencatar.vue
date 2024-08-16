<script setup>
import { ref } from "vue";
import Modal from "../components/modal";
import { useRouter } from "vue-router";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import { school } from "../data/school";

const submitted = ref(false);
const openModal = ref(false);
const eventDetail = ref({});
const router = useRouter();
const school_from = ref("");

const loadData = async () => {
  let response = await useCustomFetch("api/event/slug/test-event", "get", {}, true);
  eventDetail.value = response?.data?.value?.data;
};

loadData();

const submitHandler = async (formData) => {
  let payload = formData;
  payload.event_id = eventDetail?.value?.id;
  payload.school_from = school_from.value.label;
  setTimeout(async () => {
    let response = await useCustomFetch(
      "api/contact/manual-invitation",
      "post",
      payload,
      true
    );
    router.push("/detail-" + response.data.value.data.uid);
  }, 1000);
  // submitted.value = true;
  // openModal.value = true;
};

const closeModal = () => {
  openModal.value = false;
};
</script>

<template>
  <Modal :open="openModal" @close-modal="closeModal" />
  <div class="grid grid-cols-12">
    <div class="right col-span-12 lg:col-span-6">
      <div class="form-registration">
        <div class="flex justify-center">
          <img
            src="/images/logo-sipencatar.png"
            alt="logo-sipencatar"
            class="logo-sipencatar"
          />
        </div>
        <div class="w-full text-center">
          <h1 class="text-4xl font-bold mb-5 mt-2">Sosialisasi SIPENCATAR 2024</h1>
          <h1 class="text-2xl font-medium mb-5">Form Registrasi</h1>
        </div>
        <FormKit
          type="form"
          id="registration-example"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Register"
          @submit="submitHandler"
          :actions="false"
        >
          <FormKit
            type="text"
            name="name"
            label="Nama"
            placeholder="Masukkan Nama"
            validation="required"
          />
          <div class="grid grid-cols-2 gap-5">
            <FormKit
              type="text"
              name="place_of_birth"
              label="Tempat Lahir"
              placeholder="Masukkan Tempat Lahir"
              validation="required"
            />
            <FormKit
              type="date"
              name="date_of_birth"
              value="1999-01-01"
              label="Tanggal Lahir"
              validation="required|date_before:2018-01-01"
              validation-visibility="live"
            />
          </div>
          <FormKit
            type="email"
            label="E-mail"
            name="email"
            validation="required|email"
            placeholder="xxx@gmail.com"
          />
          <FormKit
            type="tel"
            label="No Whatsapp"
            name="phone"
            placeholder="081217xxxxxx"
            validation-visibility="dirty"
          />
          <div>
            <label
              class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 formkit-label"
              for="input_4"
              >Asal Sekolah</label
            >
            <v-select
              value="label"
              label="label"
              name="school_from"
              v-model="school_from"
              placeholder="Pilih Asal Sekolah"
              :options="school"
              class="rounded rounded-md mb-4"
            ></v-select>
          </div>
          <FormKit
            name="profession"
            type="radio"
            label="Profesi Anda"
            :options="['Guru', 'Siswa']"
          />
          <FormKit type="submit" label="Daftar" />
        </FormKit>
      </div>
    </div>
    <div class="left col-span-12 lg:col-span-6">
      <img
        src="https://tlns-obj-assets.sgp1.cdn.digitaloceanspaces.com/kajatan-app-dev/kajatan-app-sipencatar2024.webp"
        alt="poster-sipencatar"
        class="image-brosur"
      />
    </div>
  </div>
</template>
<style>
.form-registration {
  padding: 30px 30px 30px 30px;
}
.logo-sipencatar {
  width: 300px;
  height: auto;
}
.vs__dropdown-toggle {
  padding: 7px;
  border-radius: 7px;
  --tw-border-opacity: 1;
  border-color: rgb(163 163 163 / 1);
  border-color: rgb(163 163 163 / var(--tw-border-opacity));
}
</style>
