<template>
  <div id="app">
	<h1>adasd</h1>
	<Theheader />
    <router-view />
  </div>
</template>

<script>

import { Theheader } from '@/components/Theheader'

export default {
	name: 'App',
	components: {
		Theheader
	}
};
</script>