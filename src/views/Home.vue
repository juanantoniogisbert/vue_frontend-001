<template>
  <div class="home">
    <HotelList :hotels="hotel"/>
  </div>
</template>

<script>
import { HOTEL_LIST } from "@/store/actions.type";
import { mapGetters } from "vuex";
import HotelList from "@/components/HotelList";

export default {
  name: "Home",
  components: {
    HotelList
  },

  mounted() {
    // console.log(this.$store.dispatch(HOTEL_LIST, this.hotel));
    this.$store.dispatch(HOTEL_LIST);
  },
  computed: {
    ...mapGetters(["hotels"]),
    hotel() {
      var hoteles = this.$store.state.hotel.hotels;
      console.log(typeof hoteles);
      return hoteles;
    }
  }
};
</script>
