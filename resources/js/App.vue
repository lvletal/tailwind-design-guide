<template>
  <div id="app">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <h1 class="text-xl font-bold text-gray-900">Design System</h1>
            <span class="text-sm text-gray-500">v2.0</span>
          </div>
          
          <div class="flex gap-2">
            <button 
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                currentComponent === 'guide' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
              @click="switchComponent('guide')">
              📋 가이드
            </button>
            
            <button 
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                currentComponent === 'token' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
              @click="switchComponent('token')">
              🎯 토큰 데모
            </button>
            
            <button 
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                currentComponent === 'style-dictionary' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
              @click="switchComponent('style-dictionary')">
              🔧 Style Dictionary
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Component Content -->
    <div class="min-h-screen">
      <DesignGuide 
        v-if="currentComponent === 'guide'"
        @switch-component="switchComponent"
      />
      
      <TokenDemo 
        v-if="currentComponent === 'token'"
        @switch-component="switchComponent"
      />
      
      <StyleDictionaryDemo 
        v-if="currentComponent === 'style-dictionary'"
        @switch-component="switchComponent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DesignGuide from './components/DesignGuide.vue'
import TokenDemo from './components/TokenDemo.vue'
import StyleDictionaryDemo from './components/StyleDictionaryDemo.vue'

const currentComponent = ref('guide')

function switchComponent(component) {
  currentComponent.value = component
  
  // 페이지 최상단으로 스크롤
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

