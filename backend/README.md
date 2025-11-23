# 미래산업융합학회 Backend API

Future Industry Convergence Society - Backend REST API

## 📋 개요

학술 논문 투고 및 심사 시스템을 위한 RESTful API 서버입니다.

## 🛠️ 기술 스택

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator
- **File Upload**: Multer
- **Email**: Nodemailer

## 📁 프로젝트 구조

```
backend/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── config/
│   │   ├── database.ts        # Prisma client
│   │   └── index.ts           # App configuration
│   ├── controllers/
│   │   ├── authController.ts  # Authentication logic
│   │   ├── paperController.ts # Paper management
│   │   └── noticeController.ts # Notice management
│   ├── middleware/
│   │   ├── auth.ts            # JWT authentication
│   │   ├── errorHandler.ts    # Error handling
│   │   └── upload.ts          # File upload
│   ├── routes/
│   │   ├── authRoutes.ts      # Auth endpoints
│   │   ├── paperRoutes.ts     # Paper endpoints
│   │   └── noticeRoutes.ts    # Notice endpoints
│   ├── utils/
│   │   ├── jwt.ts             # JWT utilities
│   │   ├── password.ts        # Password hashing
│   │   └── email.ts           # Email utilities
│   └── server.ts              # Main server file
├── .env.example               # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example`을 `.env`로 복사하고 필요한 값을 설정하세요:

```bash
cp .env.example .env
```

필수 환경 변수:
- `DATABASE_URL`: PostgreSQL 연결 문자열
- `JWT_SECRET`: JWT 비밀 키
- `SMTP_USER`, `SMTP_PASSWORD`: 이메일 발송을 위한 SMTP 설정

### 3. 데이터베이스 설정

Prisma를 사용하여 데이터베이스를 초기화합니다:

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio
npm run prisma:studio
```

### 4. 개발 서버 실행

```bash
npm run dev
```

서버가 `http://localhost:4000`에서 실행됩니다.

### 5. 프로덕션 빌드

```bash
# Build
npm run build

# Run production server
npm start
```

## 📚 API 문서

상세한 API 문서는 [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)를 참고하세요.

### 주요 엔드포인트

#### Authentication
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `POST /api/auth/verify-email` - 이메일 인증
- `GET /api/auth/profile` - 프로필 조회
- `PUT /api/auth/profile` - 프로필 수정

#### Papers
- `POST /api/papers` - 논문 생성
- `GET /api/papers` - 내 논문 목록
- `GET /api/papers/:id` - 논문 상세 조회
- `PUT /api/papers/:id` - 논문 수정
- `POST /api/papers/:id/submit` - 논문 투고
- `POST /api/papers/:id/files` - 파일 업로드

#### Notices
- `GET /api/notices` - 공지사항 목록
- `GET /api/notices/:id` - 공지사항 상세
- `POST /api/notices` - 공지사항 생성 (관리자)
- `PUT /api/notices/:id` - 공지사항 수정 (관리자)

## 🔒 인증

대부분의 API는 JWT 토큰을 사용한 인증이 필요합니다.

### 토큰 획득
1. `/api/auth/login`으로 로그인
2. 응답에서 `accessToken` 받기

### 토큰 사용
```bash
curl -H "Authorization: Bearer <your_token>" \
  http://localhost:4000/api/auth/profile
```

## 🗄️ 데이터베이스 스키마

Prisma 스키마는 다음을 포함합니다:

- **Users**: 사용자 정보 및 인증
- **Papers**: 논문 정보
- **PaperAuthors**: 논문 저자 정보
- **PaperFiles**: 논문 파일 정보
- **Reviews**: 심사 정보
- **ReviewScores**: 심사 점수
- **Payments**: 결제 정보
- **PaymentItems**: 결제 항목
- **Notices**: 공지사항
- **Journals**: 학회지 정보

자세한 스키마는 `prisma/schema.prisma`를 참고하세요.

## 📧 이메일 기능

시스템은 다음 이메일을 자동 발송합니다:

- 회원가입 인증 이메일
- 비밀번호 재설정 이메일
- 논문 투고 확인 이메일
- 심사 배정 알림 이메일

SMTP 설정이 필요합니다 (`.env` 파일).

## 📤 파일 업로드

- **최대 파일 크기**: 20MB (설정 가능)
- **허용 파일 형식**: .pdf, .docx, .doc
- **저장 위치**: `./uploads/` 디렉토리

## 🔐 보안

- 비밀번호는 bcrypt로 해싱
- JWT 토큰 기반 인증
- CORS 설정
- 입력 검증 (express-validator)
- SQL Injection 방지 (Prisma)

## 🧪 테스팅

```bash
# Run tests (to be implemented)
npm test
```

## 📝 스크립트

```json
{
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:studio": "prisma studio",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write \"src/**/*.ts\""
}
```

## 🐛 디버깅

개발 모드에서는 상세한 에러 메시지가 반환됩니다:

```bash
NODE_ENV=development npm run dev
```

## 🚀 배포

### Docker를 사용한 배포 (권장)

```dockerfile
# Dockerfile 예시
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
RUN npx prisma generate
EXPOSE 4000
CMD ["npm", "start"]
```

### 환경 변수 체크리스트

배포 전 다음 환경 변수를 확인하세요:
- ✅ `DATABASE_URL`
- ✅ `JWT_SECRET` (강력한 랜덤 문자열)
- ✅ `JWT_REFRESH_SECRET`
- ✅ `SMTP_*` (이메일 설정)
- ✅ `CORS_ORIGIN` (프론트엔드 URL)

## 🤝 기여

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

Copyright © 2024 미래산업융합학회 (Future Industry Convergence Society). All rights reserved.

## 📞 연락처

- 이메일: info@future-isa.or.kr
- 기술 지원: dev@future-isa.or.kr

## 📚 추가 자료

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Express.js Guide](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
