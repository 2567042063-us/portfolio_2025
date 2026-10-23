export interface PageMeta {
  title: string;
  description?: string;
}

// Khai báo theo TÊN FILE (bao gồm cả đuôi .html)
export const pagesMeta: Record<string, PageMeta> = {
  "giaide_khaungu_hk4.html": {
    title: "31 Điểm Ngữ pháp HK4",
    description: "Ví dụ dễ hiểu...",
  },
  "demo.html": {
    title: "Trang Demo Tính Năng",
    description: "Mô tả tính năng demo.",
  },
};
