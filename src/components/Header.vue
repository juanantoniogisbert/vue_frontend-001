<template>
  <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/register">Register</router-link>|
    <a href v-on:click="logout">Logout</a>
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
			this.$router.replace('/');
		}
	}
};
</script>