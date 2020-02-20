<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <div class="in-line">
      <router-link to="/login">login</router-link> |
      <router-link to="/register">Register</router-link>
    </div> |
    <div class="in-line">
      <a href="" v-on:click="logout">Logout</a>
    </div> | 
	<div class="in-line">
		<a href="" v-if="currentUser">{{currentUser.username}}</a>
	</div>
  </div>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
	name: "Header",
	methods: {
		logout(ev) {
			ev.preventDefault();
			this.$store.dispatch(LOGOUT)
		}
	},
	computed: {
		...mapGetters(["currentUser"])
	}
};
</script>