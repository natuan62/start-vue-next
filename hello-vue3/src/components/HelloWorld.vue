<template>
  <div>
    <h1>{{ message }}</h1>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    modelValue: String,
  },
  data(props) {
    const message = computed(() => props.msg);
    onUpdated(() => {
      console.log("props.modelValue", props.modelValue);
      console.log('message', message);
    });
    return {
      message,
    };
  },
};
</script>
