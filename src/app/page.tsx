import Link from "next/link";

import Footer from "./common/Footer";
import Header from "./common/Header";
import HeroBanner from "./common/hero-banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="le vu trang dai" canonical="https://levutrangdai.id.vn/" />

      <div className="container mb-2 flex flex-1 items-center justify-center sm:mb-10">
        <div className="flex flex-col sm:mt-10 sm:flex-row-reverse">
          <div className="relative mx-auto flex h-[320px] w-[320px] justify-center overflow-hidden rounded-full shadow sm:h-[360px] sm:w-[360px]">
            <HeroBanner />
          </div>
          <div className="ml-auto max-w-[500px] flex-1 pr-0 text-center font-light sm:pr-5">
            <p className="mt-10 text-5xl font-extralight sm:mt-0">
              hi, I&apos;m Đài
            </p>

            <div className="mt-5">
              <div className="mt-12 mb-12">
                <iframe
                  width="320"
                  height="180"
                  className="mx-auto"
                  src="https://www.youtube.com/embed/videoseries?list=PLTLRUHKWMSpeMGJ80nGSOPZMfCLSSL4QG"
                  // frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="mt-3">
                Follow me to learn Mandarin Chinese together!
              </p>
              <div className="flex-col">
                <Link
                  href="https://www.youtube.com/@trangdailevu"
                  rel="nofollow noreferrer"
                  className="mt-3 text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 block"
                  target="_blank"
                >
                  <span>
                    youtube: <strong>妆台 kể chuyện Hán tự</strong>
                  </span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@zhuangtaihoctiengtrung?_r=1&_t=ZS-93uSsd1gZ4a"
                  rel="nofollow noreferrer"
                  className="mt-3 text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 block"
                  target="_blank"
                >
                  <span>
                    tiktok: <strong>阿台 học tiếng Trung</strong>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// className="rounded-md border border-dotted border-tertiary
// bg-transparent px-2 py-1 text-center text-tertiary hover:border-transparent hover:bg-tertiary hover:text-white"
