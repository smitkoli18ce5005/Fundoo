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
                        <BlueLink />
                        <BlueButton v-bind:textValue="'Next'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./ForgetPassword.js'></script>