import { ApiResponse } from "../request";

export interface Pagination{
    current:number,
    pageSize:number,
    total:number,
}

export interface ListPesponse extends ApiResponse {
    pager:Pagination,
}