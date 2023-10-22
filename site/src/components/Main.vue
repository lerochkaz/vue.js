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
    <section class="section">
        <div class="container-center section_flex">
            <CardComponent v-for="(card) in cardData" :key="index" :cardData=card />
        </div>
    </section>
    <div class="advantage">
        <div class="container-center advantage__flex">
            <AdvantageComponent v-for="(advantageEl) in advantageData" :key="index" :advantageData=advantageEl />
        </div>
    </div>
    <TitleComponent :titlesData=titlesData.titleSecond />
    <div class="elEl">
        <div class="container-center elEl_flex">
            <div v-for="(el) in elData" :key="index" :elData=el>
                <ElementComponent :elData=el />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonDark from './ButtonDark.vue';
import TitleComponent from './TitleComponent.vue';
import CardComponent from './CardComponent.vue';
import AdvantageComponent from './AdvantageComponent.vue';
import ElementComponent from './ElementComponent.vue';

export default {
    components: {
		ButtonDark,
        TitleComponent,
        CardComponent,
        AdvantageComponent,
        ElementComponent,
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
            },
            cardData: {
                cardFirst: {
                    url: require("@/assets/image/card-1.jpg"),
                    h3: "Modern Kitchan",
                    h4: "Decor / Artchitecture",
                    link: "#"
                },
                cardSecond: {
                    url: require("@/assets/image/card-2.jpg"),
                    h3: "Modern Kitchan",
                    h4: "Decor / Artchitecture",
                    link: "#"
                },
                cardThird: {
                    url: require("@/assets/image/card-3.jpg"),
                    h3: "Modern Kitchan",
                    h4: "Decor / Artchitecture",
                    link: "#"
                },
                cardFourth: {
                    url: require("@/assets/image/card-4.jpg"),
                    h3: "Modern Kitchan",
                    h4: "Decor / Artchitecture",
                    link: "#"
                },
            },
            advantageData: {
                advantageFirst: {
                    count: 12,
                    advantage: "Years Of Experiance",
                },
                advantageSecond: {
                    count: 85,
                    advantage: "Success Project",
                },
                advantageTird: {
                    count: 15,
                    advantage: "Active Project",
                },
                advantageFourth: {
                    count: 95,
                    advantage: "Happy Customers",
                },
            },
            elData: {
                elFirst: {
                    el: "Kitchan Design",
                    url: require("@/assets/image/el-1.jpg"),
                    h3: "Let’s Get Solution For Building Construction Work",
                    p: "26 December,2022",
                    link: "#"
                },
                elSecond: {
                    el: "Living Design",
                    url: require("@/assets/image/el-2.jpg"),
                    h3: "Low Cost Latest Invented Interior Designing Ideas.",
                    p: "22 December,2022",
                    link: "#"
                },
                elThird: {
                    el: "Interior Design",
                    url: require("@/assets/image/el-3.jpg"),
                    h3: "Best For Any Office & Business Interior Solution",
                    p: "25 December,2022",
                    link: "#"
                },
            },
        }
    }
}
</script>

<style lang="sass" scoped>
</style>