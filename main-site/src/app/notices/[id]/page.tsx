import Link from "next/link";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// 임시 데이터 - 추후 API로 대체
const notices: Record<string, any> = {
  "1": {
    id: 1,
    category: "학회공지",
    title: "2025년 제1호 논문 모집 안내",
    date: "2024-11-20",
    views: 245,
    author: "편집위원회",
    content: `
<p>2025년 제1호(3월 발행) 논문을 다음과 같이 모집합니다.</p>

<h3>1. 투고 마감일</h3>
<p>2025년 1월 31일 (목) 23:59까지</p>

<h3>2. 발행 일정</h3>
<ul>
  <li>투고 마감: 2025년 1월 31일</li>
  <li>심사 기간: 2025년 2월 1일 ~ 3월 10일</li>
  <li>발행일: 2025년 3월 15일</li>
</ul>

<h3>3. 투고 분야</h3>
<p>인공지능, IoT, 빅데이터, 클라우드 컴퓨팅, 블록체인 등 미래 산업 융합 관련 전 분야</p>

<h3>4. 투고 방법</h3>
<p>온라인 논문 투고 시스템(<a href="http://submission.esgdigital.org" target="_blank" class="text-blue-600 hover:underline">http://submission.esgdigital.org</a>)을 통해 투고</p>

<h3>5. 문의</h3>
<p>이메일: paper@esgdigital.org<br/>
전화: 02-XXXX-XXXX</p>

<p class="mt-6">많은 투고 부탁드립니다.</p>

<p class="mt-4">미래산업융합학회 편집위원회</p>
    `,
  },
};

export default function NoticeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const notice = notices[params.id] || {
    id: params.id,
    category: "학회공지",
    title: "공지사항 제목",
    date: "2024-11-20",
    views: 100,
    author: "관리자",
    content: "<p>공지사항 내용이 표시됩니다.</p>",
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      학회공지: "bg-blue-100 text-blue-600",
      논문투고: "bg-green-100 text-green-600",
      학술대회: "bg-purple-100 text-purple-600",
      세미나: "bg-orange-100 text-orange-600",
    };
    return colors[category] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white">
        <div className="container mx-auto px-4">
          <Link
            href="/notices"
            className="mb-4 inline-flex items-center gap-2 text-sm hover:underline"
          >
            <FaChevronLeft />
            목록으로
          </Link>
          <div className="flex items-center gap-3">
            <FaBullhorn className="text-3xl" />
            <span
              className={`rounded px-3 py-1 text-sm font-medium ${getCategoryColor(notice.category)}`}
            >
              {notice.category}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Notice Content */}
        <article className="rounded-xl bg-white shadow-md">
          {/* Header */}
          <header className="border-b border-gray-200 p-8">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              {notice.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold">작성자:</span>
                <span>{notice.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{notice.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEye />
                <span>{notice.views} 조회</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose max-w-none p-8"
            dangerouslySetInnerHTML={{ __html: notice.content }}
            style={{
              lineHeight: "1.8",
            }}
          />

          {/* Footer */}
          <footer className="border-t border-gray-200 p-8">
            <div className="flex justify-center">
              <Link
                href="/notices"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                목록으로 돌아가기
              </Link>
            </div>
          </footer>
        </article>

        {/* Navigation */}
        <nav className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <div className="space-y-4">
            <Link
              href="/notices/2"
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="flex items-center gap-3">
                <FaChevronLeft className="text-gray-400" />
                <div>
                  <div className="mb-1 text-xs text-gray-500">이전 글</div>
                  <div className="font-medium text-gray-800">
                    2024 추계 학술대회 개최 안내
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/notices/3"
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="flex flex-1 items-center justify-end gap-3">
                <div className="text-right">
                  <div className="mb-1 text-xs text-gray-500">다음 글</div>
                  <div className="font-medium text-gray-800">
                    논문 투고 마감일 연장 공지
                  </div>
                </div>
                <FaChevronRight className="text-gray-400" />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
