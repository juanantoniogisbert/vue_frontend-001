<template>
  <div class="home">

  </div>
</template>

<script>
import { HOTEL_LIST } from "@/store/actions.type";

export default {
  name: 'Home',
  components: {
  },

  async mounted() {
	console.log(await this.$store.dispatch(HOTEL_LIST));
  }
}
</script>
