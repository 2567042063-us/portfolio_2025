import Footer from "../common/Footer";
import Header from "../common/Header";
import GTHN from "./gthn";
import GTSC from "./gtsc";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="le vu trang dai | about "
        canonical="https://levutrangdai.id.vn/about"
      />
      <div className="container flex-1">
        <div className="text-center">
          <h2 className="my-1 text-3xl font-extralight">Học Kỳ 5</h2>
        </div>

        <nav className="flex flex-wrap gap-2 justify-center my-3 sticky top-0 py-2 z-10 text-lg font-light ">
          {["GTHN", "Giao tiếp SC", "Khẩu ngữ", "Đọc hiểu SC"].map(
            (subject, index) => (
              <a
                key={index}
                href={`#m${index + 1}`}
                className="transform hover:rotate-5 inline-block mx-5 text-sky-600 hover:text-primary transition-transform duration-300 ease-in-out"
              >
                ⭑.ᐟ{subject}
              </a>
            ),
          )}
        </nav>

        <div id="m1" className="my-5">
          <GTHN />
        </div>
        <div id="m2" className="my-5">
          <GTSC />
        </div>
      </div>
      <Footer />
    </div>
  );
}
