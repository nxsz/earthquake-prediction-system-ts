
import request from "../request/index";
import { soilDynamicExperimentParams, soilDynamicExperimentParamsResponse } from "../type/soilDynamicExperimentParams";


export const querySoilDynamicExperimentParamsList = (zkNumber: any, pageNum:number, pageSize:number):Promise<soilDynamicExperimentParamsResponse> =>{
    return request({
      url:"/api/soilDynamicExperimentParams/querySoilDynamicExperimentParamsList",
      method:"get",
      params:{zkNumber,pageNum, pageSize} 
    })
}