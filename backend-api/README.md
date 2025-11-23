# 미래산업융합학회 논문투고시스템 백엔드 API

NestJS 기반의 학술 논문 투고 및 심사 관리 시스템 백엔드 API입니다.

## 기술 스택

- **Framework**: NestJS 10.x
- **Language**: TypeScript 5.x
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT + Refresh Token
- **File Storage**: Cloudflare R2 (S3-compatible)
- **Payment**: Toss Payments
- **Documentation**: Swagger/OpenAPI

## 주요 기능

### 1. 인증 및 사용자 관리
- JWT 기반 인증 시스템
- Refresh Token을 통한 자동 토큰 갱신
- 회원가입, 로그인, 로그아웃
- 프로필 관리 및 비밀번호 변경

### 2. 논문 관리
- 논문 투고 (5단계 프로세스)
- 논문 수정 및 삭제
- 파일 업로드 (Cloudflare R2)
- 논문 상태 관리 (작성중, 투고완료, 심사중, 수정요청, 게재확정, 게재불가)
- 저자 정보 관리 (제1저자, 교신저자, 공동저자)

### 3. 심사 시스템
- 심사자 배정
- 심사 의견 제출
- 정량적 평가 (독창성, 방법론, 결과, 표현)
- 심사 결과 관리 (게재가, 수정 후 게재, 수정 후 재심, 게재불가)
- 자동 논문 상태 업데이트

### 4. 결제 시스템
- Toss Payments 연동
- 회비, 심사비, 게재료 결제
- 결제 승인 및 취소
- 결제 내역 조회

### 5. 공지사항
- 공지사항 CRUD
- 카테고리별 분류
- 고정 공지 기능
- 조회수 추적

## 프로젝트 구조

```
backend-api/
├── src/
│   ├── config/                 # 설정 파일
│   │   └── r2.config.ts       # Cloudflare R2 설정
│   ├── database/
│   │   └── entities/          # TypeORM 엔티티
│   │       ├── user.entity.ts
│   │       ├── paper.entity.ts
│   │       ├── author.entity.ts
│   │       ├── paper-file.entity.ts
│   │       ├── review.entity.ts
│   │       ├── payment.entity.ts
│   │       └── notice.entity.ts
│   ├── modules/
│   │   ├── auth/              # 인증 모듈
│   │   │   ├── guards/        # JWT, Local 가드
│   │   │   ├── strategies/    # Passport 전략
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   ├── users/             # 사용자 모듈
│   │   │   ├── dto/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   └── users.module.ts
│   │   ├── papers/            # 논문 모듈
│   │   │   ├── dto/
│   │   │   ├── r2-storage.service.ts
│   │   │   ├── papers.controller.ts
│   │   │   ├── papers.service.ts
│   │   │   └── papers.module.ts
│   │   ├── reviews/           # 심사 모듈
│   │   │   ├── dto/
│   │   │   ├── reviews.controller.ts
│   │   │   ├── reviews.service.ts
│   │   │   └── reviews.module.ts
│   │   ├── payments/          # 결제 모듈
│   │   │   ├── dto/
│   │   │   ├── payments.controller.ts
│   │   │   ├── payments.service.ts
│   │   │   └── payments.module.ts
│   │   └── notices/           # 공지사항 모듈
│   │       ├── dto/
│   │       ├── notices.controller.ts
│   │       ├── notices.service.ts
│   │       └── notices.module.ts
│   ├── app.module.ts          # 루트 모듈
│   └── main.ts                # 애플리케이션 진입점
├── .env.example               # 환경변수 템플릿
├── package.json
├── tsconfig.json
└── README.md
```

## 설치 및 실행

### 1. 의존성 설치

```bash
cd backend-api
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 `.env`로 복사하고 필요한 값을 설정합니다:

```bash
cp .env.example .env
```

주요 환경 변수:
- `DB_*`: PostgreSQL 데이터베이스 연결 정보
- `JWT_SECRET`, `JWT_REFRESH_SECRET`: JWT 토큰 시크릿 키
- `R2_*`: Cloudflare R2 설정
- `TOSS_SECRET_KEY`: Toss Payments API 키

### 3. 데이터베이스 설정

PostgreSQL 데이터베이스를 생성합니다:

```sql
CREATE DATABASE future_isa_db;
```

TypeORM이 자동으로 테이블을 생성합니다 (development 모드에서 `synchronize: true`).

### 4. 개발 서버 실행

```bash
npm run dev
```

서버가 `http://localhost:4000`에서 실행됩니다.

