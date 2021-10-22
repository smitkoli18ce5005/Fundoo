<template>
        <div class="notes-holder-div">
        <div v-if="comp == 'notes'" class="notes-view" :id="returnListViewForDisplay">
            <div class="display-note-holder" v-for="note in returnAllNotes" v-bind:key="note.userID">
                
                <DisplayNote v-bind:data="note" v-bind:comp="comp"/>
            </div>
        </div>
        <div v-else-if="comp == 'archived'" class="notes-view" :id="returnListViewForDisplay">
            <div class="display-note-holder" v-for="note in returnArchivedNotes" v-bind:key="note.userID">
                <DisplayNote v-bind:data="note" v-bind:comp="comp"/>
            </div>
        </div>
        <div v-else class="notes-view" :id="returnListViewForDisplay">
            <div class="display-note-holder" v-for="note in returnTrashedNotes" v-bind:key="note.userID">
                <DisplayNote v-bind:data="note" v-bind:comp="comp"/>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./NotesHolder.js'></script>