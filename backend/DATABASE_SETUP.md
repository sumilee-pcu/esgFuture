# 데이터베이스 설정 가이드

## 옵션 1: Neon (무료 클라우드 PostgreSQL) - 추천 ⭐

가장 빠르고 간단한 방법입니다.

### 설정 방법:

1. **Neon 계정 생성**
   - https://neon.tech 방문
   - GitHub 계정으로 무료 가입

2. **데이터베이스 생성**
   - "Create a project" 클릭
   - Project name: `future-isa-dev`
   - Region: 가장 가까운 지역 선택
   - PostgreSQL version: 16

3. **연결 문자열 복사**
   - Dashboard에서 Connection String 복사
   - 예시: `postgresql://user:password@ep-xxxxx.us-east-2.aws.neon.tech/neondb`

4. **환경 변수 설정**
   ```bash
   # backend/.env 파일 수정
   DATABASE_URL="복사한_연결_문자열"
   ```

5. **Prisma 마이그레이션 실행**
   ```bash
   cd backend
   npx prisma generate
   npx prisma migrate dev --name init
   ```

### 무료 플랜 제한:
- 500MB 스토리지 (개발에 충분)
- 무제한 쿼리
- 1개 프로젝트

---

## 옵션 2: Railway (무료 플랜)

### 설정 방법:

1. **Railway 계정 생성**
   - https://railway.app 방문
   - GitHub 계정으로 가입

2. **PostgreSQL 데이터베이스 생성**
   - "New Project" → "Provision PostgreSQL"
   - 데이터베이스가 자동으로 생성됨

3. **연결 정보 확인**
   - PostgreSQL 서비스 클릭
   - "Connect" 탭에서 연결 문자열 복사

4. **환경 변수 설정**
   ```bash
   # backend/.env 파일 수정
   DATABASE_URL="복사한_연결_문자열"
   ```

### 무료 플랜 제한:
- $5 크레딧/월
- 500시간 실행 시간

---

## 옵션 3: Supabase (무료 플랜)

### 설정 방법:

1. **Supabase 계정 생성**
   - https://supabase.com 방문
   - GitHub 계정으로 가입

2. **프로젝트 생성**
   - "New Project" 클릭
   - 프로젝트 이름 및 비밀번호 설정
   - Region 선택

3. **연결 문자열 가져오기**
   - Project Settings → Database
   - Connection string의 "URI" 복사
   - 비밀번호를 설정한 비밀번호로 변경

4. **환경 변수 설정**
   ```bash
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres"
   ```

### 무료 플랜 제한:
- 500MB 데이터베이스
- 무제한 API 요청
- 2개 프로젝트

---

## 옵션 4: Docker로 로컬 PostgreSQL 실행

Docker가 설치되어 있다면:

```bash
# PostgreSQL 시작
cd backend
docker-compose up -d

# 확인
docker ps

# 마이그레이션 실행
npx prisma migrate dev --name init
```

### Docker 설치 (필요한 경우):
- Mac: https://docs.docker.com/desktop/install/mac-install/
- Windows: https://docs.docker.com/desktop/install/windows-install/
- Linux: https://docs.docker.com/engine/install/

---

## 옵션 5: 로컬 PostgreSQL 설치

### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo -u postgres psql

# PostgreSQL 콘솔에서:
CREATE DATABASE future_isa_db;
CREATE USER future_isa WITH PASSWORD 'future_isa_password';
GRANT ALL PRIVILEGES ON DATABASE future_isa_db TO future_isa;
\q
```

### macOS (Homebrew):
```bash
brew install postgresql@16
brew services start postgresql@16
psql postgres

# PostgreSQL 콘솔에서:
CREATE DATABASE future_isa_db;
CREATE USER future_isa WITH PASSWORD 'future_isa_password';
GRANT ALL PRIVILEGES ON DATABASE future_isa_db TO future_isa;
\q
```

### Windows:
1. PostgreSQL 설치: https://www.postgresql.org/download/windows/
2. pgAdmin 또는 psql로 데이터베이스 생성

---

## 마이그레이션 실행

데이터베이스 설정 후:

```bash
cd backend

# Prisma Client 생성
npm run prisma:generate

# 마이그레이션 실행
npm run prisma:migrate

# (선택) Prisma Studio로 데이터 확인
npm run prisma:studio
```

---

## 문제 해결

### 연결 오류
```bash
# 연결 테스트
npx prisma db push
```

### 마이그레이션 초기화
```bash
# 마이그레이션 폴더 삭제 후 재시작
rm -rf prisma/migrations
npx prisma migrate dev --name init
```

### 데이터베이스 리셋
```bash
npx prisma migrate reset
```

---

## 권장 사항

- **개발**: Neon 무료 플랜 (가장 빠르고 간단)
- **로컬 개발**: Docker Compose
- **프로덕션**: Railway, Supabase Pro, 또는 AWS RDS
