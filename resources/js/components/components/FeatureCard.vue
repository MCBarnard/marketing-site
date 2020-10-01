<template>
    <div class="feature-card">
        <div class="feature-card__left">
            <slot name="left-slot"></slot>
        </div>
        <div class="feature-card__right">
            <span class="feature-card__right__small"><slot name="small-deco"></slot></span>
            <span class="feature-card__right__big"><slot name="main-heading"></slot></span>
            <span class="feature-card__right__body"><slot name="body"></slot></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeatureCard"
    }
</script>

<style scoped lang="scss">
    .feature-card {
        display: flex;
        max-width: 420px;
        min-height: 150px;

        &__left {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        &__right {
            text-align: left;
            padding: 30px 10px 10px 10px;

            span {
                display: block;
            }

            &__small {
                color: #f857a6;
                font-size: 16px;
                font-weight: 600;
            }
            &__big {
                font-family: Lato;
                color: #000;
                font-size: 24px;
            }
            &__body {
                font-size: 18px;
                color: #212529;
            }
        }
    }
</style>
