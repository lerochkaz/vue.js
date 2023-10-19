<template>
    <header class="header">
        <div class="container-center header_flex">
            <img :src=linkLogo alt="logo" class="header__link">
            <nav class="nav">
                <div v-for="link in headerLinks" :key="index" class="nav__element">
                    <h4 class="header-link">{{ link }}</h4>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            linkLogo: require("@/assets/image/Logo.svg"),
            headerLinks: ['Home','Project','Blog'],
        }
    }
}
</script>

<style lang="sass" scoped>
</style>