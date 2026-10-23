import Link from "next/link";
import clsx from "clsx";

import Footer from "../common/Footer";
import Header from "../common/Header";
import { AUTOPARTS_PROJECT, EDUCHAIN_PROJECT, JOHNNY_PROJECT } from "./data";
import Keywords from "./Keywords";
import Masonry from "./Masonry";
import styles from "./recap04.module.css";

const separator = <span className="mx-2">&nbsp;∵&nbsp;</span>;
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="le vu trang dai | projects, portfolio"
        canonical="https://levutrangdai.id.vn/projects"
      />
      <div className="container flex-1">
        <div className="mt-10 text-center">
          <div className={styles.recapTitleContainer}>
            <h1
              className={clsx(
                styles.recapTitle,
                "text-5xl font-extrabold uppercase tracking-widest",
              )}
            >
              Recap 2024
            </h1>
          </div>
        </div>
        <div className="mx-auto my-5 max-w-[768px] lg:my-8">
          {/* photography apps  */}
          <h3 className="text-base tracking-wider text-slate-500">
            <small className="flex flex-col md:flex-row">
              <span>November 2024</span>
              <span>{separator}a side project for my brother</span>
              <span>{separator}［WIP］</span>
            </small>
          </h3>
          <h2 className="mt-2 text-2xl font-thin leading-tight lg:mt-3">
            Photography Apps
          </h2>
          <div className="mt-2 text-base font-light text-slate-700 dark:text-slate-300 lg:mt-2 lg:text-base">
            <p>
              My brother&apos;s passion is photography, so I want to help her
              create these apps with two purposes: to show his stunning photos
              and manage his photos.
            </p>
            <p>There are three parts:</p>
            <div className="ms-5">
              <div className="mt-1">
                <p className="mb-1 flex items-center">
                  Front-end website{" "}
                  <small className="font-light text-slate-500">
                    {separator}「 almost done UI part 」{" "}
                  </small>
                </p>
                <Keywords keywords={["Tailwind CSS", "Next.js"]} />
              </div>
              <div>
                <p className="mb-1 flex items-center">
                  Back-end side include database and API{" "}
                  <small className="font-light text-slate-500">
                    {separator}「 in progress 」
                  </small>
                </p>
                <Keywords keywords={["PostgreSQL", "Laravel"]} />
              </div>
              <div>
                <p className="mb-1 flex items-center">
                  Admin on Android App{" "}
                  <small className="font-light text-slate-500">
                    {separator}「 to do 」
                  </small>
                </p>
                <Keywords keywords={["Flutter"]} />
              </div>
            </div>
          </div>
          <div>
            <Masonry data={JOHNNY_PROJECT} />
          </div>

          {/* educhain apps  */}
          <h3 className="mt-12 text-base tracking-wider text-slate-500">
            <small className="flex flex-col md:flex-row">
              <span>May 2024</span>
              <span>{separator}my biggest project this year</span>
              <span>{separator}［WIP］</span>
            </small>
          </h3>
          <h2 className="mt-2 text-2xl font-thin leading-tight lg:mt-3">
            Library for{" "}
            <Link
              href="https://educhain.vn/"
              rel="nofollow noreferrer"
              className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
              target="_blank"
            >
              <span>EDUCHAIN</span>
            </Link>
          </h2>
          <div className="mt-2 text-base font-light text-slate-700 dark:text-slate-300 lg:mt-2 lg:text-base">
            <p>
              I&apos;m working with my friend, a lecturer at NLU. We are a team
              of 5 members, and we just focus on the Library part. All of us
              hope this project should be make a good place for students and the
              next generations to study.
            </p>
            <p>
              I&apos;m in charge of managing tasks and front-end side. I also
              support checking APIs for mobile apps...
            </p>
            <p>
              Based on my experience that I made admin web by Next.js, Bootstrap
              v5.0 and Redux.
            </p>
          </div>
          <div>
            <Masonry data={EDUCHAIN_PROJECT} />
          </div>

          {/* https://callparts.vn/  */}
          <h3 className="mt-12 text-base tracking-wider text-slate-500">
            <small className="flex flex-col md:flex-row">
              <span>August 2024</span>
              <span>{separator}a design task</span>
              <span>{separator}［DONE from my side］</span>
            </small>
          </h3>
          <h2 className="mt-2 text-2xl font-thin leading-tight lg:mt-3">
            re-design{" "}
            <Link
              href="https://callparts.vn/"
              rel="nofollow noreferrer"
              className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
              target="_blank"
            >
              <span>callparts.vn</span>
            </Link>
          </h2>
          <div className="mt-2 text-base font-light text-slate-700 dark:text-slate-300 lg:mt-2 lg:text-base">
            <p className="mb-1">
              I used Figma to design and convert to HTML/CSS. I&apos;m already
              done on my side, their team is going to update the new UI.
            </p>
            <Keywords keywords={["Figma", "Bootstrap v5.0", "SCSS"]} />
            <p>
              This is{" "}
              <Link
                href="https://autoparts-five.vercel.app/"
                rel="nofollow noreferrer"
                className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                target="_blank"
              >
                <span>static result</span>
              </Link>
            </p>
          </div>
          <div>
            <Masonry data={AUTOPARTS_PROJECT} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
