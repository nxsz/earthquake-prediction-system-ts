<script setup lang="ts">
import soilDynamicExperimentParamsTable from './components/SoilDynamicExperimentParamsTable.vue';
import { onMounted, reactive, ref } from 'vue';
import {soilDynamicExperimentParams} from "../../type/soilDynamicExperimentParams";
import {querySoilDynamicExperimentParamsList} from "../../api/soilDynamicExperimentParamsListData"
import SearchForm from './components/SearchFrom.vue';
  const dataSource = ref<soilDynamicExperimentParams[]>([]);
  const params = reactive<soilDynamicExperimentParams>({
    zkNumber:undefined,
  })

  const paginationParams = reactive({
      total:0,
      pageSize:20,
      pageNum:1,
    });
  const loading = ref<boolean>(false)

  const onSearch = (value: soilDynamicExperimentParams)=>{
    params.zkNumber = value.zkNumber;
    paginationParams.pageNum = 1;
    getSoilDynamicExperimentParamsListData();

  }

  const onReset = ()=>{
    params.zkNumber = undefined;
    paginationParams.pageNum = 1;
    getSoilDynamicExperimentParamsListData();
  }

  const getSoilDynamicExperimentParamsListData = ()=>{
    loading.value = true;
    querySoilDynamicExperimentParamsList(
      params.zkNumber,
      paginationParams.pageNum,
      paginationParams.pageSize)
      .then((res)=>{
        loading.value = false
        paginationParams.total = res.pager.total;
      dataSource.value = res.soilDynamicExperimentParamsList;
    }).catch(()=>{
      loading.value = false
    })
  }

  const onSoilDynamicExperimentParamsTableChange = (pagination: { current: number; pageSize: number; })=>{
    paginationParams.pageNum = pagination.current;
    paginationParams.pageSize = pagination.pageSize;
    console.log(params);
    getSoilDynamicExperimentParamsListData();
  }



  onMounted(()=>{
    getSoilDynamicExperimentParamsListData();
  });

  

</script>

<template>
  <a-space
    direction="vertical"
    size="large"
    style="width: 100%;">
    <SearchForm
      @search="onSearch"
      @reset="onReset"
      :loading="loading">
    </SearchForm>
    <soilDynamicExperimentParamsTable

      :data-source="dataSource"
      @change="onSoilDynamicExperimentParamsTableChange"
      :pagination="paginationParams"
      :loading="loading">
    </soilDynamicExperimentParamsTable>
  </a-space>
  
</template>