import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function DashboardPage() {
  // TODO: API로부터 데이터 가져오기
  const stats = {
    inReview: 2,
    revisionRequested: 1,
    accepted: 1,
    total: 4,
  };

  const recentPapers = [
    {
      id: 1,
      title: "AI 기반 제조업 최적화 연구",
      status: "심사중",
      statusColor: "bg-yellow-100 text-yellow-800",
      submittedAt: "2024-01-15",
    },
    {
      id: 2,
      title: "블록체인 기반 공급망 관리 시스템",
      status: "심사중",
      statusColor: "bg-yellow-100 text-yellow-800",
      submittedAt: "2024-01-10",
    },
    {
      id: 3,
      title: "IoT 센서 네트워크 최적화 기법",
      status: "수정요청",
      statusColor: "bg-orange-100 text-orange-800",
      submittedAt: "2024-02-05",
    },
    {
      id: 4,
      title: "머신러닝을 활용한 수요 예측 모델",
      status: "게재확정",
      statusColor: "bg-green-100 text-green-800",
      submittedAt: "2023-12-20",
    },
  ];

  const recentNotices = [
    {
      id: 1,
      title: "2024년 제1호 논문 모집 안내",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "시스템 정기 점검 안내 (1/30)",
      date: "2024-01-18",
    },
    {
      id: 3,
      title: "논문 투고 규정 개정 안내",
      date: "2024-01-15",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
          <p className="mt-1 text-sm text-gray-500">
            논문 투고 및 심사 현황을 확인하세요
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              심사중
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-yellow-600">
              {stats.inReview}건
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              수정요청
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-orange-600">
              {stats.revisionRequested}건
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              게재확정
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-green-600">
              {stats.accepted}건
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              전체 투고
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {stats.total}건
            </dd>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900">빠른 작업</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/papers/submit"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              신규 논문 투고
            </Link>
            <Link
              href="/papers"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              논문 목록 보기
            </Link>
            <Link
              href="/payments"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              결제 내역
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Papers */}
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                투고 논문 목록
              </h2>
              <Link
                href="/papers"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                전체보기 →
              </Link>
            </div>
            <div className="space-y-4">
              {recentPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="border-l-4 border-blue-500 bg-gray-50 p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {paper.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        투고일: {paper.submittedAt}
                      </p>
                    </div>
                    <span
                      className={`ml-4 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${paper.statusColor}`}
                    >
                      {paper.status}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/papers/${paper.id}`}
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      상세보기
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notices */}
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                최근 공지사항
              </h2>
              <Link
                href="/notices"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                전체보기 →
              </Link>
            </div>
            <div className="space-y-3">
              {recentNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0"
                >
                  <Link
                    href={`/notices/${notice.id}`}
                    className="flex-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {notice.title}
                  </Link>
                  <span className="ml-4 text-xs text-gray-500">
                    {notice.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
