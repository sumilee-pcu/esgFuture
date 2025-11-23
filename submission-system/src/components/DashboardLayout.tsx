import Navigation from "./Navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 미래산업융합학회. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-500">
              개인정보처리방침
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-500">
              이용약관
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-500">
              연락처
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
