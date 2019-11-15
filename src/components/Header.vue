<template>
    <div class="header" v-bind:class="[ color ]">
        <div class="lang">
            <button class="lang__button" v-bind:class="[{ active: engIsActive }, color]" v-on:click="toggleActive">eng</button>
            <button class="lang__button" v-bind:class="[{ active: ruIsActive }, color]" v-on:click="toggleActive">ru</button>
        </div>
        <div class="logo">
            <Logo v-bind:color="color"/>
        </div>
        <nav class="nav" v-bind:class="{ open: openMenu }">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">Services</g-link>
            <g-link class="nav__link" to="/contact/">Solutions</g-link>
            <g-link class="nav__link" to="/contact/">How we work</g-link>
            <g-link class="nav__link" to="/contact/">About us</g-link>
            <g-link class="nav__link" to="/contact/">Contact us</g-link>
        </nav>
        <div class="menu">
            <Menu v-bind:color="color" @checked="toggleMenu" />
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
        margin: 10px 70px;
        height: 100px;
        overflow: hidden;
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
    }
    .nav {
        margin-right: 66px;
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
            &:hover {
                border-bottom: 1px solid #404142;;
            }
        }
    }
    .menu {
/*        margin-top: -42px;
        margin-left: 65px;*/
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>
