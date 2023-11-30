<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>

</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>

<style>
 * {
   margin: 0;
   padding: 0;
   font-family: 'Ubuntu', sans-serif;
 }
 .app {
    box-sizing: border-box;
    padding-top: 100px;
    min-height: 100vh;
    background-color: #d0d0d0;
 }
</style>
