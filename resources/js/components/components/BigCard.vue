<template>
    <div class="main-card">
        <div class="main-card__container">
            <div class="main-card__container__top">
                <h3 class="main-card__container__top__h3">
                    <slot name="main-heading"></slot>
                </h3>
                <div class="main-card__container__top__lottie">
                    <slot name="lottie"></slot>
                </div>
                <span class="main-card__container__top__r">
                    R
                </span>
                <span class="main-card__container__top__amount">
                    <slot name="amount"></slot>
                </span>
                <br>
                <span class="main-card__container__top__sub">
                    per year
                </span>
                <br>
                <span class="main-card__container__top__features">
                    Features
                </span>
                <div v-for="item in features">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span class="feature-text">{{ item }}</span>
                </div>
            </div>
            <router-link class="main-card__container__bottom" :to="link" >Select</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BigCard",
        props: {
            features: Array,
            link: String
        }
    }
</script>

<style scoped lang="scss">

    .main-card {
        width: 300px;
        height: 600px;
        background: #f857a6; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        &__container {
            width: 100%;
            height: 100%;
            border-radius: 0 50px;
            padding: 20px;
            background: #FFFFFF;

            &__top {
                &__h3 {
                    font-size: 24px;
                    color: #000000;
                }
                &__lottie {
                    display: block;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    height: 130px;
                }
                &__r {
                    font-size: 22px;
                    color: #000000;
                }
                &__amount {
                    font-size: 40px;
                    color: #000000;
                }
                &__sub {
                    font-size: 18px;
                }
                &__features {
                    margin: 15px 0;
                    font-size: 22px;
                    display: block;
                    color: #000000;
                    font-family: Lato;
                }
                .fa-check {
                    color: #2fa360;
                }
                .feature-text {
                    font-size: 20px;
                    margin-left: 10px;
                    font-family: "Open Sans";
                    color: #212529;
                }
            }

            &__bottom {
                margin: 20px auto;
                padding: 10px;
                border-radius: 10px;
                display: block;
                text-align: center;
                font-size: 24px;
                text-decoration: none;
                color: white;
                background: #f857a6; /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


                &:hover {
                    font-size: 24px;
                    text-decoration: none;
                    color: white;
                    box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                }
            }
        }
    }
</style>
