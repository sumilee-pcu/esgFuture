import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";

export const metadata = {
  title: "회원가입 안내 | 미래산업융합학회",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaUserPlus className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">회원가입 안내</h1>
              <p className="text-lg">미래산업융합학회 회원이 되어주세요</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">회원 자격</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-bold text-green-600">정회원</h3>
              <p className="text-gray-700">
                학사 이상 학위 소지자 또는 관련 분야 실무 경험자
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-bold text-green-600">학생회원</h3>
              <p className="text-gray-700">
                대학(원)에 재학 중인 학생 (학생증 제출 필요)
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-bold text-green-600">평생회원</h3>
              <p className="text-gray-700">
                평생회비 납부 시 영구 회원 자격 부여
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">가입 절차</h2>
          <div className="space-y-4">
            {["온라인 가입 신청서 작성", "이메일 인증", "연회비 납부", "회원 승인 완료"].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  {i + 1}
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-semibold text-gray-800">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <Link
            href="http://submission.esgdigital.org/register"
            target="_blank"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            회원가입 신청하기 →
          </Link>
        </section>
      </div>
    </div>
  );
}
