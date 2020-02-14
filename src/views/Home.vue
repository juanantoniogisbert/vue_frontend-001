<template>
  <div class="home">
    <p>{{hotel}}</p>
  </div>
</template>

<script>
import { HOTEL_LIST } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},

  mounted() {
    // console.log(this.$store.dispatch(HOTEL_LIST, this.hotel));
    this.$store.dispatch(HOTEL_LIST);
  },
  computed: {
    ...mapGetters(["hotels"]),
    hotel(){
      var hoteles = this.$store.state.hotel.hotels;
      console.log(typeof hoteles);
      return hoteles;
    }
  }
};
</script>
