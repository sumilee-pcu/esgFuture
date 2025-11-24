"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaEye,
  FaSearch,
  FaThumbtack,
} from "react-icons/fa";

export default function NoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["전체", "학회공지", "논문투고", "학술대회", "세미나"];

  // 임시 데이터 - 추후 API 연동
  const notices = [
    {
      id: 1,
      category: "학회공지",
      title: "2025년 제1호 논문 모집 안내",
      date: "2024-11-20",
      views: 245,
      isPinned: true,
    },
    {
      id: 2,
      category: "학술대회",
      title: "2024 추계 학술대회 개최 안내",
      date: "2024-11-15",
      views: 189,
      isPinned: true,
    },
    {
      id: 3,
      category: "논문투고",
      title: "논문 투고 마감일 연장 공지",
      date: "2024-11-10",
      views: 312,
      isPinned: false,
    },
    {
      id: 4,
      category: "학회공지",
      title: "신규 편집위원 위촉 안내",
      date: "2024-11-05",
      views: 156,
      isPinned: false,
    },
    {
      id: 5,
      category: "세미나",
      title: "12월 AI 융합기술 세미나 개최",
      date: "2024-11-01",
      views: 234,
      isPinned: false,
    },
    {
      id: 6,
      category: "학회공지",
      title: "학회 홈페이지 리뉴얼 안내",
      date: "2024-10-25",
      views: 421,
      isPinned: false,
    },
    {
      id: 7,
      category: "논문투고",
      title: "2024년 제4호 투고 마감 임박",
      date: "2024-10-20",
      views: 278,
      isPinned: false,
    },
    {
      id: 8,
      category: "학술대회",
      title: "2025 춘계 학술대회 논문 모집",
      date: "2024-10-15",
      views: 198,
      isPinned: false,
    },
  ];

  const filteredNotices = notices.filter((notice) => {
    const matchCategory =
      selectedCategory === "전체" || notice.category === selectedCategory;
    const matchSearch =
      searchQuery === "" ||
      notice.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const pinnedNotices = filteredNotices.filter((n) => n.isPinned);
  const regularNotices = filteredNotices.filter((n) => !n.isPinned);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      학회공지: "bg-blue-100 text-blue-600",
      논문투고: "bg-green-100 text-green-600",
      학술대회: "bg-purple-100 text-purple-600",
      세미나: "bg-orange-100 text-orange-600",
    };
    return colors[category] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaBullhorn className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">공지사항</h1>
              <p className="text-lg">학회 소식 및 공지사항을 확인하세요</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <section className="mb-8 rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                카테고리
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              검색
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="제목으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Pinned Notices */}
        {pinnedNotices.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
              <FaThumbtack className="text-blue-600" />
              공지 (고정)
            </h2>
            <div className="space-y-3">
              {pinnedNotices.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/notices/${notice.id}`}
                  className="block rounded-lg border-2 border-blue-300 bg-blue-50 p-4 transition hover:border-blue-500 hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <FaThumbtack className="text-blue-600" />
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${getCategoryColor(notice.category)}`}
                    >
                      {notice.category}
                    </span>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                    <span className="ml-auto flex items-center gap-1 text-xs text-gray-500">
                      <FaEye />
                      {notice.views}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 hover:text-blue-600">
                    {notice.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Regular Notices */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            공지사항 ({regularNotices.length})
          </h2>
          <div className="space-y-3">
            {regularNotices.length === 0 ? (
              <div className="rounded-lg bg-white p-12 text-center shadow-md">
                <p className="text-gray-500">검색 결과가 없습니다.</p>
              </div>
            ) : (
              regularNotices.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/notices/${notice.id}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${getCategoryColor(notice.category)}`}
                    >
                      {notice.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <FaCalendarAlt />
                      {notice.date}
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-xs text-gray-500">
                      <FaEye />
                      {notice.views}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-800 hover:text-blue-600">
                    {notice.title}
                  </h3>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Pagination */}
        <section className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`rounded-lg px-4 py-2 font-semibold ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
