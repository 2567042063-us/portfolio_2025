interface PageMeta {
  title: string;
  description?: string;
}

interface CustomIframeProps {
  actualHtmlFilename: string;
  meta: { title: string };
  cssPath?: string; // Đường dẫn file CSS muốn import (ví dụ: '/styles/iframe.css')
}
