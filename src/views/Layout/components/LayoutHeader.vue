<script setup></script>

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
        <li><RouterLink to="/">居家</RouterLink></li>
        <li><RouterLink to="/">美食</RouterLink></li>
        <li><RouterLink to="/">服饰</RouterLink></li>
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
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
      }
    }
    .app-header-nav {
      width: 820px;
      height: 32px;
      display: flex;
      align-items: center;
      text-align: center;
      li {
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        font-weight: 400;
        width: 40px;
        margin-right: 40px;
        padding-left: 17px;
        a {
          display: inline-block;
          align-items: center;
          text-align: center;
          line-height: 32px;
          width: 32px;
          height: 32px;
          &:hover {
            color: #5eb69c;
          }
        }
      }
      .home {
        margin-left: 40px;
      }
    }
    .search {
      padding-left: 10px;
      .iconfont {
        background: url("#");
      }
      input {
        width: 170px;
        height: 32px;
        box-shadow: 0px 3px 1px #f4f4f4;
      }
    }
  }
}
</style>
