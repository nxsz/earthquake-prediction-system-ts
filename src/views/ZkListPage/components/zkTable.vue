<template>
    <div
    ref="tableRef">
    <a-table 
        :columns="columns" 
        :data-source="props.dataSource"
        :pagination="pagination"
        @change="onChange"
        :scroll="{x: 'max-content', y:`calc(100vh - ${offsetHeight}px)`}"
        :row-class-name="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)"
        size="small"
        bordered>
    </a-table>
  </div>
  </template>
  <script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { ZKinfo } from '../../../type/zkInfo';
import { PaginationProps } from 'ant-design-vue';


  
// import { onMounted } from 'vue';
  const props = defineProps({
    dataSource:Array<ZKinfo>,
    pagination:Object,
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
  const columns = [
    {
      title: '钻孔编号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '经度',
      dataIndex: 'lng',
      key: 'lng',
    },
    {
      title: '纬度',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: '深度',
      key: 'depth',
      dataIndex: 'depth',
    },
    {
      title: '场地类别',
      key: 'category',
      dataIndex: 'category',
    },
  ];
  const onChange = (pagination:PaginationProps) => {
    console.log(pagination)
    emit("change", pagination);
  }


  </script>
  
  