export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            미래산업융합학회
          </h1>
          <h2 className="text-2xl text-gray-600 mb-8">
            Future Industry Convergence Society
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            미래 산업을 선도하는 융합 연구
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">학회 소개</h3>
              <p className="text-gray-600">
                미래산업융합학회는 융복합 연구를 통해 미래 산업을 선도합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">논문 투고</h3>
              <p className="text-gray-600">
                온라인 논문 투고 시스템을 통해 간편하게 논문을 제출하세요.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">학술 활동</h3>
              <p className="text-gray-600">
                다양한 학술대회와 세미나를 통해 연구 성과를 공유합니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
