<script setup lang="ts">
import { queryZkList } from '../../api/zkInfo';
import TdMap from '../../components/TdMap.vue'
import TdMapMark from '../../components/TdMapMark.vue';
import TdMapPolygon from '../../components/TdMapPolygon.vue';
import { ref } from 'vue';
const points = ref([]);
/**
 * @description 创建多边形
 */
const polygonPointList = ref([]);

const polygonList = ref([]);

// Fetch the data using GET method
console.log(fetch("/承德目标区.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the response is in JSON format
  })
  .then(data => {
    // Process the data received from the server
    console.log('Data received:', data.features[0].geometry.coordinates[0]);
    const coordinates = data.features[0].geometry.coordinates[0];

    const getPolygonPointList = (coordinates)=>{
      return coordinates.map(coordinate=>({lng:coordinate[0],lat:coordinate[1]}));
    }
    polygonList.value = data.features.map(feature=>getPolygonPointList(feature.geometry.coordinates[0]));

  })
  .catch(error => {
    console.error('Error:', error);
  }));

  queryZkList(1, 100).then(res=>{
      console.log(res.zkList);
      points.value = res.zkList;
    })

/**
 * @description 点击标记的方法
 */
const onTdMapMarkClick = ({event, openInfoWindow}, pointInfo)=>{
  const lng = event.lnglat.getLng();
  const lat = event.lnglat.getLat();
  const infoStr = `
                  <b>
                      钻孔编号:${pointInfo.number}<br/>
                      经度:${pointInfo.lng}<br/>
                      纬度:${pointInfo.lat}<br/>
                      钻孔深度:${pointInfo.depth}<br/>
                      场地类别:${pointInfo.category}
                  <b/>
                  `
  openInfoWindow(lng,lat, infoStr);
}


// const onTdMapPolygonClick = ({event, openInfoWindow})=>{
//   const lng = event.lnglat.getLng();
//   const lat = event.lnglat.getLat();
//   const infoStr = `临城目标区范围`
//   openInfoWindow(lng,lat, infoStr);
// }


</script>
<template>
<div class="map-page full-height">
    <TdMap>
        <template
        v-for="point in points">
        <TdMapMark
            :lng-lat="{lng:point.lng, lat:point.lat}"
            @click="({event, openInfoWindow})=>{onTdMapMarkClick({event, openInfoWindow,},point)}">
        </TdMapMark>
        </template>
        <template
          v-for="polygon in polygonList">
          <TdMapPolygon
            :pointlng-lat-list="polygon">
          </TdMapPolygon>
        </template>
        <!-- <TdMapGeoJson>
        </TdMapGeoJson> -->
    </TdMap>
</div>
</template>
<style lang="scss">
.map-page{
    position:relative;
}
</style>