<script setup lang="ts"></script>

<template>
  <div>HelloWorld</div>
  <el-button>切换</el-button>
</template>

<style scoped>
@keyframes myAnimation {
  0% {
    transform: translate(0, 0);
    background-color: pink;
  }
  50% {
    transform: translate(0, 100px);
    background-color: pink;
  }
  75% {
    transform: translate(200px, 100px);
    background-color: blue;
  }
  100% {
    transform: translate(300px, 300px) rotate(30deg);
    opacity: 0;
  }
}

.myDiv {
  background: linear-gradient(to right, #00ffff, #0000ff, #800080);

  width: 100px;
  height: 100px;
  background-color: pink;
  animation: myAnimation 3s linear;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
