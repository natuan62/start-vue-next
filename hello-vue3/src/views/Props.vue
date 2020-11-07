<template>
  <div>
    <p>1. Props view</p>
    <child-1 :title="tit"/>
  </div>
</template>

<script>
import Child1 from "../components/Props/Child1.vue";
export default {
  components: {
    "child-1": Child1,
  },
  setup() {
    const tit = '12121212';
    return {
        tit
    };
  },
};
</script>
