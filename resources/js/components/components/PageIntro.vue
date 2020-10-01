<template>
    <div class="wrapper">
        <div class="main-content-wrapper">
            <div class="header-container">
                <div class="header-container__line"></div>
                <h3><slot name="small-heading"></slot></h3>
                <div class="header-container__line"></div>
            </div>
            <h1><slot name="main-heading"></slot></h1>
            <span><slot name="sub-heading"></slot></span>
            <div class="underline-content-div"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageIntro"
    }
</script>

<style scoped lang="scss">
    .wrapper {
        margin-top: 100px;
    }
    .main-content-wrapper {
        text-align: center;

        h1 {
            font-family: Lato;
            font-size: 48px;
            display: block;
            max-width: 600px;
            text-align: center;
            margin: auto;
        }
    }
    .header-container {
        display: flex;
        justify-content: center;

        &__line {
            width: 25px;
            height: 3px;
            margin: 9px 30px;
            border-radius: 5px;
            background: #f857a6;
            background: linear-gradient(to right, #ff5858, #f857a6);
        }
        h3 {
            font-family: "Open Sans";
            font-size: 18px;
            display: block;
            max-width: 300px;
            text-align: center;
        }
    }
    .underline-content-div {
        height: 5px;
        width: 200px;
        margin: 30px auto;
        border-radius: 5px;
        background: #f857a6;
        background: linear-gradient(to right, #ff5858, #f857a6);
    }
</style>
