# 🎨 피그마 ↔ GitHub 연동 완벽 가이드

## 🎯 목표
피그마에서 색상/타이포그래피 변경 → GitHub 자동 업데이트 → 웹사이트 즉시 반영

## 📋 1단계: GitHub Personal Access Token 생성

### 1-1. GitHub 토큰 생성
1. 브라우저에서 접속: https://github.com/settings/tokens
2. **"Generate new token"** → **"Generate new token (classic)"** 클릭
3. 다음과 같이 설정:

```
Token name: Figma Design Tokens
Description: Figma to GitHub sync for design tokens
Expiration: 90 days (권장)

✅ Select scopes (권한):
- [x] repo                    # 리포지토리 전체 접근
  - [x] repo:status          # 커밋 상태 접근
  - [x] repo_deployment      # 배포 접근
  - [x] public_repo          # 공개 리포지토리 접근
  - [x] repo:invite          # 초대 권한
- [x] workflow               # GitHub Actions 접근
- [x] write:packages         # 패키지 쓰기 권한
```

4. **"Generate token"** 클릭
5. **토큰 복사 후 안전한 곳에 저장** (한 번만 보여집니다!)

### 1-2. 토큰 예시
```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 🔧 2단계: Figma Tokens 플러그인 설치

### 2-1. 플러그인 설치
1. **Figma 열기**
2. **상단 메뉴** → **Plugins** → **Browse all plugins**
3. **검색창**에 "Figma Tokens" 입력
4. **"Figma Tokens"** by **Jan Six** 선택
5. **"Install"** 클릭

### 2-2. 플러그인 실행
1. **Plugins** → **"Figma Tokens"** 클릭
2. 플러그인 패널이 오른쪽에 열림

## ⚙️ 3단계: GitHub 저장소 연동

### 3-1. Sync Settings 설정
1. **Figma Tokens 패널**에서 **Settings** 탭 클릭
2. **Sync** 섹션에서 **"Add new"** 클릭
3. **Provider 선택**: **"GitHub"** 선택

### 3-2. GitHub 연결 정보 입력
```
Name: Design System Tokens
Provider: GitHub
Repository: lvletal/tailwind-design-guide
Branch: main
File Path: tokens/
Personal Access Token: [1단계에서 복사한 토큰]
```

### 3-3. 연결 테스트
1. **"Test connection"** 클릭
2. ✅ **"Connection successful"** 확인

## 📁 4단계: 토큰 구조 설정

### 4-1. 기존 토큰 가져오기 (Import)
1. **"Pull from GitHub"** 클릭
2. 현재 토큰 파일들이 플러그인으로 가져와짐
3. **Colors, Typography, Spacing** 등 확인

### 4-2. 토큰 매핑 확인
```json
{
  "colors": {
    "primary": {
      "50": "#eff6ff",
      "100": "#dbeafe", 
      "500": "#2563eb",
      "900": "#172554"
    }
  },
  "typography": {
    "heading": {
      "h1": {
        "fontFamily": "Inter",
        "fontSize": 48,
        "fontWeight": 700
      }
    }
  }
}
```

## 🎨 5단계: 피그마에서 토큰 생성/수정

### 5-1. 색상 토큰 생성
1. **Colors** 탭에서 **"+"** 버튼 클릭
2. **토큰 이름**: `primary.600`
3. **색상 값**: `#1d4ed8`
4. **Type**: `color`

### 5-2. 타이포그래피 토큰 생성
1. **Typography** 탭에서 **"+"** 버튼 클릭
2. **토큰 이름**: `heading.h1`
3. **값 설정**:
   ```
   Font Family: Inter
   Font Size: 48
   Font Weight: 700
   Line Height: 1.2
   ```

## 🚀 6단계: 자동 동기화 테스트

### 6-1. 색상 변경 테스트
1. **primary.500** 토큰 선택
2. 색상을 **#3b82f6**에서 **#2563eb**로 변경
3. **"Push to GitHub"** 버튼 클릭
4. **Commit message**: "Update primary color from Figma"

### 6-2. 자동 빌드 확인
1. **GitHub Actions** 자동 실행됨
2. **2-3분 후** 웹사이트에서 새로운 색상 확인
3. URL: http://127.0.0.1:8000

## 🔄 7단계: 완전 자동화 워크플로우

### 실제 사용 시나리오
```
1. 피그마에서 색상 변경
   primary.500: #3b82f6 → #2563eb

2. Figma Tokens에서 "Push" 클릭
   → GitHub 토큰 파일 자동 업데이트

3. GitHub Actions 자동 실행
   → npm run build-tokens 실행
   → CSS Variables 및 Tailwind 토큰 생성

4. 웹사이트 즉시 반영
   → 모든 primary-500 색상이 새로운 색으로 변경
```

## 🎯 고급 설정 (선택사항)

### Auto-Push 설정 (완전 자동화)
1. **Settings** → **"Auto-push on change"** 활성화
2. 토큰 변경 시 자동으로 GitHub에 푸시

### Branch Protection 설정
```
1. GitHub → Settings → Branches
2. "main" 브랜치 보호 규칙 설정
3. "Require pull request reviews" 활성화
4. 토큰 변경 시 PR 자동 생성
```

### Webhook 연동 (실시간)
```javascript
// 피그마 변경 시 즉시 반영 (고급)
const webhook = {
  url: "https://api.github.com/repos/lvletal/tailwind-design-guide/dispatches",
  method: "POST",
  headers: {
    "Authorization": "token YOUR_TOKEN",
    "Accept": "application/vnd.github.v3+json"
  },
  body: {
    "event_type": "figma-tokens-update"
  }
}
```

## 🚨 문제 해결

### 연결 실패 시
1. **Personal Access Token 권한 확인**
2. **Repository 이름 정확성 확인**
3. **Branch 이름 확인** (main vs master)

### 토큰이 반영되지 않을 때
1. **GitHub Actions 로그 확인**
2. **build/ 폴더의 파일 변경 확인**
3. **브라우저 캐시 새로고침**

### 권한 오류 시
```bash
# 로컬에서 확인
git pull origin main
npm run build-tokens
```

## 🎉 성공 확인

### 최종 테스트
1. ✅ **피그마에서 색상 변경**
2. ✅ **"Push to GitHub" 클릭**
3. ✅ **GitHub Actions 실행 확인**
4. ✅ **웹사이트에서 변경사항 확인**

### 예상 결과
- **피그마 변경** → **30초 후 웹사이트 반영**
- **완전 자동화** 달성! 🚀

---

💡 **팁**: 처음에는 작은 색상 변경으로 테스트해보세요. 성공하면 더 큰 변경사항도 안전하게 적용할 수 있습니다! 