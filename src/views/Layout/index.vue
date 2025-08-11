<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import Home from "@/views/Home/index.vue";
import LayouFooter from "@/views/Layout/components/LayoutFooter.vue";

import { useCategoryStore } from "@/stores/categoryStore";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => categoryStore.getCategory());
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader />
  <LayoutFixed></LayoutFixed>
  <!-- <Home></Home> -->

  <!-- <RouterView :key="$route.fullPath"></RouterView> -->
  <RouterView></RouterView>
  <LayouFooter></LayouFooter>
</template>
