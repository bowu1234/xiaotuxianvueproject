<script setup>
import { getBannerAPI } from "@/apis/home";
import { onMounted, ref } from "vue";

const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerAPI();
  bannerList.value = res.result;
  // console.log(res);
};

onMounted(() => getBanner());
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 495px;
  position: absolute;
  left: 0;
  top: 0;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
