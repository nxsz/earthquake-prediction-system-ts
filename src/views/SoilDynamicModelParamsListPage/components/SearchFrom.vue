<script setup lang="ts">
import { reactive, ref } from 'vue';
import {soilDynamicModelParams} from '../../../type/soilDynamicModelParams'
const props = defineProps({
    loading:Boolean
});
const emits = defineEmits<{
    (e:"search", value:soilDynamicModelParams):void
    (e:"reset", value:soilDynamicModelParams):void
}>();
const formRef = ref();
const formState = reactive<soilDynamicModelParams>({
    zkNumber:""
});
const onResetButtonClick = ()=>{
    formRef.value.resetFields();
    emits("reset", formState)
}
</script>
<template>
    <a-form
        ref="formRef"
        :model="formState"
        layout="inline"
        @finish="(value:soilDynamicModelParams)=>{emits('search', value)}">
        <a-form-item
            label="所属钻孔"
            name="zkNumber">
            <a-input
                v-model:value="formState.zkNumber"
                palceholder="请输入">
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-space>
            <a-button
                type="primary"
                html-type="submit"
                :loading="props.loading">
                搜索
            </a-button>
            <a-button
                @click="onResetButtonClick"
                :loading="props.loading">
                重置
            </a-button>
            </a-space>
        </a-form-item>
    </a-form>
</template>