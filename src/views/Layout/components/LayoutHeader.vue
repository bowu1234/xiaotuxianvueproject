<script setup>
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore();
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{
            item.name
          }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  // position: sticky; /* 粘性定位 */
  // top: 0;
  // z-index: 1000;
  background-color: #fff;
  width: 100%;
  // will-change: transform; /* 提示浏览器优化 transform 属性 */
  // transition: all 0.3s ease; /* 添加过渡效果，使切换更平滑 */
  // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); /* 添加阴影，增强视觉效果 */

  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      width: 38px;
      text-align: center;
      margin-right: 40px;

      a {
        font-size: 16px;
        display: inline-block;
        line-height: 32px;
        height: 32px;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
}
</style>
