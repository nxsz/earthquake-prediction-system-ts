
import request from "../request/index";
import { ZKInfoResponse} from "../type/zkInfo";


export const queryZkList = (pageNum:number, pageSize:number):Promise<ZKInfoResponse> =>{
    return request({
      url:"/api/zk/queryZkList",
      method:"get",
      params:{pageNum, pageSize} 
    })
}