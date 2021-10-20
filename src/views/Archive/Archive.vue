<template>
    <div class="archive-div">
        <DashboardHeader />
        <div class="content-div">
            <SideNavigation />
            <div class="notes-content">
                <NotesHolder v-bind:comp="'archived'"/>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./Archive.js'></script>