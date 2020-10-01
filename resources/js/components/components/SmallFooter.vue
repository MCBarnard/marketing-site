<template>
    <div class="footer-section">
        <i>Powered by <span class="home-brand">IONRADE</span></i>
    </div>
</template>

<script>
    export default {
        name: "SmallFooter"
    }
</script>

<style scoped lang="scss">
    .footer-section {
        position: absolute;
        bottom: 1px;
        border-top: 1px solid lightgrey;
        width: 100%;
        background: #FFFFFF;
        padding: 30px 20px 0;
        font-family: 'Pacifico', cursive;
        color: grey;
        text-align: right;

        .home-brand {
            font-family: "Open Sans";
        }
    }
</style>
