<template>
    <nav role="navigation">
        <div id="menuToggle" v-bind:class="color">
            <input type="checkbox" v-model="checked" @change="$emit('checked', checked);"/>
            <div class="icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            color: {
                type: [String, Number],
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>

    #menuToggle
    {
        display: block;
        position: relative;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
        background-color: #171717;
        &.white {
            background-color: white;
            .icon {
                border: 1px solid #ececec;
            }
            span {
                background: #404142;
            }
        }
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
        }
    }

    /*
     * Transform all the slices of hamburger
     * into a crossmark.
     */
/*    #menuToggle input:checked ~ .icon>span
    {
        opacity: 1;
        transform: rotate(45deg) translate(-4px, -7px);
        &:nth-last-child(2) {
            transform: rotate(-45deg) translate(-6px, 7px);
        }
    }*/

    #menuToggle input:checked ~ ul
    {
        transform: none;
    }
</style>
