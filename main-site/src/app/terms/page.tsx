import { FaFileContract } from "react-icons/fa";

export const metadata = {
  title: "이용약관 | 미래산업융합학회",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaFileContract className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">이용약관</h1>
              <p className="text-lg">학회 서비스 이용에 관한 약관</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">제1조 (목적)</h2>
          <p className="text-gray-700">
            본 약관은 미래산업융합학회(이하 '학회')가 제공하는 모든 서비스의
            이용조건 및 절차, 회원과 학회의 권리·의무 및 책임사항 등을
            규정함을 목적으로 합니다.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            제2조 (정의)
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              1. '학회'란 미래산업융합학회가 운영하는 온라인 플랫폼을
              의미합니다.
            </li>
            <li>
              2. '회원'이란 학회에 가입하여 서비스를 이용하는 자를 말합니다.
            </li>
            <li>
              3. '서비스'란 학회가 제공하는 모든 온라인 서비스를 말합니다.
            </li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            제3조 (회원가입)
          </h2>
          <p className="text-gray-700">
            회원가입은 이용자가 약관의 내용에 동의하고 회원가입 신청을 한 후
            학회가 이를 승인함으로써 성립합니다.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            제4조 (서비스의 제공)
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>1. 학회지 열람 및 다운로드</li>
            <li>2. 논문 투고 시스템</li>
            <li>3. 학술대회 정보 제공</li>
            <li>4. 기타 학회가 정하는 서비스</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            제5조 (회원의 의무)
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>1. 회원은 관계 법령과 본 약관을 준수해야 합니다.</li>
            <li>
              2. 회원은 타인의 명의나 이메일을 도용하여 이용신청을 할 수
              없습니다.
            </li>
            <li>
              3. 회원은 학회의 서비스 이용과 관련하여 다음 각호의 행위를 하여서는
              안 됩니다:
            </li>
            <li className="ml-6">가. 타인의 정보 도용</li>
            <li className="ml-6">나. 학회의 저작권 등 지적재산권 침해</li>
            <li className="ml-6">다. 타인의 명예 훼손 또는 손해를 가하는 행위</li>
          </ul>

          <div className="mt-12 rounded-lg bg-gray-50 p-6">
            <p className="text-sm text-gray-600">
              본 약관은 2024년 11월 24일부터 시행됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
