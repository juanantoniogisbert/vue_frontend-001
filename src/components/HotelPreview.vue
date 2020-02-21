<template>
  <b-card>
    <b-card :title="hotel.name">
      <b-card-text></b-card-text>
      <b-card-text>A second paragraph of text in the card.</b-card-text>
      <router-link :to="{ name: 'HotelDet', params: { id: this.hotel.id }}" class="btn btn-outline-light ">More </router-link>
    </b-card>
  </b-card>
</template>

<script>
export default {
  name: "HotelPreview",
  props: {
    hotel: { type: Object }
  }
};
</script>
