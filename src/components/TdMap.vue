<template>
    <div
        id="td-map_container">
        <slot></slot>
    </div>
  </template>
  <script setup>
  import { nextTick, onMounted, provide,ref} from 'vue';

  const TdMap = window.T;
      defineProps({
        markList:Array, // 标注点列表
        polygonList:Array,// 多边形列表
      });

    /**
     * @description 向地图上添加信息窗口的方法
     * @param {Float} lng 经度
     * @param {Float} lat 纬度
     * @param {String} infoStr 文字信息 可以写 html 代码片段
     */
        const openInfoWindow = (lng, lat, infoStr) => {
        const lnglat = new TdMap.LngLat(lng, lat);
        const infoWindow = new TdMap.InfoWindow();
        infoWindow.setContent(infoStr);
        map.openInfoWindow(infoWindow, lnglat);
    }

      //暴露父组件 挂载完成后的事件，用来传递一些只能父组件挂载完成后 才能获取到的对象 比如 dom 节点
      provide("onParentMounted",()=> new Promise((resolve, reject) => {
        nextTick(()=>{
            console.log(map);
            resolve(map);
        })
    }));

    provide("openInfoWindow", openInfoWindow);

      const refdom = ref('container');
      console.log(refdom);
      
      const imageURL = "http://t0.tianditu.gov.cn/img_c/wmts?tk=eedf6f5e4a0b370ad5ed6b45a9956244";
      const lay = new TdMap.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 });
      const config = { layers: [lay], name: 'TMAP_SATELLITE_MAP' };

    let map;
    onMounted(()=>{
    map = new TdMap.Map('td-map_container', config);
    map.clearOverLays();
    // debugger;
    const ctrl = new TdMap.Control.MapType();
    map.addControl(ctrl);
    map.centerAndZoom(new TdMap.LngLat(118.052881,40.83955), 13);
    // 地图绑定点击事件

    map.addEventListener("click",mapClick);        
    })
    

      /**
       * @description 地图点击事件
       * @param {*} e 
       */
      const mapClick = (e)=>{
        // alert(e.lnglat.getLng()+","+e.lnglat.getLat());
        // openInfoWindow(e.lnglat.getLng(), e.lnglat.getLat());
      }
  </script>
  <style>
   #td-map_container {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  
  </style>