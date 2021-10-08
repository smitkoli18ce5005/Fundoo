<template>
    <div class="login-outer-div">
        <div class="login-inner-div">
            <div class="login-form">
                <div class="input-pair-2">
                    <h1 class="gradient-text">Fundoo</h1>
                    <h1 class="heading-h1">Sign in</h1>
                    <span class="small-text-3">Use your Fundoo Account</span>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'text'" v-bind:id="'email-or-phone'" v-bind:placeHolder="'Email or phone'" v-bind:error="false" />
                    <small v-if="false" class="small-text-1 error">There was an error</small>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="false" />
                    <small v-if="false" class="small-text-1 error">There was an error</small>
                    <BlueLink v-bind:link="'http://localhost:8080/forgetPassword'" v-bind:textValue="'Forgot password?'" />
                </div>
                <div class="input-pair-2">
                    <span class="small-text-3 smaller">Not your computer? Use Guest mode to sign in privately.</span>
                    <BlueLink v-bind:link="'https://support.google.com/chrome/answer/6130773?hl=en'" v-bind:textValue="'Learn more'" />
                </div>
                <div class="signin-div">
                    <BlueLink v-bind:link="'http://localhost:8080/SignUp'" v-bind:textValue="'Create account'" />
                    <BlueButton v-bind:textValue="'Next'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./SignIn.js'></script>
