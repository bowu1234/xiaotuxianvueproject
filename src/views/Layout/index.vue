<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import Home from "@/views/Home/index.vue";
import LayouFooter from "@/views/Layout/components/LayoutFooter.vue";
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader />

  <Home></Home>
  <LayouFooter></LayouFooter>
</template>
