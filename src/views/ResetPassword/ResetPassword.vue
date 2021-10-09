<template>
    <div class="reset-password-outer-div">
        <div class="reset-password-inner-div">
            <div class="reset-password-form">
                <FundooHeader v-bind:title="'Reset your password'" v-bind:subTitle="'Enter your new password'"/>
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

<script type='module' src='./ResetPassword.js'></script>