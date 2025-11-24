"use client";

import {
  FaMapMarkerAlt,
  FaSubway,
  FaBus,
  FaCar,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">찾아오시는 길</h1>
              <p className="text-lg">학회 사무국 위치 안내</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Info */}
        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3">
                <FaMapMarkerAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">주소</h3>
            </div>
            <p className="text-gray-700">서울특별시 강남구 테헤란로 123</p>
            <p className="text-sm text-gray-600">○○빌딩 5층 501호</p>
            <p className="mt-2 text-sm text-gray-500">(우편번호: 06234)</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-3">
                <FaPhone className="text-2xl text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">전화</h3>
            </div>
            <p className="text-gray-700">02-XXXX-XXXX</p>
            <p className="text-sm text-gray-600">Fax: 02-XXXX-XXXX</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-3">
                <FaEnvelope className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">이메일</h3>
            </div>
            <p className="text-gray-700">info@esgdigital.org</p>
            <p className="text-sm text-gray-600">
              논문 문의: paper@esgdigital.org
            </p>
          </div>
        </section>

        {/* Office Hours */}
        <section className="mb-12 rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <FaClock className="text-2xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">업무 시간</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">평일</h3>
              <p className="text-gray-700">오전 9:00 - 오후 6:00</p>
              <p className="text-sm text-gray-600">
                (점심시간: 오후 12:00 - 1:00)
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">주말 및 공휴일</h3>
              <p className="text-gray-700">휴무</p>
              <p className="text-sm text-gray-600">
                이메일 문의는 24시간 가능합니다
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="mb-12 rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">지도</h2>
          <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
            {/* 실제 프로젝트에서는 Google Maps, Kakao Maps 등을 사용 */}
            <div className="flex h-full items-center justify-center text-gray-500">
              <div className="text-center">
                <FaMapMarkerAlt className="mx-auto mb-4 text-6xl" />
                <p className="text-lg">지도가 표시될 영역</p>
                <p className="mt-2 text-sm">
                  (Kakao Map 또는 Google Maps API 연동 필요)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-800">
            교통편 안내
          </h2>

          <div className="space-y-6">
            {/* Subway */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3">
                  <FaSubway className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">지하철</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="mr-2 inline-block rounded bg-green-600 px-3 py-1 text-sm font-bold text-white">
                    2호선
                  </span>
                  <span className="text-gray-700">
                    역삼역 3번 출구 도보 5분
                  </span>
                </div>
                <div>
                  <span className="mr-2 inline-block rounded bg-orange-600 px-3 py-1 text-sm font-bold text-white">
                    분당선
                  </span>
                  <span className="text-gray-700">
                    선릉역 4번 출구 도보 10분
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  ※ 역삼역 이용 시 3번 출구로 나와 테헤란로 방향으로 직진
                </p>
              </div>
            </div>

            {/* Bus */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3">
                  <FaBus className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">버스</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    간선버스:
                  </span>
                  <span className="ml-2 text-gray-700">
                    146, 241, 341, 360, 362
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    지선버스:
                  </span>
                  <span className="ml-2 text-gray-700">
                    3412, 4412, 6411, 6511
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    광역버스:
                  </span>
                  <span className="ml-2 text-gray-700">
                    9303, 9403, 9408
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  ※ 정류장: 역삼역, 선릉역 하차
                </p>
              </div>
            </div>

            {/* Car */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-100 p-3">
                  <FaCar className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">자가용</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    네비게이션 주소:
                  </span>
                  <span className="ml-2 text-gray-700">
                    서울특별시 강남구 테헤란로 123
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    주차:
                  </span>
                  <span className="ml-2 text-gray-700">
                    건물 지하 주차장 이용 가능 (방문 시 2시간 무료)
                  </span>
                </div>
                <div className="mt-4 rounded-lg bg-yellow-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>주차 안내:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• 건물 입구에서 주차권 수령</li>
                    <li>• 사무국 방문 후 주차 확인 도장</li>
                    <li>• 출차 시 주차권 제출</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-12 rounded-xl bg-blue-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-800">방문 안내</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-600">•</span>
              <span>
                방문 전 사전 연락을 주시면 더욱 원활한 상담이 가능합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-600">•</span>
              <span>
                주말 및 공휴일은 휴무이므로, 평일 업무시간 내 방문을
                권장합니다
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-600">•</span>
              <span>
                논문 관련 문의는 이메일(paper@esgdigital.org)을 이용해주시기
                바랍니다
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
