<template>
    <div class="reset-password-outer-div">
        <div class="reset-password-inner-div">
            <div class="reset-password-form">
                <div class="input-pair-2">
                    <h1 class="gradient-text">Fundoo</h1>
                    <h1 class="heading-h1">Reset your password</h1>
                    <span class="small-text-3">Enter your new password</span>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="false" />
                    <small v-if="false" class="small-text-1 error">There was an error</small>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'password'" v-bind:id="'confirm'" v-bind:placeHolder="'Confirm'" v-bind:error="false" />
                    <small v-if="false" class="small-text-1 error">There was an error</small>
                </div>
                <div class="show-password-div">
                    <input class="checkbox-input" type="checkbox" id="showPassword" name="showPassword">
                    <small class="small-text-2">Show password</small>
                </div>
                <div class="signin-div">
                        <BlueLink v-bind:link="'http://localhost:8080/forgetPassword'" v-bind:textValue="'Resend email?'" />
                        <BlueButton v-bind:textValue="'Next'" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TextInput from '@/components/Material/TextInput/TextInput.vue'
import BlueLink from '@/components/Material/BlueLink/BlueLink.vue'
import BlueButton from '@/components/Material/BlueButton/BlueButton.vue'

export default {
    name: 'ResetPassword',
    components:{
        TextInput,
        BlueLink,
        BlueButton,
    }
}
</script>

<style lang="scss">
.reset-password-outer-div{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reset-password-inner-div{
    width: 400px;
    height: 500px;
    border: 1px solid rgb(177, 177, 177);
    border-radius: 10px;
    padding: 2rem;
}
.reset-password-form{
    display: grid;
    grid-template-rows: repeat(5, 0.8fr);
    .gradient-text{
        margin-left: auto;
        margin-right: auto;
    }
    .heading-h1{
        text-align: center;
    }
    .signin-div{
        margin-top: auto;
        margin-bottom: 0;
    }
    .input-pair-2{
        .smaller{
            font-size: 14px;
            text-align: left;
            margin-left: 4px;
        }
    }
}

@media screen and (max-width: 600px) {
    .reset-password-inner-div{
        width: 100vw;
        height: 100vh;
        border: none;
        margin-right: 5%;
    }
    .reset-password-form{ 
        grid-template-rows: repeat(5, 0.8fr);
        .gradient-text{
            margin-top: 10%;
        }
        h1{
            margin: 4px;
        }
        .input-pair-2{
            margin-top: 5%;
        }
    }
    .input-pair-2{
        .gradient-text{
            margin-bottom: 20px;
        }
    }
}
@media screen and (max-width: 480px) {
    .reset-password-form{
        grid-template-rows: repeat(5, 0.6fr);
        .signin-div{
            margin-top: 0;
        }
    }
}

@media screen and (max-width: 320px) {
    .reset-password-form{
        grid-template-rows: repeat(5, 0.5fr);
        .heading-h1{
            font-size: 20px;
        }
        .signin-div{
            margin-bottom: 30px;
        }
    }
}
</style>