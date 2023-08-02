import Axios from "axios";
import type { AxiosInstance, AxiosResponse, CreateAxiosDefaults } from "axios";
import store from "store";
import { message } from "ant-design-vue";
enum stateCodeEnum   {
  SUCCESS='0000',//成功
  PARAM_ERROR='1001', //参数错误
  USER_ACCOUNT_ERROR='1002', //账号或密码错误  
  USER_LOGIN_ERROR='1003',//用户未登录
  TOKEN_ERROR='1004',//token校验失败
  ERROR='9999',//通用错误
  DB_ERROR='1005',//数据库操作错误
}

// 传入泛型约束返回数据类型
// ApiResponse 主体后端返回格式
export interface ApiResponse<T = any> {
  code: stateCodeEnum;
  message: string;
   data: T; // 这里定义请求返回data数据类型
 }

class Reuqest {
  axiosInstance: AxiosInstance;
  /**
   *
   * @param config Axios 初始化配置
   */
  constructor(config: CreateAxiosDefaults) {
    this.axiosInstance = Axios.create(config);

    this.initInterceptors();
  }

  /**
   * @description 初始化 axios 拦截器
   */
  private initInterceptors() {

    // 创建请求拦截器
    this.axiosInstance.interceptors.request.use(async(config)=>{
      config.headers.token = store.get("token");
      return config;
    })


    this.axiosInstance.interceptors.response.use(async (res:AxiosResponse<ApiResponse>) => {
      if(res.data.code == stateCodeEnum.SUCCESS){
        return Promise.resolve(res.data.data);
      }
      message.error(res.data.message);
      return Promise.reject(res.data);
    });
  }

  getAxiosInstace() {
    return this.axiosInstance;
  }
}

console.log(import.meta.env.APP_BASE_URL);
export default new Reuqest({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers:{"Content-Type":"application/json"}
}).getAxiosInstace()
