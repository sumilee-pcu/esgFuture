import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default async function PaperDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // TODO: API로부터 데이터 가져오기
  const paper = {
    id: id,
    title: "AI 기반 제조업 최적화 연구",
    titleEn: "AI-based Manufacturing Optimization Research",
    submissionType: "일반",
    language: "국문",
    status: "심사중",
    statusColor: "bg-yellow-100 text-yellow-800",
    submittedAt: "2024-01-15",
    updatedAt: "2024-01-20",
    authors: [
      {
        name: "홍길동",
        affiliation: "한국대학교",
        email: "hong@example.com",
        type: "제1저자",
        isCorresponding: true,
      },
      {
        name: "김철수",
        affiliation: "서울대학교",
        email: "kim@example.com",
        type: "공동저자",
        isCorresponding: false,
      },
    ],
    abstract:
      "본 연구는 인공지능 기술을 활용하여 제조업 공정을 최적화하는 방법론을 제시한다. 머신러닝 알고리즘을 통해 생산 효율성을 높이고 불량률을 감소시키는 것을 목표로 한다.",
    keywords: ["인공지능", "제조업", "최적화", "머신러닝", "생산효율"],
    researchField: "AI",
    hasFunding: true,
    fundingInfo: "본 연구는 한국연구재단의 지원을 받아 수행되었음",
    files: [
      {
        type: "본문",
        name: "manuscript.pdf",
        uploadedAt: "2024-01-15",
      },
      {
        type: "저작권이양동의서",
        name: "copyright.pdf",
        uploadedAt: "2024-01-15",
      },
    ],
    reviews: [
      {
        reviewer: "심사위원 1",
        status: "진행중",
        submittedAt: null,
      },
      {
        reviewer: "심사위원 2",
        status: "진행중",
        submittedAt: null,
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="/papers"
              className="mb-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
            >
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              논문 목록으로
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{paper.title}</h1>
          </div>
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${paper.statusColor}`}
          >
            {paper.status}
          </span>
        </div>

        {/* Paper Info */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Basic Info */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                논문 정보
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    제목 (국문)
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{paper.title}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    제목 (영문)
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.titleEn}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">초록</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.abstract}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">키워드</dt>
                  <dd className="mt-1">
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    연구 분야
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.researchField}
                  </dd>
                </div>
                {paper.hasFunding && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      연구 지원기관
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {paper.fundingInfo}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Authors */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                저자 정보
              </h2>
              <div className="space-y-4">
                {paper.authors.map((author, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 bg-gray-50 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {author.name}
                          {author.isCorresponding && (
                            <span className="ml-2 text-xs text-blue-600">
                              (교신저자)
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {author.affiliation}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {author.email}
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                        {author.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Files */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                첨부 파일
              </h2>
              <div className="space-y-3">
                {paper.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-center">
                      <svg
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {file.type} • {file.uploadedAt}
                        </p>
                      </div>
                    </div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      다운로드
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Status */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                심사 현황
              </h2>
              <div className="space-y-3">
                {paper.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {review.reviewer}
                      </p>
                      <p className="text-sm text-gray-500">
                        {review.submittedAt
                          ? `제출일: ${review.submittedAt}`
                          : "심사 진행중"}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        review.status === "완료"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {review.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submission Details */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                투고 정보
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    심사 유형
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.submissionType} 심사
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    논문 언어
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.language}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">투고일</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.submittedAt}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    최종 수정일
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {paper.updatedAt}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Actions */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                액션
              </h2>
              <div className="space-y-2">
                {paper.status === "수정요청" && (
                  <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    수정 논문 제출
                  </button>
                )}
                <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  논문 정보 수정
                </button>
                <button className="w-full rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                  논문 철회
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="font-semibold text-gray-900">도움이 필요하신가요?</h3>
              <p className="mt-2 text-sm text-gray-600">
                논문 투고 및 심사 과정에 대해 궁금하신 점이 있으시면 편집위원회에
                문의해주세요.
              </p>
              <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">
                문의하기 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
