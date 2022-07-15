<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import Hero from "./components/Hero.jsx";
function showMessage() {
  ElMessageBox.prompt("Please input your e-mail", "Tip", {
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: "Invalid Email",
  });
}
</script>

<template>
  <el-config-provider :locale="zhCn">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Hero></Hero>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <el-button @click="showMessage">
      <span class="less"> less </span>
    </el-button>
  </el-config-provider>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .less {
    color: red;
    user-select: none;
  }
}
</style>
