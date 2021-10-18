<template>
    <div class="dashboard-header-div">
        <SmallSearchBox />
        <KeepLogo v-if="!returnSmallSearchBox"  />
        <div class="action-component">
            <SearchBox />
            <ActionButtons />
        </div>
        <AccountButtons />
    </div>
</template>

<script type='module' src='./DashboardHeader.js'></script>