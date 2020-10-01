<template>
    <div class="main-wrapper">
        <div class="main-wrapper__inner">
            <div class="main-wrapper__inner__lr-box">
                <span class="main-wrapper__inner__lr-box__small">
                    <slot name="small-heading"></slot>
                </span>
                <span class="main-wrapper__inner__lr-box__big">
                    <slot name="main-heading"></slot>
                </span>

                <p>
                    <slot name="content"></slot>
                </p>
                <div class="line-break-div"></div>
                <router-link :to="link">
                    <slot name="link-text"></slot>
                </router-link>
            </div>
        </div>
        <div class="icons pink-icon oval1"></div>
        <div class="icons pink-icon oval2"></div>
        <div class="icons pink-icon oval3"></div>
        <div class="icons grey-icon oval4"></div>
        <div class="icons grey-icon oval5"></div>
    </div>
</template>

<script>
    export default {
        name: "IntroContent",
        props: {
            link: String
        }
    }
</script>

<style scoped lang="scss">
.icons {
    position: absolute;
    border-radius: 50%;
    z-index: 1;
}
.grey-icon {
    background: lightgrey;
}
.pink-icon {
    background: #f857a6; /* fallback for old browsers */
    background: -webkit-linear-gradient(45deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(45deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.oval1 {
    top: -200px;
    right: -200px;
    width: 400px;
    height: 400px;
}
.oval2 {
    bottom: -350px;
    left: -350px;
    width: 700px;
    height: 700px;
}
.oval3 {
    bottom: -25px;
    right: 50px;
    width: 250px;
    height: 250px;
}
.oval4 {
    top: -25px;
    left: 50px;
    width: 250px;
    height: 250px;
    z-index: 0;
}

.main-wrapper {
    background-color: #FEE140;
    overflow: hidden;
    background-image: linear-gradient(347deg, #FEE140 -32%, #FA709A 100%);
    padding: 40px;
    height: 409px;
    position: relative;

    &__inner {
        max-width: 1200px;
        margin: auto;
        z-index: 2;

        &__lr-box {
            display: flex;
            flex-direction: column;
            text-align: center;

            span {
                display: block;
                color: #FFFFFF;
            }

            &__small {
                font-size: 18px;
                margin: auto;
                max-width: 600px;
                font-family: "Nunito", sans-serif;
            }

            &__big {
                font-size: 50px;
                font-family: Lato;
                max-width: 600px;
                margin: auto;
            }
            p {
                font-size: 24px;
                font-family: "Open Sans";
                max-width: 600px;
                color: #FFFFFF;
                margin: auto;
            }

            .line-break-div {
                width: 80px;
                height: 5px;
                border-radius: 5px;
                background: #FFFFFF;
                margin: 30px auto;
            }

            a {
                padding: 5px 20px;
                display: block;
                max-width: 250px;
                border-radius: 20px;
                color: #FFFFFF;
                font-size: 18px;
                border: 2px solid rgba(255, 255, 255, 0.97);
                font-family: "Open Sans";
                text-decoration: none;
                background: #f857a6;
                background: linear-gradient(to right, #ff5858, #f857a6);
                box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.1);
                margin: auto;

                &:hover {
                    text-decoration: none;
                    color: #FFFFFF;
                    box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                    border: 2px solid #FFFFFF;
                }
            }
        }
    }
}
</style>
