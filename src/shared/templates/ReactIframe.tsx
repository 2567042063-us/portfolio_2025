"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Frame from "react-frame-component";

const CustomIframe: React.FC<CustomIframeProps> = ({
  actualHtmlFilename,
  meta,
  className,
  head,
  cssPath = "/styles/iframe.css", // Thay đường dẫn CSS của bạn ở đây
}) => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!actualHtmlFilename) return;

    setLoading(true);
    // Fetch file HTML tĩnh từ thư mục public
    fetch(actualHtmlFilename)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load HTML file");
        return res.text();
      })
      .then((data) => {
        // Lấy phần nội dung nằm trong <body>...</body> của file HTML (nếu có)
        const bodyMatch = data.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        const bodyContent = bodyMatch ? bodyMatch[1] : data;

        setHtmlContent(bodyContent);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading iframe content:", err);
        setLoading(false);
      });
  }, [actualHtmlFilename]);

  // Cấu hình khung HTML ban đầu cho Frame, tự động import file CSS vào <head>
  const initialContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="${cssPath}" />
      </head>
      <body style="margin: 0; padding: 0;">
        <div id="mount-node"></div>
      </body>
    </html>
  `;

  if (loading) {
    return (
      <div
        className={clsx(
          "flex h-[calc(100vh-110px)] w-full items-center justify-center",
          className,
        )}
      >
        Đang tải...
      </div>
    );
  }

  return (
    <Frame
      title={meta.title}
      initialContent={initialContent}
      className={clsx(
        "block h-[calc(100vh-110px)] w-full border-none",
        className,
      )}
      head={head}
      mountTarget="#mount-node"
    >
      {/* Inject trực tiếp nội dung HTML đã fetch vào trong iframe */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Frame>
  );
};

export default CustomIframe;
