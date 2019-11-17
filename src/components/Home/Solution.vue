<template>
    <div class="solution">
        <Header color="black"/>
        <div class="block">
            <div class="content">
                <div class="text">
                    <h1>Solution <br> for business</h1>
                    <hr size="1" color="#ffffff" />
                    <p>We&nbsp;do&nbsp;not draw a&nbsp;beautiful picture, we&nbsp;offer
                        working solutions. We&nbsp;are young professionals making visual identities,
                        digital solutions and associated services for business</p>
<!--                    <button class="black active">Find solution</button>-->
                    <a href="#" class="btn-flip" data-back="Find solution" data-front="Find solution"></a>
                </div>
                <div class="examples">
                    <div class="example">
                        <p>Mobile <br> solutions</p>
                        <g-image alt="Mobile solutions" src="~/assets/img/mobile.png" width="340"  />
                    </div>
                    <div class="example">
                        <p>UI/UX <br> solutions</p>
                        <g-image alt="UI/UX solutions" src="~/assets/img/ux.png" width="340" />
                    </div>
                    <div class="example">
                        <p>Analytical <br> solution</p>
                        <g-image alt="Analytical solution" src="~/assets/img/analytical.png" width="340" />
                    </div>
                    <div class="example">
                        <p>E-commerce <br> solutions</p>
                        <g-image alt="E-commerce solutions" src="~/assets/img/e-commerce.png" width="340"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "Solution",
        components: {Header}
    }
</script>

<style lang="scss" scoped>
    $speed: 0.5s;
    .solution {
        padding-top: 27px;
        .block {
            padding-top: 34px;
            padding-bottom: 3px;
            overflow: hidden;
            .content {
                display: flex;
                border-right: 1px solid #404142;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 29%;
                    border-right: 1px solid white;
                }
                .text {
                    max-width: 30%;
                    h1 {
                        margin-bottom: 15px;
                        font-size: 36px;
                    }
                    hr {
                        margin: 17px 0 11px;
                        width: 21%;
                        border: none;
                        color: #404142;
                        background-color: #404142;
                        height: 1px;
                    }
                    p {
                        max-width: 75%;
                        margin-top: 20px;
                        font-size: 12px;
                        line-height: 27px;
                    }
                    button {
                        padding: 11px 37px;
                        text-transform: uppercase;
                        font-size: 9px;
                        color: white;
                        margin-top: 24px;
                    }
                    .btn-flip{
                        margin-top: 24px;
                        opacity: 1;
                        outline: 0;
                        font-size: 9px;
                        font-weight: 500;
                        color: #fff;
                        line-height: 35px;
                        position: relative;
                        text-align: center;
                        display: inline-block;
                        text-decoration: none;
                        text-transform: uppercase;

                        &:hover{

                            &:after{
                                opacity: 1;
                                transform: translateY(0) rotateX(0);
                            }

                            &:before{
                                opacity: 0;
                                transform: translateY(50%) rotateX(90deg);
                            }
                        }

                        &:after{
                            top: 0;
                            left: 0;
                            opacity: 0;
                            width: 100%;
                            color: black;
                            display: block;
                            transition: $speed;
                            position: absolute;
                            background: #ececec;
                            content: attr(data-back);
                            transform: translateY(-50%) rotateX(90deg);
                        }

                        &:before{
                            top: 0;
                            left: 0;
                            opacity: 1;
                            color: white;
                            display: block;
                            padding: 0 30px;
                            line-height: 35px;
                            transition: $speed;
                            position: relative;
                            content: attr(data-front);
                            transform: translateY(0) rotateX(0);
                            border: 1px solid #404142;
                        }
                    }
                }
                .examples {
                    display: flex;
                    max-width: 70%;
                    flex-wrap: wrap;
                    padding-left: 21px;
                    padding-top: 33px;
                    .example {
                        position: relative;
                        height: 251px;
                        background-color: unset;
                        color: white;
                        p {
                            position: absolute;
                            bottom: 8px;
                            left: 28px;
                            font-size: 12px;
                            line-height: 15px;
                        }
                    }
                }
            }
        }
    }
</style>
