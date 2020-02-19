<template>
  <div>
    <h1>Login</h1>
    <b-form @submit.prevent="onSubmit(email, password)">
      <b-form-group>
        <b-input id="email" autocomplete="off" v-model="email" placeholder="Email" />
        <b-input
          id="password"
          type="password"
          autocomplete="off"
          v-model="password"
          placeholder="Password"
        />
        <b-button type="submit" variant="outline-light" class="btn-block">Login</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type.js";
export default {
  name: "Login",
  data() {
    return {
      email: 'aa@aa.com',
      password: '12345678'
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store.dispatch(LOGIN, {email, password});
    }
  }
};
</script>