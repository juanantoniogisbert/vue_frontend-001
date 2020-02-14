<template>
  <b-card>
    <b-card :title="hotel.name">
      <b-card-text>
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
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
