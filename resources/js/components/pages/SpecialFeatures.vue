<template>
    <div>
        <PageIntro>
            <template v-slot:small-heading>GET THE ABSOLUTE BEST</template>
            <template v-slot:main-heading>Our Special Features</template>
            <template v-slot:sub-heading>Join now to take full advantage of these packages!</template>
        </PageIntro>
    </div>
</template>

<script>
    import PageIntro from "../components/PageIntro";

    export default {
        name: "SpecialFeatures",
        components: {
            PageIntro
        }
    }
</script>

<style scoped lang="scss">

</style>
