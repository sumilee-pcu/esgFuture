import DashboardLayout from "@/components/DashboardLayout";

export default function PaymentsPage() {
  // TODO: API로부터 데이터 가져오기
  const payments = [
    {
      id: 1,
      type: "심사료",
      paperTitle: "AI 기반 제조업 최적화 연구",
      amount: 50000,
      status: "완료",
      statusColor: "bg-green-100 text-green-800",
      method: "신용카드",
      paidAt: "2024-01-15",
    },
    {
      id: 2,
      type: "연회비",
      paperTitle: "-",
      amount: 50000,
      status: "완료",
      statusColor: "bg-green-100 text-green-800",
      method: "계좌이체",
      paidAt: "2024-01-01",
    },
    {
      id: 3,
      type: "게재료",
      paperTitle: "머신러닝을 활용한 수요 예측 모델",
      amount: 250000,
      status: "대기",
      statusColor: "bg-yellow-100 text-yellow-800",
      method: "-",
      paidAt: "-",
    },
  ];

  const totalPaid = payments
    .filter((p) => p.status === "완료")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingPayment = payments
    .filter((p) => p.status === "대기")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">결제 관리</h1>
          <p className="mt-1 text-sm text-gray-500">
            논문 투고 및 회비 납부 내역을 확인하세요
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              총 결제 금액
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {totalPaid.toLocaleString()}원
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              미결제 금액
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-orange-600">
              {pendingPayment.toLocaleString()}원
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              결제 건수
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {payments.length}건
            </dd>
          </div>
        </div>

        {/* Pending Payments */}
        {pendingPayment > 0 && (
          <div className="rounded-lg bg-orange-50 p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-medium text-orange-800">
                  미결제 금액이 있습니다
                </h3>
                <div className="mt-2 text-sm text-orange-700">
                  <p>
                    총 {pendingPayment.toLocaleString()}원의 미결제 금액이
                    있습니다. 결제를 완료해주세요.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700">
                    지금 결제하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payments List */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              결제 내역
            </h3>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  결제 항목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  논문 제목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  금액
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  결제 방법
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  결제일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  액션
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {payment.paperTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.amount.toLocaleString()}원
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${payment.statusColor}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.paidAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {payment.status === "완료" ? (
                      <button className="text-blue-600 hover:text-blue-900">
                        영수증
                      </button>
                    ) : (
                      <button className="text-green-600 hover:text-green-900">
                        결제하기
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Info */}
        <div className="rounded-lg bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">결제 안내</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>• 심사료는 논문 투고 시 납부해야 합니다.</p>
            <p>• 게재료는 게재 확정 후 납부하시면 됩니다.</p>
            <p>
              • 연회비는 매년 1회 납부하며, 평생회원은 1회만 납부하시면 됩니다.
            </p>
            <p>• 결제 방법: 신용카드, 계좌이체, 무통장 입금</p>
            <p className="mt-4 font-medium text-gray-900">
              문의: finance@future-isa.or.kr
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
