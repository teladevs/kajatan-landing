<template>
  <NuxtLayout name="blank">
    <div class="mx-auto px-7 py-5 mt-10">
      <Spinner v-if="isLoading" />
      <div class="flex items-center justify-center">
        <img
          src="/cometsea/kemenhub-bpsdmp-stip-logo.png"
          alt="image-kemenhub"
          class="w-[150px]"
        />
      </div>
      <div class="flex justify-center items-center mt-3">
        <img
          src="/cometsea/cometsea-logo.png"
          alt="image-kemenhub"
          class="logo-prestasi"
        />
      </div>
      <div class="mt-5 text-slate-800 text-2xl font-bold text-center">
        The Conference in Maritime Education and Training in Southeast Asia 2026
      </div>
      <div class="mt-5 text-slate-800 text-xl text-center">
        Global Maritime Future: Innovation, Human Capital Development, Safety
        and Secure Ocean Governance
      </div>
      <div class="container bg-slate-800 p-5 rounded-2xl mt-10">
        <div class="text-2xl mt-5 mb-5 text-center font-bold">
          Registration For Certificate
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
            label="Company / Institution"
            autocomplete="off"
            placeholder="Input your company or institution"
            validation="required"
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
                validation="required"
              />
              <FormKit
                type="radio"
                name="role"
                label="What is your role at this event ?"
                :options="['Presenter', 'Participant']"
                validation="required"
                :classes="{ legend: '!text-slate-100' }"
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
import Swal from "sweetalert2";
import "@/assets/css/mmw24.css";

const tokenCookie = useCookie("cert_cometsea_token");
if (!tokenCookie.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

const isLoading = ref(false);
const router = useRouter();
const eventDetail = ref({});
const phone_code = ref("");
const instansi = ref("");
const listPhoneCode = ref([]);
const url = useRequestURL();

const loadData = async () => {
  let response = await useCustomFetch(
    `api/event/domain/${url.host}`,
    "get",
    {},
    true,
  );
  eventDetail.value = response.data.value.data;
};

const loadListPhoneCode = async () => {
  let response = await useCustomFetch(
    `api/region/detail/search/country`,
    "get",
    {},
    true,
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
      true,
    );
    setTimeout(() => {
      if (response.data.value.status == false) {
        let message = response.data.value.message;
        isLoading.value = false;
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: message,
        });
      } else {
        Swal.fire({
          title: "Success",
          html: "Thankyou for your registration, we will redirect you to information page about Cometsea 2026",
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
        window.location.href = "https://cometsea2026.stipindonesia.ac.id/";
      }
    }, 1000);
  }, 500);
};

useHead({
  title: "Cometsea 2026",
  meta: [{ name: "description", content: "Cometsea 2026" }],
  link: [{ rel: "icon", type: "image/x-icon", href: "/cometsea/favicon.ico" }],
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
