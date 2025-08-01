<script setup>
import HomePanel from "./HomePanel.vue";
import { findHotAPI } from "@/apis/home";
import { onMounted, ref } from "vue";

const hotList = ref([]);

const findHot = async () => {
  const res = await findHotAPI();
  hotList.value = res.result;
  // console.log(res);
};

onMounted(() => {
  findHot();
});
</script>

<template>
  <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="" />
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 /20%);
    }

    a {
      img {
        width: 306px;
        height: 306px;
      }

      p {
        font-size: 22px;
        padding-top: 12px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .desc {
        color: #999;
        font-size: 18px;
      }
    }
  }
}
</style>
