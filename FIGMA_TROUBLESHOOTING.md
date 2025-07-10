# 🚨 Figma GitHub 연동 오류 해결 가이드

## ❌ **"Error syncing with GitHub, check credentials"** 오류 해결

### 🔍 **원인 1: Personal Access Token 권한 문제 (가장 흔함)**

#### ✅ **올바른 Token 생성 방법**
1. 🌐 **GitHub 접속**: https://github.com/settings/tokens
2. 🆕 **"Generate new token"** → **"Generate new token (classic)"** 클릭
3. ⚙️ **필수 설정값**:

```
Token name: Figma Design Tokens
Description: Figma to GitHub integration for design tokens
Expiration: 90 days (권장) 또는 No expiration

✅ 필수 권한 (Scopes):
- [x] repo                    # ⭐ 가장 중요!
  - [x] repo:status
  - [x] repo_deployment  
  - [x] public_repo
  - [x] repo:invite
- [x] workflow               # ⭐ GitHub Actions용
- [x] user:email            # 사용자 정보 접근
- [x] read:user             # 사용자 읽기 권한
```

4. 🔐 **"Generate token"** 클릭
5. 📋 **토큰 전체 복사** (ghp_로 시작하는 40자)

#### 🚨 **자주 하는 실수들**
- ❌ **repo 권한 누락** → 가장 흔한 원인
- ❌ **토큰 일부만 복사** → 40자 전체를 복사해야 함
- ❌ **만료된 토큰 사용** → 새로 생성 필요
- ❌ **workflow 권한 누락** → GitHub Actions 실행 불가

---

### 🔍 **원인 2: Repository 정보 오류**

#### ✅ **정확한 Repository 설정**
```
Repository: lvletal/tailwind-design-guide
Branch: main
Base Path: tokens/
```

#### 🚨 **자주 하는 실수들**
- ❌ `https://github.com/lvletal/tailwind-design-guide.git` (URL 전체)
- ❌ `tailwind-design-guide` (owner 없음)
- ❌ `master` 브랜치 (main이 맞음)
- ❌ `token/` 또는 `/tokens/` (tokens/가 맞음)

---

### 🔍 **원인 3: Repository 접근 권한 문제**

#### 🔒 **Private Repository인 경우**
1. Repository 소유자인지 확인
2. Collaborator로 추가되었는지 확인
3. Organization의 경우 SSO 설정 확인

#### 🔓 **Public Repository인 경우**
- Token에 `public_repo` 권한 있는지 확인

---

## 🛠️ **단계별 해결 방법**

### **Step 1: 새로운 Token 생성**
1. 기존 토큰 삭제 (실패한 토큰)
2. 위의 **올바른 Token 생성 방법** 따라하기
3. **40자 전체** 복사 확인

### **Step 2: Figma Tokens 플러그인 재설정**
1. **Figma Tokens** 플러그인 열기
2. **Settings** → **Sync** 탭
3. 기존 연결 **Delete** (있다면)
4. **"Add new"** 클릭
5. 다음과 같이 **정확히** 입력:

```
Name: GitHub Sync
Provider: GitHub
Repository: lvletal/tailwind-design-guide
Branch: main
File Path: tokens/
Personal Access Token: [새로 생성한 40자 토큰]
```

### **Step 3: 연결 테스트**
1. **"Test connection"** 클릭
2. ✅ **"Connection successful"** 메시지 확인
3. ❌ 실패 시 → Token 권한 재확인

### **Step 4: 첫 동기화 테스트**
1. **"Pull from GitHub"** 먼저 시도
2. 기존 토큰들이 로드되는지 확인
3. 작은 변경 후 **"Push to GitHub"** 테스트

---

## 🔧 **고급 해결책**

### **방법 1: Token 권한 재확인**
```bash
# 터미널에서 API 호출로 토큰 테스트
curl -H "Authorization: token YOUR_TOKEN" \
     https://api.github.com/repos/lvletal/tailwind-design-guide
```

### **방법 2: Repository 접근 확인**
1. 브라우저에서 Repository 직접 접속
2. **Settings** → **Manage access** 확인
3. 본인 계정이 Owner/Admin인지 확인

### **방법 3: GitHub API Rate Limit 확인**
- Token이 API 호출 제한에 걸렸을 수도 있음
- 1시간 후 다시 시도

---

## 📱 **실시간 문제 해결**

### **증상별 체크리스트**

#### 🔴 **"Authentication failed"**
- [ ] Token 40자 전체 복사했는가?
- [ ] `repo` 권한 체크했는가?
- [ ] Token 만료되지 않았는가?

#### 🔴 **"Repository not found"**
- [ ] `lvletal/tailwind-design-guide` 정확한가?
- [ ] Repository가 존재하는가?
- [ ] Private이면 접근 권한이 있는가?

#### 🔴 **"Push failed"**
- [ ] `workflow` 권한 체크했는가?
- [ ] Branch가 `main`인가?
- [ ] File Path가 `tokens/`인가?

#### 🔴 **"Rate limit exceeded"**
- [ ] 1시간 후 다시 시도
- [ ] 다른 Token 사용해보기

---

## 💡 **성공 확인 방법**

### ✅ **연동 성공 시 나타나는 현상**
1. **"Connection successful"** 메시지
2. **Pull from GitHub** 시 기존 토큰 로드됨
3. **Push to GitHub** 시 커밋 성공 메시지
4. GitHub Repository에 실제 파일 변경 확인

### 🎯 **완전히 작동하는 워크플로우**
```
Figma 색상 변경 → Push to GitHub → GitHub Actions 실행 → 웹사이트 반영
```

---

## 🆘 **그래도 안 될 때**

### **마지막 수단들**
1. **다른 브라우저**에서 GitHub 토큰 생성
2. **Incognito/시크릿 모드**에서 Figma 접속
3. **VPN 끄고** 다시 시도
4. **Figma Desktop App** 대신 **웹 버전** 사용
5. **Token 이름을 영어로** 변경

### **확실한 해결책**
```bash
# 로컬에서 수동 확인
git clone https://github.com/lvletal/tailwind-design-guide.git
cd tailwind-design-guide
# 토큰 파일 직접 수정 후
git add .
git commit -m "Test from local"
git push
```

성공하면 **Figma → GitHub 자동 연동**도 정상 작동할 것입니다! 🚀 