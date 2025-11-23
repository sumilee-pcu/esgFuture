"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Author = {
  id: string;
  nameKo: string;
  nameEn: string;
  affiliationKo: string;
  affiliationEn: string;
  email: string;
  orcid: string;
  authorType: string;
  isCorresponding: boolean;
};

export default function SubmitPaperPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: 논문 유형
    submissionType: "일반",
    language: "국문",

    // Step 2: 저자 정보
    authors: [
      {
        id: "1",
        nameKo: "",
        nameEn: "",
        affiliationKo: "",
        affiliationEn: "",
        email: "",
        orcid: "",
        authorType: "제1저자",
        isCorresponding: false,
      },
    ] as Author[],

    // Step 3: 논문 정보
    titleKo: "",
    titleEn: "",
    abstractKo: "",
    abstractEn: "",
    keywords: "",
    researchField: "",
    hasFunding: false,
    fundingInfo: "",

    // Step 4: 파일 업로드
    files: {
      manuscript: null as File | null,
      plagiarismCheck: null as File | null,
      copyrightTransfer: null as File | null,
      conflictOfInterest: null as File | null,
    },

    // Step 5: 동의
    agreeSubmissionRules: false,
    agreeEthicsRules: false,
  });

  const steps = [
    { number: 1, title: "논문 유형" },
    { number: 2, title: "저자 정보" },
    { number: 3, title: "논문 정보" },
    { number: 4, title: "파일 업로드" },
    { number: 5, title: "확인 및 제출" },
  ];

  const addAuthor = () => {
    const newAuthor: Author = {
      id: Date.now().toString(),
      nameKo: "",
      nameEn: "",
      affiliationKo: "",
      affiliationEn: "",
      email: "",
      orcid: "",
      authorType: "공동저자",
      isCorresponding: false,
    };
    setFormData({
      ...formData,
      authors: [...formData.authors, newAuthor],
    });
  };

  const removeAuthor = (id: string) => {
    setFormData({
      ...formData,
      authors: formData.authors.filter((author) => author.id !== id),
    });
  };

  const updateAuthor = (id: string, field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      authors: formData.authors.map((author) =>
        author.id === id ? { ...author, [field]: value } : author
      ),
    });
  };

  const handleNext = () => {
    // Validation
    if (currentStep === 1) {
      if (!formData.submissionType || !formData.language) {
        alert("논문 유형과 언어를 선택해주세요.");
        return;
      }
    } else if (currentStep === 2) {
      const hasFirstAuthor = formData.authors.some(
        (a) => a.authorType === "제1저자"
      );
      const hasCorresponding = formData.authors.some((a) => a.isCorresponding);
      if (!hasFirstAuthor || !hasCorresponding) {
        alert("제1저자와 교신저자를 지정해주세요.");
        return;
      }
    }

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.agreeSubmissionRules || !formData.agreeEthicsRules) {
      alert("필수 규정에 동의해주세요.");
      return;
    }

    // TODO: API 연동
    console.log("Submit paper:", formData);
    alert("논문이 성공적으로 투고되었습니다.");
    router.push("/papers");
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <nav aria-label="Progress">
            <ol className="flex items-center">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.number}
                  className={`relative ${stepIdx !== steps.length - 1 ? "flex-1 pr-8 sm:pr-20" : ""}`}
                >
                  <div className="group flex items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                          currentStep > step.number
                            ? "bg-blue-600"
                            : currentStep === step.number
                              ? "border-2 border-blue-600 bg-white"
                              : "border-2 border-gray-300 bg-white"
                        }`}
                      >
                        {currentStep > step.number ? (
                          <svg
                            className="h-6 w-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span
                            className={
                              currentStep === step.number
                                ? "text-blue-600"
                                : "text-gray-500"
                            }
                          >
                            {step.number}
                          </span>
                        )}
                      </span>
                      <span
                        className={`ml-4 text-sm font-medium ${
                          currentStep >= step.number
                            ? "text-gray-900"
                            : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </span>
                    </span>
                  </div>
                  {stepIdx !== steps.length - 1 && (
                    <div
                      className="absolute right-0 top-0 hidden h-full w-5 md:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 22 80"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          vectorEffect="non-scaling-stroke"
                          stroke="currentcolor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Form Content */}
        <div className="rounded-lg bg-white p-8 shadow">
          {/* Step 1: 논문 유형 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">논문 유형 선택</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  심사 유형 *
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="submissionType"
                      value="일반"
                      checked={formData.submissionType === "일반"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          submissionType: e.target.value,
                        })
                      }
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3">
                      <span className="block text-sm font-medium text-gray-700">
                        일반 심사
                      </span>
                      <span className="block text-sm text-gray-500">
                        심사료: 50,000원
                      </span>
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="submissionType"
                      value="긴급"
                      checked={formData.submissionType === "긴급"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          submissionType: e.target.value,
                        })
                      }
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3">
                      <span className="block text-sm font-medium text-gray-700">
                        긴급 심사
                      </span>
                      <span className="block text-sm text-gray-500">
                        심사료: 100,000원
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  논문 언어 *
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="language"
                      value="국문"
                      checked={formData.language === "국문"}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      국문
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="language"
                      value="영문"
                      checked={formData.language === "영문"}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      영문
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: 저자 정보 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">저자 정보</h2>
                <button
                  type="button"
                  onClick={addAuthor}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  저자 추가
                </button>
              </div>

              {formData.authors.map((author, index) => (
                <div
                  key={author.id}
                  className="rounded-lg border-2 border-gray-200 p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">
                      저자 {index + 1}
                    </h3>
                    {formData.authors.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeAuthor(author.id)}
                        className="text-sm text-red-600 hover:text-red-500"
                      >
                        삭제
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        이름 (국문) *
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.nameKo}
                        onChange={(e) =>
                          updateAuthor(author.id, "nameKo", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        이름 (영문) *
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.nameEn}
                        onChange={(e) =>
                          updateAuthor(author.id, "nameEn", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        소속 (국문) *
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.affiliationKo}
                        onChange={(e) =>
                          updateAuthor(
                            author.id,
                            "affiliationKo",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        소속 (영문) *
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.affiliationEn}
                        onChange={(e) =>
                          updateAuthor(
                            author.id,
                            "affiliationEn",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.email}
                        onChange={(e) =>
                          updateAuthor(author.id, "email", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        ORCID (선택)
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.orcid}
                        onChange={(e) =>
                          updateAuthor(author.id, "orcid", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        저자 유형 *
                      </label>
                      <select
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={author.authorType}
                        onChange={(e) =>
                          updateAuthor(author.id, "authorType", e.target.value)
                        }
                      >
                        <option value="제1저자">제1저자</option>
                        <option value="공동저자">공동저자</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        checked={author.isCorresponding}
                        onChange={(e) =>
                          updateAuthor(
                            author.id,
                            "isCorresponding",
                            e.target.checked
                          )
                        }
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        교신저자
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: 논문 정보 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">논문 정보</h2>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    논문 제목 (국문) *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    value={formData.titleKo}
                    onChange={(e) =>
                      setFormData({ ...formData, titleKo: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    논문 제목 (영문) *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    value={formData.titleEn}
                    onChange={(e) =>
                      setFormData({ ...formData, titleEn: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    초록 (국문) *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    value={formData.abstractKo}
                    onChange={(e) =>
                      setFormData({ ...formData, abstractKo: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    초록 (영문) *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    value={formData.abstractEn}
                    onChange={(e) =>
                      setFormData({ ...formData, abstractEn: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    키워드 (5개 내외, 쉼표로 구분) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 인공지능, 머신러닝, 딥러닝, 최적화, 예측"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    value={formData.keywords}
                    onChange={(e) =>
                      setFormData({ ...formData, keywords: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    연구 분야 *
                  </label>
                  <select
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    value={formData.researchField}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        researchField: e.target.value,
                      })
                    }
                  >
                    <option value="">선택하세요</option>
                    <option value="AI">인공지능</option>
                    <option value="IoT">사물인터넷</option>
                    <option value="Blockchain">블록체인</option>
                    <option value="Manufacturing">제조</option>
                    <option value="Energy">에너지</option>
                    <option value="Healthcare">헬스케어</option>
                    <option value="Other">기타</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600"
                      checked={formData.hasFunding}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hasFunding: e.target.checked,
                        })
                      }
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      연구 지원기관 표기
                    </label>
                  </div>
                  {formData.hasFunding && (
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="예: 본 연구는 한국연구재단의 지원을 받아 수행되었음"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        value={formData.fundingInfo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fundingInfo: e.target.value,
                          })
                        }
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        * 지원기관 표기 시 추가 게재료 100,000원이 발생합니다.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: 파일 업로드 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">파일 업로드</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    본문 파일 (PDF, DOCX) * <span className="text-gray-500">(최대 20MB)</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({
                          ...formData,
                          files: { ...formData.files, manuscript: file },
                        });
                      }
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    표절 검사 결과 (선택)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({
                          ...formData,
                          files: { ...formData.files, plagiarismCheck: file },
                        });
                      }
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    저작권 이양 동의서 (PDF) *
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({
                          ...formData,
                          files: {
                            ...formData.files,
                            copyrightTransfer: file,
                          },
                        });
                      }
                    }}
                  />
                  <a
                    href="#"
                    className="mt-1 inline-block text-sm text-blue-600 hover:text-blue-500"
                  >
                    양식 다운로드
                  </a>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    이해상충 공개서 (선택)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({
                          ...formData,
                          files: {
                            ...formData.files,
                            conflictOfInterest: file,
                          },
                        });
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: 확인 및 제출 */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                확인 및 제출
              </h2>

              <div className="space-y-4 rounded-lg bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">논문 정보 요약</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">심사 유형:</span>{" "}
                    {formData.submissionType} 심사
                  </p>
                  <p>
                    <span className="font-medium">논문 언어:</span>{" "}
                    {formData.language}
                  </p>
                  <p>
                    <span className="font-medium">제목 (국문):</span>{" "}
                    {formData.titleKo || "-"}
                  </p>
                  <p>
                    <span className="font-medium">제목 (영문):</span>{" "}
                    {formData.titleEn || "-"}
                  </p>
                  <p>
                    <span className="font-medium">저자:</span>{" "}
                    {formData.authors.map((a) => a.nameKo).join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">연구 분야:</span>{" "}
                    {formData.researchField || "-"}
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-lg bg-blue-50 p-6">
                <h3 className="font-semibold text-gray-900">결제 정보</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">심사료:</span>{" "}
                    {formData.submissionType === "일반"
                      ? "50,000"
                      : "100,000"}
                    원
                  </p>
                  <p className="text-xs text-gray-600">
                    * 게재 확정 시 게재료가 별도로 부과됩니다.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
                    checked={formData.agreeSubmissionRules}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeSubmissionRules: e.target.checked,
                      })
                    }
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    투고 규정에 동의합니다. (필수)
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
                    checked={formData.agreeEthicsRules}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeEthicsRules: e.target.checked,
                      })
                    }
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    윤리 규정에 동의합니다. (필수)
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between border-t pt-6">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              이전
            </button>
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                다음
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                제출하기
              </button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
