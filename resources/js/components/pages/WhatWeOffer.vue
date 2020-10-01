<template>
    <div class="content">
        <div class="containing-wrapper">
            <PageIntro>
                <template v-slot:small-heading>START EARNING TODAY</template>
                <template v-slot:main-heading>Our major offerings</template>
                <template v-slot:sub-heading>Join our marketing program and start earning cash today</template>
            </PageIntro>
            <!--    ======================================================================    -->
            <div class="card-container">
                <FeatureCard>
                    <template v-slot:left-slot>
                        <lottie-player
                            class="lottie__bottom" src="https://assets2.lottiefiles.com/datafiles/8zeYqGXVlm2qkPw/data.json"
                            background="transparent"
                            speed="1"
                            style="width: 130px; height: 130px;"
                            loop
                            autoplay
                        ></lottie-player>
                    </template>
                    <template v-slot:small-deco>F & B</template>
                    <template v-slot:main-heading>Donations</template>
                    <template v-slot:body>You are allowed to accept and receive donation </template>
                </FeatureCard>
                <FeatureCard>
                    <template v-slot:left-slot>
                        <lottie-player
                            class="lottie__bottom" src="https://assets9.lottiefiles.com/packages/lf20_PZjf3P.json"
                            background="transparent"
                            speed="1"
                            style="width: 130px; height: 130px;"
                            loop
                            autoplay
                        ></lottie-player>
                    </template>
                    <template v-slot:small-deco>F & B</template>
                    <template v-slot:main-heading>Competitions</template>
                    <template v-slot:body>Participate in our competitions to receive cash rewards</template>
                </FeatureCard>
            </div>
    <!--    ======================================================================    -->
            <br>
    <!--    ======================================================================    -->
            <div class="card-container">
                <FeatureCard>
                    <template v-slot:left-slot>
                        <lottie-player
                            class="lottie__bottom" src="https://assets10.lottiefiles.com/datafiles/b0TVxlf8FZxor5v/data.json"
                            background="transparent"
                            speed="1"
                            style="width: 130px; height: 130px;"
                            loop
                            autoplay
                        ></lottie-player>
                    </template>
                    <template v-slot:small-deco>F & B</template>
                    <template v-slot:main-heading>Rewards</template>
                    <template v-slot:body>Siverra lectus mauris ultrices eros in. Eget egestas purus viverra accumsan in nisl nulla nisi scelerisque euvestibulum sed.</template>
                </FeatureCard>
                <FeatureCard>
                    <template v-slot:left-slot>
                        <lottie-player
                            class="lottie__bottom" src="https://assets1.lottiefiles.com/datafiles/5FFwoVNq8EcKMH4/data.json"
                            background="transparent"
                            speed="1"
                            style="width: 130px; height: 130px;"
                            loop
                            autoplay
                        ></lottie-player>
                    </template>
                    <template v-slot:small-deco>F & B</template>
                    <template v-slot:main-heading>Online Courses</template>
                    <template v-slot:body>Siverra lectus mauris ultrices eros in. Eget egestas purus viverra accumsan in nisl nulla nisi scelerisque euvestibulum sed.</template>
                </FeatureCard>
            </div>
    <!--    ======================================================================    -->
        </div>
        <div class="split-content">
            <div class="split-content__circle-small"></div>
            <div class="split-content__circle-big"></div>
            <div class="split-content__circle-left_small"></div>
        </div>
        <PageSubHeading>
            <template v-slot:main-heading>Our major offerings</template>
        </PageSubHeading>
        <div class="big-card-container">
            <!--    ======================================================================    -->
            <BigCard
                :features="['Donations', 'Competitions', 'Rewards', 'Online Courses']"
                link="/purchase?instagram"
            >
                <template v-slot:main-heading>
                    Instagram
                </template>
                <template v-slot:lottie>
                    <lottie-player
                        src="https://assets8.lottiefiles.com/datafiles/cQiEsPrJCutfedV/data.json"
                        background="transparent"
                        speed="1"
                        style="width: 130px; height: 130px;"
                        autoplay
                    ></lottie-player>
                </template>
                <template v-slot:amount>
                    100
                </template>
            </BigCard>
            <!--    ======================================================================    -->
            <BigCard
                :features="['Donations', 'Competitions', 'Rewards', 'Online Courses']"
                link="/purchase?facebook"
            >
                <template v-slot:main-heading>
                    Facebook
                </template>
                <template v-slot:lottie>
                    <lottie-player
                        src="https://assets1.lottiefiles.com/datafiles/1WJXQ7LwRpyWYkY/data.json"
                        background="transparent"
                        speed="1.2"
                        style="width: 130px; height: 130px;"
                        autoplay
                    ></lottie-player>
                </template>
                <template v-slot:amount>
                    100
                </template>
            </BigCard>
            <!--    ======================================================================    -->
            <BigCard
                :features="['Donations', 'Competitions', 'Rewards', 'Online Courses']"
                link="/purchase?twitter"
            >
                <template v-slot:main-heading>
                    Twitter
                </template>
                <template v-slot:lottie>
                    <lottie-player
                        src="https://assets6.lottiefiles.com/datafiles/4FIeTj7a80tm2wZ/data.json"
                        background="transparent"
                        speed="1"
                        style="width: 130px; height: 130px;"
                        autoplay
                    ></lottie-player>
                </template>
                <template v-slot:amount>
                    100
                </template>
            </BigCard>
            <!--    ======================================================================    -->
            <div class="split-content__circle-cards-right"></div>
            <div class="split-content__circle-cards-right_small"></div>
            <div class="split-content__circle-cards-left"></div>
        </div>
    </div>
</template>

<script>
    import PageIntro from '../components/PageIntro'
    import FeatureCard from '../components/FeatureCard'
    import PageSubHeading from '../components/PageSubHeading'
    import BigCard from "../components/BigCard";

    export default {
        name: "WhatWeOffer",
        components: {
            PageIntro,
            FeatureCard,
            PageSubHeading,
            BigCard
        }
    }
</script>

<style scoped lang="scss">
    .big-card-container {
        display: flex;
        max-width: 992px;
        margin: 100px auto;
        justify-content: space-between;
    }
    .content {
        position: relative;
        width: 100%;
        overflow-x:hidden;
    }
    .split-content {

        div {
            border-radius: 50%;
            position: absolute;
        }
        &__circle-cards-left {
            border-radius: 50%;
            position: absolute;
            width: 600px;
            height: 600px;
            left: -300px;
            top: 950px;
            z-index: -1;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        &__circle-cards-right_small {
            border-radius: 50%;
            position: absolute;
            width: 30px;
            height: 30px;
            right: 250px;
            top: 1400px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        &__circle-cards-right {
            border-radius: 50%;
            position: absolute;
            width: 200px;
            height: 200px;
            right: -100px;
            top: 1000px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        &__circle-small {
            width: 50px;
            height: 50px;
            right: -25px;
            top: 500px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        &__circle-left_small {
            width: 30px;
            height: 30px;
            left: 50px;
            top: 500px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        &__circle-big {
            width: 150px;
            height: 150px;
            left: -30px;
            top: 50px;
            background: #f857a6; /* fallback for old browsers */
            background: -webkit-linear-gradient(120deg, #ff5858, #f857a6); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(120deg, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
    }
    .containing-wrapper {
        max-width: 1050px;
        margin: auto;
        position: relative;
    }
    .card-container {
        display: flex;
        justify-content: space-between;
        max-width: 992px;
        margin: auto;
    }
</style>
