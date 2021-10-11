<template>
    <div class="forget-password-outer-div">
        <div class="forget-password-inner-div">
            <div class="forget-password-form">
                <FundooHeader v-bind:title="'Reset your password'" v-bind:subTitle="'Enter your email'"/>
                <div class="input-pair-2">
                    <TextInput v-bind:inputType="'text'" v-bind:id="'email'" v-bind:placeHolder="'Email'" v-bind:error="v$.email.$error" v-model:data.sync="email" />
                    <small v-if="v$.email.$error" class="small-text-1 error" v-text="v$.email.$errors[0].$message"></small>
                </div>
                <div class="signin-div">
                        <BlueLink />
                        <BlueButton v-bind:textValue="'Next'" @click="submitForm()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./ForgetPassword.js'></script>