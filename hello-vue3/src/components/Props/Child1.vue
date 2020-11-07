<template>
  <h1>child1 of props</h1>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    title: {
      type: String,
    },
  },
  setup(props, { emit }) {
    console.log("props", props);
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
