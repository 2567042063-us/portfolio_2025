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
              <div>
                <p>
                  a front-end developer with 7+ years of hands-on experience
                  with modern techniques based on JavaScript.
                </p>
                <p className="mt-2">
                  I have experience working with Agile/Scrum methodology and
                  participating in the Scrum, ceremonies to plan, develop,
                  review software deliverables. I&apos;m able to analyze,
                  propose, and implement solutions to business features of own
                  products.
                </p>
              </div>
              <div className="mt-3 flex select-none items-center justify-center text-sm">
                <Link
                  href="/recap-2024"
                  className="group relative border border-black bg-transparent px-3 py-2 text-black transition duration-200 dark:border-gray-200"
                >
                  <div className="absolute -bottom-1 -right-1 -z-10 h-full w-full bg-gray-200 transition-all duration-200 group-hover:bottom-0 group-hover:right-0 dark:z-10" />
                  <span className="relative -bottom-1 -right-1 z-20 transition-all duration-200 group-hover:bottom-0 group-hover:right-0">
                    explore my latest projects
                  </span>
                </Link>
                <span className="mx-2 text-slate-200 dark:text-slate-800 sm:mx-3">
                  &nbsp;
                </span>
                <Link
                  href="/about"
                  className="group relative border border-black bg-transparent px-3 py-2 text-black transition duration-200 dark:border-gray-200"
                >
                  <div className="absolute -bottom-1 -right-1 -z-10 h-full w-full bg-amber-300 transition-all duration-200 group-hover:bottom-0 group-hover:right-0 dark:z-10" />
                  <span className="relative -bottom-1 -right-1 z-20 transition-all duration-200 group-hover:bottom-0 group-hover:right-0">
                    see more details about me
                  </span>
                </Link>
              </div>

              <p className="mt-3">
                If you&apos;re interested in working together, get in touch
                here!
              </p>
              <p className="mt-5">
                Other than coding, I love cycling to the countryside with my
                friends at weekend. If you&apos;re interested in cycling and
                willing to go, don&apos;t hesitate to get in touch with me on
              </p>
              <span className="text-sky-700 hover:text-sky-600 dark:text-sky-400">
                WhatsApp or phone number: 0989851497
              </span>
              <Link
                href="https://zalo.me/0911950917"
                rel="nofollow noreferrer"
                className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                target="_blank"
              >
                <span>
                  zalo: <strong>0911950917</strong>
                </span>
              </Link>
              <SocialMediaContact className="mt-2" />

              <p className="mt-2">
                Anyway, please follow my{" "}
                <Link
                  href="https://www.facebook.com/uixcrazy"
                  rel="nofollow noreferrer"
                  className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                  target="_blank"
                >
                  <strong>Fanpage Facebook</strong>
                </Link>
                , or share your wide-ranging knowledge with this community—so
                many thanks for your time.
              </p>
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
