<script setup></script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul class="navlist">
        <template v-if="true">
          <li class="nav-item">
            <a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a>
          </li>
          <li class="nav-item">
            <el-popconfirm title="确认退出吗" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li class="nav-item"><a href="javascript:;">我的订单</a></li>
          <li class="nav-item"><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li class="nav-item"><a href="javascript::">请先登录</a></li>
          <li class="nav-item"><a href="javascript::">帮助中心</a></li>
          <li class="nav-item"><a href="javascript::">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  height: 40px;
  background: #333;
  box-shadow: 0 1px 2px #666;
  .container {
    .navlist {
      display: flex;
      justify-content: flex-end;
      height: 40px;
      .nav-item {
        width: 100px;
        height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        position: relative;
        a {
          display: block;
          color: #fff;
          width: 100%;
          height: 100%;
          line-height: 40px;
          // align-items: center;
          // text-align: center;
          &:hover {
            color: #5eb69c;
            background: #222;
          }
        }
        &::before {
          content: "";
          display: inline-block;
          left: 0;
          // position: absolute;
          // top: 10px;
          height: 20px;
          width: 0;
          border-left: 2px solid #444;
        }
        &:first-child::before {
          // border-left: none;
          display: none;
        }
      }
    }
  }
}
</style>
