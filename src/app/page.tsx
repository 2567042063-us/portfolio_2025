import Link from "next/link";

import Footer from "./common/Footer";
import Header from "./common/Header";
import HeroBanner from "./common/hero-banner";
import SocialMediaContact from "./common/SocialMediaContact";

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
              hi, i&apos;m Đài
            </p>

            <div className="mt-5">
              <div className="mt-12 mb-12">
                <p>I am upgrading myself ...</p>
              </div>

              <p className="mt-3">
                If you&apos;re interested in working together, get in touch
                here!
              </p>
              {/* <span className="text-sky-700 hover:text-sky-600 dark:text-sky-400">
                WhatsApp or phone number: 0989851497
              </span> */}
              {/* <Link
                href="https://zalo.me/0911950917"
                rel="nofollow noreferrer"
                className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                target="_blank"
              >
                <span>
                  zalo: <strong>0911950917</strong>
                </span>
              </Link> */}
              <SocialMediaContact className="mt-2" />
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
