<script setup></script>
<template>
  <footer class="app_footer">
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客房服务</dt>
          <dd>
            <i class="iconfont icon-kefu">在线客服</i>
          </dd>
          <dd>
            <i class="iconfont icon-question">问题反馈</i>
          </dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd>
            <i class="iconfont icon-weixin">公众号</i>
          </dd>
          <dd>
            <i class="iconfont icon-weibo">微博</i>
          </dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-000<small>周一至周日 8：00-18：00</small></dd>
        </dl>
      </div>
    </div>
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <div class="copyright">
          <p>
            <a href="javscript:;">关于我们</a>
            <a href="javscript:;">帮助中心</a>
            <a href="javscript:;">售后服务</a>
            <a href="javscript:;">配送与验收</a>
            <a href="javscript:;">商务合作</a>
            <a href="javscript:;">搜索推荐</a>
            <a href="javscript:;">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app_footer {
  background-color: #f5f5f5;
  padding-top: 20px;
  overflow: hidden;
  .contact {
    background: #fff;

    .container {
      display: flex;
      padding: 60px 0 40px 25px;
      align-items: center;
      dl {
        height: 190px;
        text-align: center;
        padding: 0 72px;
        border-right: 1px solid #f2f2f2;
        color: #999;
        overflow: hidden;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: 0;
          padding-right: 0;
        }
        dt {
          font-size: 18px;
          line-height: 1;
        }
        dd {
          margin: 36px 12px 0 0;
          float: left;
          width: 92px;
          height: 92px;
          padding-top: 10px;
          border: 1px solid #ededed;
          .iconfont {
            font-size: 20px;
            display: block;
            color: #666;
          }
          &:hover {
            .iconfont {
              color: $xtxColor;
            }
          }
          &:last-child {
            margin-right: 0;
          }
        }
        .qrcode {
          width: 92px;
          height: 92px;
          padding: 7px;
          border: 1px solid #ededed;
        }
        .download {
          padding-top: 5px;
          font-size: 14px;
          width: auto;
          height: auto;
          border: none;
          span {
            display: block;
          }
          a {
            display: block;
            line-height: 1;
            padding: 10px 25px;
            margin-top: 5px;
            color: #fff;
            background-color: $xtxColor;
            border-radius: 2px;
          }
        }
        .hotline {
          padding-top: 20px;
          font-size: 22px;
          width: auto;
          height: auto;
          border: none;
          color: #666;
          small {
            display: block;
            font-size: 15px;
            color: #999;
          }
        }
      }
    }
  }
  .extra {
    background-color: #333;
    .container {
      .slogan {
        height: 178px;
        line-height: 58px;
        padding: 60px 100px;
        border-bottom: 1px solid #434343;
        display: flex;
        justify-content: space-around;
        a {
          height: 58px;
          line-height: 58px;
          font-size: 28px;
          i {
            font-size: 50px;
            font-weight: 100;
            vertical-align: middle;
            margin-right: 10px;
          }
          span {
            color: #fff;
            vertical-align: middle;
            text-shadow: 0 0 1px #333;
          }
        }
      }
      .copyright {
        height: 170px;
        padding-top: 40px;
        font-size: 15px;
        color: #999;
        text-align: center;
        p {
          line-height: 1;
          margin-bottom: 20px;
          a {
            color: #999;
            // display: flex;
            padding: 0 10px;
            border-right: 1px solid #999;
            &:last-child {
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>
