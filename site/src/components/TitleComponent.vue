<template>
    <div class="title">
        <div class="container-center title_flex">  
             <h2 class="title__h2">{{ titlesData.h2 }}</h2>
             <h4 class="title__h4">{{ titlesData.h4 }}</h4>
         </div>
    </div>
</template>

<script>
export default {
    props: {
        titlesData: Object
    },
}
</script>

<style lang="sass" scoped>
</style>