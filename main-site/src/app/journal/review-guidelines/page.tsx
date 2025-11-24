import { FaGavel, FaClipboardList, FaClock } from "react-icons/fa";

export const metadata = {
  title: "심사 규정 | 미래산업융합학회",
  description: "미래산업융합연구 학회지의 논문 심사 절차와 기준입니다.",
};

export default function ReviewGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaGavel className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">심사 규정</h1>
              <p className="text-lg">논문 심사 절차 및 기준</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Review Process */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-800">
            <FaClipboardList className="text-purple-600" />
            심사 절차
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "1단계: 논문 접수 및 예비 검토",
                content:
                  "투고된 논문은 편집위원회에서 투고 규정 준수 여부, 학회지 범위 적합성 등을 예비 검토합니다. 부적합한 경우 반려될 수 있습니다.",
                duration: "1-2일",
              },
              {
                title: "2단계: 심사위원 배정",
                content:
                  "예비 검토를 통과한 논문은 해당 분야 전문가 2-3인을 심사위원으로 배정합니다. 이중 맹검 심사 원칙에 따라 저자와 심사위원의 신원은 상호 비공개됩니다.",
                duration: "2-3일",
              },
              {
                title: "3단계: 심사 진행",
                content:
                  "심사위원은 배정받은 논문을 심사 기준에 따라 평가하고, 심사 의견서를 작성하여 제출합니다.",
                duration: "일반 심사 4-6주 / 긴급 심사 2-3주",
              },
              {
                title: "4단계: 심사 결과 종합",
                content:
                  "편집위원회는 심사위원들의 의견을 종합하여 최종 결정(게재가, 수정 후 게재, 수정 후 재심사, 게재불가)을 내립니다.",
                duration: "3-5일",
              },
              {
                title: "5단계: 결과 통보 및 수정",
                content:
                  "심사 결과는 저자에게 통보되며, 수정이 필요한 경우 저자는 수정 논문을 제출합니다. 수정 논문은 재심사를 거칩니다.",
                duration: "저자 수정 기간 2주",
              },
              {
                title: "6단계: 최종 게재 확정",
                content:
                  "모든 심사 과정을 통과한 논문은 게재가 확정되며, 저자에게 게재료 안내가 발송됩니다.",
                duration: "1-2일",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-lg border border-purple-200 bg-purple-50 p-6"
              >
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-lg font-bold text-purple-900">
                    {step.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-purple-700">
                    <FaClock />
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-700">{step.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Review Criteria */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">심사 기준</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "독창성 (Originality)",
                items: [
                  "연구 주제의 참신성 및 독창성",
                  "선행 연구와의 차별성",
                  "학문적 기여도",
                ],
                weight: "30%",
              },
              {
                title: "연구 방법의 타당성 (Methodology)",
                items: [
                  "연구 설계의 적절성",
                  "데이터 수집 및 분석 방법의 타당성",
                  "통계 처리의 정확성",
                ],
                weight: "25%",
              },
              {
                title: "결과의 신뢰성 (Reliability)",
                items: [
                  "연구 결과의 객관성",
                  "논리적 일관성",
                  "데이터와 결론의 연계성",
                ],
                weight: "25%",
              },
              {
                title: "논문 구성 및 표현 (Presentation)",
                items: [
                  "논문 구성의 체계성",
                  "문장 표현의 명확성",
                  "참고문헌의 적절성",
                ],
                weight: "20%",
              },
            ].map((criterion, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">
                    {criterion.title}
                  </h3>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                    {criterion.weight}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {criterion.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1 text-purple-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Review Decisions */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">심사 판정</h2>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-4">
              <h3 className="mb-2 font-bold text-green-900">게재가 (Accept)</h3>
              <p className="text-sm text-gray-700">
                논문의 수정 없이 게재 가능. 즉시 게재 확정됩니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4">
              <h3 className="mb-2 font-bold text-blue-900">
                수정 후 게재 (Minor Revision)
              </h3>
              <p className="text-sm text-gray-700">
                경미한 수정 후 게재 가능. 저자가 수정 사항을 반영하여 재제출하면
                편집위원회에서 확인 후 게재 확정됩니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-orange-600 bg-orange-50 p-4">
              <h3 className="mb-2 font-bold text-orange-900">
                수정 후 재심사 (Major Revision)
              </h3>
              <p className="text-sm text-gray-700">
                중대한 수정 필요. 저자가 수정 논문을 제출하면 재심사를 거쳐 최종
                판정이 이루어집니다.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">
                게재 불가 (Reject)
              </h3>
              <p className="text-sm text-gray-700">
                논문의 질적 수준이 미달하거나 학회지 범위에 부적합하여 게재가
                불가능합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Reviewer Guidelines */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            심사위원 윤리
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">•</span>
              <span>
                심사위원은 배정받은 논문을 공정하고 객관적으로 평가해야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">•</span>
              <span>
                이해상충이 있는 경우 즉시 편집위원회에 통보하고 심사를
                사퇴해야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">•</span>
              <span>
                심사 논문의 내용은 게재 전까지 비밀로 유지해야 하며, 개인적
                목적으로 사용할 수 없습니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">•</span>
              <span>
                심사 의견은 구체적이고 건설적으로 작성하여 저자의 논문 개선에
                도움을 주어야 합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">•</span>
              <span>
                심사 기한을 준수해야 하며, 부득이한 경우 편집위원회에 미리
                통보해야 합니다
              </span>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 p-8 text-white shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">심사 소요 기간</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white bg-opacity-20 p-6">
              <h3 className="mb-3 text-xl font-bold">일반 심사</h3>
              <div className="mb-2 text-4xl font-bold">4-6주</div>
              <p className="text-sm opacity-90">
                논문 접수부터 1차 심사 결과 통보까지
              </p>
            </div>
            <div className="rounded-lg bg-white bg-opacity-20 p-6">
              <h3 className="mb-3 text-xl font-bold">긴급 심사</h3>
              <div className="mb-2 text-4xl font-bold">2-3주</div>
              <p className="text-sm opacity-90">
                추가 심사료 부담 시 신속 심사 진행
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm opacity-90">
            ※ 수정 후 재심사가 필요한 경우 추가 시간이 소요될 수 있습니다
          </p>
        </section>
      </div>
    </div>
  );
}
