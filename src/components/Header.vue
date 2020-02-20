<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <div style="display: inline-block">
      <router-link to="/login">login</router-link> |
      <router-link to="/register">Register</router-link>
    </div> |
    <div style="display: inline-block">
      <a href="" v-on:click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";

export default {
    name: "Header",
    methods: {
        logout(ev) {
            ev.preventDefault();
            this.$store.dispatch(LOGOUT)
        }
    }
};
</script>