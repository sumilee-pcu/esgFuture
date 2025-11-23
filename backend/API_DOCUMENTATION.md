# API Documentation - 미래산업융합학회 Backend

## Base URL
```
Development: http://localhost:4000
Production: https://api.future-isa.or.kr
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Table of Contents
1. [Authentication APIs](#authentication-apis)
2. [Paper APIs](#paper-apis)
3. [Notice APIs](#notice-apis)
4. [Error Responses](#error-responses)

---

## Authentication APIs

### Register User
Create a new user account.

**Endpoint:** `POST /api/auth/register`

**Access:** Public

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "nameKo": "홍길동",
  "nameEn": "Gildong Hong",
  "affiliationKo": "서울대학교",
  "affiliationEn": "Seoul National University",
  "position": "교수",
  "phone": "010-1234-5678",
  "address": "서울특별시 관악구",
  "orcid": "0000-0001-2345-6789",
  "memberType": "REGULAR"
}
```

**Response:** `201 Created`
```json
{
  "message": "Registration successful. Please check your email to verify your account.",
  "userId": "clxxxxx"
}
```

---

### Login
Authenticate user and receive access token.

**Endpoint:** `POST /api/auth/login`

**Access:** Public

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "message": "Login successful",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "clxxxxx",
    "email": "user@example.com",
    "nameKo": "홍길동",
    "nameEn": "Gildong Hong",
    "roles": ["MEMBER"],
    "memberType": "REGULAR"
  }
}
```

---

### Verify Email
Verify user's email address with token.

**Endpoint:** `POST /api/auth/verify-email`

**Access:** Public

**Request Body:**
```json
{
  "token": "verification_token_here"
}
```

**Response:** `200 OK`
```json
{
  "message": "Email verified successfully"
}
```

---

### Forgot Password
Request password reset email.

**Endpoint:** `POST /api/auth/forgot-password`

**Access:** Public

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:** `200 OK`
```json
{
  "message": "If email exists, password reset link has been sent"
}
```

---

### Reset Password
Reset password with token.

**Endpoint:** `POST /api/auth/reset-password`

**Access:** Public

**Request Body:**
```json
{
  "token": "reset_token_here",
  "newPassword": "newpassword123"
}
```

**Response:** `200 OK`
```json
{
  "message": "Password reset successful"
}
```

---

### Get Profile
Get current user's profile.

**Endpoint:** `GET /api/auth/profile`

**Access:** Private

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "id": "clxxxxx",
  "email": "user@example.com",
  "nameKo": "홍길동",
  "nameEn": "Gildong Hong",
  "affiliationKo": "서울대학교",
  "affiliationEn": "Seoul National University",
  "position": "교수",
  "phone": "010-1234-5678",
  "address": "서울특별시 관악구",
  "orcid": "0000-0001-2345-6789",
  "memberType": "REGULAR",
  "membershipExpiry": "2025-12-31T00:00:00.000Z",
  "roles": ["MEMBER"],
  "isReviewer": false,
  "isEditor": false,
  "emailVerified": true,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

### Update Profile
Update user profile information.

**Endpoint:** `PUT /api/auth/profile`

**Access:** Private

**Request Body:**
```json
{
  "nameKo": "홍길동",
  "nameEn": "Gildong Hong",
  "affiliationKo": "서울대학교",
  "affiliationEn": "Seoul National University",
  "position": "부교수",
  "phone": "010-1234-5678",
  "address": "서울특별시 관악구",
  "orcid": "0000-0001-2345-6789"
}
```

**Response:** `200 OK`
```json
{
  "message": "Profile updated successfully",
  "user": { ... }
}
```

---

### Change Password
Change current password.

**Endpoint:** `POST /api/auth/change-password`

**Access:** Private

**Request Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123"
}
```

**Response:** `200 OK`
```json
{
  "message": "Password changed successfully"
}
```

---

## Paper APIs

### Create Paper
Create a new paper submission (draft).

**Endpoint:** `POST /api/papers`

**Access:** Private

**Request Body:**
```json
{
  "submissionType": "REGULAR",
  "language": "KOREAN",
  "titleKo": "논문 제목",
  "titleEn": "Paper Title",
  "abstractKo": "한글 초록...",
  "abstractEn": "English abstract...",
  "keywords": ["키워드1", "키워드2", "키워드3"],
  "researchField": "컴퓨터공학",
  "hasFunding": true,
  "fundingInfo": "한국연구재단 지원",
  "authors": [
    {
      "nameKo": "홍길동",
      "nameEn": "Gildong Hong",
      "affiliationKo": "서울대학교",
      "affiliationEn": "Seoul National University",
      "email": "author@example.com",
      "orcid": "0000-0001-2345-6789",
      "authorType": "FIRST_AUTHOR",
      "isCorresponding": true
    }
  ]
}
```

