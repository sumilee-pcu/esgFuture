import Link from "next/link";
import {
  FaBullhorn,
  FaBook,
  FaCalendarAlt,
  FaArrowRight,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

export default function Home() {
  // 임시 데이터 - 추후 API 연동
  const recentNotices = [
    {
      id: 1,
      category: "학회공지",
      title: "2025년 제1호 논문 모집 안내",
      date: "2024-11-20",
    },
    {
      id: 2,
      category: "학술대회",
      title: "2024 추계 학술대회 개최 안내",
      date: "2024-11-15",
    },
    {
      id: 3,
      category: "투고안내",
      title: "논문 투고 마감일 연장 공지",
      date: "2024-11-10",
    },
    {
      id: 4,
      category: "학회공지",
      title: "신규 편집위원 위촉 안내",
      date: "2024-11-05",
    },
  ];

  const latestJournal = {
    volume: "Vol. 12",
    issue: "No. 4",
    year: "2024",
    month: "12월",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            미래산업융합학회
          </h1>
          <h2 className="mb-6 text-2xl md:text-3xl">
            Future Industry Convergence Society
          </h2>
          <p className="mb-8 text-xl">미래 산업을 선도하는 융합 연구</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/members/join"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              회원가입
            </Link>
            <Link
              href="http://submission.future-isa.or.kr"
              target="_blank"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
            >
              논문 투고
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Quick Access Cards */}
        <section className="mb-16 grid gap-6 md:grid-cols-3">
          <Link
            href="/about"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <FaUsers className="text-3xl text-blue-600" />
              <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">학회 소개</h3>
            <p className="text-gray-600">
              미래산업융합학회는 융복합 연구를 통해 미래 산업을 선도합니다.
            </p>
          </Link>

          <Link
            href="/journal"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <FaBook className="text-3xl text-blue-600" />
              <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">학회지 안내</h3>
            <p className="text-gray-600">
              투고 규정, 심사 규정, 윤리 규정 등 학회지 관련 정보를 확인하세요.
            </p>
          </Link>

          <Link
            href="/activities"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <FaCalendarAlt className="text-3xl text-blue-600" />
              <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">학술 활동</h3>
            <p className="text-gray-600">
              다양한 학술대회와 세미나를 통해 연구 성과를 공유합니다.
            </p>
          </Link>
        </section>

        {/* Notices and Journal Info */}
        <section className="mb-16 grid gap-8 lg:grid-cols-3">
          {/* Recent Notices */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaBullhorn className="text-2xl text-blue-600" />
                <h2 className="text-2xl font-bold">최신 공지사항</h2>
              </div>
              <Link
                href="/notices"
                className="text-sm text-blue-600 hover:underline"
              >
                전체보기 →
              </Link>
            </div>
            <div className="space-y-3">
              {recentNotices.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/notices/${notice.id}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                      {notice.category}
                    </span>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                  </div>
                  <h3 className="font-medium text-gray-800">{notice.title}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Latest Journal */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <FaBook className="text-2xl text-blue-600" />
              <h2 className="text-2xl font-bold">최신 학회지</h2>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
              <div className="mb-4 text-center">
                <div className="mb-2 text-3xl font-bold text-blue-600">
                  {latestJournal.volume}
                </div>
                <div className="text-xl font-semibold text-gray-700">
                  {latestJournal.issue}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {latestJournal.year}년 {latestJournal.month}호
                </div>
              </div>
              <div className="space-y-2">
                <Link
                  href="/journal/archive"
                  className="block rounded bg-white px-4 py-3 text-center font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  <FaFileAlt className="mb-1 inline" /> 발행본 보기
                </Link>
                <Link
                  href="/journal/submission-guidelines"
                  className="block rounded bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
                >
                  논문 투고 안내
                </Link>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-6">
              <div className="mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-2xl text-blue-600" />
                <h2 className="text-2xl font-bold">발간 일정</h2>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>제1호 (3월)</span>
                    <span className="text-gray-600">투고마감: 1/31</span>
                  </li>
                  <li className="flex justify-between">
                    <span>제2호 (6월)</span>
                    <span className="text-gray-600">투고마감: 4/30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>제3호 (9월)</span>
                    <span className="text-gray-600">투고마감: 7/31</span>
                  </li>
                  <li className="flex justify-between">
                    <span>제4호 (12월)</span>
                    <span className="text-gray-600">투고마감: 10/31</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">논문 투고하기</h2>
          <p className="mb-8 text-lg">
            온라인 논문 투고 시스템을 통해 간편하게 논문을 제출하세요
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/journal/submission-guidelines"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
            >
              투고 규정 보기
            </Link>
            <Link
              href="http://submission.future-isa.or.kr"
              target="_blank"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              논문 투고 시작 →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
