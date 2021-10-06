<template>
  <div id="nav" style="display:none;">
    <!--<router-link to="/">Registration</router-link> |
    <router-link to="/Todoo">Todoo</router-link>-->
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Delius+Unicase:wght@700&display=swap');
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
.gradient-text{
    text-transform: uppercase;
	background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
  background-clip: text;
	-webkit-text-fill-color: transparent;
    font-size: 24px;
    font-family: 'Delius Unicase', cursive;
    font-weight: 700;
    margin: 0;
    padding: 0;
    margin-top: 4px;
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
.blue-link-1{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: #1a73e8;
  font-size: 16px;
  line-height: 1.42;
  width: max-content;
  padding: 1%;
}
.blue-link-1:hover{
  background-color: #e9f4fb;
  border-radius: 4px;
}
.blue-button-1{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.42;
  padding: 1%;
  text-align: center;
  cursor: pointer;
  background-color: #1a73e8;
  color: #fff;
  border-radius: 4px;
  border-width: 0;
  height: 35px;
  width: 80px;
}
.blue-button-1:hover{
  background-color: #3566b8;
}
.checkbox-input{
  width: 18px;
  height: 18px;
  cursor: pointer;
}


@media screen and (max-width:320px) {
  .blue-link-1{
    font-size: 14px;
  }
}
</style>
