<template>
    <div class="wrapper">
        <div class="main-content-wrapper">
            <h1><slot name="main-heading"></slot></h1>
            <div class="underline-content-div"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageSubHeading"
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
    }
    .underline-content-div {
        height: 5px;
        width: 200px;
        margin: 10px auto;
        border-radius: 5px;
        background: #f857a6;
        background: linear-gradient(to right, #ff5858, #f857a6);
    }
</style>
