<script setup>
const TdMap = window.T;
import { inject, watch} from 'vue';


// 注入 挂载完成后的事件，用来传递一些只能父组件挂载完成后 才能获取到的对象 比如 dom 节点
const onParentMounted = inject("onParentMounted");
onParentMounted().then(res=>{
        console.log(res);
        init(res);
    })

const openInfoWindow = inject("openInfoWindow");

const props =defineProps({
    pointlngLatList:Array,
})

const emit = defineEmits(["click"])

watch(props, (value)=>{
    drawPolygon();
})

let mapinstance;

/**
 * 初始化 marker 标记
 * @param {*} map 
 */
const init = (map)=>{
    mapinstance = map;
    console.log(mapinstance);
    drawPolygon();
}

const drawPolygon = ()=>{
    console.log(props.pointlngLatList);
    const polygonPoints = props.pointlngLatList.map(({lng, lat})=>{
        return new TdMap.LngLat(lng, lat);
      });

    const polygon = new T.Polygon(polygonPoints,{
            color: "blue", weight: 3, opacity: 0.5, fillColor: "#000", fillOpacity: 0.5, test:"自定义字符"
        });
    polygon.addEventListener("click", onClick);
    
    mapinstance.addOverLay(polygon);
}

const onClick = (e)=>{
    emit("click",{event: e, openInfoWindow})
}

</script>
<template>
</template>