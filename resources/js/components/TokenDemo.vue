<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Copy Notification -->
    <div v-if="copyTooltip" 
         class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300">
      📋 코드가 복사되었습니다!
    </div>

    <div class="container mx-auto p-8">
      <!-- Navigation -->
      <nav class="mb-8">
        <div class="flex gap-4">
          <button class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                  @click="$emit('switch-component', 'guide')">
            가이드로 돌아가기
          </button>
          <button class="bg-orange-500 text-white px-4 py-2 rounded">
            💡 예시 페이지 (현재)
          </button>
        </div>
      </nav>

      <!-- Main Header -->
      <header class="text-center mb-12">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">
          💡 컴포넌트 예시 모음
        </h1>
        <p class="text-lg text-gray-600">
          실제 프로젝트에서 활용할 수 있는 컴포넌트 예시들
        </p>
      </header>

      <!-- Cards Section -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">📦 카드 컴포넌트</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Basic Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
               @click="copyClass('bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow')">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📄</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">기본 카드</h3>
            <p class="text-gray-600 text-sm mb-4">간단한 정보를 표시하는 기본 카드 스타일입니다.</p>
            <button class="text-blue-500 text-sm font-medium hover:text-blue-600">더 보기 →</button>
          </div>

          <!-- Feature Card -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer"
               @click="copyClass('bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all')">
            <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">✨</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">특별 카드</h3>
            <p class="text-blue-100 text-sm mb-4">중요한 정보나 프리미엄 콘텐츠를 강조하는 카드입니다.</p>
            <button class="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
              시작하기
            </button>
          </div>

          <!-- Stats Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
               @click="copyClass('bg-white rounded-lg shadow-sm border border-gray-200 p-6')">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">통계 카드</h3>
              <span class="text-green-500 text-sm">+12.5%</span>
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-2">1,234</div>
            <p class="text-gray-600 text-sm">총 사용자 수</p>
          </div>
        </div>
      </section>

      <!-- Form Examples -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">📝 폼 컴포넌트</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">연락처 폼</h3>
            <form class="space-y-4" @click="copyClass('space-y-4')">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">이름</label>
                <input type="text" 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                       placeholder="홍길동"
                       @click.stop="copyClass('w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors')">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input type="email" 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                       placeholder="example@email.com">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">메시지</label>
                <textarea class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          rows="4" placeholder="메시지를 입력하세요..."></textarea>
              </div>
              <button type="submit" 
                      class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                      @click.prevent="copyClass('w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium')">
                전송하기
              </button>
            </form>
          </div>

          <!-- Login Form -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">로그인 폼</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">아이디</label>
                <input type="text" 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                       placeholder="아이디를 입력하세요">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                <input type="password" 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                       placeholder="비밀번호를 입력하세요">
              </div>
              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-green-600 focus:ring-green-500">
                  <span class="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
                </label>
                <a href="#" class="text-sm text-green-600 hover:text-green-500">비밀번호 찾기</a>
              </div>
              <button type="submit" 
                      class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium">
                로그인
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Button Combinations -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">🔘 버튼 조합</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Action Buttons -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">액션 버튼 그룹</h3>
            <div class="flex flex-wrap gap-3">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                      @click="copyClass('bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium')">
                저장
              </button>
              <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      @click="copyClass('border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium')">
                취소
              </button>
              <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
                      @click="copyClass('bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium')">
                삭제
              </button>
            </div>
          </div>

          <!-- Social Buttons -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">소셜 로그인</h3>
            <div class="space-y-3">
              <button class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                <span>📘</span> Facebook으로 로그인
              </button>
              <button class="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
                <span>🔍</span> Google로 로그인
              </button>
              <button class="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center justify-center gap-2">
                <span>🍎</span> Apple로 로그인
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Examples -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">🧭 네비게이션</h2>
        
        <div class="space-y-6">
          <!-- Tab Navigation -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">탭 네비게이션</h3>
            <div class="border-b border-gray-200">
              <nav class="flex space-x-8" @click="copyClass('flex space-x-8')">
                <button class="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
                  홈
                </button>
                <button class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  프로덕트
                </button>
                <button class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  회사 소개
                </button>
                <button class="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  연락처
                </button>
              </nav>
            </div>
          </div>

          <!-- Breadcrumb -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">브레드크럼</h3>
            <nav class="flex" aria-label="Breadcrumb">
              <ol class="flex items-center space-x-2 text-sm">
                <li><a href="#" class="text-blue-600 hover:text-blue-500">홈</a></li>
                <li><span class="text-gray-400">/</span></li>
                <li><a href="#" class="text-blue-600 hover:text-blue-500">카테고리</a></li>
                <li><span class="text-gray-400">/</span></li>
                <li><span class="text-gray-600">현재 페이지</span></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <!-- Layout Examples -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">📐 레이아웃 예시</h2>
        
        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 md:p-12 text-white mb-6 cursor-pointer"
             @click="copyClass('bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 md:p-12 text-white')">
          <div class="max-w-2xl">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">히어로 섹션</h3>
            <p class="text-lg md:text-xl text-purple-100 mb-6">
              메인 페이지의 첫 인상을 결정하는 중요한 섹션입니다. 
              사용자의 관심을 끌고 핵심 메시지를 전달합니다.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                시작하기
              </button>
              <button class="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                더 알아보기
              </button>
            </div>
          </div>
        </div>

        <!-- Feature Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="text-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
               @click="copyClass('text-center p-6 hover:bg-gray-50 rounded-lg transition-colors')">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🚀</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">빠른 성능</h4>
            <p class="text-gray-600 text-sm">최적화된 코드로 빠른 로딩 속도를 제공합니다.</p>
          </div>

          <div class="text-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🔒</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">보안</h4>
            <p class="text-gray-600 text-sm">강력한 보안 시스템으로 데이터를 안전하게 보호합니다.</p>
          </div>

          <div class="text-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">⚡</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">확장성</h4>
            <p class="text-gray-600 text-sm">필요에 따라 쉽게 확장할 수 있는 유연한 구조입니다.</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="text-center py-8 border-t border-gray-200">
        <p class="text-sm text-gray-500">
          💡 실용적인 컴포넌트 예시 모음 - Vue.js + Tailwind CSS
        </p>
        <p class="text-xs text-gray-400 mt-2">
          클릭하여 Tailwind 클래스 복사하기 | 모든 예시는 실제 프로젝트에서 사용 가능
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