<template>
    <div class="main-container">
        <div class="leader-board-container">
            <div class="leader-board-container__white">
                <h1 class="leader-board-container__white__h1">LEADER BOARD</h1>
                <div class="leader-board-container__white__profile">
                    <div class="text-container">
                        <div class="leader-board-container__white__profile__img">
                            <img src="/images/default.webp" alt="profile picture of top leader">
                        </div>
                        <div class="leader-board-container__white__profile__text">
                            <div>
                                <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                <span class="leader-board-container__white__profile__text__small">Just a little bio about Name and Surname</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board-container__white__profile__tally">
                        <div class="leader-board-container__white__profile__tally__holder">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_DQoMUI.json"
                                           background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                           loop autoplay>
                            </lottie-player>
                        </div>
                        <div class="leader-board-container__white__profile__tally__total">
                            1515
                        </div>
                    </div>
                </div>
            </div>
            <div class="leader-board-container__pink"></div>
        </div>
        <div class="leader-board">
            <div @click="flipCard(0)" id="0">
                <div class="leader-board__item">
                    <div class="text-container">
                        <div class="leader-board-container__white__profile__img">
                            <img src="/images/default.webp" alt="profile picture of top leader">
                        </div>
                        <div class="leader-board-container__white__profile__text">
                            <div>
                                <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                <span class="leader-board-container__white__profile__text__small">Just a little bio about Name and Surname</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board-container__white__profile__tally">
                        <div class="leader-board-container__white__profile__tally__holder">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_DQoMUI.json"
                                           background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                           loop autoplay>
                            </lottie-player>
                        </div>
                        <div class="leader-board-container__white__profile__tally__total">
                            1515
                        </div>
                    </div>
                    <div class="leader-board__item__left-line"></div>
                </div>
                <div class="leader-board__item-back">
                    <div class="leader-board__item-back__top">
                        <div class="text-container">
                            <div class="leader-board-container__white__profile__img">
                                <img src="/images/default.webp" alt="profile picture of top leader">
                            </div>
                            <div class="leader-board-container__white__profile__text">
                                <div>
                                    <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                    <span class="leader-board-container__white__profile__text__small">
                                    Just a little bio about Name and Surname Maybe a bit more than just an intro to tell
                                    us a bit more about name and surname and his profile. Just a little bio about Name and
                                    Surname Maybe a bit more than
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="points-box">
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_WIrARb.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    loop
                                    autoplay
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_jhEt7A.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets1.lottiefiles.com/private_files/lf30_lDqjSK.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board__item-back__bottom">
                        <div>
                            <a target="_blank" href="#">https://Iwill.openInAnewTab.com/this-is-just-a-placeholder</a>
                        </div>
                    </div>

                    <div class="leader-board__item__left-line"></div>
                </div>
            </div>
            <div @click="flipCard(1)" id="1">
                <div class="leader-board__item">
                    <div class="text-container">
                        <div class="leader-board-container__white__profile__img">
                            <img src="/images/default.webp" alt="profile picture of top leader">
                        </div>
                        <div class="leader-board-container__white__profile__text">
                            <div>
                                <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                <span class="leader-board-container__white__profile__text__small">Just a little bio about Name and Surname</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board-container__white__profile__tally">
                        <div class="leader-board-container__white__profile__tally__holder">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_DQoMUI.json"
                                           background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                           loop autoplay>
                            </lottie-player>
                        </div>
                        <div class="leader-board-container__white__profile__tally__total">
                            1515
                        </div>
                    </div>
                    <div class="leader-board__item__left-line"></div>
                </div>
                <div class="leader-board__item-back">
                    <div class="leader-board__item-back__top">
                        <div class="text-container">
                            <div class="leader-board-container__white__profile__img">
                                <img src="/images/default.webp" alt="profile picture of top leader">
                            </div>
                            <div class="leader-board-container__white__profile__text">
                                <div>
                                    <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                    <span class="leader-board-container__white__profile__text__small">
                                    Just a little bio about Name and Surname Maybe a bit more than just an intro to tell
                                    us a bit more about name and surname and his profile. Just a little bio about Name and
                                    Surname Maybe a bit more than
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="points-box">
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_WIrARb.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    loop
                                    autoplay
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_jhEt7A.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets1.lottiefiles.com/private_files/lf30_lDqjSK.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board__item-back__bottom">
                        <div>
                            <a target="_blank" href="#">https://Iwill.openInAnewTab.com/this-is-just-a-placeholder</a>
                        </div>
                    </div>

                    <div class="leader-board__item__left-line"></div>
                </div>
            </div>
            <div @click="flipCard(2)" id="2">
                <div class="leader-board__item">
                    <div class="text-container">
                        <div class="leader-board-container__white__profile__img">
                            <img src="/images/default.webp" alt="profile picture of top leader">
                        </div>
                        <div class="leader-board-container__white__profile__text">
                            <div>
                                <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                <span class="leader-board-container__white__profile__text__small">Just a little bio about Name and Surname</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board-container__white__profile__tally">
                        <div class="leader-board-container__white__profile__tally__holder">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_DQoMUI.json"
                                           background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                           loop autoplay>
                            </lottie-player>
                        </div>
                        <div class="leader-board-container__white__profile__tally__total">
                            1515
                        </div>
                    </div>
                    <div class="leader-board__item__left-line"></div>
                </div>
                <div class="leader-board__item-back">
                    <div class="leader-board__item-back__top">
                        <div class="text-container">
                            <div class="leader-board-container__white__profile__img">
                                <img src="/images/default.webp" alt="profile picture of top leader">
                            </div>
                            <div class="leader-board-container__white__profile__text">
                                <div>
                                    <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                    <span class="leader-board-container__white__profile__text__small">
                                    Just a little bio about Name and Surname Maybe a bit more than just an intro to tell
                                    us a bit more about name and surname and his profile. Just a little bio about Name and
                                    Surname Maybe a bit more than
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="points-box">
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_WIrARb.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    loop
                                    autoplay
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_jhEt7A.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets1.lottiefiles.com/private_files/lf30_lDqjSK.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board__item-back__bottom">
                        <div>
                            <a target="_blank" href="#">https://Iwill.openInAnewTab.com/this-is-just-a-placeholder</a>
                        </div>
                    </div>

                    <div class="leader-board__item__left-line"></div>
                </div>
            </div>
            <div @click="flipCard(3)" id="3">
                <div class="leader-board__item">
                    <div class="text-container">
                        <div class="leader-board-container__white__profile__img">
                            <img src="/images/default.webp" alt="profile picture of top leader">
                        </div>
                        <div class="leader-board-container__white__profile__text">
                            <div>
                                <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                <span class="leader-board-container__white__profile__text__small">Just a little bio about Name and Surname</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board-container__white__profile__tally">
                        <div class="leader-board-container__white__profile__tally__holder">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_DQoMUI.json"
                                           background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                           loop autoplay>
                            </lottie-player>
                        </div>
                        <div class="leader-board-container__white__profile__tally__total">
                            1515
                        </div>
                    </div>
                    <div class="leader-board__item__left-line"></div>
                </div>
                <div class="leader-board__item-back">
                    <div class="leader-board__item-back__top">
                        <div class="text-container">
                            <div class="leader-board-container__white__profile__img">
                                <img src="/images/default.webp" alt="profile picture of top leader">
                            </div>
                            <div class="leader-board-container__white__profile__text">
                                <div>
                                    <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                    <span class="leader-board-container__white__profile__text__small">
                                    Just a little bio about Name and Surname Maybe a bit more than just an intro to tell
                                    us a bit more about name and surname and his profile. Just a little bio about Name and
                                    Surname Maybe a bit more than
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="points-box">
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_WIrARb.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    loop
                                    autoplay
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_jhEt7A.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets1.lottiefiles.com/private_files/lf30_lDqjSK.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board__item-back__bottom">
                        <div>
                            <a target="_blank" href="#">https://Iwill.openInAnewTab.com/this-is-just-a-placeholder</a>
                        </div>
                    </div>

                    <div class="leader-board__item__left-line"></div>
                </div>
            </div>
            <div @click="flipCard(4)" id="4">
                <div class="leader-board__item">
                    <div class="text-container">
                        <div class="leader-board-container__white__profile__img">
                            <img src="/images/default.webp" alt="profile picture of top leader">
                        </div>
                        <div class="leader-board-container__white__profile__text">
                            <div>
                                <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                <span class="leader-board-container__white__profile__text__small">Just a little bio about Name and Surname</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board-container__white__profile__tally">
                        <div class="leader-board-container__white__profile__tally__holder">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_DQoMUI.json"
                                           background="transparent"  speed="1"  style="width: 100px; height: 100px;"
                                           loop autoplay>
                            </lottie-player>
                        </div>
                        <div class="leader-board-container__white__profile__tally__total">
                            1515
                        </div>
                    </div>
                    <div class="leader-board__item__left-line"></div>
                </div>
                <div class="leader-board__item-back">
                    <div class="leader-board__item-back__top">
                        <div class="text-container">
                            <div class="leader-board-container__white__profile__img">
                                <img src="/images/default.webp" alt="profile picture of top leader">
                            </div>
                            <div class="leader-board-container__white__profile__text">
                                <div>
                                    <span class="leader-board-container__white__profile__text__big">Name Surname</span><br>
                                    <span class="leader-board-container__white__profile__text__small">
                                    Just a little bio about Name and Surname Maybe a bit more than just an intro to tell
                                    us a bit more about name and surname and his profile. Just a little bio about Name and
                                    Surname Maybe a bit more than
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="points-box">
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_WIrARb.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    loop
                                    autoplay
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_jhEt7A.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                            <div class="points-box__item">
                                <lottie-player
                                    class="lottie__bottom" src="https://assets1.lottiefiles.com/private_files/lf30_lDqjSK.json"
                                    background="transparent"
                                    speed="1"
                                    style="width: 25px; height: 25px;"
                                    autoplay
                                    loop
                                ></lottie-player>
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                    <div class="leader-board__item-back__bottom">
                        <div>
                            <a target="_blank" href="#">https://Iwill.openInAnewTab.com/this-is-just-a-placeholder</a>
                        </div>
                    </div>

                    <div class="leader-board__item__left-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeaderBoard",
        methods: {
            flipCard(id) {
                let item = document.getElementById(id);

                if (!item.classList.contains('flippit')) {
                    item.classList.add('flippit');

                    setTimeout(() => {
                        item.getElementsByClassName('leader-board__item')[0].style.opacity = '0'
                    }, 150);
                    setTimeout(() => {
                        item.getElementsByClassName('leader-board__item')[0].style.display = 'none'
                        item.getElementsByClassName('leader-board__item-back')[0].style.display = 'block'
                        item.getElementsByClassName('leader-board__item-back')[0].style.opacity = '1'
                    }, 300);
                }else {
                    item.classList.remove('flippit');

                    setTimeout(() => {
                        item.getElementsByClassName('leader-board__item-back')[0].style.opacity = '0'
                    }, 300);
                    setTimeout(() => {
                        item.getElementsByClassName('leader-board__item-back')[0].style.display = 'none'
                        item.getElementsByClassName('leader-board__item')[0].style.display = 'flex'
                        item.getElementsByClassName('leader-board__item')[0].style.opacity = '1'
                    }, 300);
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .points-box {
        &__item {
            display: flex;

            span {
                font-size: 18px;
                display: block;
                margin-left: 20px;
            }
        }
    }

    .flippit {
        .leader-board__item {
            transform: rotateX(-100deg);
        }
        .leader-board__item-back {
            transform: rotateX(0deg);
        }
    }
    .leader-board__item-back {
        display: none;
        opacity: 0;
        transform: rotateX(-100deg);
        margin: 5px auto;
        overflow-x: hidden;
        transition: all 0.4s;
        border-radius: 15px;
        position: relative;
        box-shadow: 4px 1px 18px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        background: #FFFFFF;
        padding: 20px;
        width: 100%;

        &:hover {
            .leader-board__item__left-line {
                display: block;
            }
        }

        &__top {
            display: flex;
            justify-content: space-between;
        }
        &__bottom {
            width: 100%;
            height: 30px;
            margin: 20px auto 0;
            padding: 2px;
            border-radius: 5px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(190deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(190deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            div {
                border-radius: 5px;
                display: flex;
                background: #f6f6f6;
                width: 100%;
                height: 100%;
                padding: 0 20px;
            }
        }
    }
    .text-container {
        display: flex;
    }
    .main-container {
        width: 100%;
        margin: auto;
    }
    .leader-board-container {
        width: 100%;
        max-width: 992px;
        margin: auto;
        position: relative;
        height: 240px;

        &__white {
            background: #FFFFFF;
            padding: 20px;
            position: absolute;
            right: 0;
            top: 0;
            width: 95%;
            height: 200px;
            z-index: 2;
            border-radius: 15px;
            box-shadow: 4px 1px 18px rgba(0, 0, 0, 0.1);

            &__h1 {
                display: block;
                font-size: 28px;
                font-family: 'Fredoka One', cursive;
            }

            &__profile {
                display: flex;
                justify-content: space-between;
                padding-top: 20px;

                &__img {
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    border-radius: 50%;

                    img {
                        width: 100%;
                    }
                }

                &__text {
                    margin-left: 30px;
                    font-family: "Open Sans";
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    max-width: 600px;

                    &__big {
                        font-family: Lato;
                        color: #000;
                        font-size: 24px;
                    }
                    &__small {
                        font-size: 18px;
                    }
                }

                &__tally {
                    position: relative;
                    width: 100px;

                    &__holder {
                        position: absolute;
                        z-index: 1;
                    }

                    &__total {
                        z-index: 2;
                        font-family: Lato;
                        display: block;
                        margin: 30px 22px;
                        justify-content: center;
                        display: flex;
                        flex-direction: column;
                        font-size: 25px;
                    }
                }

            }
        }

        &__pink {
            z-index: 1;
            border-radius: 15px;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 95%;
            height: 205px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(190deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(190deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
    }
    .leader-board {
        max-width: 992px;
        margin: 50px auto;
        width: 100%;

        &__item {
            cursor: pointer;
            background: #FFFFFF;
            padding: 20px;
            width: 100%;
            border-radius: 15px;
            position: relative;
            box-shadow: 4px 1px 18px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            margin: 5px auto;
            overflow-x: hidden;
            transition: all 0.2s;

            &__left-line {
                display: none;
                height: 100%;
                width: 8px;
                background: #f857a6; /* fallback for old browsers */
                background: -webkit-linear-gradient(190deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(190deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                border-radius: 15px 0 0 15px;
            }

            &:hover {
                .leader-board__item__left-line {
                    display: block;
                }
            }
        }
    }
</style>
