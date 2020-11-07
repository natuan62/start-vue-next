<template>
  <div>
    <p>1. computed</p>
    <HelloWorld :msg="message" v-model="searchText" />
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const message = "msg";
    const searchText = ref("123");
    return { message, searchText };
  },
};
</script>
