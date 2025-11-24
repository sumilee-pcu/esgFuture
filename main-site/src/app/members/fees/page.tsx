import { FaMoneyBillWave } from "react-icons/fa";

export const metadata = {
  title: "회비 안내 | 미래산업융합학회",
};

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">회비 안내</h1>
              <p className="text-lg">회원 등급별 연회비</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">회비 안내</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-green-900">정회원</h3>
              <div className="mb-4 text-4xl font-bold text-green-600">
                50,000원
              </div>
              <p className="text-sm text-gray-600">연회비 (매년 납부)</p>
            </div>
            <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-blue-900">학생회원</h3>
              <div className="mb-4 text-4xl font-bold text-blue-600">
                30,000원
              </div>
              <p className="text-sm text-gray-600">연회비 (매년 납부)</p>
            </div>
            <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-purple-900">
                평생회원
              </h3>
              <div className="mb-4 text-4xl font-bold text-purple-600">
                500,000원
              </div>
              <p className="text-sm text-gray-600">1회 납부 (평생)</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 font-bold text-gray-800">납부 방법</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 온라인 결제 (신용카드)</li>
              <li>• 무통장 입금</li>
              <li>• 은행: 국민은행</li>
              <li>• 계좌번호: 123-456-789012</li>
              <li>• 예금주: 미래산업융합학회</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
