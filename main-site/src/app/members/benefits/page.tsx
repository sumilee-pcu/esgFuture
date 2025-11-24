import { FaStar } from "react-icons/fa";

export const metadata = {
  title: "회원 혜택 | 미래산업융합학회",
};

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaStar className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">회원 혜택</h1>
              <p className="text-lg">회원님께 제공되는 다양한 혜택</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">주요 혜택</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green-600">•</span>
              <span>학회지 무료 열람 및 다운로드</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green-600">•</span>
              <span>논문 투고 시 심사료 할인</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green-600">•</span>
              <span>학술대회 등록비 할인</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green-600">•</span>
              <span>세미나 및 워크샵 무료 참가</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green-600">•</span>
              <span>네트워킹 기회 제공</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
