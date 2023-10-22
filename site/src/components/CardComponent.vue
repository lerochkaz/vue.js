<template>
    <div class="card">
        <img :src=cardData.url alt="img card" class="card__img">
        <div class="card_flex">
            <div>
                <h4 class="card__h3">{{ cardData.h3 }}</h4>
                <h5 class="card__h4">{{ cardData.h4 }}</h5>
            </div>
            <a :href=cardData.link>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" class="card__link">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardData: Object
    },
}
</script>

<style lang="sass" scoped>
</style>