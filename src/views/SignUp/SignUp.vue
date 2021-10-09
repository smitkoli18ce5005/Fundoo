<template>
    <div class="signup-outer-div">
        <div class="signup-inner-div">
            <div class="signup-div">
                <div class="signup-form">
                    <div class="input-pair-2">
                        <FundooLogo />
                        <h1 class="heading-h1">Create your Fundoo Account</h1>
                    </div>
                    <div class="input-pair-2">
                        <div class="input-pair-1">
                            <TextInput v-bind:inputType="'text'" v-bind:id="'firstName'" v-bind:placeHolder="'First Name'" v-bind:error="v$.name.firstName.$error" v-model:data.sync="name.firstName" />
                            <TextInput v-bind:inputType="'text'" v-bind:id="'lastName'" v-bind:placeHolder="'Last Name'" v-bind:error="v$.name.lastName.$error" v-model:data.sync="name.lastName" />
                        </div>
                        <small v-if="v$.name.$error" class="small-text-1 error" v-text="v$.name.$errors[0].$message"></small>
                        <small v-else class="small-text-1" v-text="''"></small>
                    </div>
                    <div class="input-pair-2">
                        <TextInput v-bind:inputType="'text'" v-bind:id="'email'" v-bind:placeHolder="'Email'" v-bind:error="v$.email.$error" v-model:data.sync="email" />
                        <small v-if="v$.email.$error" class="small-text-1 error" v-text="v$.email.$errors[0].$message"></small>
                        <small v-else class="small-text-1">You can use letters, numbers and periods</small>
                     </div>
                     <BlueLink v-bind:link="''" v-bind:textValue="'Use my current email address instead'" />
                     <div class="password-div">
                        <div class="input-pair-1">
                            <TextInput v-bind:inputType="showPassword ? 'text' : 'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="v$.password.password.$error" v-model:data.sync="password.password" />
                            <TextInput v-bind:inputType="showPassword ? 'text' : 'password'" v-bind:id="'confirm'" v-bind:placeHolder="'Confirm'" v-bind:error="v$.password.confirmPassword.$error" v-model:data.sync="password.confirmPassword" />
                        </div>
                        <small v-if="v$.password.$error" class="small-text-1 error" v-text="v$.password.$errors[0].$message"></small>
                        <small v-else class="small-text-1">Use 8 or more characters with a mix of letters, numbers &amp; symbols</small>
                    </div>
                    <div class="show-password-div">
                        <input class="checkbox-input" type="checkbox" id="showPassword" name="showPassword" v-model="showPassword">
                        <small class="small-text-2">Show password</small>
                    </div>
                    <div class="signin-div">
                        <BlueLink v-bind:link="'http://localhost:8080/SignIn'" v-bind:textValue="'Sign in instead'" />
                        <BlueButton v-bind:textValue="'Next'" @click="submitForm()"/>
                    </div>
                </div>
            </div>
            <div class="logo-div">
                <figure>
                    <img src="@/assets/Signup/account.svg" alt="account image">
                    <figcaption class="small-text-3">One account. All of Fundoo working for you.</figcaption>
                </figure> 
            </div>
        </div>
    </div>
</template>

<script type='module' src='./SignUp.js'></script>
