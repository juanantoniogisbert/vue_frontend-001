<template>
  <div>
	<HotelPreview v-for="(hotel, index) in hotels" :hotel="hotel" :key="index"/>
  </div>
</template>

<script>
import HotelPreview from "@/components/HotelPreview"

export default {
	name: "HotelList",
	components: {
		HotelPreview
	},
	props: {
		hotels: Array
	}
};
</script>