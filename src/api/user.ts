import request from "../request/index";

export const login = (username:string, password:string)=>{
    return request({
      url:"/api/user/login",
      method:"post",
      data:{username, password} 
    })
}