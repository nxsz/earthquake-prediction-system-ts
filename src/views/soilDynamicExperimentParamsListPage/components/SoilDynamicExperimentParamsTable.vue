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
import { soilDynamicExperimentParams } from '../../../type/soilDynamicExperimentParams';
import { PaginationProps } from 'ant-design-vue';
import getTextWidth from '../../../utils/getTextWidth';


  
// import { onMounted } from 'vue';
  const props = defineProps({
    dataSource:Array<soilDynamicExperimentParams>,
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
  const columnList= [
    {"title":"所属钻孔","dataIndex":"zkNumber","key":"zkNumber", fixed: 'left'},
    {"title":"样品编号","dataIndex":"number","key":"number", fixed: 'left',},{"title":"取样深度顶点","dataIndex":"topPoint","key":"topPoint"},{"title":"取样深度底点","dataIndex":"endPoint","key":"endPoint"},{"title":"土层名称","dataIndex":"stratum","key":"stratum"},{"title":"密度","dataIndex":"density","key":"density"},{"title":" 模量比剪切应变 0.05","dataIndex":"modulusToShearStrainRatio0_05","key":"modulusToShearStrainRatio0_05"},{"title":" 模量比剪切应变 0.1","dataIndex":"modulusToShearStrainRatio0_1","key":"modulusToShearStrainRatio0_1"},{"title":" 模量比剪切应变 0.5","dataIndex":"modulusToShearStrainRatio0_5","key":"modulusToShearStrainRatio0_5"},{"title":" 模量比剪切应变 1","dataIndex":"modulusToShearStrainRatio1","key":"modulusToShearStrainRatio1"},{"title":" 模量比剪切应变 5","dataIndex":"modulusToShearStrainRatio5","key":"modulusToShearStrainRatio5"},{"title":" 模量比剪切应变 10","dataIndex":"modulusToShearStrainRatio10","key":"modulusToShearStrainRatio10"},{"title":" 模量比剪切应变 50","dataIndex":"modulusToShearStrainRatio50","key":"modulusToShearStrainRatio50"},{"title":" 模量比剪切应变 100","dataIndex":"modulusToShearStrainRatio100","key":"modulusToShearStrainRatio100"},{"title":"阻尼比剪切应变 0.05","dataIndex":"dampingRatioOfShearStrain0_05","key":"dampingRatioOfShearStrain0_05"},{"title":" 阻尼比剪切应变 0.1","dataIndex":"dampingRatioOfShearStrain0_1","key":"dampingRatioOfShearStrain0_1"},{"title":" 阻尼比剪切应变 0.5","dataIndex":"dampingRatioOfShearStrain0_5","key":"dampingRatioOfShearStrain0_5"},{"title":" 阻尼比剪切应变 1","dataIndex":"dampingRatioOfShearStrain1","key":"dampingRatioOfShearStrain1"},{"title":" 阻尼比剪切应变 5","dataIndex":"dampingRatioOfShearStrain5","key":"dampingRatioOfShearStrain5"},{"title":" 阻尼比剪切应变 10","dataIndex":"dampingRatioOfShearStrain10","key":"dampingRatioOfShearStrain10"},{"title":" 阻尼比剪切应变 50","dataIndex":"dampingRatioOfShearStrain50","key":"dampingRatioOfShearStrain50"},{"title":" 阻尼比剪切应变 100","dataIndex":"dampingRatioOfShearStrain100","key":"dampingRatioOfShearStrain100"},{"title":"参数说明","dataIndex":" remark","key":" remark"}];
  const columns = columnList.map(column=>({...column, width: getTextWidth(column.title)}));
  const onChange = (pagination:PaginationProps) => {
    console.log(pagination)
    emit("change", pagination);
  }


  </script>
  
  