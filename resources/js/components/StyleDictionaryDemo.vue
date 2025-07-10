<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Style Dictionary 토큰 관리</h1>
        <p class="text-lg text-gray-600">디자인 토큰을 중앙에서 관리하고 여러 플랫폼에서 사용할 수 있습니다.</p>
      </div>

      <!-- Token Categories -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Colors -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Colors</h2>
          <div class="space-y-4">
            <div v-for="colorSet in colorSets" :key="colorSet.name" class="space-y-2">
              <h3 class="text-lg font-semibold text-gray-700 capitalize">{{ colorSet.name }}</h3>
              <div class="grid grid-cols-10 gap-1">
                <div 
                  v-for="(color, shade) in colorSet.colors" 
                  :key="shade"
                  class="w-8 h-8 rounded-md border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                  :style="{ backgroundColor: color }"
                  :title="`${colorSet.name}-${shade}: ${color}`"
                  @click="copyToClipboard(`text-${colorSet.name}-${shade}`, color)"
                >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Typography</h2>
          <div class="space-y-4">
            <div v-for="category in typographyCategories" :key="category.name" class="space-y-2">
              <h3 class="text-lg font-semibold text-gray-700">{{ category.name }}</h3>
              <div class="space-y-2">
                <div 
                  v-for="variant in category.variants" 
                  :key="variant.name"
                  class="p-2 border border-gray-200 rounded cursor-pointer hover:bg-gray-50"
                  :style="getTypographyStyle(variant)"
                  @click="copyToClipboard(`text-${category.name.toLowerCase()}-${variant.name}`, variant.class)"
                >
                  {{ variant.name }} - {{ variant.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Spacing & Layout -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Spacing & Layout</h2>
          
          <!-- Spacing -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Spacing</h3>
            <div class="space-y-2">
              <div 
                v-for="(size, name) in spacingSizes" 
                :key="name"
                class="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                @click="copyToClipboard(`p-${name}`, size)"
              >
                <div class="w-4 h-4 bg-blue-500 rounded" :style="{ width: size, height: size }"></div>
                <span class="text-sm font-mono">{{ name }}: {{ size }}</span>
              </div>
            </div>
          </div>

          <!-- Border Radius -->
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Border Radius</h3>
            <div class="space-y-2">
              <div 
                v-for="(radius, name) in borderRadiusSizes" 
                :key="name"
                class="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                @click="copyToClipboard(`rounded-${name}`, radius)"
              >
                <div class="w-8 h-8 bg-purple-500" :style="{ borderRadius: radius }"></div>
                <span class="text-sm font-mono">{{ name }}: {{ radius }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Token Usage Examples -->
      <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">토큰 사용 예제</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- CSS Variables -->
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">CSS Variables</h3>
            <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"><code>/* 컬러 사용 */
.my-element {
  color: var(--color-primary-500);
  background: var(--color-secondary-100);
}

/* 타이포그래피 사용 */
.title {
  font-family: var(--typography-heading-h1-font-family);
  font-size: var(--typography-heading-h1-font-size);
  font-weight: var(--typography-heading-h1-font-weight);
  line-height: var(--typography-heading-h1-line-height);
}

/* 스페이싱 사용 */
.container {
  padding: var(--spacing-lg);
  margin: var(--spacing-xl);
  border-radius: var(--borderRadius-md);
}</code></pre>
          </div>

          <!-- Tailwind Classes -->
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Tailwind Classes</h3>
            <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"><code><!-- 컬러 사용 -->
&lt;div class="bg-primary-500 text-white"&gt;Primary Button&lt;/div&gt;
&lt;div class="bg-secondary-100 text-secondary-900"&gt;Secondary Card&lt;/div&gt;

<!-- 타이포그래피 사용 -->
&lt;h1 class="text-heading-h1"&gt;Main Title&lt;/h1&gt;
&lt;h2 class="text-heading-h2"&gt;Sub Title&lt;/h2&gt;
&lt;p class="text-body-base"&gt;Body text&lt;/p&gt;

<!-- 스페이싱 사용 -->
&lt;div class="p-lg m-xl rounded-md"&gt;
  Spaced content
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Build Commands -->
      <div class="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-yellow-800 mb-2">💡 토큰 빌드 명령어</h3>
        <div class="space-y-2 text-sm">
          <div class="font-mono bg-yellow-100 p-2 rounded">npm run build-tokens</div>
          <div class="font-mono bg-yellow-100 p-2 rounded">npm run dev-tokens</div>
          <p class="text-yellow-700">토큰을 수정한 후 위 명령어로 빌드하면 Tailwind CSS와 CSS Variables이 자동으로 업데이트됩니다.</p>
        </div>
      </div>

      <!-- Copied notification -->
      <div 
        v-if="copied" 
        class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300"
        :class="{ 'opacity-100': copied, 'opacity-0': !copied }"
      >
        클립보드에 복사되었습니다: {{ copiedText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleDictionaryDemo',
  data() {
    return {
      copied: false,
      copiedText: '',
      colorSets: [
        {
          name: 'primary',
          colors: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a'
          }
        },
        {
          name: 'secondary',
          colors: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
          }
        },
        {
          name: 'success',
          colors: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d'
          }
        }
      ],
      typographyCategories: [
        {
          name: 'Display',
          variants: [
            { name: 'Large', class: 'text-display-large', description: '160pt Bold', fontFamily: 'Inter', fontSize: '160pt', fontWeight: '700', lineHeight: '1.1' },
            { name: 'Medium', class: 'text-display-medium', description: '105pt Bold', fontFamily: 'Inter', fontSize: '105pt', fontWeight: '700', lineHeight: '1.1' },
            { name: 'Small', class: 'text-display-small', description: '71pt Bold', fontFamily: 'Inter', fontSize: '71pt', fontWeight: '700', lineHeight: '1.1' }
          ]
        },
        {
          name: 'Heading',
          variants: [
            { name: 'H1', class: 'text-heading-h1', description: '48pt Bold', fontFamily: 'Inter', fontSize: '48pt', fontWeight: '700', lineHeight: '1.2' },
            { name: 'H2', class: 'text-heading-h2', description: '36pt Bold', fontFamily: 'Inter', fontSize: '36pt', fontWeight: '700', lineHeight: '1.2' },
            { name: 'H3', class: 'text-heading-h3', description: '24pt Semibold', fontFamily: 'Inter', fontSize: '24pt', fontWeight: '600', lineHeight: '1.3' },
            { name: 'H4', class: 'text-heading-h4', description: '20pt Semibold', fontFamily: 'Inter', fontSize: '20pt', fontWeight: '600', lineHeight: '1.3' }
          ]
        },
        {
          name: 'Body',
          variants: [
            { name: 'Large', class: 'text-body-large', description: '18px Regular', fontFamily: 'Inter', fontSize: '18px', fontWeight: '400', lineHeight: '1.6' },
            { name: 'Base', class: 'text-body-base', description: '16px Regular', fontFamily: 'Inter', fontSize: '16px', fontWeight: '400', lineHeight: '1.6' },
            { name: 'Small', class: 'text-body-small', description: '14px Regular', fontFamily: 'Inter', fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }
          ]
        }
      ],
      spacingSizes: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px'
      },
      borderRadiusSizes: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px'
      }
    }
  },
  methods: {
    getTypographyStyle(variant) {
      return {
        fontFamily: variant.fontFamily,
        fontSize: variant.fontSize,
        fontWeight: variant.fontWeight,
        lineHeight: variant.lineHeight
      }
    },
    copyToClipboard(className, value) {
      navigator.clipboard.writeText(className).then(() => {
        this.copiedText = `${className} (${value})`
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      })
    }
  }
}
</script> 