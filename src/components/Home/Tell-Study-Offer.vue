<template>
    <div class="container">
        <div class="titles">
            <h1>Tell</h1>
            <hr size="1"/>
            <h1>Study</h1>
            <hr size="1"/>
            <h1>Offer</h1>
        </div>
        <div class="subtitles">
            <p>Tell&nbsp;us about your project in&nbsp;any form convenient for you.</p>
            <p>We&nbsp;will contact you promptly to&nbsp;clarify the requirements.</p>
            <p>We&nbsp;will prepare a&nbsp;proposal in&nbsp;accordance with your specifics.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tell-Study-Offer"
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 107px;
        padding-bottom: 87px;
        .titles {
            display: flex;
            justify-content: space-between;
            padding-right: 17%;
            padding-left: 6.5%;
        }
        .subtitles {
            display: flex;
            justify-content: space-between;
            padding-right: 8.5%;
        }
        h1 {
            font-size: 16px;
        }
        hr {
            margin: 22px 0 11px;
            width: 35%;
            border: none;
            color: #ececec;
            background-color: #ececec;
            height: 1px;
        }
        p {
            margin-top: 7px;
            max-width: 20%;
            text-align: center;
            font-size: 10.5px;
        }
    }
</style>
