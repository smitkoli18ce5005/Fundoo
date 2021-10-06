<template>
    <div class="signup-outer-div">
        <div class="signup-holder">
            <div class="signup-inner-div">
                <div class="signup-div">
                    <div class="form">
                        <div class="input-pair-2"><h1 class="gradient-text">Fundoo</h1>
                        <h1 class="heading-h1">Create your Fundoo Account</h1></div>
                        
                        <div class="input-pair-2">
                            <div class="input-pair-1">
                                <TextInput v-bind:inputType="'text'" v-bind:id="'firstName'" v-bind:placeHolder="'First Name'" v-bind:error="false" />
                                <TextInput v-bind:inputType="'text'" v-bind:id="'lastName'" v-bind:placeHolder="'Last Name'" v-bind:error="false" />
                            </div>
                            <small v-if="false" class="small-text-1 error">There was an error</small>
                        </div>
                        <div class="input-pair-2">
                            <TextInput v-bind:inputType="'text'" v-bind:id="'userName'" v-bind:placeHolder="'User Name'" v-bind:error="false" />
                            <small v-if="false" class="small-text-1 error">There was an error</small>
                            <small v-else class="small-text-1">You can use letters, numbers and periods</small>
                        </div>
                        <a class="blue-link-1" href="#">Use my current email address instead</a>
                        <div class="password-div">
                            <div class="input-pair-1">
                                <TextInput v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="false" />
                                <TextInput v-bind:inputType="'password'" v-bind:id="'confirm'" v-bind:placeHolder="'Confirm'" v-bind:error="false" />
                            </div>
                            <small v-if="false" class="small-text-1 error">There was an error</small>
                            <small v-else class="small-text-1">Use 8 or more characters with a mix of letters, numbers &amp; symbols</small>
                        </div>
                        <div class="show-password-div">
                            <input class="checkbox-input" type="checkbox" id="showPassword" name="showPassword">
                            <small class="small-text-2">Show password</small>
                        </div>
                        <div class="signin-div">
                            <a class="blue-link-1" href="http://localhost:8080/signin">Sign in instead</a>
                            <button class="blue-button-1">Next</button>
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
    </div>
</template>

<script type='module' src='./Signup.js'></script>