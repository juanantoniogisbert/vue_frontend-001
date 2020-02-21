<template>
  <div>
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <h1>{{ hotel.name }}</h1>
    <h3>{{ hotel.stars }} *</h3>
    <h3>{{ hotel.location }}</h3>
  </div>
</template>

<script>
import { HOTEL_DETAILS } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "HotelDet",
  mounted() {
    this.$store.dispatch(HOTEL_DETAILS, this.$route.params.id);
  },
  computed: {
    ...mapGetters(["hotel"])
  }
};
</script>