<template>
    <div class="forget-password-outer-div">
        <div class="forget-password-inner-div">
            <div class="forget-password-form">
                <div class="input-pair-2">
                    <h1 class="gradient-text">Fundoo</h1>
                    <h1 class="heading-h1">Reset your password</h1>
                    <span class="small-text-3">Enter your email</span>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'text'" v-bind:id="'email'" v-bind:placeHolder="'Email'" v-bind:error="false" />
                    <small v-if="false" class="small-text-1 error">There was an error</small>
                </div>
                <div class="signin-div">
                        <a class="blue-link-1" href="http://localhost:8080/">&nbsp;</a>
                        <button class="blue-button-1">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from '@/components/Material/TextInput/TextInput.vue'
export default {
    name: 'ForgetPassword',
    components:{
        TextInput
    }
}
</script>

<style lang="scss">
.forget-password-outer-div{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.forget-password-inner-div{
    width: 400px;
    height: 500px;
    border: 1px solid rgb(177, 177, 177);
    border-radius: 10px;
    padding: 2rem;
}
.forget-password-form{
    display: grid;
    grid-template-rows: repeat(3, 1fr);
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
    .forget-password-inner-div{
        width: 100vw;
        height: 100vh;
        border: none;
        margin-right: 5%;
    }
    .forget-password-form{ 
        grid-template-rows: repeat(3, 0.8fr);
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
    .forget-password-form{
        grid-template-rows: repeat(3, 0.6fr);
        .signin-div{
            margin-top: 0;
        }
    }
}

@media screen and (max-width: 320px) {
    .forget-password-form{
        .heading-h1{
            font-size: 20px;
        }
        .signin-div{
            margin-bottom: 30px;
        }
    }
}
</style>