<template>
    <div class="header" v-bind:class="[ color ]">
        <div class="lang">
            <button class="lang__button" v-bind:class="[{ active: engIsActive }, color]" v-on:click="toggleActive">eng</button>
            <button class="lang__button" v-bind:class="[{ active: ruIsActive }, color]" v-on:click="toggleActive">ru</button>
        </div>
        <div class="logo">
            <Logo v-bind:color="color"/>
        </div>
        <div class="nav-block">
            <nav class="nav" v-bind:class="{ open: openMenu }">
                <g-link class="nav__link" to="/">Home</g-link>
                <g-link class="nav__link" to="/services">Services</g-link>
                <g-link class="nav__link" to="/solutions">Solutions</g-link>
                <g-link class="nav__link" to="/how-we-work">How we work</g-link>
                <g-link class="nav__link" to="/about">About us</g-link>
                <g-link class="nav__link" to="/contact">Contact us</g-link>
            </nav>
            <div class="menu-icon">
                <Menu v-bind:color="color" @checked="toggleMenu" />
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo";
    import Menu from "./Menu";
    export default {
        name: "Header",
        components: {Menu, Logo},
        props: {
            color: {
                type: [String, Number],
                required: true
            }
        },
        data () {
            return {
                engIsActive: true,
                ruIsActive: false,
                openMenu:false
            }
        },
        methods: {
            toggleActive: function() {
                this.engIsActive = !this.engIsActive;
                this.ruIsActive = !this.ruIsActive;
            },
            toggleMenu: function() {
                this.openMenu = !this.openMenu;
            }
        }
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        margin: 10px 0 10px 70px;
        height: 100px;
        &.white {
            .nav__link {
                color: black;
            }
        }
    }
    .lang {
        margin-top: 2px;
        &__button {
            margin: 2px;
            min-width: 22px;
        }
    }
    .logo {
        margin-left: 37px;
        margin-bottom: -53px;
        a {
            display: block;
        }
    }
    .nav-block {
        margin-right: 73px;
        margin-left: auto;
        display: flex;
        overflow: hidden;
        width: 60%;
        height: 44px;
        align-items: center;
        .nav {
            margin-right: 62px;
            margin-left: auto;
            padding-top: 4px;
            font-size: 13.8px;
            display: flex;
            justify-content: space-between;
            transform: translateX(1000px);
            transition: transform 1s;
            &.open {
                transform: none;
            }
            &__link {
                margin-left: -60%;
                text-transform: capitalize;
                font-weight: 500;
                &:hover {
                    border-bottom: 1px solid #404142;;
                }
            }
        }
    }
    .menu-icon {
/*        margin-top: -42px;
        margin-left: 65px;*/
    }
    a {
        color: white;
        text-decoration: none;
    }
    @media (max-width: 1370px) {
        .nav-block {
            .nav {
                margin-right: 18px;
                a {
                    font-size: 11px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .header .nav-block {
            overflow: unset;
        }
    }
    @media (max-width: 62.5em) {
        .header {
            margin-left: auto;
            margin-right: auto;
            width: 92%;
            justify-content: space-between;
            &.white {
                .nav-block .nav {
                    background-color: rgba(255,255,255,.95);
                }
            }
            .lang {
                button {
                    font-size: 10px;
                    padding-left: 10px;
                    padding-right: 10px;
                }
            }
            .logo {
                margin-left: 0;
            }
            .nav-block {
                margin: 0;
                width: auto;
                position: relative;
                .nav {
                    display: flex;
                    margin-right: 0;
                    padding: 30px;
                    width: 130px;
                    flex-direction: column;
                    position: absolute;
                    z-index: 1;
                    -webkit-user-select: none;
                    user-select: none;
                    height: 250px;
                    top: 5px;
                    background-color: rgba(23,23,23,.95);
                    &.open {
                        transform: translateX(-140px);
                    }
                    &__link {
                        margin-left: 0;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>
