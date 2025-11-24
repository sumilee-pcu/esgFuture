import Link from "next/link";
import { FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "발간 일정 | 미래산업융합학회",
  description: "미래산업융합연구 학회지의 연간 발간 일정과 투고 마감일입니다.",
};

export default function SchedulePage() {
  const schedule2025 = [
    {
      issue: "제1호",
      volume: "Vol. 13, No. 1",
      month: "3월",
      publishDate: "2025-03-15",
      submissionDeadline: "2025-01-31",
      reviewPeriod: "2025-02-01 ~ 2025-03-10",
      color: "blue",
    },
    {
      issue: "제2호",
      volume: "Vol. 13, No. 2",
      month: "6월",
      publishDate: "2025-06-15",
      submissionDeadline: "2025-04-30",
      reviewPeriod: "2025-05-01 ~ 2025-06-10",
      color: "green",
    },
    {
      issue: "제3호",
      volume: "Vol. 13, No. 3",
      month: "9월",
      publishDate: "2025-09-15",
      submissionDeadline: "2025-07-31",
      reviewPeriod: "2025-08-01 ~ 2025-09-10",
      color: "orange",
    },
    {
      issue: "제4호",
      volume: "Vol. 13, No. 4",
      month: "12월",
      publishDate: "2025-12-15",
      submissionDeadline: "2025-10-31",
      reviewPeriod: "2025-11-01 ~ 2025-12-10",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; border: string; text: string; badge: string }
    > = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-600",
        text: "text-blue-900",
        badge: "bg-blue-600",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-600",
        text: "text-green-900",
        badge: "bg-green-600",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-600",
        text: "text-orange-900",
        badge: "bg-orange-600",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-600",
        text: "text-purple-900",
        badge: "bg-purple-600",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">발간 일정</h1>
              <p className="text-lg">2025년 학회지 발간 및 투고 마감 일정</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Key Dates Summary */}
        <section className="mb-12 grid gap-6 md:grid-cols-4">
          {schedule2025.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={index}
                className={`rounded-xl ${colors.bg} border-2 ${colors.border} p-6 text-center shadow-md`}
              >
                <div className={`mb-2 text-sm font-semibold ${colors.text}`}>
                  {item.issue}
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-800">
                  {item.month}
                </div>
                <div className="text-sm text-gray-600">
                  투고 마감: {item.submissionDeadline.slice(5).replace("-", "/")}
                </div>
              </div>
            );
          })}
        </section>

        {/* Detailed Schedule */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            2025년 상세 일정
          </h2>
          <div className="space-y-6">
            {schedule2025.map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white shadow-md"
                >
                  <div className={`${colors.badge} p-4 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.issue} ({item.month})
                        </h3>
                        <div className="text-sm opacity-90">{item.volume}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-90">발행일</div>
                        <div className="text-xl font-bold">
                          {item.publishDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-600">
                          <FaClock className="text-orange-600" />
                          투고 마감일
                        </div>
                        <div className="text-xl font-bold text-gray-800">
                          {item.submissionDeadline}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          오후 11:59까지
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-600">
                          <FaCheckCircle className="text-green-600" />
                          심사 기간
                        </div>
                        <div className="text-lg font-semibold text-gray-800">
                          {item.reviewPeriod}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          약 4-6주 소요
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-600">
                          <FaCalendarAlt className="text-blue-600" />
                          발행일
                        </div>
                        <div className="text-lg font-semibold text-gray-800">
                          {item.publishDate}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          온라인 즉시 공개
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            논문 발행 프로세스 타임라인
          </h2>
          <div className="space-y-4">
            {[
              {
                phase: "투고",
                duration: "마감일까지",
                description: "온라인 시스템을 통해 논문 투고 및 심사료 결제",
              },
              {
                phase: "예비 검토",
                duration: "1-2일",
                description: "편집위원회의 투고 규정 준수 여부 확인",
              },
              {
                phase: "심사위원 배정",
                duration: "2-3일",
                description: "해당 분야 전문가 2-3인 배정",
              },
              {
                phase: "논문 심사",
                duration: "4-6주",
                description: "이중 맹검 심사 진행",
              },
              {
                phase: "심사 결과 통보",
                duration: "3-5일",
                description: "편집위원회 최종 심사 결과 종합 및 저자 통보",
              },
              {
                phase: "수정 및 재제출",
                duration: "2주",
                description: "필요 시 저자 논문 수정 및 재제출",
              },
              {
                phase: "최종 게재 확정",
                duration: "1-2일",
                description: "게재료 결제 및 최종 원고 제출",
              },
              {
                phase: "편집 및 교정",
                duration: "1주",
                description: "최종 편집 및 저자 교정 확인",
              },
              {
                phase: "온라인 발행",
                duration: "발행일",
                description: "학회지 홈페이지에 게재 및 공개",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-l-4 border-blue-600 pl-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">{item.phase}</h3>
                    <span className="text-sm text-gray-600">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">유의사항</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-orange-600">•</span>
              <span>
                투고 마감일은 <strong>해당 날짜 오후 11시 59분</strong>까지이며,
                이후 접수된 논문은 다음 호로 이월됩니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-orange-600">•</span>
              <span>
                긴급 심사를 신청한 경우 약 2-3주 내에 심사가 완료되나, 수정이
                필요한 경우 일반 심사와 동일한 기간이 소요될 수 있습니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-orange-600">•</span>
              <span>
                심사 및 수정 과정에서 지연이 발생할 경우 다음 호로 게재가
                연기될 수 있습니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-orange-600">•</span>
              <span>
                발행 일정은 학회 사정에 따라 변경될 수 있으며, 변경 시 사전에
                공지합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-orange-600">•</span>
              <span>
                온라인 발행 즉시 학회 홈페이지에서 전문(full-text)을 무료로
                열람할 수 있습니다
              </span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-gradient-to-r from-orange-600 to-orange-800 p-8 text-center text-white shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">논문을 투고하시겠습니까?</h3>
          <p className="mb-6 text-lg">
            마감일을 확인하시고 미리 준비하세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/journal/submission-guidelines"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-orange-600"
            >
              투고 규정 확인
            </Link>
            <Link
              href="http://submission.esgdigital.org"
              target="_blank"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              논문 투고하기 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
