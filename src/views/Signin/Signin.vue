<template>
    <div class="login-outer-div">
        <div class="login-inner-div">
            <div class="login-form">
                <FundooHeader v-bind:title="'Sign in'" v-bind:subTitle="'Use your Fundoo Account'"/>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'text'" v-bind:id="'email-or-phone'" v-bind:placeHolder="'Email'" v-bind:error="v$.email.$error" v-model:data.sync="email" />
                    <small v-if="v$.email.$error" class="small-text-1 error" v-text="v$.email.$errors[0].$message"></small>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="v$.password.$error" v-model:data.sync="password" />
                    <small v-if="v$.password.$error" class="small-text-1 error" v-text="v$.password.$errors[0].$message"></small>
                    <BlueLink v-bind:link="'http://localhost:8080/forgetPassword'" v-bind:textValue="'Forgot password?'" />
                </div>
                <div class="input-pair-2">
                    <span class="small-text-3 smaller">Not your computer? Use Guest mode to sign in privately.</span>
                    <BlueLink v-bind:link="'https://support.google.com/chrome/answer/6130773?hl=en'" v-bind:textValue="'Learn more'" />
                </div>
                <div class="signin-div">
                    <BlueLink v-bind:link="'http://localhost:8080/SignUp'" v-bind:textValue="'Create account'" />
                    <BlueButton v-bind:textValue="'Next'" @click="submitForm()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./SignIn.js'></script>
