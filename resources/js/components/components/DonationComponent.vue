<template>
    <div class="main-donation">
        <div class="donation-comp">
            <div class="donation-comp__left">
                <h3 class="donation-comp__left__h3">Mark Price</h3>

                <lottie-player
                    class="lottie__bottom" src="https://assets1.lottiefiles.com/packages/lf20_EjTEyN.json"
                    background="transparent"
                    speed="1"
                    style="width: 250px; height: 250px;"
                    autoplay
                    loop
                ></lottie-player>
            </div>
            <div class="donation-comp__content">
                <p>Content creators spend hours crafting their content. Give some appreciation and help support them.</p>
                <p>If you liked them, leave a like, buy a coffee or sponsor a video. <br> <b>Give Thanks to <em>THEM</em></b>.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DonationComponent"
    }
</script>

<style scoped lang="scss">
    .main-donation {
        max-width: 1200px;
        margin: auto;
    }
    .donation-comp {
        display: flex;

        &__left {
            border-radius: 15px 0 0 15px;
            width: 50%;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(190deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(190deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            padding: 40px;

            &__h3 {
                color: #FFFFFF;
                font-family: Lato;
                font-size: 32px;
            }
            &__white {
                background: #FFFFFF;
                width: 150px;
                height: 150px;
                overflow: hidden;
                border-radius: 50%;
                margin: auto;

                img {
                    width: 100%;
                }
            }
        }

        &__content {
            max-width: 600px;
            font-family: "Nunito", sans-serif;
            font-size: 18px;
            color: #212529;
            padding: 20px 40px;
        }
    }
</style>
