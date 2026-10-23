import fs from "fs";
import path from "path";
import Link from "next/link";

import Footer from "../common/Footer";
import Header from "../common/Header";

// target="_blank" // Mở ở tab mới (xóa dòng này nếu muốn mở đè lên tab hiện tại)
// rel="noopener noreferrer"
export default function Page() {
  const dirPath = path.join(process.cwd(), "public", "hk5");
  let htmlFiles: string[] = [];
  try {
    const files = fs.readdirSync(dirPath);
    htmlFiles = files.filter((file) => file.endsWith(".html"));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/:", error);
  }

  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="le vu trang dai | about "
        canonical="https://levutrangdai.id.vn/about"
      />
      <div className="container flex-1">
        <div className="text-center">
          <h2 className="my-5 text-3xl font-extralight">Học Kỳ 5</h2>
        </div>
        <div>
          <ul className="text-center">
            {htmlFiles.map((file) => (
              <li key={file}>
                <Link
                  href={`/hk5/${file}`}
                  prefetch={false}
                  className="hover:text-primary dark:hover:text-primary-dark mt-3 block text-sky-700 dark:text-sky-400"
                >
                  {/*  `/\.[^/.]+$//` sẽ tìm dấu chấm và phần chữ theo sau ở cuối file */}
                  {file.replace(/\.[^/.]+$/, "")}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
