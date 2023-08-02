import { ListPesponse } from "./ListResponse"

export interface FindingsShearWaveVelocityMeasuredValue {
  "zkNumber"?: String,
  "soilName"?: String,
  "bedrockDepth"?: Number,
  "layerThickness"?: Number,
  "shearWaveVelocity"?: Number,
  }

  interface FindingsShearWaveVelocityMeasuredValueResponse extends ListPesponse {
    findingsShearWaveVelocityMeasuredValueList:FindingsShearWaveVelocityMeasuredValue[]
  }