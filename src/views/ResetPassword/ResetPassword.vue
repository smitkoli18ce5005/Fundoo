<template>
    <div class="reset-password-outer-div">
        <div class="reset-password-inner-div">
            <div class="reset-password-form">
                <FundooHeader v-bind:title="'Reset your password'" v-bind:subTitle="'Enter your new password'"/>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="showPassword ? 'text' : 'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="v$.password.$error" v-model:data.sync="password" />
                    <small v-if="v$.password.$error" class="small-text-1 error" v-text="v$.password.$errors[0].$message"></small>
                </div>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="showPassword ? 'text' : 'password'" v-bind:id="'confirm'" v-bind:placeHolder="'Confirm'" v-bind:error="v$.confirm.$error" v-model:data.sync="confirm" />
                    <small v-if="v$.confirm.$error" class="small-text-1 error" v-text="v$.confirm.$errors[0].$message"></small>
                </div>
                <div class="show-password-div">
                    <input class="checkbox-input" type="checkbox" id="showPassword" name="showPassword" v-model="showPassword">
                    <small class="small-text-2">Show password</small>
                </div>
                <div class="signin-div">
                        <BlueLink v-bind:link="forgetPasswordURL" v-bind:textValue="'Resend email?'" @click="submitForm()"/>
                        <BlueButton v-bind:textValue="'Next'" @click="submitForm()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./ResetPassword.js'></script>