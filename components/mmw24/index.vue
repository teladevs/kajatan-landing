<template>
  <NuxtLayout name="blank">
    <div class="mx-auto px-7 py-5 mt-10">
      <Spinner v-if="isLoading" />
      <div class="flex items-center justify-center mb-5">
        <img
          src="/images/logo/webasset-00-garuda.webp"
          alt="image-kemenhub"
          class="logo-instansi"
        />
      </div>
      <div class="flex items-center justify-center">
        <img
          src="/images/logo/webasset-01-kemenhub.webp"
          alt="image-kemenhub"
          class="logo-instansi"
        />
        <img
          src="/images/logo/logo-perhubungan.webp"
          alt="image-kemenhub"
          class="logo-instansi"
        />
        <img
          src="/images/logo/webasset-05-pip_semarang.webp"
          alt="image-kemenhub"
          class="logo-instansi"
        />
        <img
          src="/images/logo/logo-sby.webp"
          alt="image-kemenhub"
          class="logo-instansi"
        />
      </div>
      <div class="flex justify-center items-center mt-3">
        <img
          src="/images/logo/webasset-03-proprestasi.webp"
          alt="image-kemenhub"
          class="logo-prestasi"
        />
        <img
          src="/images/logo/webasset-04-gold_gen3.webp"
          alt="image-kemenhub"
          class="logo-prestasi"
        />
      </div>
      <div class="mt-5 text-slate-800 text-2xl font-bold text-center">
        Ministry of Transportation of the Republic of Indonesia
      </div>
      <div class="container bg-slate-800 p-5 rounded-2xl mt-10">
        <div class="text-2xl mt-5 mb-5 text-center font-bold">
          Visitor Registration Form
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
            label="Full Name"
            autocomplete="off"
            placeholder="Input your full name"
            validation="required"
          />
          <FormKit
            type="text"
            name="instansi"
            label="Company / Organization"
            autocomplete="off"
            placeholder="Input your company or organization"
            validation="required"
          />
          <FormKit
            type="email"
            label="E-mail"
            name="email"
            autocomplete="off"
            placeholder="xxx@gmail.com"
          />
          <div class="grid grid-cols-1">
            <div
              class="block text-neutral-700 text-sm font-bold !inline-flex mb-1 text-slate-100 formkit-label"
            >
              Phone Number
            </div>
            <div class="grid grid-cols-2 gap-3">
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
              />
            </div>
          </div>
          <FormKit type="submit" label="Register" />
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
const instansi = ref("");
const listPhoneCode = ref([]);
const url = useRequestURL();

const loadData = async () => {
  let response = await useCustomFetch(`api/event/domain/${url.host}`, "get", {}, true);
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
    organisasi: formData.instansi,
  };
  delete payload.instansi;
  payload.phone_code = phone_code.value.phone_code;
  payload.detail = payloadDetail;
  payload.event_id = eventDetail.value.id;
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
          html:
            "Thankyou for your registration, we will redirect you to information page about Ministry of Transportation of the Republic of Indonesia",
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
  title: "Ministry of Transportation of the Republic of Indonesia",
  meta: [{ name: "description", content: "Malaysia Maritime Week" }],
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
</style>
