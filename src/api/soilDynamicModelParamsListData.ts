
import request from "../request/index";
import {soilDynamicModelParamsResponse } from "../type/soilDynamicModelParams";


export const querySoilDynamicModelParamsList = (zkNumber: any, pageNum:number, pageSize:number):Promise<soilDynamicModelParamsResponse> =>{
    return request({
      url:"/api/soilDynamicModelParams/querysoilDynamicModelParamsList",
      method:"get",
      params:{zkNumber,pageNum, pageSize} 
    })
}