<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import { CHECK_AUTH } from "@/store/actions.type";

export default {
  name: "App",
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch(CHECK_AUTH);
  }
};
</script>