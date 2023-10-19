<template>
  <div class="container__body">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
	components: {
		Header,
    Main,
	},
};
</script>

<style lang="scss"></style>