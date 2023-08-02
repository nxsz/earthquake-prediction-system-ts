<script setup lang="ts">
import zkTable from './components/zkTable.vue';
import { onMounted, reactive, ref } from 'vue';
import {queryZkList} from '../../api/zkInfo'
import { ZKinfo } from "../../type/zkInfo";
  const zkDataSource = ref<ZKinfo[]>([]);
  const params = reactive({
  })

  const paginationParams = reactive({
      total:0,
      pageSize:20,
      pageNum:1,
    });
  const getZKListData = ()=>{
    queryZkList(
      paginationParams.pageNum,
      paginationParams.pageSize)
      .then((res)=>{
      paginationParams.total = res.pager.total;
      zkDataSource.value = res.zkList;
    })
  }

  const onZKTableChange = (pagination: { current: number; pageSize: number; })=>{
    paginationParams.pageNum = pagination.current;
    paginationParams.pageSize = pagination.pageSize;
    console.log(params);
    getZKListData();
  }
  onMounted(()=>{
    getZKListData();
  });

  

</script>

<template>
  <zkTable
    :data-source="zkDataSource"
    @change="onZKTableChange"
    :pagination="paginationParams">
  </zkTable>
</template>