<template>
  <NuxtLayout name="blank">
    <div class="mx-auto px-7 py-5 mt-10 main-content">
      <Spinner v-if="isLoading" />
      <div class="flex items-center justify-center mb-5">
        <img
          src="/public/caaip/banner-GENE51S.png"
          class="w-[300px]"
          alt="image-kemenhub"
        />
      </div>
      <div class="flex items-center justify-center">
        <img
          src="/public/caaip/caaip-logo.jpg"
          alt="image-kemenhub"
          class="logo-instansi"
        />
        <img
          src="/public/caaip/genesis-logo.jpg"
          alt="image-kemenhub"
          class="logo-instansi"
        />
      </div>
      <div class="container bg-slate-800 p-5 rounded-2xl mt-10">
        <div class="text-2xl mt-2 mb-5 text-center font-bold">
          Form Registrasi
        </div>
        <FormKit
          type="form"
          id="registration-example"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Register"
          @submit="submitHandler"
          :actions="false"
          #default="{ value }"
        >
          <FormKit
            type="text"
            name="name"
            label="Nama Lengkap"
            autocomplete="off"
            placeholder="Masukkan nama lengkap anda"
            validation="required"
          />
          <FormKit
            type="text"
            name="nrp"
            label="NRP"
            autocomplete="off"
            placeholder="Masukkan NRP anda"
          />
          <FormKit
            type="email"
            label="E-mail"
            name="email"
            autocomplete="off"
            placeholder="xxx@gmail.com"
            validation="required"
          />
          <div class="grid grid-cols-1">
            <div
              class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 text-slate-100 formkit-label"
            >
              Konfirmasi Kehadiran
            </div>
            <div class="grid grid-cols-1">
              <v-select
                value="kehadiran"
                label="label"
                name="value"
                v-model="kehadiran"
                placeholder="Kehadiran"
                :options="listKehadiran"
                class="rounded rounded-md mb-4 select-custom"
              ></v-select>
            </div>
          </div>
          <div class="w-full mb-2">Jumlah Kehadiran</div>
          <div class="grid grid-cols-3 gap-5">
            <div class="w-full">
              <div
                class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 text-slate-100 formkit-label"
              >
                Dewasa > 10 Tahun
              </div>
              <div class="grid grid-cols-1">
                <v-select
                  value="value"
                  label="label"
                  name="dewasa"
                  v-model="dewasa"
                  placeholder="Dewasa"
                  :options="listJumlahKehadiran"
                  class="rounded rounded-md mb-4 select-custom"
                ></v-select>
              </div>
            </div>
            <div class="w-full">
              <div
                class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 text-slate-100 formkit-label"
              >
                Anak (2-10 Tahun)
              </div>
              <div class="grid grid-cols-1">
                <v-select
                  value="value"
                  label="label"
                  name="anak"
                  v-model="anak"
                  placeholder="Anak"
                  :options="listJumlahKehadiran"
                  class="rounded rounded-md mb-4 select-custom"
                ></v-select>
              </div>
            </div>
            <div class="w-full">
              <div
                class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 text-slate-100 formkit-label"
              >
                Bayi < 2 Tahun
              </div>
              <div class="grid grid-cols-1">
                <v-select
                  value="value"
                  label="label"
                  name="bayi"
                  v-model="bayi"
                  placeholder="bayi"
                  :options="listJumlahKehadiran"
                  class="rounded rounded-md mb-4 select-custom"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div
              class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 text-slate-100 formkit-label"
            >
              Nomor Whatsapp
            </div>
            <div class="grid grid-cols-1 gap-3">
              <v-select
                value="phone_code"
                label="phone_name"
                name="phone_code"
                v-model="phone_code"
                placeholder="Phone Code"
                :options="listPhoneCode"
                class="rounded rounded-md mb-4 select-custom"
              ></v-select>
              <FormKit
                type="tel"
                name="phone"
                autocomplete="off"
                placeholder="Input your phone number"
                validation-visibility="dirty"
                validation="required"
              />
            </div>
          </div>
          <FormKit type="submit" label="Register" />
          <div class="text-slate-100 text-sm text-center w-full">
            &copy 2025 Telanusa
          </div>
        </FormKit>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Spinner from "~/components/spinner";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import { toast } from "vue3-toastify";
import Swal from "sweetalert2";
import "@/assets/css/mmw24.css";

const isLoading = ref(false);
const router = useRouter();
const eventDetail = ref({});
const phone_code = ref("");
const listPhoneCode = ref([]);
const url = useRequestURL();
const kehadiran = ref("");
const dewasa = ref({ value: 0, label: 0 });
const anak = ref({ value: 0, label: 0 });
const bayi = ref({ value: 0, label: 0 });

const listKehadiran = [
  { value: "Hadir", label: "Hadir" },
  { value: "Tidak Hadir", label: "Tidak Hadir" },
  { value: "Mungkin Hadir", label: "Mungkin Hadir" },
];

const listJumlahKehadiran = [
  { value: 0, label: 0 },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
];

const loadData = async () => {
  let response = await useCustomFetch(
    `api/event/domain/${url.host}`,
    "get",
    {},
    true
  );
  eventDetail.value = response.data.value.data;
};

const loadListPhoneCode = async () => {
  let response = await useCustomFetch(
    `api/region/detail/search/country`,
    "get",
    {},
    true
  );
  listPhoneCode.value = response.data.value.data;
};

loadData();
loadListPhoneCode();

const submitHandler = async (formData) => {
  let timerInterval;
  isLoading.value = true;
  let payload = { ...formData };
  let payloadDetail = {
    nrp: formData.nrp,
    kehadiran: kehadiran.value.value,
    dewasa: String(dewasa.value.value),
    anak: String(anak.value.value),
    bayi: String(bayi.value.value),
  };
  delete payload.nrp;
  delete payload.dewasa;
  delete payload.anak;
  delete payload.bayi;
  payload.phone_code = phone_code.value.Phonecode;
  payload.detail = payloadDetail;
  payload.event_id = 36;
  setTimeout(async () => {
    let response = await useCustomFetch(
      "api/contact/register-invitation",
      "post",
      payload,
      true
    );
    setTimeout(() => {
      if (response.data.value.status == false) {
        let message = response.data.value.message;
        isLoading.value = false;
        const joinedString = message.join(" ");
        toast.error(joinedString);
      } else {
        Swal.fire({
          title: "Success",
          html: "Thankyou for your registration, we will send message to your Whatsapp number",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        });
        isLoading.value = false;
        router.push("/landing");
      }
    }, 1000);
  }, 500);
};

useHead({
  title: "GENE51S 17th",
  meta: [{ name: "description", content: "Ulang Tahun GENE51S 17th" }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style>
.banner-image {
  width: 100%;
  object-fit: cover;
  height: auto;
}
.bg-slate-800 {
  background-color: rgb(120 0 0) !important;
}
</style>
