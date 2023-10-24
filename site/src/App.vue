<template>
  <div class="container__body">
    <HeaderComponent />
    <Main />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import Main from './components/Main.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
	components: {
		HeaderComponent,
    Main,
    FooterComponent,
	},
};
</script>

<style lang="scss"></style>