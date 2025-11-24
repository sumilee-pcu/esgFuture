"use client";

import { useState } from "react";
import { FaArchive, FaDownload, FaEye, FaSearch } from "react-icons/fa";

export default function ArchivePage() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const archives = {
    "2024": [
      {
        volume: "Vol. 12",
        issue: "No. 4",
        date: "2024-12-15",
        articles: 12,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 12",
        issue: "No. 3",
        date: "2024-09-15",
        articles: 15,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 12",
        issue: "No. 2",
        date: "2024-06-15",
        articles: 14,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 12",
        issue: "No. 1",
        date: "2024-03-15",
        articles: 13,
        downloadUrl: "#",
      },
    ],
    "2023": [
      {
        volume: "Vol. 11",
        issue: "No. 4",
        date: "2023-12-15",
        articles: 16,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 11",
        issue: "No. 3",
        date: "2023-09-15",
        articles: 14,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 11",
        issue: "No. 2",
        date: "2023-06-15",
        articles: 13,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 11",
        issue: "No. 1",
        date: "2023-03-15",
        articles: 12,
        downloadUrl: "#",
      },
    ],
    "2022": [
      {
        volume: "Vol. 10",
        issue: "No. 4",
        date: "2022-12-15",
        articles: 11,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 10",
        issue: "No. 3",
        date: "2022-09-15",
        articles: 10,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 10",
        issue: "No. 2",
        date: "2022-06-15",
        articles: 12,
        downloadUrl: "#",
      },
      {
        volume: "Vol. 10",
        issue: "No. 1",
        date: "2022-03-15",
        articles: 9,
        downloadUrl: "#",
      },
    ],
  };

  const years = Object.keys(archives).sort().reverse();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaArchive className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">과거 발행본</h1>
              <p className="text-lg">이전에 발행된 학회지를 열람하세요</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <section className="mb-12">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  발행 연도
                </label>
                <div className="flex gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`rounded-lg px-4 py-2 font-semibold transition ${
                        selectedYear === year
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  논문 검색
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="제목, 저자, 키워드로 검색..."
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Archive List */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            {selectedYear}년 발행본
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {archives[selectedYear as keyof typeof archives]?.map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
                >
                  <div className="mb-4 text-center">
                    <div className="mb-2 text-2xl font-bold text-blue-600">
                      {item.volume}
                    </div>
                    <div className="text-xl font-semibold text-gray-700">
                      {item.issue}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {item.date}
                    </div>
                  </div>
                  <div className="mb-4 rounded-lg bg-gray-50 p-3 text-center">
                    <div className="text-sm text-gray-600">수록 논문</div>
                    <div className="text-2xl font-bold text-gray-800">
                      {item.articles}편
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert("논문 목록 페이지로 이동")}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                    >
                      <FaEye />
                      보기
                    </button>
                    <button
                      onClick={() => alert("PDF 다운로드")}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      <FaDownload />
                      PDF
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16 rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            발행 통계
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">48</div>
              <div className="text-sm text-gray-600">총 발행호</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">620</div>
              <div className="text-sm text-gray-600">게재 논문 수</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-600">
                350
              </div>
              <div className="text-sm text-gray-600">참여 저자 수</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">
                5,200
              </div>
              <div className="text-sm text-gray-600">월평균 다운로드</div>
            </div>
          </div>
        </section>

        {/* Most Downloaded */}
        <section className="rounded-xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            인기 논문 Top 10
          </h2>
          <div className="space-y-4">
            {[
              {
                rank: 1,
                title:
                  "인공지능 기반 스마트 제조 시스템의 융합 기술 연구",
                authors: "홍길동, 김영희",
                issue: "Vol. 12, No. 3 (2024)",
                downloads: 1250,
              },
              {
                rank: 2,
                title: "블록체인과 IoT 융합을 통한 공급망 관리 혁신",
                authors: "이철수, 박민지, 최동욱",
                issue: "Vol. 12, No. 2 (2024)",
                downloads: 1180,
              },
              {
                rank: 3,
                title: "디지털 트윈 기술의 헬스케어 산업 적용 사례 연구",
                authors: "정수민, 강현우",
                issue: "Vol. 12, No. 1 (2024)",
                downloads: 1050,
              },
              {
                rank: 4,
                title: "메타버스 플랫폼의 교육 산업 융합 방안",
                authors: "윤서연, 임재혁",
                issue: "Vol. 11, No. 4 (2023)",
                downloads: 980,
              },
              {
                rank: 5,
                title: "빅데이터 분석을 활용한 금융 리스크 관리 시스템",
                authors: "송미래, 한지훈",
                issue: "Vol. 11, No. 3 (2023)",
                downloads: 920,
              },
            ].map((paper) => (
              <div
                key={paper.rank}
                className="flex gap-4 rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  {paper.rank}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-bold text-gray-800 hover:text-blue-600">
                    {paper.title}
                  </h3>
                  <div className="mb-1 text-sm text-gray-600">
                    {paper.authors}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{paper.issue}</span>
                    <span className="flex items-center gap-1">
                      <FaDownload />
                      {paper.downloads.toLocaleString()}회
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
