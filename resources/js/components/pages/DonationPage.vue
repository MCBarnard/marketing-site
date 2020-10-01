<template>
    <div class="main-container-parent">

        <div class="donations-header-block">
            <div class="custom-intro">
                <h1 class="custom-intro__bold">Donation</h1>
                <h1 class="custom-intro__skinny">Methods</h1>
            </div>
        </div>
        <div class="donations-block">
            <div class="donations-block__left">
                <p>Content creators spend hours crafting their content. Give some appreciation and help support them.</p>
                <p>If you liked them, leave a like, buy a coffee or sponsor a video. <br> <b>Give Thanks to <em>THEM</em></b>.</p>

                <div class="donations-block__left__form">
                    <!--        ###### Names ######            -->
                    <div class="form-row form-spacing">
                        <div class="col">
                            <input name="first_name" type="text" class="form-control" placeholder="Your First name">
                        </div>
                        <div class="col">
                            <input name="last_name" type="text" class="form-control" placeholder="Your Last name">
                        </div>
                    </div>
                    <!--        ###### Email ######            -->
                    <div class="form-row form-spacing">
                        <div class="col">
                            <input name="email" type="email" class="form-control" placeholder="Your Email Address">
                        </div>
                    </div>
                    <!--        ###### Radios ######            -->
                    <label class="my-1 mr-2" for="payfast">Preference</label>
                    <br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="payment-method" id="payfast" value="payfast" checked>
                        <label class="form-check-label" for="payfast">
                            PayFast
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="payment-method" id="paypal" value="paypal">
                        <label class="form-check-label" for="paypal">
                            PayPal
                        </label>
                    </div>
                    <hr>
                    <!--        ###### Content Creator Section ######            -->
                    <div class="form-row form-spacing">
                        <div class="col">
                            <input name="personal_message" type="text" class="form-control" placeholder="Give them a personal message">
                        </div>
                        <div class="col">
                            <input name="content_creator_code" type="text" class="form-control" placeholder="Your Creator's FundMe code">
                        </div>
                    </div>
                    <!--        ###### Payment button ######            -->
                    <div class="form-row">
                        <div class="col btn-row">
                            <button id="payment-btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="donations-block__right">
                <img src="/images/pink-cc-removebg.png" alt="pink cards">
            </div>
        </div>
        <div class="icons pink-icon oval1"></div>
        <div class="icons pink-icon oval2"></div>
        <div class="icons pink-icon oval3"></div>
        <div class="icons grey-icon oval4"></div>
        <div class="icons grey-icon oval5"></div>
        <SmallFooter></SmallFooter>
    </div>
</template>

<script>
    import SmallFooter from "../components/SmallFooter";

    export default {
        name: "DonationPage",
        components: {
            SmallFooter
        }
    }
</script>

<style scoped lang="scss">
    .icons {
        position: absolute;
        border-radius: 50%;
        z-index: -1;
    }
    .grey-icon {
        background: #f6f6f6;
    }
    .pink-icon {
        background: #f857a6; /* fallback for old browsers */
        background: -webkit-linear-gradient(45deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(45deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .oval1 {
        width: 350px;
        height: 350px;
        top: 350px;
        left: -175px;
    }
    .oval2 {
        width: 20px;
        height: 20px;
        top: 150px;
        right: 175px;
    }
    .oval3 {
        width: 120px;
        height: 120px;
        top: 600px;
        right: 220px;
    }
    .oval4 {
        width: 400px;
        height: 400px;
        top: 200px;
        right: -150px;
    }
    .oval5 {
        width: 400px;
        height: 400px;
        top: 100px;
        left: -150px;
        z-index: -2;
    }
    .donations-header-block {
        max-width: 1200px;
        margin: 50px auto auto auto;
    }
    .donations-block {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: auto;

        &__left {
            max-width: 600px;

            p {
                font-family: "Nunito", sans-serif;
                font-size: 18px;
                color: #212529;
                padding: 0 40px 0 0;
            }

            &__form {
                background: #fad5db;
                padding: 20px;
                border-radius: 20px;
            }
            .btn-row {
                justify-content: flex-end;
                display: flex;
            }
            #payment-btn {
                padding: 9px 12px;
                border-radius: 8px;
                font-weight: 600;
                display: block;
                width: 200px;
                color: #FFF;
                background: #f857a6;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.1);
                border: none;

                &:hover {
                    text-decoration: none;
                    box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                }
            }
        }

        &__right {
            display: flex;
            justify-content: center;
            flex-direction: column;

            img {
                transform: translateX(70px) scale(1.2);
            }
        }
    }
    .custom-intro {
        position: relative;
        width: 300px;
        text-align: center;
        min-height: 100px;
        margin-bottom: 40px;

        &__bold {
            position: absolute;
            display: block;
            top: 0;
            font-weight: bold;
            font-family: Lato;
            font-size: 50px;
            z-index: 1;
        }
        &__skinny {
            display: block;
            position: absolute;
            top: 15px;
            font-weight: 600;
            font-family: "Tangerine", cursive;
            color: #f857a6;
            font-size: 100px;
        }

    }
    .main-container-parent {
        width: 100%;
        position: relative;
        min-height: calc(100vh - 78px);
        overflow-x: hidden;
    }
    .form-spacing {
        margin-bottom: 20px;
    }
</style>
