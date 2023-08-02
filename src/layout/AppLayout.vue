<template>
    <a-layout
      class="full-height">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <navigation-menu></navigation-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style=" display: flex; justify-content: space-between; align-items: center; padding: 0 24px; background: #fff;">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <right-content></right-content>
        </a-layout-header>
        <a-layout-content
          style="margin: 16px; background-color: #fff; padding: 16px;">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import RightContent from '../components/GlobalHeader/RightContent.vue';
  import NavigationMenu from '../components/GlobalSider/NavigationMenu.vue';

  import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  
  const collapsed = ref<boolean>(false);
  </script>
  <style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  </style>
  