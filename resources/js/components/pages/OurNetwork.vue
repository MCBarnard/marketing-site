<template>
    <div class="main-container-parent">
        <PageIntro>
            <template v-slot:small-heading>FIND THE HOTTEST TRENDING</template>
            <template v-slot:main-heading>The mighty TrendBoard</template>
            <template v-slot:sub-heading>Find the best and greatest, narrow down and get cracking.</template>
        </PageIntro>
        <div class="cat-piece">
            <lottie-player
                class="cat" src="https://assets2.lottiefiles.com/packages/lf20_OT15QW.json"
                background="transparent"
                speed="1"
                style="width: 250px; height: 250px;"
                loop
                autoplay
            ></lottie-player>
        </div>
        <LeaderBoard />
        <div class="main-container-parent__oval1 icons"></div>
        <div class="main-container-parent__oval2 icons"></div>
        <div class="main-container-parent__oval3 icons"></div>
        <div class="main-container-parent__oval4 icons"></div>
        <div class="main-container-parent__oval5 icons"></div>
        <div class="main-container-parent__oval6 icons"></div>
    </div>
</template>

<script>
    import PageIntro from "../components/PageIntro";
    import LeaderBoard from "../components/LeaderBoard";

    export default {
        name: "OurNetwork",
        components: {
            LeaderBoard,
            PageIntro
        }
    }
</script>

<style scoped lang="scss">
    .cat-piece {
        max-width: 992px;
        margin: auto;
        display: flex;
        flex-direction: row-reverse;
        position: relative;

        .cat {
            position: absolute;
            right: -82px;
            z-index: 3;
            top: -178px;
        }
    }
    .main-container-parent {
        position: relative;
        overflow-x: hidden;
        width: 100%;

        .icons {
            position: absolute;
            border-radius: 50%;
            z-index: -1;
        }

        &__oval1 {
            width: 350px;
            height: 350px;
            top: 400px;
            right: -150px;
            background: #f6f6f6;
        }

        &__oval2 {
            width: 80px;
            height: 80px;
            top: 400px;
            right: 100px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(-45deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(-45deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        &__oval3 {
            width: 500px;
            height: 500px;
            top: 400px;
            left: 300px;
            background: #f6f6f6;
        }

        &__oval4 {
            width: 40px;
            height: 40px;
            top: 800px;
            right: 250px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(-45deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(-45deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        &__oval5 {
            width: 300px;
            height: 300px;
            top: 800px;
            left: -150px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(60deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(60deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        &__oval6 {
            width: 30px;
            height: 30px;
            top: 400px;
            left: 50px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(60deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(60deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
    }
</style>
