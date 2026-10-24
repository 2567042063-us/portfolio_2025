import fs from "fs";
import path from "path";
import Link from "next/link";

import { listGTSC } from "./config";

export default function GTSC() {
  const dirPath = path.join(process.cwd(), "public", "hk5", "gtsc");
  let htmlFiles: string[] = [];

  try {
    const files = fs.readdirSync(dirPath);
    htmlFiles = files.filter((file) => file.endsWith(".html"));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/gtsc:", error);
  }

  return (
    <div className="container flex-1">
      <div className="mx-auto text-center">
        <h1 className="text-md leading-tight mb-2 border-t-2 border-b-2 border-sky-300 py-3 border-dashed text-sky-500 dark:text-primary-dark font-extralight">
          Giải đề Giao tiếp SC
        </h1>
        <p className="text-md text-gray-400 mb-2">to be continue...</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        {htmlFiles.map((filename) => {
          const debai = listGTSC[filename] || {
            title: filename,
          };
          const routeSlug = filename.replace(/\.html$/, "");
          return (
            <Link
              key={filename}
              href={`/hk5/${routeSlug}`}
              className="hover:text-fuchsia-500 dark:hover:text-primary-dark mt-3 inline-block text-sky-700 dark:text-sky-400 px-5 text-2xl ztai__fkaiti"
            >
              {debai.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
