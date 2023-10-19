<template>
    <div class="banner">
        <div class="container-center banner_flex">
            <img :src=linkBanner alt="banner" class="banner__img">
            <div class="banner__box_flex">
                <h1 class="banner__h1 padding-bottom">Let Your Home Be Unique</h1>
                <h3 class="banner__h2 padding-bottom">There are many variations of the passages of lorem Ipsum fromavailable, majority.</h3>
                <ButtonDark href=https://vk.com/ someText="Get Started"/>
            </div>
        </div>
    </div>
    <TitleComponent :titlesData=titlesData.tileFirst />
</template>

<script>
import ButtonDark from './ButtonDark.vue';
import TitleComponent from './TitleComponent.vue';

export default {
    components: {
		ButtonDark,
        TitleComponent,
    },
    data() {
        return {
            linkBanner: require("@/assets/image/Banner.jpg"),
            titlesData: {
                tileFirst : { 
                    h2: "Follow Our Projects",
                    h4: "It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
                },
                titleSecond : {
                    h2: "Articles & News", 
                    h4: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
                }
            }
        }
    }
}
</script>

<style lang="sass" scoped>
</style>