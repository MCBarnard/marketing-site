<template>
    <div class="wrapper">
        <p>
            <slot name="paragraph"></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ParagraphText"
    }
</script>

<style scoped lang="scss">
.wrapper {
    margin: auto;

    p {
        max-width: 950px;
        font-size: 24px;
        font-family: "Open Sans";
        color: #212529;
        margin: auto;
        text-align: center;
    }
}
</style>
