"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nameKo: "",
    nameEn: "",
    email: "",
    password: "",
    passwordConfirm: "",
    affiliationKo: "",
    affiliationEn: "",
    position: "",
    phone: "",
    address: "",
    orcid: "",
    memberType: "일반",
    agreeTerms: false,
    agreePrivacy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!formData.agreeTerms || !formData.agreePrivacy) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    // TODO: API 연동
    console.log("Register:", formData);
    alert("회원가입이 완료되었습니다. 이메일 인증을 진행해주세요.");
    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">회원가입</h1>
          <p className="mt-2 text-sm text-gray-600">
            미래산업융합학회 논문투고시스템
          </p>
        </div>

        <div className="rounded-lg bg-white px-8 py-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 기본 정보 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">기본 정보</h3>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    이름 (국문) *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.nameKo}
                    onChange={(e) =>
                      setFormData({ ...formData, nameKo: e.target.value })
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
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.nameEn}
                    onChange={(e) =>
                      setFormData({ ...formData, nameEn: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* 계정 정보 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">계정 정보</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      비밀번호 *
                    </label>
                    <input
                      type="password"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      비밀번호 확인 *
                    </label>
                    <input
                      type="password"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      value={formData.passwordConfirm}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passwordConfirm: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 소속 정보 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">소속 정보</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    소속기관 (국문) *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.affiliationKo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        affiliationKo: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    소속기관 (영문) *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.affiliationEn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        affiliationEn: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    직위 *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  주소 *
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
            </div>

            {/* 추가 정보 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">추가 정보</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ORCID (선택)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.orcid}
                    onChange={(e) =>
                      setFormData({ ...formData, orcid: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    회원 유형 *
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={formData.memberType}
                    onChange={(e) =>
                      setFormData({ ...formData, memberType: e.target.value })
                    }
                  >
                    <option value="일반">일반 회원</option>
                    <option value="학생">학생 회원</option>
                    <option value="평생">평생 회원</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 약관 동의 */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-start">
                <input
                  id="agreeTerms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.agreeTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeTerms: e.target.checked })
                  }
                />
                <label
                  htmlFor="agreeTerms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  이용약관에 동의합니다. (필수)
                </label>
              </div>
              <div className="flex items-start">
                <input
                  id="agreePrivacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.agreePrivacy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreePrivacy: e.target.checked,
                    })
                  }
                />
                <label
                  htmlFor="agreePrivacy"
                  className="ml-2 block text-sm text-gray-900"
                >
                  개인정보 처리방침에 동의합니다. (필수)
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex flex-1 justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                회원가입
              </button>
              <Link
                href="/auth/login"
                className="flex flex-1 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