**Response:** `201 Created`
```json
{
  "message": "Paper created successfully",
  "paper": {
    "id": "clxxxxx",
    "titleKo": "논문 제목",
    "status": "DRAFT"
  }
}
```

---

### Get User's Papers
Get all papers submitted by the current user.

**Endpoint:** `GET /api/papers`

**Access:** Private

**Query Parameters:**
- `status` (optional): Filter by status (DRAFT, SUBMITTED, UNDER_REVIEW, etc.)

**Response:** `200 OK`
```json
{
  "papers": [
    {
      "id": "clxxxxx",
      "submissionType": "REGULAR",
      "language": "KOREAN",
      "titleKo": "논문 제목",
      "titleEn": "Paper Title",
      "status": "SUBMITTED",
      "submittedAt": "2024-01-15T00:00:00.000Z",
      "paperAuthors": [...],
      "files": [...],
      "reviews": [...]
    }
  ]
}
```

---

### Get All Papers (Admin/Editor)
Get all papers in the system.

**Endpoint:** `GET /api/papers/all`

**Access:** Private (EDITOR, ADMIN)

**Query Parameters:**
- `status` (optional): Filter by status
- `page` (optional, default: 1): Page number
- `limit` (optional, default: 20): Items per page

**Response:** `200 OK`
```json
{
  "papers": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

---

### Get Paper Details
Get detailed information about a specific paper.

**Endpoint:** `GET /api/papers/:id`

**Access:** Private (Author, Reviewer, Editor, Admin)

**Response:** `200 OK`
```json
{
  "paper": {
    "id": "clxxxxx",
    "submissionType": "REGULAR",
    "language": "KOREAN",
    "titleKo": "논문 제목",
    "titleEn": "Paper Title",
    "abstractKo": "한글 초록...",
    "abstractEn": "English abstract...",
    "keywords": ["키워드1", "키워드2"],
    "researchField": "컴퓨터공학",
    "status": "UNDER_REVIEW",
    "submittedAt": "2024-01-15T00:00:00.000Z",
    "author": {
      "id": "clxxxxx",
      "nameKo": "홍길동",
      "nameEn": "Gildong Hong",
      "email": "author@example.com"
    },
    "paperAuthors": [...],
    "files": [...],
    "reviews": [...]
  }
}
```

---

### Update Paper
Update paper information (draft only).

**Endpoint:** `PUT /api/papers/:id`

**Access:** Private (Author)

**Request Body:**
```json
{
  "titleKo": "수정된 논문 제목",
  "titleEn": "Updated Paper Title",
  "abstractKo": "수정된 한글 초록...",
  "abstractEn": "Updated English abstract...",
  "keywords": ["새키워드1", "새키워드2"],
  "researchField": "컴퓨터공학",
  "hasFunding": true,
  "fundingInfo": "한국연구재단 지원"
}
```

**Response:** `200 OK`
```json
{
  "message": "Paper updated successfully",
  "paper": { ... }
}
```

---

### Delete Paper
Delete a paper (draft only).

**Endpoint:** `DELETE /api/papers/:id`

**Access:** Private (Author)

**Response:** `200 OK`
```json
{
  "message": "Paper deleted successfully"
}
```

---

### Submit Paper
Submit paper for review.

**Endpoint:** `POST /api/papers/:id/submit`

**Access:** Private (Author)

**Response:** `200 OK`
```json
{
  "message": "Paper submitted successfully"
}
```

---

### Upload Paper File
Upload manuscript or other files.

**Endpoint:** `POST /api/papers/:id/files`

**Access:** Private (Author)

**Content-Type:** `multipart/form-data`

**Form Data:**
- `file`: File to upload (PDF, DOCX)
- `fileType`: Type of file (MANUSCRIPT, COPYRIGHT_AGREEMENT, etc.)

**Response:** `201 Created`
```json
{
  "message": "File uploaded successfully",
  "file": {
    "id": "clxxxxx",
    "fileType": "MANUSCRIPT",
    "fileName": "paper.pdf",
    "fileSize": 1024000,
    "version": 1,
    "uploadedAt": "2024-01-15T00:00:00.000Z"
  }
}
```

---

## Notice APIs

### Get Notices
Get all notices with pagination.

**Endpoint:** `GET /api/notices`

**Access:** Public

**Query Parameters:**
- `category` (optional): Filter by category (GENERAL, SUBMISSION, CONFERENCE, ANNOUNCEMENT)
- `page` (optional, default: 1): Page number
- `limit` (optional, default: 20): Items per page

**Response:** `200 OK`
```json
{
  "notices": [
    {
      "id": "clxxxxx",
      "category": "SUBMISSION",
      "title": "2024년 제1호 논문 모집",
      "content": "...",
      "author": {
        "nameKo": "관리자",
        "nameEn": "Admin"
      },
      "isPinned": true,
      "views": 150,
      "publishedAt": "2024-01-01T00:00:00.000Z",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

---

### Get Notice
Get a single notice by ID.

**Endpoint:** `GET /api/notices/:id`

**Access:** Public

**Response:** `200 OK`
```json
{
  "notice": {
    "id": "clxxxxx",
    "category": "SUBMISSION",
    "title": "2024년 제1호 논문 모집",
    "content": "...",
    "author": {
      "nameKo": "관리자",
      "nameEn": "Admin"
    },
    "isPinned": true,
    "views": 151,
    "publishedAt": "2024-01-01T00:00:00.000Z",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Create Notice
Create a new notice (Editor/Admin only).

**Endpoint:** `POST /api/notices`

**Access:** Private (EDITOR, ADMIN)

**Request Body:**
```json
{
  "category": "SUBMISSION",
  "title": "새로운 공지사항",
  "content": "공지사항 내용...",
  "isPinned": false
}
```

**Response:** `201 Created`
```json
{
  "message": "Notice created successfully",
  "notice": { ... }
}
```

---

### Update Notice
Update an existing notice (Editor/Admin only).

**Endpoint:** `PUT /api/notices/:id`

**Access:** Private (EDITOR, ADMIN)

**Request Body:**
```json
{
  "category": "GENERAL",
  "title": "수정된 제목",
  "content": "수정된 내용...",
  "isPinned": true
}
```

**Response:** `200 OK`
```json
{
  "message": "Notice updated successfully",
  "notice": { ... }
}
```

---

### Delete Notice
Delete a notice (Editor/Admin only).

**Endpoint:** `DELETE /api/notices/:id`

**Access:** Private (EDITOR, ADMIN)

**Response:** `200 OK`
```json
{
  "message": "Notice deleted successfully"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Valid email is required"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid or expired token"
}
```

### 403 Forbidden
```json
{
  "error": "Forbidden: Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "error": "Not found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

---

## Status Codes

| Code | Description |
|------|-------------|
| 200  | OK - Request successful |
| 201  | Created - Resource created successfully |
| 400  | Bad Request - Invalid input |
| 401  | Unauthorized - Authentication required |
| 403  | Forbidden - Insufficient permissions |
| 404  | Not Found - Resource not found |
| 500  | Internal Server Error - Server error |

---

## Data Models

### User Roles
- `MEMBER`: Regular member
- `REVIEWER`: Can review papers
- `EDITOR`: Can manage papers and reviews
- `ADMIN`: Full system access

### Member Types
- `REGULAR`: Regular membership
- `STUDENT`: Student membership
- `LIFETIME`: Lifetime membership

### Submission Types
- `REGULAR`: Regular review (3-4 months)
- `URGENT`: Urgent review (2 months)

### Paper Status
- `DRAFT`: Draft, not submitted
- `SUBMITTED`: Submitted, waiting for review assignment
- `UNDER_REVIEW`: Currently being reviewed
- `REVISION_REQUESTED`: Revisions requested
- `ACCEPTED`: Accepted for publication
- `REJECTED`: Rejected
- `PUBLISHED`: Published in journal

### File Types
- `MANUSCRIPT`: Main manuscript file
- `REVIEW_OPINION`: Review opinion document
- `COPYRIGHT_AGREEMENT`: Copyright agreement
- `CONFLICT_OF_INTEREST`: Conflict of interest disclosure
- `SIMILARITY_CHECK`: Plagiarism check result
- `OTHER`: Other files

---

## Rate Limiting

Currently no rate limiting is implemented. This will be added in future versions.

---

## Changelog

### Version 1.0.0 (2024-11-23)
- Initial API release
- Authentication endpoints
- Paper management endpoints
- Notice management endpoints
- File upload support
