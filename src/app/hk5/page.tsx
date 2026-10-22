import Footer from "../common/Footer";
import Header from "../common/Header";
import Link from "next/link";

const MUC_LUC = [
  {
    id: "lich-on-thi",
    label: "Lịch Ôn Thi",
    href: "/hk5/lich-on-thi.html",
  },
  {
    id: "gthn4-bai20",
    label: "GTHN4 - Bài 20",
    href: "/hk5/gthn4-bai20.html",
  },
  {
    id: "gthn4-bai21",
    label: "GTHN4 - Bài 21",
    href: "/hk5/gthn4-bai21.html",
  },
  {
    id: "ghtn5-6",
    label: "GTHN5,6 - 幸福、生活中什么最重要",
    href: "/hk5/gthn5-6.html",
  },
  {
    id: "gthn4-bai22",
    label: "GTHN4 - Bài 22",
    href: "/hk5/gthn4-bai22.html",
  }
];

export default function Page() {
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
            {MUC_LUC.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="hover:text-primary dark:hover:text-primary-dark mt-3 block text-sky-700 dark:text-sky-400"
                >
                  {item.label}
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
