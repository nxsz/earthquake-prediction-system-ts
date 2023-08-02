
import request from "../request/index";
import {FindingsShearWaveVelocityMeasuredValueResponse } from "../type/FindingsShearWaveVelocityMeasuredValue";


export const queryFindingsShearWaveVelocityMeasuredValueList = (zkNumber: any, pageNum:number, pageSize:number):Promise<FindingsShearWaveVelocityMeasuredValueResponse> =>{
    return request({
      url:"/api/findingsShearWaveVelocityMeasuredValue/queryFindingsShearWaveVelocityMeasuredValueList",
      method:"get",
      params:{zkNumber,pageNum, pageSize} 
    })
}