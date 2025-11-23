import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function NoticesPage() {
  // TODO: API로부터 데이터 가져오기
  const notices = [
    {
      id: 1,
      category: "학회공지",
      title: "2024년 제1호 논문 모집 안내",
      isPinned: true,
      views: 245,
      publishedAt: "2024-01-20",
    },
    {
      id: 2,
      category: "시스템공지",
      title: "시스템 정기 점검 안내 (1/30)",
      isPinned: false,
      views: 156,
      publishedAt: "2024-01-18",
    },
    {
      id: 3,
      category: "투고안내",
      title: "논문 투고 규정 개정 안내",
      isPinned: false,
      views: 189,
      publishedAt: "2024-01-15",
    },
    {
      id: 4,
      category: "학술대회",
      title: "2024 춘계 학술대회 개최 안내",
      isPinned: false,
      views: 432,
      publishedAt: "2024-01-10",
    },
  ];

  const categories = ["전체", "학회공지", "투고안내", "학술대회", "시스템공지"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">공지사항</h1>
          <p className="mt-1 text-sm text-gray-500">
            학회 및 시스템 관련 공지사항을 확인하세요
          </p>
        </div>

        {/* Category Filter */}
        <div className="rounded-lg bg-white p-4 shadow">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-md px-4 py-2 text-sm font-medium ${
                  category === "전체"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Notices List */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  분류
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  제목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  작성일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {notices.map((notice) => (
                <tr key={notice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/notices/${notice.id}`}
                      className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
                    >
                      {notice.isPinned && (
                        <svg
                          className="mr-2 h-4 w-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15z" />
                        </svg>
                      )}
                      {notice.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {notice.publishedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {notice.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              이전
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              다음
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                총 <span className="font-medium">4</span>개의 공지사항
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  이전
                </button>
                <button className="relative inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  다음
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
