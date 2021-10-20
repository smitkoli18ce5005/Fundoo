<template>
    <div class="notes-holder-div">
        <div class="notes-view" :id="returnListViewForDisplay">
            <div class="display-note-holder" v-for="note in returnAllNotes" v-bind:key="note.userID">
                <DisplayNote v-bind:data="note"/>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./NotesHolder.js'></script>