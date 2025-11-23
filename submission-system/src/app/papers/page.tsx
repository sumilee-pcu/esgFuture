import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function PapersPage() {
  // TODO: API로부터 데이터 가져오기
  const papers = [
    {
      id: 1,
      title: "AI 기반 제조업 최적화 연구",
      submissionType: "일반",
      status: "심사중",
      statusColor: "bg-yellow-100 text-yellow-800",
      submittedAt: "2024-01-15",
      updatedAt: "2024-01-20",
    },
    {
      id: 2,
      title: "블록체인 기반 공급망 관리 시스템",
      submissionType: "일반",
      status: "심사중",
      statusColor: "bg-yellow-100 text-yellow-800",
      submittedAt: "2024-01-10",
      updatedAt: "2024-01-18",
    },
    {
      id: 3,
      title: "IoT 센서 네트워크 최적화 기법",
      submissionType: "긴급",
      status: "수정요청",
      statusColor: "bg-orange-100 text-orange-800",
      submittedAt: "2024-02-05",
      updatedAt: "2024-02-10",
    },
    {
      id: 4,
      title: "머신러닝을 활용한 수요 예측 모델",
      submissionType: "일반",
      status: "게재확정",
      statusColor: "bg-green-100 text-green-800",
      submittedAt: "2023-12-20",
      updatedAt: "2024-01-10",
    },
  ];

  const statusFilter = ["전체", "작성중", "심사중", "수정요청", "게재확정", "게재불가"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">논문 관리</h1>
            <p className="mt-1 text-sm text-gray-500">
              투고한 논문의 현황을 확인하고 관리할 수 있습니다
            </p>
          </div>
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
        </div>

        {/* Filters */}
        <div className="rounded-lg bg-white p-4 shadow">
          <div className="flex flex-wrap gap-2">
            {statusFilter.map((status) => (
              <button
                key={status}
                className={`rounded-md px-4 py-2 text-sm font-medium ${
                  status === "전체"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Papers List */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  논문 제목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  심사 유형
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  투고일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  최종 수정일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  액션
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {papers.map((paper) => (
                <tr key={paper.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {paper.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {paper.submissionType} 심사
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${paper.statusColor}`}
                    >
                      {paper.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {paper.submittedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {paper.updatedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/papers/${paper.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      상세보기
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {papers.length === 0 && (
          <div className="rounded-lg bg-white p-12 text-center shadow">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              투고한 논문이 없습니다
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              새로운 논문을 투고해보세요.
            </p>
            <div className="mt-6">
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
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
