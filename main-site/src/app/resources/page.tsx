import { FaFileAlt, FaDownload } from "react-icons/fa";

export const metadata = {
  title: "자료실 | 미래산업융합학회",
};

export default function ResourcesPage() {
  const resources = [
    {
      category: "논문 양식",
      items: [
        { name: "논문 작성 양식 (한글)", file: "paper_template_kr.hwp" },
        { name: "논문 작성 양식 (MS Word)", file: "paper_template_en.docx" },
      ],
    },
    {
      category: "제출 서식",
      items: [
        { name: "저작권 이양 동의서", file: "copyright_form.pdf" },
        { name: "이해상충 공개서", file: "conflict_of_interest.pdf" },
      ],
    },
    {
      category: "투고 가이드",
      items: [
        { name: "투고 규정", file: "submission_guidelines.pdf" },
        { name: "심사 규정", file: "review_guidelines.pdf" },
        { name: "윤리 규정", file: "ethics_guidelines.pdf" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaFileAlt className="text-4xl" />
            <div>
              <h1 className="mb-2 text-4xl font-bold">자료실</h1>
              <p className="text-lg">논문 양식 및 각종 서식 다운로드</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {resources.map((section, index) => (
          <section key={index} className="mb-12 rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <div className="flex items-center gap-3">
                    <FaFileAlt className="text-2xl text-blue-600" />
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                    <FaDownload />
                    다운로드
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
