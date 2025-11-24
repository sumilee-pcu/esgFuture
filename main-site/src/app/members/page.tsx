import Link from "next/link";
import { FaUserPlus, FaStar, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "회원 안내 | 미래산업융합학회",
};

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold">회원 안내</h1>
          <p className="text-lg">미래산업융합학회 회원 가입 및 혜택 안내</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/members/join" className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <FaUserPlus className="mb-4 text-5xl text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">회원가입 안내</h2>
            <p className="mb-4 text-gray-600">회원 자격 및 가입 방법</p>
            <div className="flex items-center gap-2 text-green-600 group-hover:gap-3">
              자세히 보기 <FaArrowRight />
            </div>
          </Link>

          <Link href="/members/benefits" className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <FaStar className="mb-4 text-5xl text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">회원 혜택</h2>
            <p className="mb-4 text-gray-600">회원 등급별 혜택 안내</p>
            <div className="flex items-center gap-2 text-green-600 group-hover:gap-3">
              자세히 보기 <FaArrowRight />
            </div>
          </Link>

          <Link href="/members/fees" className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <FaMoneyBillWave className="mb-4 text-5xl text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">회비 안내</h2>
            <p className="mb-4 text-gray-600">연회비 및 납부 방법</p>
            <div className="flex items-center gap-2 text-green-600 group-hover:gap-3">
              자세히 보기 <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
