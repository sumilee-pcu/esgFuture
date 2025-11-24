import { FaHistory, FaTrophy, FaBook, FaUsers } from "react-icons/fa";

export const metadata = {
  title: "학회 연혁 | 미래산업융합학회",
  description: "미래산업융합학회의 설립부터 현재까지의 주요 발자취입니다.",
};

export default function HistoryPage() {
  const historyData = [
    {
      year: "2024",
      events: [
        { month: "11월", description: "공식 웹사이트 및 논문 투고 시스템 구축" },
        { month: "09월", description: "2024 추계 학술대회 개최" },
        { month: "06월", description: "Vol. 12, No. 2 발간" },
        { month: "03월", description: "2024 춘계 학술대회 개최" },
      ],
    },
    {
      year: "2023",
      events: [
        {
          month: "12월",
          description: "국제학술지 등재 추진 (KCI, SCOPUS)",
        },
        { month: "10월", description: "회원 수 500명 돌파" },
        { month: "09월", description: "국제 학술대회 개최 (공동 주최)" },
        { month: "06월", description: "우수 논문상 제도 신설" },
        { month: "03월", description: "신규 편집위원 10명 위촉" },
      ],
    },
    {
      year: "2022",
      events: [
        { month: "11월", description: "학회지 연 4회 발간 체제 확립" },
        { month: "08월", description: "산학협력 프로그램 출범" },
        { month: "05월", description: "제1회 융합기술 세미나 개최" },
        { month: "02월", description: "온라인 논문 투고 시스템 도입" },
      ],
    },
    {
      year: "2021",
      events: [
        { month: "12월", description: "학회지 Vol. 10 발간" },
        { month: "09월", description: "정회원 300명 돌파" },
        { month: "06월", description: "제1회 정기총회 개최" },
        { month: "03월", description: "학회 정관 제정 및 시행" },
      ],
    },
    {
      year: "2020",
      events: [
        { month: "11월", description: "제1회 학술대회 개최" },
        { month: "09월", description: "학회지 창간호 발간" },
        { month: "06월", description: "초대 회장단 및 이사진 구성" },
        {
          month: "03월",
          description: "미래산업융합학회 공식 창립 (창립총회)",
        },
      ],
    },
    {
      year: "2019",
      events: [
        { month: "12월", description: "창립준비위원회 발족" },
        { month: "09월", description: "학회 설립 발기인 대회" },
      ],
    },
  ];

  const achievements = [
    {
      icon: FaBook,
      title: "학회지 발간",
      description: "창간호부터 현재까지 총 48호 발간",
    },
    {
      icon: FaTrophy,
      title: "학술대회",
      description: "정기 학술대회 10회 개최 (누적 참가자 3,000명)",
    },
    {
      icon: FaUsers,
      title: "회원",
      description: "정회원 500여명, 학생회원 200여명",
    },
    {
      icon: FaHistory,
      title: "국제 교류",
      description: "해외 학회와 MOU 5건 체결",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaHistory className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">학회 연혁</h1>
              <p className="text-lg">
                미래산업융합학회의 발자취를 확인하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Achievements */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">주요 성과</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg"
              >
                <item.icon className="mx-auto mb-4 text-4xl text-blue-600" />
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-800">연도별 연혁</h2>
          <div className="space-y-8">
            {historyData.map((yearData, yearIndex) => (
              <div
                key={yearData.year}
                className="rounded-xl bg-white p-8 shadow-md"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    {yearData.year}
                  </div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                </div>
                <div className="ml-20 space-y-4">
                  {yearData.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="relative flex gap-4 border-l-2 border-blue-200 pb-4 pl-6"
                    >
                      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                      <div>
                        <span className="inline-block rounded bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                          {event.month}
                        </span>
                        <p className="mt-2 text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Plans */}
        <section className="mt-16 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">향후 계획</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold">단기 (1년 이내)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>SCOPUS 등재 추진</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>영문 학회지 창간</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>해외 학회와의 교류 확대</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">중장기 (2-3년)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>국제 학술지로 발전</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>정회원 1,000명 달성</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>AI 기반 연구 플랫폼 구축</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
