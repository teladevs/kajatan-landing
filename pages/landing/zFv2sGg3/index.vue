<script setup>
import { ref } from "vue";
import Modal from "../components/modal";
import { useRouter } from "vue-router";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import { school } from "../data/school";
import { FormKitSchema } from "@formkit/vue";

const submitted = ref(false);
const openModal = ref(false);
const eventDetail = ref({});
const router = useRouter();
const school_from = ref("");
const formScheme = ref([]);
const formData = ref(null);

const loadData = async () => {
  let response = await useCustomFetch("api/event/slug/test-event", "get", {}, true);
  eventDetail.value = response?.data?.value?.data;
};

const loadForm = async () => {
  let responseForm = await useCustomFetch(
    "api/event-content/detail/25/form_register",
    "get",
    {},
    true
  );
  formScheme.value = JSON.parse(responseForm.data.value.data.value);
  console.log(formScheme.value);
};

loadData();
loadForm();

const submitHandler = async () => {
  let payload = formData.value;
  payload.event_id = eventDetail?.value?.id || 25;
  payload.school_from = school_from.value.label;
  console.log(payload);
  setTimeout(async () => {
    let response = await useCustomFetch(
      "api/contact/manual-invitation",
      "post",
      payload,
      true
    );
    router.push("/detail-" + response.data.value.data.uid);
  }, 1000);
};

const closeModal = () => {
  openModal.value = false;
};
</script>

<template>
  <div class="container">
    <FormKit type="form" v-model="formData" @submit="submitHandler">
      <FormKitSchema :schema="formScheme" />
    </FormKit>
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
.formkit-label {
  color: black !important;
}
</style>
