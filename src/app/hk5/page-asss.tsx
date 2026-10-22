"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import Footer from "../common/Footer";
import Header from "../common/Header";

type LinkItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "sample" | "lab" | "project" | "resource";
  tags: string[];
  icon: string;
  isExternal?: boolean;
  featured?: boolean;
};

const HK5_LINKS: LinkItem[] = [
  {
    id: "sample-page",
    title: "Trang Mẫu HTML5 (sample.html)",
    description:
      "Trang HTML5 mẫu chuẩn ngữ nghĩa, tích hợp biểu mẫu (Form Controls & Validation), bảng dữ liệu (Data Table), bố cục responsive và các thẻ HTML cốt lõi.",
    href: "/hk5/sample.html",
    category: "sample",
    tags: ["HTML5", "Semantic", "Form", "Table", "Responsive"],
    icon: "📄",
    featured: true,
  },
  {
    id: "lab-01",
    title: "Lab 01: Cấu Trúc HTML5 & Ngữ Nghĩa Semantic",
    description:
      "Luyện tập xây dựng bộ khung website với các thẻ ngữ nghĩa header, nav, section, article, footer chuẩn SEO.",
    href: "/hk5/sample.html#semantic",
    category: "lab",
    tags: ["HTML5", "Semantic", "SEO"],
    icon: "🏗️",
  },
  {
    id: "lab-02",
    title: "Lab 02: Bảng Dữ Liệu & Danh Sách Đa Cấp",
    description:
      "Tổ chức thông tin dạng bảng biểu phức tạp, định dạng dữ liệu, hàng cột gộp (colspan, rowspan) và danh sách lồng nhau.",
    href: "/hk5/sample.html#table",
    category: "lab",
    tags: ["Table", "Lists", "CSS"],
    icon: "📋",
  },
  {
    id: "lab-03",
    title: "Lab 03: Biểu Mẫu Nhập Liệu & Form Validation",
    description:
      "Thiết kế form thu thập thông tin với đầy đủ input types, kiểm tra dữ liệu đầu vào bằng regex và thông báo lỗi trực quan.",
    href: "/hk5/sample.html#form",
    category: "lab",
    tags: ["Form", "Validation", "Regex"],
    icon: "📝",
  },
  {
    id: "lab-04",
    title: "Lab 04: Bố Cục Giao Diện Flexbox & CSS Grid",
    description:
      "Kỹ thuật dàn trang đáp ứng (Responsive Web Design), thiết kế thẻ sản phẩm dạng lưới và thanh điều hướng linh hoạt.",
    href: "#",
    category: "lab",
    tags: ["Flexbox", "Grid", "Responsive"],
    icon: "🎨",
  },
  {
    id: "lab-05",
    title: "Lab 05: Tương Tác DOM & Xử Lý Sự Kiện JavaScript",
    description:
      "Bắt sự kiện click, submit, thay đổi giao diện động, lưu trữ dữ liệu cục bộ với LocalStorage.",
    href: "#",
    category: "lab",
    tags: ["JavaScript", "DOM", "Events"],
    icon: "⚡",
  },
  {
    id: "project-danonfood",
    title: "Assignment: Đồ Án DanOnFood",
    description:
      "Đồ án chuyên ngành phát triển hệ thống web ứng dụng quản lý và đặt thực phẩm trực tuyến.",
    href: "#",
    category: "project",
    tags: ["Project", "E-commerce", "React"],
    icon: "🍲",
  },
  {
    id: "portfolio-home",
    title: "Trang Chủ Portfolio",
    description:
      "Trang cá nhân giới thiệu kinh nghiệm làm việc, kỹ năng lập trình Frontend và các dự án tiêu biểu.",
    href: "/",
    category: "project",
    tags: ["Portfolio", "Next.js", "Tailwind"],
    icon: "💼",
  },
  {
    id: "ref-mdn",
    title: "MDN Web Docs (Tài liệu chuẩn)",
    description:
      "Sổ tay tra cứu chi tiết và chuẩn mực nhất về HTML5, CSS3, JavaScript và Web APIs từ Mozilla.",
    href: "https://developer.mozilla.org/vi/",
    category: "resource",
    tags: ["Documentation", "Reference", "MDN"],
    icon: "🦊",
    isExternal: true,
  },
  {
    id: "ref-nextjs",
    title: "Next.js Documentation",
    description:
      "Tài liệu hướng dẫn phát triển ứng dụng Fullstack React với App Router, Server Components và tối ưu hóa hiệu năng.",
    href: "https://nextjs.org/docs",
    category: "resource",
    tags: ["Next.js", "React", "Framework"],
    icon: "▲",
    isExternal: true,
  },
];

