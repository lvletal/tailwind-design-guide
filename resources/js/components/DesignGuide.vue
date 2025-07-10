<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Copy Notification -->
    <div v-if="copyTooltip" 
         class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300">
      📋 클래스명이 복사되었습니다!
    </div>

    <div class="container mx-auto p-8">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">
          Atomic Design System
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          컴포넌트 기반 디자인 시스템 가이드
        </p>
        
        <!-- Quick Navigation -->
        <div class="flex justify-center gap-4">
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            📋 가이드 (현재)
          </button>
          <button class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                  @click="$emit('switch-component', 'token')">
            🎯 토큰 데모
          </button>
        </div>
      </header>

      <!-- Typography -->
      <section class="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Typography</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Display -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 border-b pb-2">Display</h3>
            <div class="space-y-2">
              <p class="text-6xl font-bold cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                 @click="copyClass('text-6xl font-bold')">Display</p>
              <span class="text-xs text-gray-500">text-6xl font-bold</span>
            </div>
          </div>

          <!-- Headings -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 border-b pb-2">Headings</h3>
            <div class="space-y-2">
              <h1 class="text-4xl font-bold cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  @click="copyClass('text-4xl font-bold')">Heading 1</h1>
              <span class="text-xs text-gray-500">text-4xl font-bold</span>
              
              <h2 class="text-3xl font-semibold cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  @click="copyClass('text-3xl font-semibold')">Heading 2</h2>
              <span class="text-xs text-gray-500">text-3xl font-semibold</span>
              
              <h3 class="text-2xl font-medium cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  @click="copyClass('text-2xl font-medium')">Heading 3</h3>
              <span class="text-xs text-gray-500">text-2xl font-medium</span>
            </div>
          </div>

          <!-- Body -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 border-b pb-2">Body</h3>
            <div class="space-y-2">
              <p class="text-lg cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                 @click="copyClass('text-lg')">Body Large</p>
              <span class="text-xs text-gray-500">text-lg</span>
              
              <p class="text-base cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                 @click="copyClass('text-base')">Body Medium</p>
              <span class="text-xs text-gray-500">text-base</span>
              
              <p class="text-sm cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                 @click="copyClass('text-sm')">Body Small</p>
              <span class="text-xs text-gray-500">text-sm</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Color Palette -->
      <section class="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Color Palette</h2>
        
        <!-- Neutral -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Neutral</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-gray-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-gray-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>

        <!-- Primary -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Primary</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-blue-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-blue-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>

        <!-- Secondary -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Secondary</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-orange-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-orange-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>

        <!-- Success -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Success</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-green-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-green-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>

        <!-- Warning -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Warning</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-yellow-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-yellow-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>

        <!-- Error -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Error</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-red-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-red-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 mb-4">Info</h3>
          <div class="grid grid-cols-10 gap-2">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" 
                 :key="shade"
                 :class="[
                   `bg-cyan-${shade}`,
                   'aspect-square rounded-md flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition-transform',
                   shade >= 500 ? 'text-white' : 'text-black'
                 ]"
                 @click="copyClass(`bg-cyan-${shade}`)">
              {{ shade }}
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons -->
      <section class="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Buttons</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Primary Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Primary</h3>
            <button class="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    @click="copyClass('bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors')">
              Button
            </button>
          </div>

          <!-- Secondary Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Secondary</h3>
            <button class="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    @click="copyClass('bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors')">
              Button
            </button>
          </div>

          <!-- Outline Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Outline</h3>
            <button class="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    @click="copyClass('border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors')">
              Button
            </button>
          </div>

          <!-- Ghost Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Ghost</h3>
            <button class="w-full text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    @click="copyClass('text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors')">
              Button
            </button>
          </div>

          <!-- Danger Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Danger</h3>
            <button class="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    @click="copyClass('bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors')">
              Button
            </button>
          </div>

          <!-- Success Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Success</h3>
            <button class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                    @click="copyClass('bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors')">
              Button
            </button>
          </div>

          <!-- Disabled Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700">Disabled</h3>
            <button class="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed"
                    disabled
                    @click="copyClass('bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed')">
              Button
            </button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="text-center py-8 border-t border-gray-200">
        <p class="text-sm text-gray-500">
          Atomic Design System - Vue.js + Tailwind CSS
        </p>
        <p class="text-xs text-gray-400 mt-2">
          클릭하여 Tailwind 클래스 복사하기
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['switch-component'])
const copyTooltip = ref(false)

function copyClass(className) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(className).then(() => {
      showCopyNotification();
    }).catch(err => {
      console.error('복사 실패:', err);
      fallbackCopy(className);
    });
  } else {
    fallbackCopy(className);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showCopyNotification();
  } catch (err) {
    console.error('Fallback 복사 실패:', err);
  }
  document.body.removeChild(textArea);
}

function showCopyNotification() {
  copyTooltip.value = true;
  setTimeout(() => {
    copyTooltip.value = false;
  }, 2000);
}
</script> 