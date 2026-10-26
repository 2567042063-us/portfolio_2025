import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { StoreProvider } from "@config/store-provider";
import ThemeProvider from "@config/theme-provider";

import "@shared/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "le vu trang dai",
  description: "𓇢𓆸𓋼𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊 studying chinese",
  // keywords: [
  //   "front-end developer",
  //   "JavaScript",
  //   "React",
  //   "Redux",
  //   "Nextjs, TypeScript, Tailwind CSS",
  // ],
  metadataBase: new URL("https://levutrangdai.id.vn"),
  openGraph: {
    images:
      "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706692565/demon_slayer_ybgwdz.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <StoreProvider>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
    // </StoreProvider>
  );
}
