import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
const httpInstance = axios.create({
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});

httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // console.log(e);
    return Promise.reject(e);
  }
);

export default httpInstance;
