<template>
  <div class="p-8 space-y-8">
    <h1 class="text-4xl font-bold mb-8">🎨 Vue 토큰 사용법 예시</h1>
    
    <!-- 방법 1: Reactive 토큰 직접 사용 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">1. Reactive 토큰 직접 사용</h2>
      <div 
        class="p-6 rounded-lg" 
        :style="{ 
          backgroundColor: designTokens.color.primary[500],
          color: 'white' 
        }"
      >
        <p>Primary 500 색상: {{ designTokens.color.primary[500] }}</p>
        <p>폰트 크기: {{ designTokens.typography.heading.h2.fontSize }}</p>
      </div>
    </section>

    <!-- 방법 2: CSS Variables 사용 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">2. CSS Variables 사용</h2>
      
      <!-- 2-1: Computed Style 방식 -->
      <div 
        class="p-6 rounded-lg mb-4"
        :style="cssVarStyles"
      >
        <p><strong>Computed Style 방식:</strong> JS에서 토큰 값 사용</p>
        <p>간격: {{ designTokens.spacing.lg }}</p>
      </div>
      
      <!-- 2-2: 직접 CSS Variables 방식 -->
      <div class="direct-css-vars p-6 rounded-lg">
        <p><strong>직접 CSS Variables 방식:</strong> CSS에서 var() 사용</p>
        <p>CSS 파일에서 직접 --color-secondary-100 참조</p>
      </div>
    </section>

    <!-- 방법 3: Computed 속성으로 조건부 토큰 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">3. 조건부 토큰 사용</h2>
      <button 
        @click="toggleTheme"
        class="px-6 py-3 rounded-lg font-medium transition-colors"
        :style="buttonStyles"
      >
        {{ isDark ? '🌞 라이트 모드' : '🌙 다크 모드' }}
      </button>
    </section>

    <!-- 방법 4: 반복문으로 색상 팔레트 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">4. 색상 팔레트 (반복문)</h2>
      <div class="grid grid-cols-5 gap-2">
        <div 
          v-for="(color, shade) in designTokens.color.primary" 
          :key="shade"
          class="h-16 rounded flex items-center justify-center text-white text-sm font-medium"
          :style="{ backgroundColor: color }"
        >
          {{ shade }}
        </div>
      </div>
    </section>

    <!-- 방법 5: Typography 토큰 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">5. Typography 토큰</h2>
      <div class="space-y-2">
        <h1 :style="getTypographyStyle('display', 'large')">Display Large</h1>
        <h2 :style="getTypographyStyle('heading', 'h1')">Heading H1</h2>
        <h3 :style="getTypographyStyle('heading', 'h2')">Heading H2</h3>
        <p :style="getTypographyStyle('body', 'large')">Body Large Text</p>
        <p :style="getTypographyStyle('body', 'base')">Body Base Text</p>
      </div>
    </section>

    <!-- 방법 6: 스페이싱 토큰 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">6. 스페이싱 토큰</h2>
      <div class="flex flex-wrap gap-2">
        <div 
          v-for="(spacing, size) in designTokens.spacing" 
          :key="size"
          class="bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-blue-800 font-medium rounded"
          :style="{ 
            width: spacing, 
            height: spacing,
            minWidth: '48px',
            minHeight: '48px' 
          }"
        >
          {{ size }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { designTokens, cssVars } from '../tokens.js'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const buttonStyles = computed(() => {
  const theme = isDark.value ? 'dark' : 'light'
  
  if (isDark.value) {
    return {
      backgroundColor: designTokens.color.neutral[800],
      color: designTokens.color.neutral[100]
    }
  } else {
    return {
      backgroundColor: designTokens.color.primary[500],
      color: 'white'
    }
  }
})

const cssVarStyles = computed(() => ({
  backgroundColor: designTokens.color.secondary[100],
  color: designTokens.color.secondary[800],
  border: `2px solid ${designTokens.color.secondary[300]}`,
  borderRadius: designTokens.borderRadius.lg
}))

const getTypographyStyle = (category, variant) => {
  const typography = designTokens.typography[category][variant]
  return {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight
  }
}
</script>

<style scoped>
/* CSS 변수 사용 예시 - 직접 CSS 변수 참조 */
.direct-css-vars {
  background-color: var(--color-secondary-100);
  color: var(--color-secondary-800);
  border: 2px solid var(--color-secondary-300);
  padding: var(--spacing-lg);
  border-radius: var(--borderRadius-lg);
}

/* Vue 3 v-bind 예시 - 단순 값만 가능 */
.simple-bind {
  font-size: v-bind('designTokens.typography.body.base.fontSize');
  font-weight: v-bind('designTokens.typography.body.base.fontWeight');
}
</style> 