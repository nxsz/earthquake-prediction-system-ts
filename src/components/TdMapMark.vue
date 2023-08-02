<script setup>
const TdMap = window.T;
import { inject} from 'vue';


// 注入 挂载完成后的事件，用来传递一些只能父组件挂载完成后 才能获取到的对象 比如 dom 节点
const onParentMounted = inject("onParentMounted");
onParentMounted().then(res=>{
        console.log(res);
        initMarker(res);
    })

const openInfoWindow = inject("openInfoWindow");

const{lngLat}=defineProps({
    lngLat:Object,
})

const emit = defineEmits(["click"])

/**
 * 初始化 marker 标记
 * @param {*} map 
 */
const initMarker = (map)=>{
    // alert(2);
    const marker = new TdMap.Marker(new TdMap.LngLat(lngLat.lng, lngLat.lat));
    marker.addEventListener("click", onMarkClick);
    
    map.addOverLay(marker);
}

const onMarkClick = (e)=>{
    emit("click",{event: e, openInfoWindow})
}

</script>
<template>
</template>