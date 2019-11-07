<template>
    <nav role="navigation">
        <div id="menuToggle">
            <!--
            A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it.
            -->
            <input type="checkbox" />

            <!--
            Some spans to act as a hamburger.

            They are acting like a real hamburger,
            not that McDonalds stuff.
            -->
            <div class="icon">
                <span></span>
                <span></span>
            </div>

            <!--
            Too bad the menu has to be inside of the button
            but hey, it's pure CSS magic.
            -->
            <ul id="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
    a
    {
        text-decoration: none;
        color: #232323;
        transition: color 0.3s ease;
        &:hover {
            color: #8b8b8b;
        }
    }

    #menuToggle
    {
        display: block;
        position: relative;
        top: 25px;
        left: -4px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
        input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;
            cursor: pointer;
            opacity: 0; /* hide this */
            z-index: 2; /* and place it over the hamburger */

            -webkit-touch-callout: none;
        }
        .icon {
            border: 1px solid #404142;
            padding: 12px 12px 8px;
        }
        /*
         * Just a quick hamburger
         */
        span {
            display: block;
            width: 21px;
            height: 2px;
            margin-bottom: 6px;
            position: relative;
            background: #cdcdcd;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 0.55s ease;
            &:first-child {
                transform-origin: 0% 0%;
            }
            &:nth-last-child(2) {
                transform-origin: 0% 100%;
            }
        }
    }

    /*
     * Transform all the slices of hamburger
     * into a crossmark.
     */
    #menuToggle input:checked ~ .icon>span
    {
        opacity: 1;
        transform: rotate(45deg) translate(-8px, -7px);
        background: #232323;
        /*&:nth-last-child(3) {*/
        /*    opacity: 0;*/
        /*    transform: rotate(0deg) scale(0.2, 0.2);*/
        /*}*/
        &:nth-last-child(2) {
            transform: rotate(-45deg) translate(-6px, 7px);
        }
    }

    /*
     * Make this absolute positioned
     * at the top left of the screen
     */
    #menu
    {
        position: absolute;
        top: 50px;
        width: 300px;
        margin: -100px 0 0 -266px;
        padding: 90px 50px;

        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        transform-origin: 0% 0%;
        transform: translate(100%, 0);

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li
    {
        padding: 10px 0;
        font-size: 22px;
    }

    /*
     * And let's slide it in from the left
     */
    #menuToggle input:checked ~ ul
    {
        transform: none;
    }
</style>
