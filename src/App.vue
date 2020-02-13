<template>
  <div id="app">
	<Theheader />
    <router-view />
  </div>
</template>

<script>

import Theheader  from '@/components/Theheader'

export default {
	name: 'App',
	components: {
		Theheader
	}
};
</script>