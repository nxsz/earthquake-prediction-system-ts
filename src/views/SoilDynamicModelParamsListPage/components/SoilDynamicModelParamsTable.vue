<template>
    <div
      ref="tableRef">
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
import { soilDynamicModelParams } from '../../../type/soilDynamicModelParams';
import { PaginationProps } from 'ant-design-vue';
  const tableRef = ref();
  const offsetHeight = ref(0);
  const props = defineProps({
    dataSource:Array<soilDynamicModelParams>,
    pagination:Object,
    loading:Boolean,
  })
  watch(props, (newProps)=>{
    console.log(newProps.dataSource);
  })
  onMounted(()=>{
    const el = tableRef.value;
    offsetHeight.value = el.offsetHeight;
  });
  const emit = defineEmits(["change"])
  const columns = [{"title":"钻孔编号","dataIndex":"zkNumber","key":"zkNumber"},{"title":"土类名称","dataIndex":"name","key":"name"},{"title":"土层深度（m）","dataIndex":"depth","key":"depth"},{"title":"土层厚度(m),","dataIndex":"thickness","key":"thickness"},{"title":"波速(m/s)","dataIndex":"velocity","key":"velocity"},{"title":"密度(g/cm^3)","dataIndex":"density","key":"density"},{"title":"土类编号","dataIndex":"number","key":"number"}];
  const onChange = (pagination:PaginationProps) => {
    console.log(pagination)
    emit("change", pagination);
  }


  </script>
  
  