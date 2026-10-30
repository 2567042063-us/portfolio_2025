interface PageMeta {
  title: string;
  description?: string;
  titleseo?: string;
}

interface CustomIframeProps {
  actualHtmlFilename: string;
  meta: { title: string };
  className?: string; // ClassName tùy chọn cho khung iframe
  head?: React.ReactNode; // Nội dung tùy chỉnh muốn chèn vào <head> của iframe
  cssPath?: string; // Đường dẫn file CSS muốn import (ví dụ: '/styles/iframe.css')
}
