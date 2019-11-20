<template>
    <Layout>
        <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
        <div class="content">
            <p class="title" data-aos="fade-up">Tell us about you</p>
            <p class="small" data-aos="fade-up" data-aos-delay="500">We&nbsp;started Basov Design Bureau in&nbsp;2008. Our vision from day one was to&nbsp;apply strategic<br>
                and creative thinking to&nbsp;propel startups to&nbsp;success.</p>

            <form id="form" ref="form" class="form" @submit="checkForm" action="/todo" method="post" data-aos="fade-up">
                <span class="input input--madoka" v-bind:class="{ 'input--filled': name !== null &&  name !== ''}">
                    <input v-model="name" class="input__field input__field--madoka name" type="text" id="input-name" name="name" />
                    <label class="input__label input__label--madoka" for="input-name">
                        <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                            <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
                        </svg>
                        <span class="input__label-content input__label-content--madoka" data-content="Full Name *">Full Name</span>
                    </label>
                </span>
                <span class="input input--madoka" v-bind:class="{ 'input--filled': company !== null &&  company !== ''}" >
                    <input v-model="company" class="input__field input__field--madoka" type="text" id="input-company" name="company"/>
                    <label class="input__label input__label--madoka" for="input-company">
                        <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                            <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
                        </svg>
                        <span class="input__label-content input__label-content--madoka" data-content="Company *">Company</span>
                    </label>
                </span>
                <span class="input input--madoka" v-bind:class="{ 'input--filled': mail !== null &&  mail !== ''}" >
                    <input v-model="mail" class="input__field input__field--madoka" type="email" id="input-mail" name="mail"/>
                    <label class="input__label input__label--madoka" for="input-mail">
                        <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                            <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
                        </svg>
                        <span class="input__label-content input__label-content--madoka" data-content="e-mail *">e-mail</span>
                    </label>
                </span>
                <span class="input input--madoka text" v-bind:class="{ 'input--filled': message !== null &&  message !== ''}">
                    <textarea v-model="message" class="input__field input__field--madoka" type="text" id="input-message" name="message" />
                    <label class="input__label input__label--madoka" for="input-message">
                        <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                            <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
                        </svg>
                        <span class="input__label-content input__label-content--madoka text" data-content="Message">Message</span>
                    </label>
                </span>

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>
                <a href="#" class="btn-flip light" data-back="Sent message" data-front="Sent message" @click="submit"></a>
            </form>
        </div>
        <div class="map-section">

        </div>
    </Layout>
</template>

<script>
    import TopBlock from "../components/TopBlock";
    export default {
        name: "Contact",
        components: {TopBlock},
        data() {
            return {
                title: 'Contact Us',
                subtitle: 'Feedback',
                errors: [],
                name: null,
                company: null,
                mail: null,
                message: null
            }
        },
        methods: {
            checkForm: function (e) {
                if (this.name && this.company && this.company) {
                    return true;
                }

                this.errors = [];

                if (!this.name) {
                    this.errors.push('Please enter a name. It is necessary that we know how to contact you by name.');
                }
                if (!this.company) {
                    this.errors.push('Please enter your company name. So that we know which company we communicate with.');
                }
                if (!this.company) {
                    this.errors.push('Please enter your email so we can reply you.');
                }

                e.preventDefault();
            },
            submit : function(){
                this.checkForm();
                this.$refs.form.submit()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        padding: 110px 15%;
        .title {
            font-size: 27px;
            font-weight: 900;
        }
        .small {
            margin-top: 44px;
            margin-bottom: 37px;
        }
        .form {
            display: flex;
            flex-direction: column;
        }
        .name {
            text-transform: capitalize;
        }
        .text {
            .input__field {
                height: 80px;
            }
            .input__label-content::after {
                top: -500%;
            }
        }
        .btn-flip {
            width: 148px;
        }
    }
</style>
