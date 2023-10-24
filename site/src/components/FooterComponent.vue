<template>
    <footer class="footer">
        <div class="container-center footer_flex">
            <div class="footer__el">
                <a :href=link>
                    <img :src=linkLogo alt="LOGO">
                </a>
                <div class="footer__el-row">
                    <a :href=icon.link v-for="(icon) in footerIcon" :key="index" class="footer__el-link">
                        <img :src=icon.icon alt="icon">
                    </a>
                </div>
            </div>
            <nav class="footer__el">
                <a :href=link class="footer__el__text" v-for="(page) in footerPages" :key="index">{{ page.page }}</a>
            </nav>
            <div class="footer__el">
                <p v-for="(data) in contactData" :key="index" class="footer__el__text">{{ data }}</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            linkLogo: require("@/assets/image/Logo.svg"),
            link: "#",
            footerText: 'It is a long established fact that a reader will be distracted lookings.',
            footerIcon: {
                linkedIcon: {
                    link: "#",
                    icon: require("@/assets/image/linked.svg"),
                },
                TwitterIcon: {
                    link: "#",
                    icon: require("@/assets/image/twitter.svg"),
                },
            },
            footerPages: {
                firsPage: {
                    page: 'Pages',
                    link: "#",
                },
                secondPage: {
                    page: 'Home',
                    link: "#",
                },
                thirdPage: {
                    page: 'Project',
                    link: "#",
                },
                fourPage: {
                    page: 'Blog',
                    link: "#",
                },
            },
            contactData: ['Contact','55 East Birchwood Ave. Brooklyn, New York 11201','contact@interno.com' , '(123) 456 - 7890'],
            
            
        }
    }
}
</script>

<style lang="sass" scoped>
</style>