import { FaUsers } from "react-icons/fa";

export const metadata = {
  title: "세미나 | 미래산업융합학회",
};

export default function SeminarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaUsers className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">세미나 및 워크샵</h1>
              <p className="text-lg">정기 세미나 및 특별 워크샵 안내</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">정기 세미나</h2>
          <p className="text-gray-700">
            매 분기별 정기 세미나를 개최하여 최신 기술 동향과 연구 성과를
            공유합니다.
          </p>
          <div className="mt-6 rounded-lg bg-purple-50 p-6">
            <p className="text-gray-700">
              세미나 일정은 공지사항을 통해 안내됩니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
