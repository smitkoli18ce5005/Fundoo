<template>
    <div class="login-outer-div">
        <div class="login-holder">
            <div class="login-inner-div">
                <div class="form-1">
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
                        <a class="blue-link-1" href="#">Forgot email?</a>
                    </div>
                    <div class="input-pair-2">
                        <span class="small-text-3 smaller">Not your computer? Use Guest mode to sign in privately.</span>
                        <a class="blue-link-1" href="https://support.google.com/chrome/answer/6130773?hl=en">Learn more</a>
                    </div>
                    <div class="signin-div">
                            <a class="blue-link-1" href="http://localhost:8080/">Create account</a>
                            <button class="blue-button-1">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./Login.js'></script>