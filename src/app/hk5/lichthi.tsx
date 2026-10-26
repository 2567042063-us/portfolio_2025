"use client";

import React, { useEffect, useState } from "react";
import Frame, { useFrame } from "react-frame-component";

function FrameScriptRunner() {
  const { document: iframeDoc } = useFrame();

  useEffect(() => {
    if (!iframeDoc) return;
    const scripts = Array.from(iframeDoc.querySelectorAll("script"));

    scripts.forEach((oldScript) => {
      const newScript = iframeDoc.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      if (oldScript.innerHTML) {
        newScript.innerHTML = oldScript.innerHTML;
      }

      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [iframeDoc]);

  return null;
}

export default function LichThi() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  // const filename = "lich-on-thi";
  // const actualHtmlFilename = filename.endsWith(".html")
  //   ? filename
  //   : `${filename}.html`;
  // const meta = {
  //   title: actualHtmlFilename,
  //   description: "",
  // };

  // actualHtmlFilename={`/hk5/lichthi/${actualHtmlFilename}`}

  useEffect(() => {
    fetch("/hk5/lichthi/lich-on-thi.html")
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error("Lỗi tải file:", err));
  }, []);

  if (!htmlContent) return <div>Đang tải nội dung...</div>;
  return (
    <Frame
      initialContent={htmlContent}
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Component này sẽ chạy logic kích hoạt script trong iframe */}
      <FrameScriptRunner />
    </Frame>
  );
}
