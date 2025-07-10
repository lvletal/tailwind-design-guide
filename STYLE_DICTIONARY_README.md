# Style Dictionary 토큰 관리 시스템

이 프로젝트는 Style Dictionary를 사용하여 디자인 토큰을 중앙에서 관리하고 여러 플랫폼에서 사용할 수 있도록 구성되어 있습니다.

## 📁 프로젝트 구조

```
├── tokens/                          # 디자인 토큰 정의 파일들
│   ├── colors/
│   │   ├── primary.json            # 주요 색상 팔레트
│   │   └── secondary.json          # 보조 색상 팔레트
│   ├── spacing.json                # 간격 및 여백 토큰
│   └── typography.json             # 타이포그래피 토큰
├── style-dictionary.config.js      # Style Dictionary 설정 파일
├── build/                          # 빌드된 토큰 파일들
│   ├── design-tokens.css           # CSS Variables
│   └── tailwind-tokens.js          # Tailwind CSS 토큰
└── tailwind.config.js              # Tailwind 설정 (토큰 적용)
```

## 🚀 시작하기

### 1. 토큰 빌드
```bash
npm run build-tokens
```

### 2. 개발 서버 실행 (토큰 빌드 포함)
```bash
npm run dev-tokens
```

### 3. 토큰 파일 감시 (자동 빌드)
```bash
npm run watch-tokens
```

## 🎨 토큰 정의 방법

### 색상 토큰 (tokens/colors/primary.json)
```json
{
  "color": {
    "primary": {
      "50": { "value": "#eff6ff" },
      "100": { "value": "#dbeafe" },
      "500": { "value": "#3b82f6" },
      "900": { "value": "#1e3a8a" }
    }
  }
}
```

### 타이포그래피 토큰 (tokens/typography.json)
```json
{
  "typography": {
    "heading": {
      "h1": {
        "value": {
          "fontFamily": "Inter",
          "fontSize": "48pt",
          "fontWeight": 700,
          "lineHeight": 1.2
        },
        "type": "typography"
      }
    }
  }
}
```

### 간격 토큰 (tokens/spacing.json)
```json
{
  "spacing": {
    "xs": { "value": "4px", "type": "spacing" },
    "sm": { "value": "8px", "type": "spacing" },
    "md": { "value": "16px", "type": "spacing" }
  }
}
```

## 🔧 사용 방법

### 1. CSS Variables 사용
```css
.my-element {
  color: var(--color-primary-500);
  background: var(--color-secondary-100);
  padding: var(--spacing-lg);
  border-radius: var(--borderRadius-md);
}

.title {
  font-family: var(--typography-heading-h1-font-family);
  font-size: var(--typography-heading-h1-font-size);
  font-weight: var(--typography-heading-h1-font-weight);
  line-height: var(--typography-heading-h1-line-height);
}
```

### 2. Tailwind CSS 클래스 사용
```html
<!-- 색상 -->
<div class="bg-primary-500 text-white">Primary Button</div>
<div class="bg-secondary-100 text-secondary-900">Secondary Card</div>

<!-- 타이포그래피 -->
<h1 class="text-heading-h1">Main Title</h1>
<h2 class="text-heading-h2">Sub Title</h2>
<p class="text-body-base">Body text</p>

<!-- 간격 -->
<div class="p-lg m-xl rounded-md">Spaced content</div>
```

### 3. Vue 컴포넌트에서 사용
```vue
<template>
  <div class="bg-primary-500 text-white p-lg rounded-md">
    <h1 class="text-heading-h1">토큰 기반 컴포넌트</h1>
    <p class="text-body-base">디자인 토큰을 사용한 일관된 스타일링</p>
  </div>
</template>

<style scoped>
.custom-element {
  color: var(--color-primary-600);
  padding: var(--spacing-md);
}
</style>
```

## 🎯 토큰 추가하기

### 1. 새 토큰 파일 생성
```bash
# 예: 그림자 토큰 추가
touch tokens/shadows.json
```

### 2. 토큰 정의
```json
{
  "shadow": {
    "sm": { "value": "0 1px 2px rgba(0, 0, 0, 0.05)", "type": "boxShadow" },
    "md": { "value": "0 4px 6px rgba(0, 0, 0, 0.1)", "type": "boxShadow" },
    "lg": { "value": "0 10px 15px rgba(0, 0, 0, 0.1)", "type": "boxShadow" }
  }
}
```

### 3. 설정 파일 업데이트 (style-dictionary.config.js)
```javascript
// 필요한 경우 새로운 transformer나 format 추가
```

### 4. 토큰 빌드
```bash
npm run build-tokens
```

## 🔄 워크플로우

1. **토큰 정의**: `tokens/` 폴더에서 JSON 파일로 토큰 정의
2. **빌드**: `npm run build-tokens`로 플랫폼별 파일 생성
3. **사용**: 생성된 CSS Variables 또는 Tailwind 클래스 사용
4. **배포**: 빌드된 파일들을 프로덕션에 배포

## 🎨 지원하는 토큰 타입

- **Color**: 색상 팔레트
- **Typography**: 폰트 패밀리, 크기, 무게, 행 높이
- **Spacing**: 패딩, 마진, 간격
- **Border Radius**: 모서리 반지름
- **Box Shadow**: 그림자 효과
- **Sizing**: 너비, 높이

## 🛠️ 고급 사용법

### 토큰 별칭 사용
```json
{
  "color": {
    "base": { "value": "#000000" },
    "text": { "value": "{color.base.value}" }
  }
}
```

### 조건부 토큰
```json
{
  "color": {
    "background": {
      "primary": { "value": "#ffffff", "darkMode": "#000000" }
    }
  }
}
```

### 수학 함수 사용
```json
{
  "spacing": {
    "double": { "value": "calc({spacing.base.value} * 2)" }
  }
}
```

## 🔧 문제 해결

### 토큰이 반영되지 않는 경우
1. 토큰 빌드 확인: `npm run build-tokens`
2. 브라우저 캐시 삭제
3. 개발 서버 재시작

### 빌드 오류 발생 시
1. JSON 문법 검사
2. 토큰 값 유효성 확인
3. 설정 파일 문법 검사

## 📚 추가 자료

- [Style Dictionary 공식 문서](https://amzn.github.io/style-dictionary/)
- [디자인 토큰 W3C 표준](https://www.w3.org/community/design-tokens/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)

---

💡 **팁**: 토큰을 수정한 후에는 항상 `npm run build-tokens`를 실행하여 변경사항을 적용하세요! 