<script setup lang="ts">
import FindingsShearWaveVelocityMeasuredValueTable from './components/FindingsShearWaveVelocityMeasuredValueTable.vue';
import { onMounted, reactive, ref } from 'vue';
import {FindingsShearWaveVelocityMeasuredValue} from "../../type/FindingsShearWaveVelocityMeasuredValue";
import {queryFindingsShearWaveVelocityMeasuredValueList} from "../../api/findingsShearWaveVelocityMeasuredValueListData"
import SearchForm from './components/SearchFrom.vue';
  const dataSource = ref<FindingsShearWaveVelocityMeasuredValue[]>([]);
  const params = reactive<FindingsShearWaveVelocityMeasuredValue>({
    zkNumber:undefined,
  })

  const paginationParams = reactive({
      total:0,
      pageSize:20,
      pageNum:1,
    });
  const loading = ref<boolean>(false)

  const onSearch = (value: FindingsShearWaveVelocityMeasuredValue)=>{
    params.zkNumber = value.zkNumber;
    paginationParams.pageNum = 1;
    getFindingsShearWaveVelocityMeasuredValueListData();

  }

  const onReset = ()=>{
    params.zkNumber = undefined;
    paginationParams.pageNum = 1;
    getFindingsShearWaveVelocityMeasuredValueListData();
  }

  const getFindingsShearWaveVelocityMeasuredValueListData = ()=>{
    loading.value = true;
    queryFindingsShearWaveVelocityMeasuredValueList(
      params.zkNumber,
      paginationParams.pageNum,
      paginationParams.pageSize)
      .then((res)=>{
        loading.value = false
        paginationParams.total = res.pager.total;
      dataSource.value = res.findingsShearWaveVelocityMeasuredValueList;
      console.log(dataSource.value)
    }).catch(()=>{
      loading.value = false
    })
  }

  const onFindingsShearWaveVelocityMeasuredValueTableChange = (pagination: { current: number; pageSize: number; })=>{
    paginationParams.pageNum = pagination.current;
    paginationParams.pageSize = pagination.pageSize;
    console.log(params);
    getFindingsShearWaveVelocityMeasuredValueListData();
  }



  onMounted(()=>{
    getFindingsShearWaveVelocityMeasuredValueListData();
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
    <FindingsShearWaveVelocityMeasuredValueTable

      :data-source="dataSource"
      @change="onFindingsShearWaveVelocityMeasuredValueTableChange"
      :pagination="paginationParams"
      :loading="loading">
    </FindingsShearWaveVelocityMeasuredValueTable>
  </a-space>
  
</template>