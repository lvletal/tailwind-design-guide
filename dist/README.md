# 🚀 FTP 배포용 정적 사이트

## 📁 파일 구조
```
dist/
├── index.html      # 메인 페이지 (Atomic Design System)
├── tokens.html     # 토큰 데모 페이지
└── README.md       # 이 파일
```

## 🌐 FTP 배포 방법

### 1. FTP 클라이언트 사용
- **FileZilla**, **WinSCP**, **Cyberduck** 등 사용
- `dist/` 폴더의 **모든 파일**을 웹서버 루트에 업로드

### 2. 업로드 경로 예시
```
웹서버 루트/
├── index.html
├── tokens.html
└── README.md
```

### 3. 접속 URL
- **메인 페이지**: `https://yourdomain.com/index.html`
- **토큰 데모**: `https://yourdomain.com/tokens.html`

## ✨ 주요 기능

### 🎯 Figma Token "D160Bold100" 구현
- **정확한 pt 단위**: 160pt, Bold(700), LineHeight: 1.0
- **완벽한 Figma 연동**: 토큰 스튜디오 규격 준수

### 🎨 완전한 색상 시스템
- **7개 색상 팔레트**: Primary, Secondary, Success, Warning, Error, Info, Neutral
- **각 색상 10단계**: 50~900 shade levels
- **클릭 복사 기능**: 모든 색상 Tailwind 클래스 복사 가능

### 📝 타이포그래피 시스템
- **Figma Token**: `text-display-D160Bold100`
- **반응형 디자인**: 모바일 → 태블릿 → 데스크톱
- **pt 단위 정확성**: 160pt, 105pt, 71pt, 48pt, 36pt, 24pt, 20pt

### 🔘 버튼 컴포넌트
- **7가지 타입**: Primary, Secondary, Outline, Ghost, Danger, Success, Disabled
- **호버 효과**: 모든 버튼 interactive
- **완전한 클래스**: 클릭으로 Tailwind 클래스 복사

### 📋 클릭 투 카피 (Click-to-Copy)
- **모든 요소 클릭 가능**: 타이포그래피, 색상, 버튼
- **Tailwind 클래스 복사**: 개발자 친화적
- **알림 시스템**: 복사 완료 피드백

## 🔧 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **Tailwind CSS**: via CDN (최신 버전)
- **바닐라 JavaScript**: 클릭 투 카피 기능

### 배포 환경
- **정적 사이트**: 서버 없이 배포 가능
- **FTP 호환**: 모든 웹 호스팅 서비스 지원
- **CDN 사용**: 빠른 로딩 속도

## 🎯 Figma 연동 완료

### Token Studio 규격
```json
{
  "display": {
    "D160Bold100": {
      "value": {
        "fontSize": "160pt",
        "fontWeight": "700",
        "lineHeight": "1.0"
      }
    }
  }
}
```

### Tailwind 설정
```javascript
tailwind.config = {
  theme: {
    extend: {
      fontSize: {
        'display-D160Bold100': ['160pt', '1.0']
      }
    }
  }
}
```

## 📱 반응형 디자인

### 브레이크포인트
- **모바일**: 기본 크기
- **태블릿**: `md:` 접두사
- **데스크톱**: `lg:` 접두사

### 예시
```html
<p class="text-[71pt] md:text-[105pt] lg:text-[160pt]">
  반응형 타이포그래피
</p>
```

## 🚀 배포 체크리스트

### ✅ 업로드 전 확인사항
- [ ] `index.html` 파일 확인
- [ ] `tokens.html` 파일 확인
- [ ] 파일 권한 설정 (644)
- [ ] 도메인 연결 확인

### ✅ 업로드 후 확인사항
- [ ] 메인 페이지 접속 테스트
- [ ] 토큰 데모 페이지 접속 테스트
- [ ] 클릭 투 카피 기능 테스트
- [ ] 반응형 디자인 테스트

## 🎨 커스터마이징

### 색상 변경
`tailwind.config` 내의 `colors` 섹션 수정

### 타이포그래피 변경
`fontSize` 섹션에서 pt 값 조정

### 새로운 토큰 추가
Figma Token Studio 규격에 맞춰 추가

---

**🎯 완벽한 Figma → Tailwind 연동 완료!**  
**🌐 FTP 배포 준비 완료!**  
**📋 클릭 투 카피 기능 완벽 구현!** 