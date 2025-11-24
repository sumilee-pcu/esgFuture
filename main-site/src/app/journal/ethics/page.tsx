import { FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "윤리 규정 | 미래산업융합학회",
  description:
    "미래산업융합연구 학회지의 연구 윤리 및 출판 윤리 규정입니다.",
};

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">윤리 규정</h1>
              <p className="text-lg">연구 윤리 및 출판 윤리</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Important Notice */}
        <section className="mb-12 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="mt-1 text-2xl text-red-600" />
            <div>
              <h3 className="mb-2 font-bold text-red-900">윤리 규정 준수</h3>
              <p className="text-sm text-red-800">
                본 학회지에 투고하는 모든 저자는 연구 윤리 및 출판 윤리를
                준수해야 합니다. 윤리 규정 위반이 발견될 경우 논문은 즉시
                게재가 취소되며, 해당 저자는 향후 5년간 본 학회지에 투고할 수
                없습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Author Ethics */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            저자의 윤리적 책임
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-red-600">
                1. 연구 부정행위 금지
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    <strong>위조(Fabrication):</strong> 존재하지 않는 데이터나
                    연구 결과를 허위로 만들어 내는 행위
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    <strong>변조(Falsification):</strong> 연구 재료, 장비,
                    과정을 인위적으로 조작하거나 데이터를 임의로 변형, 삭제하는
                    행위
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    <strong>표절(Plagiarism):</strong> 타인의 아이디어, 연구
                    내용, 결과 등을 적절한 인용 없이 도용하는 행위
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    <strong>이중 게재:</strong> 동일한 내용의 논문을 2개 이상의
                    학술지에 중복 투고하거나 게재하는 행위
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    <strong>부당한 저자 표시:</strong> 연구에 기여하지 않은
                    자를 저자로 포함하거나, 기여한 자를 누락하는 행위
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-red-600">
                2. 연구의 독창성
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    투고 논문은 이전에 출판되지 않은 저자의 독창적인
                    연구이어야 합니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    다른 학술지에 게재되었거나 심사 중인 논문은 투고할 수
                    없습니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    학위논문을 바탕으로 한 경우 그 사실을 명시해야 합니다
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-red-600">
                3. 정확한 인용 및 참고문헌
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    타인의 연구 결과를 인용할 경우 반드시 출처를 명시해야
                    합니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    직접 인용 시 인용 부호를 사용하고 페이지를 표시해야 합니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    본인의 이전 연구를 인용할 때도 적절한 표기가 필요합니다
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-red-600">
                4. 저자 자격 및 순서
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    저자는 연구에 실질적으로 기여한 자로 제한되어야 합니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    저자의 순서는 연구 기여도를 반영하여 모든 저자의 합의하에
                    결정되어야 합니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    명예 저자, 유령 저자 등 부당한 저자 표시를 금지합니다
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-red-600">
                5. 이해상충 공개
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    연구 수행 및 결과 해석에 영향을 미칠 수 있는 재정적,
                    개인적 이해관계를 공개해야 합니다
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-red-600">•</span>
                  <span>
                    연구비 지원 기관 및 후원 사실을 명시해야 합니다
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Editor Ethics */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            편집위원의 윤리적 책임
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                투고된 논문에 대해 저자의 성별, 나이, 소속 기관 등에 관계없이
                공정하게 취급해야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                투고된 논문의 내용은 게재가 확정되기 전까지 비밀로 유지되어야
                합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                적절한 심사위원을 선정하고, 심사가 공정하게 이루어지도록
                관리해야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                연구 부정행위가 의심되는 경우 적절한 조치를 취해야 합니다
              </span>
            </li>
          </ul>
        </section>

        {/* Reviewer Ethics */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            심사위원의 윤리적 책임
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                전문 지식을 바탕으로 객관적이고 공정한 심사를 수행해야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                이해상충이 있는 경우 심사를 거부하고 편집위원회에 즉시
                통보해야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                심사 논문의 내용은 게재 전까지 비밀로 유지하며, 개인적 이익을
                위해 사용할 수 없습니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-red-600">•</span>
              <span>
                심사 의견은 구체적이고 건설적으로 작성하여 저자의 논문 개선에
                도움을 주어야 합니다
              </span>
            </li>
          </ul>
        </section>

        {/* Plagiarism Check */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            표절 검사 및 유사도 검증
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              본 학회지는 KCI 문헌유사도 검사 서비스를 활용하여 모든 투고
              논문에 대해 표절 검사를 실시합니다.
            </p>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-3 font-semibold text-gray-800">
                유사도 기준
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>15% 미만:</strong> 정상 범위
                </li>
                <li>
                  • <strong>15-30%:</strong> 편집위원회 검토 후 판단
                </li>
                <li>
                  • <strong>30% 이상:</strong> 원칙적으로 게재 불가, 저자에게
                  소명 기회 부여
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              ※ 유사도는 기계적 수치이므로, 최종 판단은 편집위원회에서
              내용을 검토하여 결정합니다.
            </p>
          </div>
        </section>

        {/* Ethics Violation */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            윤리 규정 위반 시 조치
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">1차 위반</h3>
              <ul className="text-sm text-gray-700">
                <li>• 해당 논문 게재 취소 또는 거부</li>
                <li>• 저자에게 서면 경고</li>
                <li>• 향후 3년간 본 학회지 투고 제한</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-red-700 bg-red-100 p-4">
              <h3 className="mb-2 font-bold text-red-900">2차 이상 위반</h3>
              <ul className="text-sm text-gray-700">
                <li>• 해당 논문 게재 취소 및 온라인 삭제</li>
                <li>• 관련 기관에 사실 통보</li>
                <li>• 향후 5년간 본 학회지 투고 영구 제한</li>
                <li>• 학회 홈페이지에 위반 사실 공개</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ethics Committee */}
        <section className="rounded-xl bg-gradient-to-r from-red-600 to-red-800 p-8 text-white shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">연구윤리위원회</h2>
          <p className="mb-4">
            본 학회는 연구윤리위원회를 구성하여 연구 부정행위에 대한 조사 및
            판정을 수행합니다.
          </p>
          <div className="space-y-2 text-sm opacity-90">
            <p>• 제보 접수: ethics@esgdigital.org</p>
            <p>• 제보자의 신원은 보호되며, 제보 내용은 비밀로 유지됩니다</p>
            <p>
              • 조사 대상자에게는 충분한 소명 기회가 제공되며, 공정한 절차에
              따라 처리됩니다
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
