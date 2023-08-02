<script setup lang="ts">
import { useRouter,useRoute, RouteRecordRaw } from 'vue-router';
import {autoRoutes} from '../../router/index';

function recursionRoutes(treeData:RouteRecordRaw[], pId:number|null, pRow:SubMenuType){
    const treeTable:MenuItemType[] = [];
    treeData.forEach((item, index)=>{
        const id = index;
        const row = {
            id:index, 
            pId, 
            key:item.path,
            label:item.meta.label,
            title:item.meta.label,
        }
        if(item.children.length>0){
            recursionRoutes(item.children, id, row);
        }
        treeTable.push(row);
        if(pRow!==null){
            console.log(pRow);
            pRow.children = treeTable;
        }
    });
    return treeTable;
}

const menuItems = recursionRoutes(autoRoutes, null, null);

import { reactive, ref, watch } from 'vue';
import { MenuItemGroupType, MenuItemType, SubMenuType } from 'ant-design-vue/es/menu/src/interface';
    const route = useRoute();
    const router = useRouter();
    const selectedKeys = ref<string[]>([route.path]);
    const onSelect = ({item, key})=>{
        router.push({path:key})
    }

</script>

<template>
    <a-menu 
        v-model:selectedKeys="selectedKeys" 
        theme="dark" 
        mode="inline"
        @select="onSelect"
        :items="menuItems">
        <!-- <template
            v-for="route in autoRoutes"
            :key="route.path">
            
            <a-menu-item
                @select="onSelect">
                <span>
                    {{ route.meta.label }}
                </span>
            </a-menu-item>
        </template> -->
    </a-menu>
</template>