<template>
    <div class="header black">
        <div class="lang">
            <button class="lang__button" v-bind:class="{ active: engIsActive}" v-on:click="toggleActive">eng</button>
            <button class="lang__button" v-bind:class="{ active: ruIsActive}" v-on:click="toggleActive">ru</button>
        </div>
        <div class="logo">
            <Logo/>
        </div>
        <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">Services</g-link>
            <g-link class="nav__link" to="/contact/">Solutions</g-link>
            <g-link class="nav__link" to="/contact/">How we work</g-link>
            <g-link class="nav__link" to="/contact/">About us</g-link>
            <g-link class="nav__link" to="/contact/">Contact us</g-link>
        </nav>
        <div class="menu">
            <Menu/>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo";
    import Menu from "./Menu";
    export default {
        name: "Header",
        components: {Menu, Logo},
        data () {
            return {
                engIsActive: true,
                ruIsActive: false
            }
        },
        methods: {
            toggleActive: function() {
                this.engIsActive = !this.engIsActive;
                this.ruIsActive = !this.ruIsActive;
            }
        }
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        padding: 10px 70px;
        height: 100px;
        &.black .lang .lang__button.active {
            border: 1px solid  #404142;
        }
    }
    .lang {
        margin-top: 2px;
        &__button {
            margin: 2px;
            padding: 8px 16px;
            min-width: 22px;
            font-size: 13px;
            color: white;
            background-color: transparent;
            border: none;
            &.active {
                color: #8b8b8b;
                border: 1px solid  #ececec;
            }
        }
    }
    .logo {
        margin-left: 37px;
        margin-bottom: -53px;
    }
    .nav {
        margin-left: auto;
        padding-top: 4px;
        font-size: 13.8px;
        display: flex;
        justify-content: space-between;
        &__link {
            margin-left: -60%;
            text-transform: capitalize;
        }
    }
    .menu {
        margin-top: -42px;
        margin-left: 65px;
    }
    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        &::-moz-focus-inner {
            border: none;
        }
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>
