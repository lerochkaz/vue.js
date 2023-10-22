<template>
        <div :advantageData=advantageData class="advantage__card">
            <h2 class="advantage__big-h">{{ advantageData.count }}</h2>
            <h3 class="advantage__h3">{{ advantageData.advantage }}</h3>
        </div>
</template>

<script>
export default {
    props: {
        advantageData: Object
    },
}
</script>

<style lang="scss" scoped>
</style>