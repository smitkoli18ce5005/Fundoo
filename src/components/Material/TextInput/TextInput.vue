<template>
    <div v-if="error" class="input-holder error">
            <input :type="inputType" :id="id" :name="id" required=''>
            <label :alt="placeHolder" :placeholder="placeHolder"></label>
    </div>
    <div v-else class="input-holder">
            <input :type="inputType" :id="id" :name="id" required=''>
            <label :alt="placeHolder" :placeholder="placeHolder"></label>
    </div>
</template>

<script type='module' src='./TextInput.js'></script>