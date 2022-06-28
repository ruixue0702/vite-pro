<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

const confirm = (smg: number) => {
  console.log('confirm', smg)
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Test>
    <template #default> 默认插槽 #default </template>
    <template #title><h3>具名插槽 #title</h3></template>
  </Test>
  <!-- <Test v-slots={{
    title: () => <h3>v-slots title</h3>
  }}>
  </Test> -->
  <!-- 
    1.primary， secondary， text
    2.size
    3.disabled
    4.block
    5.iconButton
   -->
  <s-button type="primary" size="large" block @click="confirm(0)"
    >确定</s-button
  >
  <s-button type="primary" size="medium" @click="confirm(1)">确定</s-button>
  <s-button type="primary" size="small" disabled @click="confirm(2)"
    >确定</s-button
  >

  <SButton type="secondary">确定</SButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
