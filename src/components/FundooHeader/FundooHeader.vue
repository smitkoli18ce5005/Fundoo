<template>
  <div class="fundoo=header-div">
    <div v-if="subTitle" class="input-pair-2" style="text-align:center">
      <FundooLogo />
      <h1 class="heading-h1" v-text="title"></h1>
      <span class="small-text-3" v-text="subTitle"></span>
    </div>
    <div v-else class="input-pair-2">
      <FundooLogo />
      <h1 class="heading-h1" v-text="title"></h1>
    </div>
  </div>
</template>

<script type='module' src='./FundooHeader.js'></script>