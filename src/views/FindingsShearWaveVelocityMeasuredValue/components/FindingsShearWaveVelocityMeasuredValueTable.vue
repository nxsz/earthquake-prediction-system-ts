<template>
  <div ref="tableRef">
    <a-table 
        :columns="columns"
        :data-source="props.dataSource"
        :pagination="pagination"
        :scroll="{x: 'max-content', y:`calc(100vh - ${offsetHeight}px)`}"
        @change="onChange"
        :row-class-name="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)"
        size="small"
        bordered>
    </a-table>
  </div>
  </template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { FindingsShearWaveVelocityMeasuredValue } from '../../../type/FindingsShearWaveVelocityMeasuredValue';
import { PaginationProps } from 'ant-design-vue';


  
// import { onMounted } from 'vue';
  const props = defineProps({
    dataSource:Array<FindingsShearWaveVelocityMeasuredValue>,
    pagination:Object,
    loading:Boolean,
  })
  watch(props, (newProps)=>{
    console.log(newProps.dataSource);
  })
  const tableRef = ref();
  const offsetHeight = ref(0);
  onMounted(()=>{
    const el = tableRef.value;
    offsetHeight.value = el.offsetHeight;
  });
  const emit = defineEmits(["change"])
  const columns = [{"title":"所属钻孔 ","dataIndex":"zkNumber","key":"zkNumber"},{"title":" 岩土名称  ","dataIndex":"soilName","key":"soilName"},{"title":"层底深度(m)  ","dataIndex":"bedrockDepth","key":"bedrockDepth"},{"title":"分层厚度(m)  ","dataIndex":"layerThickness","key":"layerThickness"},{"title":"剪切波速(m/s)","dataIndex":"shearWaveVelocity","key":"shearWaveVelocity"}];
  const onChange = (pagination:PaginationProps) => {
    console.log(pagination)
    emit("change", pagination);
  }


  </script>
  
  