<template>
    <div>
        <InputComponent />
        <div class="todoo-component-main-div">  
            <div class="todoo-list" v-for="items in returnAllPosts" v-bind:key="items.id">
                {{items.title}}
                <button @click="deleteData(items.id)">Delete</button>
            </div>
        </div>
    </div> 
</template>

<script type='module' src='./TodooComponent.js'></script>