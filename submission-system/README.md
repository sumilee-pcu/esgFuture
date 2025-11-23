# 미래산업융합학회 논문투고시스템

## 프로젝트 개요

미래산업융합학회 회원 전용 논문 투고 및 관리 시스템입니다.

## 주요 기능

### Phase 1 (MVP)
- ✅ 회원 인증 시스템 (로그인, 회원가입, 비밀번호 재설정)
- ✅ 대시보드 (투고 현황, 공지사항)
- ✅ 논문 투고 시스템 (5단계 스텝)
- ✅ 논문 관리 (목록, 상세보기)
- ✅ 공지사항
- ✅ 결제 관리

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (Zustand 준비)
- **HTTP Client**: Axios
- **Form Validation**: React Hook Form + Zod

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

포트: http://localhost:3001

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm run start
```

## 환경 변수

`.env.example` 파일을 참고하여 `.env.local` 파일을 생성하세요.

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## 프로젝트 구조

```
submission-system/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── auth/              # 인증 관련 페이지
│   │   ├── dashboard/         # 대시보드
│   │   ├── papers/            # 논문 관련 페이지
│   │   ├── notices/           # 공지사항
│   │   └── payments/          # 결제 관리
│   ├── components/            # React 컴포넌트
│   ├── lib/                   # 유틸리티 및 API
│   ├── types/                 # TypeScript 타입 정의
│   └── store/                 # 상태 관리 (향후 Zustand)
├── public/                    # 정적 파일
└── ...
```

## 주요 페이지

### 인증
- `/auth/login` - 로그인
- `/auth/register` - 회원가입
- `/auth/forgot-password` - 비밀번호 찾기

### 회원 기능
- `/dashboard` - 대시보드
- `/papers` - 논문 목록
- `/papers/submit` - 논문 투고
- `/papers/[id]` - 논문 상세
- `/notices` - 공지사항
- `/payments` - 결제 관리

## API 연동

백엔드 API 서버는 별도로 개발 중입니다.
API 엔드포인트는 `/src/lib/api.ts`에 정의되어 있습니다.

### API 구조

```typescript
import { authApi, paperApi, noticeApi, paymentApi, userApi } from '@/lib/api';

// 사용 예시
const result = await authApi.login(email, password);
const papers = await paperApi.getAll();
```

## 개발 가이드

### 코드 스타일

```bash
# Prettier 포맷팅
npm run format

# ESLint 검사
npm run lint
```

### 타입 정의

모든 데이터 타입은 `/src/types/index.ts`에 정의되어 있습니다.

## TODO

- [ ] Zustand 상태 관리 구현
- [ ] 백엔드 API 연동
- [ ] 파일 업로드 기능 완성
- [ ] 결제 시스템 연동 (토스페이먼츠/아임포트)
- [ ] 심사위원/편집위원 기능
- [ ] 이메일 알림 시스템
- [ ] 테스트 코드 작성

## 라이센스

Copyright © 2024 미래산업융합학회. All rights reserved.
