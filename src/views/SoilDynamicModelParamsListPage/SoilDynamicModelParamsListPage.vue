<script setup lang="ts">
import soilDynamicModelParamsTable from './components/SoilDynamicModelParamsTable.vue';
import { onMounted, reactive, ref } from 'vue';
import {soilDynamicModelParams} from "../../type/soilDynamicModelParams";
import {querySoilDynamicModelParamsList} from "../../api/soilDynamicModelParamsListData"
import SearchForm from './components/SearchFrom.vue';
  const dataSource = ref<soilDynamicModelParams[]>([]);
  const params = reactive<soilDynamicModelParams>({
    zkNumber:undefined,
  })

  const paginationParams = reactive({
      total:0,
      pageSize:20,
      pageNum:1,
    });
  const loading = ref<boolean>(false)

  const onSearch = (value: soilDynamicModelParams)=>{
    params.zkNumber = value.zkNumber;
    paginationParams.pageNum = 1;
    getSoilDynamicModelParamsListData();

  }

  const onReset = ()=>{
    params.zkNumber = undefined;
    paginationParams.pageNum = 1;
    getSoilDynamicModelParamsListData();
  }

  const getSoilDynamicModelParamsListData = ()=>{
    loading.value = true;
    querySoilDynamicModelParamsList(
      params.zkNumber,
      paginationParams.pageNum,
      paginationParams.pageSize)
      .then((res)=>{
        loading.value = false
        paginationParams.total = res.pager.total;
      dataSource.value = res.soilDynamicModelParamsList;
      console.log(dataSource.value)
    }).catch(()=>{
      loading.value = false
    })
  }

  const onSoilDynamicModelParamsTableChange = (pagination: { current: number; pageSize: number; })=>{
    paginationParams.pageNum = pagination.current;
    paginationParams.pageSize = pagination.pageSize;
    console.log(params);
    getSoilDynamicModelParamsListData();
  }



  onMounted(()=>{
    getSoilDynamicModelParamsListData();
  });

  

</script>

<template>
  <a-space
    class="full-height"
    direction="vertical"
    size="large"
    style="width: 100%;">
    <SearchForm
      @search="onSearch"
      @reset="onReset"
      :loading="loading">
    </SearchForm>
    <soilDynamicModelParamsTable

      :data-source="dataSource"
      @change="onSoilDynamicModelParamsTableChange"
      :pagination="paginationParams"
      :loading="loading">
    </soilDynamicModelParamsTable>
  </a-space>
  
</template>