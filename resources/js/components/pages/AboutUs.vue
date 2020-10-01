<template>
    <div class="main-wrapper">
        <div>
            <PageIntro>
                <template v-slot:small-heading>How it all started</template>
                <template v-slot:main-heading>ORIGINS</template>
                <template v-slot:sub-heading>One small step for users. One giant leap for MEDIADDICTS</template>
            </PageIntro>
            <ParagraphText>
                <template v-slot:paragraph>
                    Started in February 2020. We started just as a
                    few Social media pages helping and providing
                    individuals growing and improving there social
                    media presence. 1 July we decided to start our
                    own Online Social Media marketing business .
                    Our goal has remain the same; to enlighten,
                    teach and help social media individuals on how
                    to grow there social media presence and improve
                    there content providing them with the best
                    techniques and strategies on our website.
                </template>
            </ParagraphText>
            <div class="page-spacer"></div>
            <IntroContent link="/our-network">
                <template v-slot:small-heading>CREATIVE & INNOVATIVE</template>
                <template v-slot:main-heading>ONLINE NETWORK</template>
                <template v-slot:content>Join our online Social media network and get access to our variety of special features and add instant value to your social media presence</template>
                <template v-slot:link-text>Our Online Network</template>
            </IntroContent>
            <div class="page-spacer"></div>
            <CheckList></CheckList>
            <div class="page-spacer"></div>
            <TeamStructure>
            </TeamStructure>
        </div>
        <div class="icons pink-icon oval1"></div>
        <div class="icons grey-icon oval2"></div>
        <div class="icons pink-icon oval3"></div>
    </div>
</template>

<script>
    import IntroContent from "../components/IntroContent";
    import PageIntro from "../components/PageIntro";
    import ParagraphText from "../components/ParagraphText";
    import CheckList from "../components/CheckList";
    import TeamStructure from "../components/TeamStructure";

    export default {
        name: "AboutUs",
        components: {
            IntroContent,
            PageIntro,
            ParagraphText,
            CheckList,
            TeamStructure
        }
    }
</script>

<style scoped lang="scss">
.main-wrapper {
    position: relative;
    width: 100%;
}

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
    top: 40px;
    right: 50px;
    width: 120px;
    height: 120px;
}
.oval2 {
    top: 200px;
    left: -150px;
    width: 300px;
    height: 300px;
}
.oval3 {
    top: 150px;
    left: 30px;
    width: 150px;
    height: 150px;
}
.page-spacer {
    width: 100%;
    height: 0;
    margin: 60px 0;
}
</style>
