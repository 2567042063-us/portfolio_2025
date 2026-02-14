import Head from "next/head";

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
      <header className="z-5 relative w-full flex-none text-sm font-semibold leading-6">
        <nav aria-label="Global" className="container mx-auto">
          <div className="relative flex items-center py-5">
            <a className="flex-none font-semibold" href="/">
              <span className="mb-20 animate-linear bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-4xl font-bold text-transparent">
                zhuangtai
              </span>
            </a>
            <MainNav />
          </div>
          <MainNavMb />
        </nav>
      </header>
    </>
  );
}
