# 🤝 팀 협업 가이드: 디자인 토큰 관리

## 👥 팀원 구성 및 역할

### 🎨 **디자이너**
- **주요 역할**: Figma Token Studio에서 토큰 생성/수정
- **필요 권한**: GitHub 저장소 Write 권한
- **사용 도구**: Figma + Token Studio 플러그인

### 👨‍💻 **개발자**
- **주요 역할**: 토큰을 CSS/코드에 적용
- **필요 권한**: GitHub 저장소 Read 이상
- **사용 도구**: Git + Style Dictionary

### 🔧 **DevOps/리드**
- **주요 역할**: 저장소 관리, 자동화 설정
- **필요 권한**: GitHub 저장소 Admin 권한
- **사용 도구**: GitHub Actions, Git

---

## 🔄 협업 워크플로우

### **방법 1: 단일 브랜치 협업 (간단)**
```
1. 디자이너: Figma에서 토큰 수정
2. 디자이너: Token Studio → "Push to GitHub" (main 브랜치)
3. GitHub Actions: 자동으로 CSS 빌드
4. 개발자: git pull → 최신 토큰 받기
5. 개발자: 웹사이트에서 변경사항 확인
```

### **방법 2: 브랜치 기반 협업 (안전)**
```
1. 디자이너: 새로운 브랜치 생성 (feature/new-colors)
2. 디자이너: Token Studio에서 브랜치 설정 변경
3. 디자이너: 토큰 수정 후 Push
4. 개발자: Pull Request 리뷰
5. 승인 후: main 브랜치에 Merge
6. GitHub Actions: 자동 빌드 및 배포
```

---

## ⚙️ Figma Token Studio 팀 설정

### **1. GitHub 연결 설정**
각 팀원이 개별적으로 설정:
```
Repository: lvletal/tailwind-design-guide
Branch: main (또는 개별 브랜치)
File Path: tokens.json
GitHub Token: 개인 액세스 토큰
```

### **2. 토큰 동기화**
```
새로운 팀원 추가 시:
1. GitHub 저장소에 팀원 초대
2. 팀원이 Figma Token Studio 설정
3. "Pull from GitHub" → 기존 토큰 가져오기
4. 테스트 수정 → Push → 성공 확인
```

---

## 🛡️ 충돌 방지 전략

### **토큰 명명 규칙**
```
색상: color-primary-500, color-secondary-300
타이포: typography-heading-h1, typography-body-sm  
간격: spacing-xs, spacing-lg
```

### **수정 권한 관리**
- **Core 토큰** (primary, secondary): 디자인 리드만 수정
- **Component 토큰**: 담당 디자이너가 수정
- **Project 토큰**: 프로젝트별 자유 수정

### **충돌 해결**
```
충돌 발생 시:
1. GitHub에서 최신 커밋 확인
2. 마지막 수정자와 소통
3. Figma에서 토큰 값 조율
4. 새로운 Push 수행
```

---

## 📋 체크리스트

### **새 팀원 온보딩**
- [ ] GitHub 저장소 초대
- [ ] Figma 파일 공유
- [ ] Token Studio 플러그인 설치
- [ ] GitHub 연결 설정
- [ ] 테스트 토큰 Push/Pull 성공

### **토큰 수정 전**
- [ ] 최신 토큰 Pull 받기
- [ ] 팀원들과 수정 계획 공유
- [ ] 영향 범위 확인

### **토큰 수정 후**
- [ ] GitHub Push 성공
- [ ] GitHub Actions 빌드 성공
- [ ] 웹사이트에서 변경사항 확인
- [ ] 팀원들에게 알림

---

## 🚨 주의사항

### **금지사항**
- 🚫 여러 명이 동시에 같은 토큰 수정
- 🚫 백업 없이 대량 토큰 삭제
- 🚫 main 브랜치에 직접 실험적 변경

### **권장사항**
- ✅ 중요 변경 전 브랜치 생성
- ✅ 커밋 메시지에 변경 이유 명시
- ✅ 정기적 토큰 백업
- ✅ 팀 내 토큰 변경 알림 채널 운영 