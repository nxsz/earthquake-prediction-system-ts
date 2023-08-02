import { ListPesponse } from "./ListResponse"

export interface soilDynamicExperimentParams {
    zkNumber?: String,
    number?: String,
    topPoint?: Number,
    endPoint?: Number,
    stratum?: String,
    density?: Number,
    "modulusToShearStrainRatio0_05"?: Number,
    "modulusToShearStrainRatio0_1"?: Number,
    "modulusToShearStrainRatio0_5"?: Number,
    modulusToShearStrainRatio1?: Number,
    modulusToShearStrainRatio5?: Number,
    modulusToShearStrainRatio10?: Number,
    modulusToShearStrainRatio50?: Number,
    modulusToShearStrainRatio100?: Number,
    "dampingRatioOfShearStrain0_05"?: Number,
    "dampingRatioOfShearStrain0_1"?: Number,
    "dampingRatioOfShearStrain0_5"?: Number,
    dampingRatioOfShearStrain1?: Number,
    dampingRatioOfShearStrain5?: Number,
    dampingRatioOfShearStrain10?: Number,
    dampingRatioOfShearStrain50?: Number,
    dampingRatioOfShearStrain100?: Number,
  }

  interface soilDynamicExperimentParamsResponse extends ListPesponse {
    soilDynamicExperimentParamsList:soilDynamicExperimentParams[]
  }