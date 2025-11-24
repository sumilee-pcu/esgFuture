import { FaBook, FaBullseye, FaAward, FaUsers } from "react-icons/fa";

export const metadata = {
  title: "학회지 소개 | 미래산업융합학회",
  description: "미래산업융합연구 학회지의 목적, 범위, 등재 현황을 소개합니다.",
};

export default function JournalAboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaBook className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">학회지 소개</h1>
              <p className="text-lg">미래산업융합연구</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            학회지 개요
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-blue-600">미래산업융합연구</strong>(Journal
              of Future Industry Convergence)는 미래산업융합학회가 발행하는
              학술지로, 다양한 산업 분야의 융합과 혁신에 관한 연구를
              발표합니다.
            </p>
            <p>
              본 학회지는 인공지능, IoT, 빅데이터, 클라우드 컴퓨팅 등 첨단
              기술과 전통 산업의 융합을 통해 새로운 가치를 창출하는 연구
              성과를 공유하고, 미래 산업의 발전 방향을 제시하는 것을 목표로
              합니다.
            </p>
            <p>
              연 4회(3월, 6월, 9월, 12월) 정기 발행되며, 한국학술지인용색인(KCI)
              등재지로서 국내외 연구자들에게 높은 수준의 학술 플랫폼을
              제공합니다.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <FaBullseye className="mx-auto mb-4 text-4xl text-blue-600" />
            <h3 className="mb-2 text-lg font-bold text-gray-800">
              융합 연구 집중
            </h3>
            <p className="text-sm text-gray-600">
              다양한 산업 분야의 융합 연구에 특화
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <FaAward className="mx-auto mb-4 text-4xl text-green-600" />
            <h3 className="mb-2 text-lg font-bold text-gray-800">KCI 등재</h3>
            <p className="text-sm text-gray-600">
              한국학술지인용색인 등재지
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <FaBook className="mx-auto mb-4 text-4xl text-purple-600" />
            <h3 className="mb-2 text-lg font-bold text-gray-800">계간 발행</h3>
            <p className="text-sm text-gray-600">연 4회 정기 발행</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <FaUsers className="mx-auto mb-4 text-4xl text-orange-600" />
            <h3 className="mb-2 text-lg font-bold text-gray-800">
              엄격한 심사
            </h3>
            <p className="text-sm text-gray-600">
              이중 맹검 심사로 학술적 품질 보장
            </p>
          </div>
        </section>

        {/* Aims and Scope */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            목적 및 범위
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">목적</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>
                    미래 산업 융합 분야의 학술 연구 및 기술 발전 촉진
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>
                    국내외 연구자들 간의 학술 교류 및 지식 공유 장려
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>산학연 협력을 통한 실질적 산업 혁신 지원</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">•</span>
                  <span>
                    융합 기술 연구의 우수 성과 발표 및 확산을 위한 플랫폼 제공
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                연구 범위
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-800">
                    기술 분야
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 인공지능 및 머신러닝</li>
                    <li>• 사물인터넷(IoT)</li>
                    <li>• 빅데이터 분석</li>
                    <li>• 클라우드 컴퓨팅</li>
                    <li>• 블록체인 기술</li>
                    <li>• 가상현실/증강현실</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-800">
                    산업 분야
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 스마트 제조</li>
                    <li>• 헬스케어</li>
                    <li>• 금융 및 핀테크</li>
                    <li>• 물류 및 유통</li>
                    <li>• 에너지 및 환경</li>
                    <li>• 교육 및 문화</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Information */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              학회지 정보
            </h2>
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
                  약칭
                </dt>
                <dd className="text-gray-800">미래산업융합연구 / J. Future Ind. Conv.</dd>
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
                  발행기관
                </dt>
                <dd className="text-gray-800">미래산업융합학회</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-semibold text-gray-600">
                  발행주기
                </dt>
                <dd className="text-gray-800">계간지 (연 4회)</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              등재 현황
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4">
                <div className="mb-1 font-semibold text-blue-900">
                  한국학술지인용색인 (KCI)
                </div>
                <div className="text-sm text-blue-700">등재지</div>
                <div className="mt-2 text-xs text-gray-600">
                  2022년부터 등재
                </div>
              </div>
              <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-4">
                <div className="mb-1 font-semibold text-green-900">
                  DOI (Digital Object Identifier)
                </div>
                <div className="text-sm text-green-700">부여 예정</div>
                <div className="mt-2 text-xs text-gray-600">
                  각 논문에 고유 식별자 부여
                </div>
              </div>
              <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
                <div className="mb-1 font-semibold text-purple-900">
                  SCOPUS 등재
                </div>
                <div className="text-sm text-purple-700">추진 중</div>
                <div className="mt-2 text-xs text-gray-600">
                  국제 학술지 등재 추진
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Access */}
        <section className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">오픈 액세스 정책</h2>
          <p className="mb-4 leading-relaxed">
            본 학회지는 오픈 액세스 정책을 통해 모든 논문을 무료로 공개하여
            연구 성과의 확산과 학술 발전에 기여하고 있습니다. 게재된 모든
            논문은 출판 즉시 온라인에서 자유롭게 열람 및 다운로드할 수
            있습니다.
          </p>
          <div className="text-sm opacity-90">
            ※ 논문의 저작권은 저자에게 있으며, 학술 목적의 인용 및 활용이
            자유롭습니다.
          </div>
        </section>
      </div>
    </div>
  );
}
