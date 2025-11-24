import Link from "next/link";
import { FaCalendarAlt, FaUsers, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "학술활동 | 미래산업융합학회",
  description: "미래산업융합학회의 학술대회, 세미나 등 학술활동을 소개합니다.",
};

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold">학술활동</h1>
          <p className="text-lg">학술대회, 세미나, 워크샵 등 다양한 학술 활동</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/activities/conferences"
            className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
          >
            <FaCalendarAlt className="mb-4 text-5xl text-purple-600" />
            <h2 className="mb-2 text-2xl font-bold">학술대회</h2>
            <p className="mb-4 text-gray-600">
              정기 학술대회 및 특별 학술대회 정보
            </p>
            <div className="flex items-center gap-2 text-purple-600 group-hover:gap-3">
              자세히 보기 <FaArrowRight />
            </div>
          </Link>

          <Link
            href="/activities/seminars"
            className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
          >
            <FaUsers className="mb-4 text-5xl text-purple-600" />
            <h2 className="mb-2 text-2xl font-bold">세미나 및 워크샵</h2>
            <p className="mb-4 text-gray-600">
              정기 세미나 및 특별 워크샵 정보
            </p>
            <div className="flex items-center gap-2 text-purple-600 group-hover:gap-3">
              자세히 보기 <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
