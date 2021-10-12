<template>
<div class="app">
  <div id="nav" style="display:none;">
    <!--<router-link to="/">Registration</router-link> |
    <router-link to="/Todoo">Todoo</router-link>-->
  </div>
  <router-view/>
  <WarningBox />
</div>
  
</template>

<script>
import WarningBox from '@/components/WarningBox/WarningBox.vue'
export default {
  name: 'App',
  components:{
    WarningBox
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  
    overflow-x: hidden;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.heading-h1{
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #202124;
  line-height: 1.333;
  margin: 0;
  margin-top: 4px;
  margin-bottom: 8px;
}
.small-text-1,
.small-text-2,
.small-text-3{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
}
.small-text-1{
  font-size: 12px;
  margin-left: 8px;
  padding-bottom: 8px;
}
.small-text-2{
  font-size: 14px;
  line-height: 1.48;
  margin-left: 10px;
}
.small-text-3{
  text-align: center;
  font-size: 16px;
  line-height: 1.42;
  color: #666;
}
.checkbox-input{
  width: 18px;
  height: 18px;
  cursor: pointer;
}



</style>
