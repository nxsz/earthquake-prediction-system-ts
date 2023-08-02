import { ListPesponse } from "./ListResponse"

export interface soilDynamicModelParams {
  "zkNumber"?: String,
  "depth"?: Number,
  "thickness"?: Number,
  "velocity"?: Number,
  "density"?: Number,
  }

  interface soilDynamicModelParamsResponse extends ListPesponse {
    soilDynamicModelParamsList:soilDynamicModelParams[]
  }