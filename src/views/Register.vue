<template>
  <div>
    <h1>Register</h1>
    <b-form @submit.prevent="onSubmit(username, email, password)">
      <b-form-group>
        <b-input id="username" type="text" autocomplete="off" v-model="username" placeholder="Usuario"/>
        <b-input id="email" autocomplete="off" v-model="email" placeholder="Email" />
        <b-input id="password" type="password" autocomplete="off" v-model="password" placeholder="Password"/>
        <b-button type="submit" variant="outline-light" class="btn-block">Register</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { REGISTER } from "@/store/actions.type.js";
export default {
    name: "Register",
    data(){
        return{
            username: null,
            email: null,
            password: null
        }
    },
    methods: {
        async onSubmit(username, email, password) {
			try {
				await this.$store.dispatch(REGISTER, {username, email, password});
				this.$router.replace('/');
			} catch (error){
				alert(error);
			}
        }
    }
}
</script>