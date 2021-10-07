<template>
    <div v-show="link" class="blue-link">
        <a :href="link" v-text="textValue"></a>
    </div>
</template>

<script type='module' src='./BlueLink.js'></script>