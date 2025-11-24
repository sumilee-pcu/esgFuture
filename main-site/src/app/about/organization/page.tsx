import { FaSitemap, FaUser, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "조직도 및 임원진 | 미래산업융합학회",
  description: "미래산업융합학회의 조직 구조와 임원진을 소개합니다.",
};

export default function OrganizationPage() {
  const executives = [
    {
      position: "회장",
      name: "홍길동",
      affiliation: "○○대학교 융합공학과",
      email: "president@future-isa.or.kr",
    },
    {
      position: "수석부회장",
      name: "김영희",
      affiliation: "○○대학교 산업공학과",
      email: "vicepresident@future-isa.or.kr",
    },
  ];

  const vicePresidents = [
    { name: "이철수", affiliation: "○○대학교 컴퓨터공학과" },
    { name: "박민지", affiliation: "○○연구원 융합기술연구소" },
    { name: "최동욱", affiliation: "○○기업 기술연구소" },
  ];

  const editors = {
    chief: {
      name: "정수민",
      affiliation: "○○대학교 융합학과",
      email: "editor@future-isa.or.kr",
    },
    members: [
      { name: "강현우", affiliation: "○○대학교" },
      { name: "윤서연", affiliation: "○○대학교" },
      { name: "임재혁", affiliation: "○○연구원" },
      { name: "송미래", affiliation: "○○대학교" },
      { name: "한지훈", affiliation: "○○대학교" },
      { name: "오세진", affiliation: "○○기업" },
    ],
  };

  const directors = [
    { name: "서준호", affiliation: "○○대학교", role: "총무이사" },
    { name: "장예은", affiliation: "○○대학교", role: "학술이사" },
    { name: "배성훈", affiliation: "○○연구원", role: "기획이사" },
    { name: "노지우", affiliation: "○○대학교", role: "재무이사" },
    { name: "안태양", affiliation: "○○기업", role: "산학협력이사" },
    { name: "황다은", affiliation: "○○대학교", role: "국제교류이사" },
    { name: "남준영", affiliation: "○○대학교", role: "정보이사" },
    { name: "고은비", affiliation: "○○대학교", role: "섭외이사" },
  ];

  const advisors = [
    { name: "전병철", affiliation: "○○대학교 명예교수" },
    { name: "류은희", affiliation: "前 ○○학회 회장" },
    { name: "소재민", affiliation: "○○대학교 석좌교수" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaSitemap className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">조직도 및 임원진</h1>
              <p className="text-lg">
                미래산업융합학회의 조직 구성을 소개합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Organization Chart */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">조직 구조</h2>
          <div className="overflow-x-auto rounded-xl bg-white p-8 shadow-md">
            <div className="min-w-[600px]">
              {/* President */}
              <div className="mb-8 text-center">
                <div className="mx-auto inline-block rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg">
                  <div className="text-xl font-bold">회장</div>
                </div>
              </div>

              {/* Vice Presidents */}
              <div className="mb-8 flex justify-center">
                <div className="w-px bg-gray-300" style={{ height: "40px" }}></div>
              </div>
              <div className="mb-8 text-center">
                <div className="mx-auto inline-block rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-blue-600 shadow">
                  <div className="font-bold">수석부회장</div>
                </div>
              </div>

              {/* Departments */}
              <div className="mb-8 flex justify-center">
                <div className="w-px bg-gray-300" style={{ height: "40px" }}></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="mx-auto inline-block rounded-lg border-2 border-blue-400 bg-blue-50 px-6 py-3 text-blue-600 shadow-sm">
                    <div className="font-bold">부회장단</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mx-auto inline-block rounded-lg border-2 border-green-400 bg-green-50 px-6 py-3 text-green-600 shadow-sm">
                    <div className="font-bold">편집위원회</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mx-auto inline-block rounded-lg border-2 border-purple-400 bg-purple-50 px-6 py-3 text-purple-600 shadow-sm">
                    <div className="font-bold">이사회</div>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="mx-auto inline-block rounded-lg border border-gray-300 bg-gray-50 px-6 py-2 text-gray-600 shadow-sm">
                    <div className="text-sm font-bold">자문위원회</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mx-auto inline-block rounded-lg border border-gray-300 bg-gray-50 px-6 py-2 text-gray-600 shadow-sm">
                    <div className="text-sm font-bold">감사</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executives */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">임원진</h2>

          {/* President & Chief Vice President */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {executives.map((exec, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <FaUser className="text-3xl" />
                  <div>
                    <div className="text-sm opacity-90">{exec.position}</div>
                    <div className="text-2xl font-bold">{exec.name}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>{exec.affiliation}</div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope />
                    <a
                      href={`mailto:${exec.email}`}
                      className="hover:underline"
                    >
                      {exec.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vice Presidents */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-gray-800">부회장</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {vicePresidents.map((vp, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-blue-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-2 font-bold text-gray-800">{vp.name}</div>
                  <div className="text-sm text-gray-600">{vp.affiliation}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Board */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            편집위원회
          </h2>

          {/* Editor-in-Chief */}
          <div className="mb-6 rounded-xl bg-gradient-to-r from-green-600 to-green-700 p-6 text-white shadow-md">
            <div className="flex items-center gap-3">
              <FaUser className="text-3xl" />
              <div className="flex-1">
                <div className="text-sm opacity-90">편집위원장</div>
                <div className="text-2xl font-bold">{editors.chief.name}</div>
                <div className="mt-1 text-sm">{editors.chief.affiliation}</div>
              </div>
              <div className="text-sm">
                <a
                  href={`mailto:${editors.chief.email}`}
                  className="hover:underline"
                >
                  {editors.chief.email}
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Members */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800">편집위원</h3>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {editors.members.map((editor, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-green-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-2 font-bold text-gray-800">
                    {editor.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {editor.affiliation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">이사회</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {directors.map((director, index) => (
              <div
                key={index}
                className="rounded-lg border border-purple-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-1 text-xs font-semibold text-purple-600">
                  {director.role}
                </div>
                <div className="mb-2 font-bold text-gray-800">
                  {director.name}
                </div>
                <div className="text-sm text-gray-600">{director.affiliation}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisors */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-800">자문위원</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
              >
                <div className="mb-2 font-bold text-gray-800">{advisor.name}</div>
                <div className="text-sm text-gray-600">{advisor.affiliation}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 rounded-xl bg-blue-50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            학회 사무국
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <FaEnvelope className="mr-2 inline" />
              <a
                href="mailto:info@future-isa.or.kr"
                className="text-blue-600 hover:underline"
              >
                info@future-isa.or.kr
              </a>
            </p>
            <p className="text-sm text-gray-600">
              학회 관련 문의사항은 사무국으로 연락주시기 바랍니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
