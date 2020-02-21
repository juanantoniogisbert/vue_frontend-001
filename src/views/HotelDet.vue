<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <h1>{{ $route.params.location }}</h1>
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
    }
</script>