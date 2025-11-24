import { FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "개인정보처리방침 | 미래산업융합학회",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">개인정보처리방침</h1>
              <p className="text-lg">개인정보 수집 및 이용에 관한 안내</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none rounded-xl bg-white p-8 shadow-md">
          <p className="text-gray-700">
            미래산업융합학회(이하 '학회')는 개인정보 보호법 제30조에 따라
            정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
            처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
            수립·공개합니다.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            1. 개인정보의 수집 항목
          </h2>
          <p className="text-gray-700">
            학회는 회원가입, 논문 투고 등을 위해 다음과 같은 개인정보를
            수집합니다:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• 필수항목: 이름, 이메일, 소속기관, 전화번호</li>
            <li>• 선택항목: ORCID, 관심분야</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            2. 개인정보의 이용 목적
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 회원 관리 및 본인 확인</li>
            <li>• 논문 투고 및 심사 진행</li>
            <li>• 학회 소식 및 공지사항 전달</li>
            <li>• 각종 서비스 제공</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <p className="text-gray-700">
            학회는 회원 탈퇴 시까지 개인정보를 보유하며, 탈퇴 후에는 지체 없이
            파기합니다. 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안
            보관합니다.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
            4. 개인정보 보호책임자
          </h2>
          <div className="rounded-lg bg-gray-50 p-4 text-gray-700">
            <p>• 이름: 개인정보 보호책임자</p>
            <p>• 이메일: privacy@esgdigital.org</p>
            <p>• 전화: 02-XXXX-XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