const CATEGORIES = [
  { id: "all", label: "Tất cả liên kết" },
  { id: "sample", label: "Trang mẫu (sample.html)" },
  { id: "lab", label: "Bài tập thực hành (Labs)" },
  { id: "project", label: "Đồ án môn học" },
  { id: "resource", label: "Tài liệu tham khảo" },
] as const;

export default function HK5IndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredLinks = useMemo(() => {
    return HK5_LINKS.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyLink = (href: string, id: string) => {
    const fullUrl = href.startsWith("http")
      ? href
      : `${window.location.origin}${href}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const samplePage = HK5_LINKS.find((item) => item.id === "sample-page");

  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-50 text-slate-800 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <Header
        title="le vu trang dai | HK5 - Mục Lục Bài Tập & Liên Kết"
        canonical="https://levutrangdai.id.vn/hk5"
      />

      <main className="container mx-auto flex-1 px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center my-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
            <span>🎓 Học Kỳ 5 (HK5)</span>
            <span>•</span>
            <span>Index Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Mục Lục Bài Tập & Liên Kết HK5
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Trung tâm quản lý, lưu trữ và tổng hợp toàn bộ bài tập thực hành, đồ
            án môn học và trang mẫu HTML5 phục vụ học tập học kỳ 5.
          </p>
        </div>

        {/* Nổi Bật: Highlight Card sample.html */}
        {samplePage && (
          <div className="my-8 rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 shadow-lg shadow-primary/5 transition-all hover:border-primary/60">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="rounded-md bg-primary px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                    Trang Mẫu Nổi Bật
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {samplePage.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  {samplePage.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {samplePage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/70 dark:bg-slate-800/80 px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 flex-shrink-0">
                <a
                  href={samplePage.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  <span>Mở sample.html</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyLink(samplePage.href, samplePage.id)
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  {copiedId === samplePage.id ? (
                    <>
                      <span className="text-emerald-500 font-bold">✓ Đã sao chép link</span>
                    </>
                  ) : (
                    <>
                      <span>📋 Sao chép link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search & Filter Toolbar */}
        <div className="mt-8 mb-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "bg-slate-200/70 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài tập, thẻ, công nghệ..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-4 text-xs text-slate-500 dark:text-slate-400">
          Hiển thị <strong>{filteredLinks.length}</strong> liên kết
          {searchQuery && ` cho từ khóa "${searchQuery}"`}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLinks.map((item) => {
            const isSample = item.id === "sample-page";
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between rounded-xl border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800/90 ${
                  isSample
                    ? "border-primary/40 ring-1 ring-primary/20"
                    : "border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors text-base">
                        {item.title}
                      </h3>
                    </div>
                    {isSample && (
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                        MẪU
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 text-[11px] text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      title="Sao chép liên kết"
                      onClick={() => handleCopyLink(item.href, item.id)}
                      className="rounded p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-700 text-xs transition-colors"
                    >
                      {copiedId === item.id ? "✓" : "📋"}
                    </button>

                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark"
                      >
                        <span>Mở</span>
                        <span>↗</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark"
                      >
                        <span>Truy cập</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredLinks.length === 0 && (
          <div className="my-12 text-center py-10 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Không tìm thấy liên kết phù hợp với bộ lọc.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-primary font-semibold hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

        {/* Hướng Dẫn Thêm Link Mới */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-slate-800/40 p-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
            💡 Ghi chú dành cho bạn:
          </p>
          <p>
            - Để thêm bài tập hoặc liên kết mới, bạn chỉ cần mở file{" "}
            <code className="text-primary font-mono">src/app/hk5/page.tsx</code>{" "}
            và thêm phần tử mới vào mảng{" "}
            <code className="text-primary font-mono">HK5_LINKS</code>.
          </p>
          <p className="mt-1">
            - Trang mẫu HTML5 tĩnh được lưu tại{" "}
            <code className="text-primary font-mono">public/hk5/sample.html</code>{" "}
            và có thể truy cập trực tiếp tại đường dẫn{" "}
            <a
              href="/hk5/sample.html"
              target="_blank"
              className="text-primary underline font-mono"
            >
              /hk5/sample.html
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
