import Link from "next/link";

import ReactIframe from "@shared/templates/ReactIframe";

import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { listGTSC } from "../config";

interface Props {
  params: Promise<{ filename: string }>;
}

export default async function ViewHtmlPage({ params }: Props) {
  const { filename } = await params;
  const actualHtmlFilename = filename.endsWith(".html")
    ? filename
    : `${filename}.html`;
  const meta = listGTSC[actualHtmlFilename] || {
    title: actualHtmlFilename,
    description: "",
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-800">
      <Header
        title="le vu trang dai | about "
        canonical="https://levutrangdai.id.vn/about"
      />

      <div className="flex-1">
        <div className="mx-auto text-center">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="ztai__fkaiti mb-2 border-sky-300 py-2 text-4xl font-extralight leading-tight text-rose-800 dark:text-primary-dark">
              {meta.title}
            </h1>

            <Link
              href="/hk5"
              className="text-sm text-teal-700 hover:text-fuchsia-500"
            >
              ← Quay lại
            </Link>
          </div>
        </div>
      </div>
      {/* --- IFRAME EMBED HOÀN TOÀN FILE HTML --- */}
      <main className="container mx-auto flex-1">
        <ReactIframe
          actualHtmlFilename={`/hk5/gtsc/${actualHtmlFilename}`}
          meta={meta}
          cssPath="/styles/iframe.css"
        />
        {/* --- CÁCH 2: EMBED FILE HTML BẰNG IFRAME THÔNG THƯỜNG --- */}
        {/* <iframe
          src={`/hk5/gtsc/${actualHtmlFilename}`}
          title={meta.title}
          className="w-full h-[calc(100vh-110px)] border-none block"
        /> */}
      </main>

      <Footer />
    </div>
  );
}
