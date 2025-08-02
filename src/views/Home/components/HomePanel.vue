<script setup>
defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
});
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-panel {
  background: #fff;

  .container {
    .head {
      padding: 40px 0;
      display: flex;
      align-items: flex-end;

      h3 {
        flex: 1;
        font-size: 32px;
        margin-left: 6px;
        height: 35px;
        line-height: 35px;
        font-weight: normal;
        small {
          font-size: 16px;
          color: #999;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
