<template>
    <div class="main-wrapper">
        <div class="containing-wrapper">
            <div class="home-section">
                <div class="home-section__content">
                    <span>Simple Mass Marketing</span>
                    <h1>Welcome blah blah</h1>
                    <hr>
                    <p>
                        here we do this this and this a few times more this this and that too. here we
                        do this this and this a few times more this this and that too here we do this this
                        and this a few times more this this and that too
                    </p>
                    <br>
                    <span class="action-btn"><router-link to="/">Some Random Button</router-link></span>
                </div>
                <lottie-player
                    src="https://assets9.lottiefiles.com/packages/lf20_Ns4TLz.json"
                    background="transparent"  speed="1"  style="width: 450px; height: 450px;" loop autoplay></lottie-player>
            </div>

            <div class="additional-section mt-5">
    <!--            <lottie-player class="lottie__bottom" src="https://assets5.lottiefiles.com/datafiles/xT68L52Z1cEJ9qP/data.json" background="transparent"  speed="1"  style="width: 130px; height: 130px;" loop autoplay></lottie-player>-->
                <lottie-player
                    class="lottie__bottom" src="https://assets2.lottiefiles.com/datafiles/1KRzsAPsiE4XSe6/data.json"
                    background="transparent"
                    speed="1"
                    style="width: 130px; height: 130px;"
                    loop
                    autoplay
                ></lottie-player>
                <div class="additional-section__left">
                    <h1>Big and bold heading</h1>
                    <p>
                        This should be something regular users could use?
                    </p>
                </div>
                <div class="additional-section__right">
                    <div class="additional-section__right__inner">
                        <div class="additional-section__right__inner__top">
                            <input type="text" placeholder="Find a streamer">
                            <button>Find</button>
                        </div>
                        <div class="additional-section__right__inner__bottom">
                            <div>
                                <span class="white">person</span>
                                <span class="green">80 views</span>
                            </div>
                            <div>
                                <span class="white">person</span>
                                <span class="green">60 views</span>
                            </div>
                            <div>
                                <span class="white">person</span>
                                <span class="green">60 views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="icons grey-icon oval1"></div>
        <div class="icons pink-icon oval2"></div>
        <div class="icons grey-icon oval3"></div>
        <div class="icons pink-icon oval4"></div>
        <div class="icons pink-icon oval5"></div>
        <div class="icons grey-icon oval6"></div>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped lang="scss">
    .main-wrapper {
        width: 100%;
        overflow-x: hidden;
        position: relative;
        min-height: calc(100vh - 78px);
    }
    .icons {
        position: absolute;
        border-radius: 50%;
        z-index: -1;
    }
    .pink-icon {
        background: #f857a6; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .grey-icon {
        background: #f6f6f6;
    }

    .oval1 {
        top: 300px;
        right: -200px;
        width: 400px;
        height: 400px;
    }

    .oval2 {
        top: 150px;
        right: 200px;
        width: 40px;
        height: 40px;
    }

    .oval3 {
        top: 50px;
        left: -125px;
        width: 400px;
        height: 400px;
    }
    .oval4 {
        top: 530px;
        right: 75px;
        width: 150px;
        height: 150px;
    }
    .oval5 {
        bottom: 100px;
        left: -75px;
        width: 200px;
        height: 200px;
    }
    .additional-section {
        display: flex;
        justify-content: space-between;
        max-width: 1050px;
        margin: auto;
        position: relative;

        .lottie__bottom {
            position: absolute;
            left: -145px;
        }

        &__left {
            padding: 50px 50px 50px 0;
            h1 {
                font-family: Lato;
            }
            p {
                font-size: 18px;
            }
        }
        &__right {
            background: rgb(112, 92, 169);
            border-radius: 50px 0 50px 0;
            padding: 50px;

            &__inner {
                &__top {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    input {
                        width: 350px;
                        padding: 15px;
                        font-size: 18px;
                        font-family: "Nunito", sans-serif;
                        border: none;
                        outline: none!important;
                    }
                    button {
                        width: 200px;
                        font-size: 18px;
                        padding: 15px;
                        outline: none!important;
                        font-family: "Nunito", sans-serif;
                        background: rgb(75, 180, 133);
                        border: 1px solid rgb(75, 180, 133);
                        color: white;
                    }
                }

                &__bottom {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-evenly;

                    span {
                        font-family: "Nunito", sans-serif;
                        font-size: 18px;
                    }

                    .white {
                        color: #FFFFFF;
                    }
                    .green {
                        color: rgb(75, 180, 133);
                    }
                }
            }
        }
    }
    .containing-wrapper {
        max-width: 1200px;
        margin: auto;
    }
    .home-section{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;

        &__content {
            max-width: 600px;

            span {
                color: #f857a6;
                font-size: 16px;
                font-weight: 600;
            }
            .action-btn {

                a {
                    padding: 9px 12px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: #FFF;
                    background: #f857a6; /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.1);

                    &:hover {
                        text-decoration: none;
                        box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                    }
                }
            }
            h1 {
                font-family: Lato;
                font-size: 58px;
            }
            p {
                font-size: 18px;
            }
        }
    }
</style>
