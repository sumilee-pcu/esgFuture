import Link from "next/link";
import {
  FaHistory,
  FaSitemap,
  FaMapMarkedAlt,
  FaArrowRight,
  FaUsers,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";

export const metadata = {
  title: "학회 소개 | 미래산업융합학회",
  description:
    "미래산업융합학회의 목적, 비전, 연혁 및 조직 구성을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold">학회 소개</h1>
          <p className="text-lg">
            미래산업융합학회는 융복합 연구를 통해 미래 산업을 선도합니다
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            미래산업융합학회
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              미래산업융합학회(Future Industry Convergence Society)는 다양한
              산업 분야의 융합과 혁신을 연구하고 촉진하는 학술 단체입니다.
            </p>
            <p className="leading-relaxed">
              우리 학회는 인공지능, IoT, 빅데이터, 클라우드 컴퓨팅 등 첨단
              기술과 전통 산업의 융합을 통해 새로운 가치를 창출하고, 미래
              산업의 발전 방향을 제시하는 것을 목표로 합니다.
            </p>
            <p className="leading-relaxed">
              학계, 산업계, 연구기관의 전문가들이 참여하여 학술 연구, 기술
              교류, 인재 양성 등 다양한 활동을 전개하고 있습니다.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <FaBullseye className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">학회 목적</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-blue-600">•</span>
                <span>
                  산업 간 융합을 통한 새로운 가치 창출 및 혁신 촉진
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-blue-600">•</span>
                <span>미래 산업 관련 학술 연구 및 기술 개발 장려</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-blue-600">•</span>
                <span>학계, 산업계, 연구기관 간 교류 및 협력 증진</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-blue-600">•</span>
                <span>미래 산업 분야 전문 인력 양성 및 교육</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-blue-600">•</span>
                <span>국내외 관련 학회 및 기관과의 학술 교류</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <FaLightbulb className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">비전</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-blue-600">
                "미래 산업을 선도하는 글로벌 융합 연구 플랫폼"
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>
                    4차 산업혁명 시대를 이끌어갈 융합 기술 연구의 중심
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>산학연 협력을 통한 실질적 산업 혁신 창출</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>국제적 수준의 학술 연구 성과 도출</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>미래 산업 인재 육성의 허브</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            학회 정보 바로가기
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/about/history"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <FaHistory className="text-4xl text-blue-600" />
                <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">학회 연혁</h3>
              <p className="text-sm text-gray-600">
                미래산업융합학회의 설립부터 현재까지의 발자취를 확인하세요
              </p>
            </Link>

            <Link
              href="/about/organization"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <FaSitemap className="text-4xl text-blue-600" />
                <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">조직도 및 임원진</h3>
              <p className="text-sm text-gray-600">
                학회의 조직 구성과 임원진 정보를 확인하세요
              </p>
            </Link>

            <Link
              href="/about/location"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <FaMapMarkedAlt className="text-4xl text-blue-600" />
                <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">찾아오시는 길</h3>
              <p className="text-sm text-gray-600">
                학회 사무국 위치와 오시는 방법을 안내합니다
              </p>
            </Link>
          </div>
        </section>

        {/* Main Activities */}
        <section className="rounded-xl bg-white p-8 shadow-md">
          <div className="mb-6 flex items-center gap-3">
            <FaUsers className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">주요 활동</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                학술 활동
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>정기 학술대회 개최 (춘계, 추계)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>학술지 발간 (연 4회)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>특별 세미나 및 워크샵</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>국제 학술 교류 및 공동 연구</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                회원 지원
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>논문 투고 및 심사 지원</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>우수 논문 시상</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>연구 네트워킹 기회 제공</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">▪</span>
                  <span>학술 자료 및 정보 제공</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
