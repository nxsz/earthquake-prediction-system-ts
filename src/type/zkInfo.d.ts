import { ListPesponse } from "./ListResponse"

export interface ZKinfo {
    number?:string,
    lng?:number,
    lat?:number,
    depth?:number,
    category?:string,
    diameter?:number,
    stableWaterDepth?:number,
    firstEncounteredWaterDepth?:number,
    elevation?:number,
    date?:Date
  }

  interface ZKInfoResponse extends ListPesponse {
    zkList:ZKinfo[]
  }