### 5. 프로덕션 빌드

```bash
npm run build
npm start
```

## API 문서

서버 실행 후 다음 URL에서 Swagger API 문서를 확인할 수 있습니다:

```
http://localhost:4000/api-docs
```

## 주요 API 엔드포인트

### 인증 (Auth)
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `POST /api/auth/logout` - 로그아웃
- `POST /api/auth/refresh` - 토큰 갱신

### 사용자 (Users)
- `GET /api/users/profile` - 내 프로필 조회
- `PATCH /api/users/profile` - 프로필 수정
- `POST /api/users/change-password` - 비밀번호 변경

### 논문 (Papers)
- `POST /api/papers` - 논문 생성
- `GET /api/papers` - 논문 목록 조회
- `GET /api/papers/:id` - 논문 상세 조회
- `PATCH /api/papers/:id` - 논문 수정
- `POST /api/papers/:id/files` - 파일 업로드
- `POST /api/papers/:id/submit` - 논문 투고

### 심사 (Reviews)
- `POST /api/reviews/assign` - 심사자 배정
- `POST /api/reviews/:id/submit` - 심사 제출
- `GET /api/reviews/my-reviews` - 내 심사 목록
- `GET /api/reviews/paper/:paperId` - 논문의 심사 조회

### 결제 (Payments)
- `POST /api/payments` - 결제 요청
- `POST /api/payments/confirm` - 결제 승인
- `POST /api/payments/:id/cancel` - 결제 취소
- `GET /api/payments` - 결제 내역 조회

### 공지사항 (Notices)
- `POST /api/notices` - 공지사항 작성
- `GET /api/notices` - 공지사항 목록
- `GET /api/notices/:id` - 공지사항 상세
- `PATCH /api/notices/:id` - 공지사항 수정
- `DELETE /api/notices/:id` - 공지사항 삭제

## 데이터베이스 스키마

### 주요 테이블

- **users**: 사용자 정보, 회원 유형, 권한
- **papers**: 논문 정보, 제목, 초록, 키워드, 상태
- **authors**: 논문 저자 정보
- **paper_files**: 논문 파일 메타데이터 (R2 경로)
- **reviews**: 심사 정보, 평가 점수, 심사 의견
- **payments**: 결제 정보, Toss Payments 연동
- **notices**: 공지사항

## Cloudflare R2 설정

1. Cloudflare Dashboard에서 R2 버킷 생성
2. API 토큰 발급 (Read & Write 권한)
3. `.env` 파일에 R2 설정 추가:
   - `R2_ACCOUNT_ID`: Cloudflare 계정 ID
   - `R2_ACCESS_KEY_ID`: R2 Access Key
   - `R2_SECRET_ACCESS_KEY`: R2 Secret Key
   - `R2_BUCKET_NAME`: 버킷 이름

## Toss Payments 설정

1. [Toss Payments 개발자센터](https://developers.tosspayments.com/)에서 계정 생성
2. 테스트/상용 API 키 발급
3. `.env` 파일에 Toss Payments 설정 추가:
   - `TOSS_SECRET_KEY`: Secret Key
   - `TOSS_CLIENT_KEY`: Client Key

## 보안

- 모든 민감한 API는 JWT 인증 필요
- 비밀번호는 bcrypt로 해시화
- Refresh Token은 데이터베이스에 해시화하여 저장
- CORS 설정으로 허용된 도메인만 접근 가능
- 파일 업로드 시 파일 타입 및 크기 검증

## 개발 스크립트

```bash
# 개발 서버 (hot reload)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 마이그레이션 생성
npm run migration:generate -- -n MigrationName

# 마이그레이션 실행
npm run migration:run

# 마이그레이션 되돌리기
npm run migration:revert
```

## 라이선스

UNLICENSED - 미래산업융합학회 전용
