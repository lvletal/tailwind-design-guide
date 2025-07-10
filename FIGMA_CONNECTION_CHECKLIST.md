# ✅ Figma Tokens GitHub 연결 체크리스트

## 🎯 Test connection 버튼 찾기

### **단계별 위치 안내:**

1. **Figma Tokens 플러그인 열기**
   - Figma → Plugins → Figma Tokens

2. **Settings 탭 클릭**
   - [Tokens] [Inspect] [Settings] ← 클릭

3. **Sync 섹션 찾기**
   - Settings 페이지에서 "Sync" 섹션 스크롤

4. **GitHub 연결 설정**
   - "Add new" 클릭 (새 연결)
   - 또는 기존 연결 편집

5. **폼 작성 후 하단 확인**
   ```
   Repository: lvletal/tailwind-design-guide
   Branch: main
   File Path: tokens/
   Personal Access Token: ghp_xxxxx...
   
   [Test connection] [Save] ← 여기에 있음!
   ```

---

## 🚨 버튼이 안 보이는 경우

### **해결책 1: 필수 필드 확인**
- Repository, Branch, Token 모두 입력해야 버튼 활성화

### **해결책 2: 스크롤 확인**  
- 폼이 길어서 아래로 스크롤 필요

### **해결책 3: 대안 테스트**
- "Save" 클릭 후 → "Pull from GitHub" 시도
- 성공하면 연결 정상!

---

## 💡 성공 확인 방법

### ✅ 연결 성공 시:
1. "Connection successful" 메시지
2. "Pull from GitHub" 시 토큰 로드
3. 기존 토큰들이 플러그인에 표시됨

### 🎯 최종 목표:
**Figma 색상 변경 → GitHub 자동 업데이트 → 웹사이트 즉시 반영!** 🚀 