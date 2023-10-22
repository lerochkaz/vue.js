<template>
    <div :elData=elData class="el">
        <div class="el_flex">
            <img :src=elData.url alt="image element" class="el__img">
            <div class="el_flex-row">
                <div>  
                    <h3 class="el__h3">{{ elData.h3 }}</h3>
                    <p class="el__p">{{ elData.p }}</p>  
                </div>
                <a :href=elData.link class="el__link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                        <path d="M23.771 32.9527L29.7139 26.267L23.771 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props: {
    elData: Object
},
}
</script>

<style lang="scss" scoped>
</style>