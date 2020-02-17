<template>
    <div>
        <h1>Register</h1>
        <div>
            <input
                type="text"
                v-model="username"
                placeholder="Username"
                autocomplete="off"/>
        <br/>
            <input
                type="email"
                v-model="email"
                placeholder="Email"
                autocomplete="off"/>
        <br/>
            <input
                type="password"
                v-model="password"
                placeholder="Password"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data(){
        return{
            username: null
        }
    },
    methods: {
        
    }
}
</script>