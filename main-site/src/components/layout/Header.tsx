"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "학회소개",
      href: "/about",
      children: [
        { label: "학회 연혁", href: "/about/history" },
        { label: "조직도", href: "/about/organization" },
        { label: "찾아오시는 길", href: "/about/location" },
      ],
    },
    {
      label: "학회지",
      href: "/journal",
      children: [
        { label: "학회지 소개", href: "/journal/about" },
        { label: "투고 규정", href: "/journal/submission-guidelines" },
        { label: "심사 규정", href: "/journal/review-guidelines" },
        { label: "윤리 규정", href: "/journal/ethics" },
        { label: "발간 일정", href: "/journal/schedule" },
        { label: "과거 발행본", href: "/journal/archive" },
      ],
    },
    { label: "공지사항", href: "/notices" },
    {
      label: "학술활동",
      href: "/activities",
      children: [
        { label: "학술대회", href: "/activities/conferences" },
        { label: "세미나", href: "/activities/seminars" },
      ],
    },
    {
      label: "회원",
      href: "/members",
      children: [
        { label: "회원가입 안내", href: "/members/join" },
        { label: "회원 혜택", href: "/members/benefits" },
        { label: "회비 안내", href: "/members/fees" },
      ],
    },
    { label: "자료실", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              미래산업융합학회
            </div>
          </Link>

          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/members/login"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              로그인
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/members/join"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              회원가입
            </Link>
            <Link
              href="http://submission.future-isa.or.kr"
              className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              target="_blank"
            >
              논문 투고
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden py-4 md:block">
          <ul className="flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full mt-2 w-48 rounded-md bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t py-4 md:hidden">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
