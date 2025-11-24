import { FaCalendarAlt } from "react-icons/fa";

export const metadata = {
  title: "학술대회 | 미래산업융합학회",
};

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">학술대회</h1>
              <p className="text-lg">미래산업융합학회 정기 및 특별 학술대회</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">2025년 학술대회 일정</h2>
          <div className="space-y-6">
            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-purple-900">
                2025 춘계 학술대회
              </h3>
              <div className="space-y-1 text-gray-700">
                <p>• 일시: 2025년 5월 예정</p>
                <p>• 장소: 추후 공지</p>
                <p>• 주제: AI와 미래산업 융합</p>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-purple-900">
                2025 추계 학술대회
              </h3>
              <div className="space-y-1 text-gray-700">
                <p>• 일시: 2025년 11월 예정</p>
                <p>• 장소: 추후 공지</p>
                <p>• 주제: 디지털 전환과 산업 혁신</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
