# 미래산업융합학회 웹사이트 프로젝트

Future Industry Convergence Society - Official Website & Paper Submission System

## 📋 프로젝트 개요

미래산업융합학회의 공식 웹사이트와 논문 투고 시스템을 구축하는 프로젝트입니다.

## 🏗️ 프로젝트 구조

```
esgFuture/
├── main-site/              # 메인 홈페이지 (공개)
│   ├── src/
│   │   ├── app/           # Next.js App Router 페이지
│   │   ├── components/    # React 컴포넌트
│   │   ├── lib/          # 라이브러리 설정
│   │   ├── types/        # TypeScript 타입
│   │   └── utils/        # 유틸리티 함수
│   └── public/           # 정적 파일
│
├── submission-system/     # 논문 투고 시스템 (회원 전용) - 개발 예정
│
└── PRD_미래산업융합학회.md  # 프로젝트 요구사항 문서
```

## 🚀 시작하기

### 메인 사이트

```bash
cd main-site
npm install
npm run dev
```

브라우저에서 http://localhost:3000 열기

### 논문 투고 시스템

🚧 개발 예정

## 📖 문서

- [PRD (Product Requirements Document)](./PRD_미래산업융합학회.md)
- [메인 사이트 README](./main-site/README.md)
- [투고 시스템 README](./submission-system/README.md)

## 🛠️ 기술 스택

### 메인 사이트
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Icons

### 논문 투고 시스템 (계획)
- Next.js 15
- TypeScript
- PostgreSQL
- Tailwind CSS
- JWT Authentication
- Payment Gateway (토스페이먼츠/아임포트)

## 📅 개발 로드맵

### Phase 1: 메인 홈페이지 (진행중)
- ✅ 프로젝트 초기 설정
- ✅ 기본 레이아웃 (Header, Footer)
- ⏳ 학회 소개 페이지
- ⏳ 학회지 정보 페이지
- ⏳ 공지사항 시스템
- ⏳ 회원 안내 페이지

### Phase 2: 논문 투고 시스템 (예정)
- 인증 시스템
- 논문 투고 기능
- 심사 프로세스
- 결제 시스템
- 문서 관리

### Phase 3: 고도화 (예정)
- KCI 연동
- 모바일 앱
- AI 기반 유사도 검사
- 통계 및 분석

## 🔐 환경 변수

각 프로젝트의 `.env.example` 파일을 참고하여 `.env.local` 파일을 생성하세요.

## 📝 라이선스

Copyright © 2024 미래산업융합학회 (Future Industry Convergence Society). All rights reserved.

## 📧 연락처

- 이메일: info@future-isa.or.kr
- 논문 문의: paper@future-isa.or.kr
- 전화: 02-XXXX-XXXX
