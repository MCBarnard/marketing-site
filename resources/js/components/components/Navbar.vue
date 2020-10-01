<template>
    <div class="main-nav">
        <div class="main-nav__logo-container">

            <div class="main-nav__logo-container__logo">
                <h1><router-link to="/">MEDIADDICTS</router-link></h1>
            </div>
            <div class="main-nav__logo-container__inner">
                <div
                    class="main-nav__logo-container__inner__item">
                    <router-link  to="/what-we-offer">What We Offer</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                </div>
                <div @mouseleave="hideDropDown('features')" @mouseenter="showDropDown('features')" class="main-nav__logo-container__inner__item">
                    <router-link to="/features">Special Features &nbsp;&nbsp;<i class="fas fa-angle-down"></i></router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                    <div id="features" class="dropdown-menu-container">
                        <div>
                            <router-link to="/donate" class="dropdown-menu-container__item"><i class="fas fa-box-open"></i> <span>Donate</span></router-link>
                            <router-link to="/doesnt-exist" class="dropdown-menu-container__item"><i class="fas fa-hands-helping"></i> <span>Competitions</span></router-link>
                            <router-link to="/doesnt-exist" class="dropdown-menu-container__item"><i class="fas fa-certificate"></i> <span>Rewards</span></router-link>
                            <router-link to="/doesnt-exist" class="dropdown-menu-container__item"><i class="fas fa-user-graduate"></i> <span>Online Courses</span></router-link>
                        </div>
                    </div>
                </div>
                <div class="main-nav__logo-container__inner__item">
                    <router-link to="/our-network">Our Network</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                </div>
                <div class="main-nav__logo-container__inner__item">
                    <router-link to="/about">About Us</router-link>
                    <div class="main-nav__logo-container__inner__item__line"></div>
                </div>
                <div class="main-nav__logo-container__inner__item">
                    <router-link id="getStarted" to="/get-started">Get Started</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
          return {
              dropdownOne: false,
              dropdownTwo: false,
              time: setTimeout(()=>{},0)
          }
        },
        methods: {
            showDropDown(id) {
                clearTimeout(this.time)
                document.getElementById(id).classList.remove("swing-out");
                document.getElementById(id).classList.add("swing-in");
                document.getElementById(id).style.display = "block";
            },
            hideDropDown(id) {
                document.getElementById(id).classList.remove("swing-in");
                document.getElementById(id).classList.add("swing-out");
                document.getElementById(id).style.display = "none";
            }
        }
    }
</script>

<style scoped lang="scss">
    .dropdown-menu-container {
        display: none;
        position: absolute;
        width: 200px;
        border: .063rem solid rgba(136,151,162,.2);
        background-color: #fff;
        box-shadow: 0 0.25rem 0.5rem 0 rgba(0,0,0,.1);
        top: 50px;
        left: -12px;
        z-index: 10;
        padding: 2px;
        border-radius: 12px;
        transform-origin: top;

        div {
            background: #FFFFFF;
            border-radius: 8px;
            padding: 3px;
            text-align: left;

            i {
                margin-left: 5px;
            }

            .router-link-active {
                i {
                    color: pink;
                }
            }

            span {
                margin-left: 10px;
            }
        }

        &__item {
            display: block;
            height: 50px;
            color: #1d2124;
            padding: 10px;

            &:hover {
                background: #f5f5f5;
            }
        }
    }

    @keyframes swing-in {
        from {
            opacity: 0;
            transform: rotateX(90deg);
        }
        50% {
            opacity: 1;
        }
        to {
            transform: rotateX(0deg);
        }
    }
    .swing-in {
        animation: swing-in 1s forwards;
    }
    .swing-out {
        animation: swing-out 1s forwards;
    }

    .main-nav {
        width: 100%;
        min-height: 50px;
        padding-top: 25px;

        &__logo-container {
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            margin: auto;

            &__logo {
                h1 a{
                    font-family: 'Fredoka One', cursive;
                    font-weight: bold;
                    color: #000;
                    text-decoration: none;

                    &:hover {
                        text-decoration: none;
                        color: #000;
                    }
                }
            }

            &__inner {
                display: flex;
                justify-content: space-between;
                padding-top: 2px;
                &__item {
                    position: relative;
                    display: block;
                    font-size: 18px;
                    text-align: center;
                    margin: 0  0 0 32px;
                    padding-top: 9px;
                    a, a:hover {
                        text-decoration: none;
                        color: #000;
                    }

                }

                #getStarted {
                    padding: 9px 12px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: #FFF;
                    background: #f857a6;  /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.1);

                    &:hover {
                        text-decoration: none;
                        box-shadow: 0px 5px 13px rgba(248, 87, 166, 0.4);
                    }
                }
            }
        }
    }

    .router-link-active ~.main-nav__logo-container__inner__item__line {
            width: 100%;
            height: 3px;
            border-radius: 5px;
            background: #f857a6;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>
