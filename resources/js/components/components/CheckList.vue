<template>
    <div class="main-wrapper">
        <div class="main-wrapper__inner">
            <div class="main-wrapper__inner__left">
                <div class="main-wrapper__inner__left__top">
                    <span>What we offer you</span>
                    <p>We provide the best tools and support system to help your online platform reach new heights.</p>
                </div>
                <div class="main-wrapper__inner__left__bottom">
                    <div class="main-wrapper__inner__left__bottom__row">
                        <div>
                            <lottie-player
                                class="lottie__bottom" src="https://assets6.lottiefiles.com/packages/lf20_bblvf1.json"
                                background="transparent"
                                speed="1"
                                style="width: 60px; height: 60px;"
                                autoplay
                                loop
                            ></lottie-player>
                        </div>
                        <div class="main-wrapper__inner__left__bottom__row__content">
                            <span>Grow your following!</span>
                            <p>We help you grow your following by doing this this and that.</p>
                        </div>
                    </div>
                    <div class="main-wrapper__inner__left__bottom__row">
                        <div>
                            <lottie-player
                                class="lottie__bottom" src="https://assets6.lottiefiles.com/packages/lf20_bblvf1.json"
                                background="transparent"
                                speed="1"
                                style="width: 60px; height: 60px;"
                                autoplay
                                loop
                            ></lottie-player>
                        </div>
                        <div class="main-wrapper__inner__left__bottom__row__content">
                            <span>Make real money!</span>
                            <p>Receiving donations from your following has never been easier. Send out your payment link and have people pay you instantly!</p>
                        </div>
                    </div>
                    <div class="main-wrapper__inner__left__bottom__row">
                        <div>
                            <lottie-player
                                class="lottie__bottom" src="https://assets6.lottiefiles.com/packages/lf20_bblvf1.json"
                                background="transparent"
                                speed="1"
                                style="width: 60px; height: 60px;"
                                autoplay
                                loop
                            ></lottie-player>
                        </div>
                        <div class="main-wrapper__inner__left__bottom__row__content">
                            <span>Grow your channel</span>
                            <p>Make use of our education section to enhance your channel and reach new users.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-wrapper__inner__right">
                <lottie-player
                    class="lottie__bottom" src="https://assets6.lottiefiles.com/packages/lf20_poznXg.json"
                    background="transparent"
                    speed="1"
                    style="width: 600px; height: 600px;"
                    autoplay
                    loop
                ></lottie-player>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckList"
    }
</script>

<style scoped lang="scss">
    .main-wrapper {
        width: 100%;

        &__inner {
            margin: auto;
            display: flex;
            max-width: 1200px;
            justify-content: space-between;

            &__left {
                &__top {
                    span {
                        font-size: 32px;
                        font-family: Lato;
                        color: #000000;
                    }

                    p {
                        font-size: 18px;
                        font-family: "Nunito", sans-serif;
                        max-width: 600px;
                    }
                }
                &__bottom {
                    margin-top: 70px;
                    &__row {
                        display: flex;

                        &__content {
                            font-size: 18px;
                            font-family: "Nunito", sans-serif;
                            margin-left: 20px;

                            span {
                                color: #000000;
                                font-weight: 700;
                                font-size: 22px;
                            }
                        }
                    }
                }
            }
            &__right {}
        }
    }
</style>
