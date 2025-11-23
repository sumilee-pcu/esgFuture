import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              미래산업융합학회
            </h3>
            <p className="text-sm leading-relaxed">
              Future Industry Convergence Society
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              미래 산업을 선도하는 융합 연구
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  학회소개
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white">
                  학회지
                </Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-white">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/members/join" className="hover:text-white">
                  회원가입
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">자료실</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="hover:text-white">
                  논문 양식
                </Link>
              </li>
              <li>
                <Link href="/journal/submission-guidelines" className="hover:text-white">
                  투고 규정
                </Link>
              </li>
              <li>
                <Link href="/journal/review-guidelines" className="hover:text-white">
                  심사 규정
                </Link>
              </li>
              <li>
                <Link href="/journal/ethics" className="hover:text-white">
                  윤리 규정
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">연락처</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaEnvelope className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <div>info@future-isa.or.kr</div>
                  <div className="text-xs text-gray-400">
                    논문 문의: paper@future-isa.or.kr
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0" />
                <span>02-XXXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                <span>서울특별시 강남구 테헤란로 XXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              &copy; {currentYear} 미래산업융합학회 (Future Industry Convergence
              Society). All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="hover:text-white">
                개인정보처리방침
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="hover:text-white">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
