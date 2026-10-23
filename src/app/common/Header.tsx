import Head from "next/head";
import Link from "next/link";

import MainNav from "./MainNav";
import MainNavMb from "./MainNavMb";

type Props = {
  title?: string;
  canonical?: string;
};

export default function Header({
  title = "le vu trang dai",
  canonical = "https://levutrangdai.id.vn",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonical} key="canonical" />
      </Head>
      <header className="relative z-5 w-full flex-none text-sm leading-6 font-semibold">
        <nav aria-label="Global" className="container mx-auto">
          <div className="relative flex items-center py-5">
            <Link className="flex-none font-semibold" href="/">
              <span className="animate-linear from-primary via-tertiary to-primary mb-20 bg-linear-to-r bg-size-[200%_auto] bg-clip-text text-4xl font-bold text-transparent">
                zhuangtai
              </span>
            </Link>
            <MainNav />
          </div>
          <MainNavMb />
        </nav>
      </header>
    </>
  );
}
