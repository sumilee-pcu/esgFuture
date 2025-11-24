import Link from "next/link";
import {
  FaBook,
  FaFileAlt,
  FaGavel,
  FaShieldAlt,
  FaCalendarAlt,
  FaArchive,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";

export const metadata = {
  title: "학회지 | 미래산업융합학회",
  description:
    "미래산업융합학회 학회지 정보, 투고 규정, 심사 규정, 윤리 규정 등을 안내합니다.",
};

export default function JournalPage() {
  const currentIssue = {
    volume: "Vol. 12",
    issue: "No. 4",
    year: "2024",
    month: "12",
    date: "2024-12-15",
  };

  const quickLinks = [
    {
      icon: FaInfoCircle,
      title: "학회지 소개",
      description: "학회지의 목적, 발행 정보, 등재 현황 등을 확인하세요",
      href: "/journal/about",
      color: "blue",
    },
    {
      icon: FaFileAlt,
      title: "투고 규정",
      description: "논문 작성 지침, 제출 방법, 저자 자격 등을 확인하세요",
      href: "/journal/submission-guidelines",
      color: "green",
    },
    {
      icon: FaGavel,
      title: "심사 규정",
      description: "논문 심사 절차, 기준, 기간 등을 안내합니다",
      href: "/journal/review-guidelines",
      color: "purple",
    },
    {
      icon: FaShieldAlt,
      title: "윤리 규정",
      description: "연구 윤리, 표절 금지, 이해상충 공개 등의 규정",
      href: "/journal/ethics",
      color: "red",
    },
    {
      icon: FaCalendarAlt,
      title: "발간 일정",
      description: "연간 학회지 발간 일정과 투고 마감일 안내",
      href: "/journal/schedule",
      color: "orange",
    },
    {
      icon: FaArchive,
      title: "과거 발행본",
      description: "이전에 발행된 학회지를 열람하고 다운로드하세요",
      href: "/journal/archive",
      color: "gray",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        icon: "text-blue-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        icon: "text-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        icon: "text-purple-600",
      },
      red: { bg: "bg-red-50", text: "text-red-600", icon: "text-red-600" },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        icon: "text-orange-600",
      },
      gray: {
        bg: "bg-gray-50",
        text: "text-gray-600",
        icon: "text-gray-600",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaBook className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">학회지</h1>
              <p className="text-lg">
                미래산업융합연구 (Journal of Future Industry Convergence)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Current Issue */}
        <section className="mb-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-3xl font-bold">최신호</h2>
              <div className="mb-4 text-xl">
                {currentIssue.volume}, {currentIssue.issue}
              </div>
              <div className="text-lg opacity-90">
                {currentIssue.year}년 {currentIssue.month}월호
              </div>
              <div className="mt-2 text-sm opacity-75">
                발행일: {currentIssue.date}
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="/journal/archive"
                className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
              >
                상세보기
              </Link>
              <Link
                href="http://submission.esgdigital.org"
                target="_blank"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                논문 투고하기 →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            학회지 안내
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, index) => {
              const colors = getColorClasses(link.color);
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-lg ${colors.bg} p-3`}>
                      <link.icon className={`text-3xl ${colors.icon}`} />
                    </div>
                    <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>
                  <h3 className={`mb-2 text-xl font-bold ${colors.text}`}>
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Key Information */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              학회지 정보
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="mb-1 text-sm font-semibold text-gray-600">
                  학회지명
                </dt>
                <dd className="text-gray-800">미래산업융합연구</dd>
                <dd className="text-sm text-gray-600">
                  Journal of Future Industry Convergence
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-semibold text-gray-600">
                  ISSN
                </dt>
                <dd className="text-gray-800">XXXX-XXXX (Print)</dd>
                <dd className="text-gray-800">XXXX-XXXX (Online)</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-semibold text-gray-600">
                  발행 주기
                </dt>
                <dd className="text-gray-800">계간지 (연 4회)</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-semibold text-gray-600">
                  등재 현황
                </dt>
                <dd className="text-gray-800">
                  KCI 등재지 (한국학술지인용색인)
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              2025년 발간 일정
            </h3>
            <div className="space-y-4">
              {[
                { issue: "제1호", month: "3월", deadline: "1월 31일" },
                { issue: "제2호", month: "6월", deadline: "4월 30일" },
                { issue: "제3호", month: "9월", deadline: "7월 31일" },
                { issue: "제4호", month: "12월", deadline: "10월 31일" },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0"
                >
                  <div>
                    <div className="font-semibold text-gray-800">
                      {schedule.issue} ({schedule.month})
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">투고 마감</div>
                    <div className="font-semibold text-blue-600">
                      {schedule.deadline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/journal/schedule"
              className="mt-6 block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              상세 일정 보기
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-xl bg-blue-50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            논문을 투고하시겠습니까?
          </h3>
          <p className="mb-6 text-gray-700">
            미래산업융합학회에서 귀하의 연구 성과를 공유하세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/journal/submission-guidelines"
              className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              투고 규정 확인
            </Link>
            <Link
              href="/resources"
              className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              논문 양식 다운로드
            </Link>
            <Link
              href="http://submission.esgdigital.org"
              target="_blank"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              논문 투고하기 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
