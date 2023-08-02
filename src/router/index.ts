import {RouteRecordRaw, RouterView, createRouter, createWebHashHistory } from "vue-router";
import AppLayoutVue from "../layout/AppLayout.vue";
import LoginPageVue from "../views/login/LoginPage.vue";

export const autoRoutes:RouteRecordRaw[] = [
    {
        path:"/home",
        component:()=>import("../views/MapPage/MapPage.vue"),
        children:[],
        meta:{
            label:"首页"
        }
    },
    {
        path:"/seismicActivityAnalysis",
        redirect:"/seismicActivityAnalysis/destructiveEarthquakeCatalog",
        component:RouterView ,
        meta:{
            label:"地震活动性分析",
            type:"submenu",
        },
        children:[{
            path:"/seismicActivityAnalysis/destructiveEarthquakeCatalog",
            meta:{
                label:"破坏性地震目录"
            },
            children:[]
        }],
    },
    {
        path:"/zkList",
        component:()=>import("../views/ZkListPage/ZkListPage.vue"),
        children:[],
        meta:{
            label:"钻孔数据"
        }
    },
    {
        path:"/soilDynamicExperimentParams",
        component:()=>import("../views/soilDynamicExperimentParamsListPage/SoilDynamicExperimentParamsListPage.vue"),
        children:[],
        meta:{
            label:"土动力学试验参数"
        }
    },
    {
        path:"/soilDynamicModelParams",
        component:()=>import("../views/SoilDynamicModelParamsListPage/SoilDynamicModelParamsListPage.vue"),
        children:[],
        meta:{
            label:"土动力学模型参数"
        }
    },
    {
        path:"/findingsShearWaveVelocityMeasuredValue",
        component:()=>import("../views/FindingsShearWaveVelocityMeasuredValue/FindingsShearWaveVelocityMeasuredValueListPage.vue"),
        children:[],
        meta:{
            label:"成果数据-剪切波速实测值"
        }
    }
];

const routes:RouteRecordRaw[] = [
    {
        path:"/",
        redirect:autoRoutes[0].path,
        component:AppLayoutVue,
        children:autoRoutes,
        
    },
    {
        path:"/login",
        component:LoginPageVue,
        children:[]
        
        
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;




