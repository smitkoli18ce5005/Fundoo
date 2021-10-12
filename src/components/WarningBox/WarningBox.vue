<template>
    <div v-if="returnMessages != ''" class="warning-box">
        <span class="closebtn" @click="removeNotification()">&times;</span> 
        <strong v-text="returnMessages"></strong>
    </div>
</template>

<script type='module' src='./WarningBox.js'></script>