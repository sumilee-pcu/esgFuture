import Link from "next/link";
import { FaFileAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "투고 규정 | 미래산업융합학회",
  description: "미래산업융합연구 학회지의 논문 투고 규정과 작성 지침입니다.",
};

export default function SubmissionGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaFileAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">투고 규정</h1>
              <p className="text-lg">논문 작성 및 제출 지침</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Important Notice */}
        <section className="mb-8 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="mt-1 text-2xl text-orange-600" />
            <div>
              <h3 className="mb-2 font-bold text-orange-900">
                투고 전 필독 사항
              </h3>
              <ul className="space-y-1 text-sm text-orange-800">
                <li>• 본 학회지에 투고하는 논문은 타 학술지에 게재되지 않은 창작물이어야 합니다</li>
                <li>• 투고 전 반드시 논문 양식에 맞춰 작성해주시기 바랍니다</li>
                <li>• 모든 저자는 논문 투고에 동의해야 하며, 저작권 이양 동의서를 제출해야 합니다</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Submission Process */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">투고 절차</h2>
          <div className="space-y-4">
            {[
              {
                step: "1단계",
                title: "회원가입 및 로그인",
                desc: "논문 투고 시스템에 회원가입 후 로그인",
              },
              {
                step: "2단계",
                title: "논문 유형 선택",
                desc: "일반 심사 또는 긴급 심사 선택",
              },
              {
                step: "3단계",
                title: "논문 정보 입력",
                desc: "저자 정보, 논문 제목, 초록, 키워드 등 입력",
              },
              {
                step: "4단계",
                title: "파일 업로드",
                desc: "본문 파일, 저작권 이양 동의서 업로드",
              },
              {
                step: "5단계",
                title: "심사료 결제",
                desc: "일반 심사 50,000원 / 긴급 심사 100,000원",
              },
              {
                step: "6단계",
                title: "투고 완료",
                desc: "투고 확인 이메일 수신 및 심사 진행",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-l-4 border-blue-600 pl-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="http://submission.esgdigital.org"
              target="_blank"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              논문 투고 시작하기 →
            </Link>
          </div>
        </section>

        {/* Manuscript Guidelines */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">원고 작성 지침</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                1. 논문 구성
              </h3>
              <div className="ml-4 space-y-2 text-gray-700">
                <p><strong>국문 논문:</strong> 제목, 저자명, 소속, 국문초록, 키워드, 본문, 참고문헌, 영문초록</p>
                <p><strong>영문 논문:</strong> 제목, 저자명, 소속, 초록, 키워드, 본문, 참고문헌, 국문초록</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                2. 형식 요건
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-green-600" />
                  <span><strong>분량:</strong> A4 용지 기준 10~20페이지 (참고문헌 포함)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-green-600" />
                  <span><strong>글꼴:</strong> 한글 - 신명조, 영문 - Times New Roman</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-green-600" />
                  <span><strong>글자 크기:</strong> 제목 14pt, 본문 10pt</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-green-600" />
                  <span><strong>줄 간격:</strong> 160%</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-green-600" />
                  <span><strong>여백:</strong> 위 20mm, 아래 20mm, 좌 30mm, 우 30mm</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                3. 초록 및 키워드
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li>• 초록은 국문과 영문으로 각각 작성 (각 200~300단어)</li>
                <li>• 키워드는 5개 내외로 국문과 영문으로 제시</li>
                <li>• 초록에는 연구의 목적, 방법, 결과, 결론을 간략히 기술</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                4. 본문 작성
              </h3>
              <ul className="ml-4 space-y-2 text-gray-700">
                <li>• 장, 절, 항의 번호는 1, 1.1, 1.1.1 형식 사용</li>
                <li>• 표와 그림은 본문 내에 삽입하고 일련번호 부여</li>
                <li>• 수식은 수식 편집기를 사용하여 작성</li>
                <li>• 인용은 저자명-연도 방식 또는 각주 방식 사용</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                5. 참고문헌
              </h3>
              <div className="ml-4 space-y-2 text-sm text-gray-700">
                <p><strong>학술지 논문:</strong> 저자명 (연도). 논문제목. 학술지명, 권(호), 페이지.</p>
                <p className="ml-4 text-gray-600">예) 홍길동 (2024). 인공지능 융합 기술 연구. 미래산업융합연구, 12(4), 123-145.</p>
                <p className="mt-3"><strong>단행본:</strong> 저자명 (연도). 서명. 출판지: 출판사.</p>
                <p className="ml-4 text-gray-600">예) 김영희 (2023). 미래산업 트렌드. 서울: 학지사.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Guidelines */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">저자 자격 및 책임</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">저자 자격</h3>
              <ul className="ml-4 space-y-1 text-gray-700">
                <li>• 연구의 개념 및 설계에 실질적으로 기여한 자</li>
                <li>• 데이터 수집, 분석, 해석에 기여한 자</li>
                <li>• 논문 작성 또는 중요한 내용의 수정에 참여한 자</li>
                <li>• 최종 원고를 읽고 승인한 자</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">교신저자</h3>
              <p className="ml-4 text-gray-700">
                논문당 1인의 교신저자를 지정해야 하며, 교신저자는 투고 및 심사 과정의 모든 연락을 담당합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Fees */}
        <section className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">심사료</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="mb-2 font-bold text-blue-900">일반 심사</div>
                <div className="text-3xl font-bold text-blue-600">50,000원</div>
                <div className="mt-2 text-sm text-gray-600">
                  심사 기간: 4-6주
                </div>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="mb-2 font-bold text-red-900">긴급 심사</div>
                <div className="text-3xl font-bold text-red-600">100,000원</div>
                <div className="mt-2 text-sm text-gray-600">
                  심사 기간: 2-3주
                </div>
              </div>
              <p className="text-sm text-gray-600">
                ※ 심사료는 논문 투고 시 결제하며, 심사 결과와 무관하게 환불되지 않습니다.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">게재료</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">기본 게재료 (일반)</span>
                  <span className="font-bold text-gray-900">250,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">기본 게재료 (긴급)</span>
                  <span className="font-bold text-gray-900">400,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">추가 페이지 (1페이지당)</span>
                  <span className="font-bold text-gray-900">20,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">지원기관 표기 추가</span>
                  <span className="font-bold text-gray-900">100,000원</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                ※ 게재료는 논문 게재 확정 후 결제하며, 기본 10페이지 초과 시 추가 비용이 발생합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Download Forms */}
        <section className="rounded-xl bg-blue-50 p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            논문 양식 다운로드
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resources"
              className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              논문 작성 양식
            </Link>
            <Link
              href="/resources"
              className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              저작권 이양 동의서
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
