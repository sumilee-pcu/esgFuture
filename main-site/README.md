# 미래산업융합학회 메인 홈페이지

Future Industry Convergence Society - Official Website

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 프로젝트 구조

```
main-site/
├── public/              # 정적 파일 (이미지, 폰트 등)
│   └── images/
├── src/
│   ├── app/            # Next.js App Router 페이지
│   ├── components/     # React 컴포넌트
│   │   ├── common/    # 공통 컴포넌트 (Button, Input 등)
│   │   └── layout/    # 레이아웃 컴포넌트 (Header, Footer 등)
│   ├── lib/           # 외부 라이브러리 설정
│   ├── types/         # TypeScript 타입 정의
│   └── utils/         # 유틸리티 함수
├── .eslintrc.json     # ESLint 설정
├── next.config.ts     # Next.js 설정
├── tailwind.config.ts # Tailwind CSS 설정
└── tsconfig.json      # TypeScript 설정
```

## 개발 시작

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 빌드
```bash
npm run build
npm run start
```

## 주요 기능

- 학회 소개
- 학회지 정보
- 공지사항
- 학술 활동
- 회원 안내
- 자료실

## 환경 변수

`.env.local` 파일 생성 후 다음 변수 설정:

```env
# 예시
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 배포

Vercel을 사용한 배포 권장:

```bash
npm run build
```

## 라이선스

Copyright © 2024 미래산업융합학회. All rights reserved.
