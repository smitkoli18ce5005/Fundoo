<template>
    <div class="dashboard-div">
        <DashboardHeader />
        <div class="content-div">
            <SideNavigation />
            <div class="notes-content">
                <NewNote />
                <NotesHolder />
            </div>
        </div>
    </div>
</template>

<script type='module' src='./Dashboard.js'></script>