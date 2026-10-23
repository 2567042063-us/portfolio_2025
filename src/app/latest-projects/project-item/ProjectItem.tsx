/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useTheme } from "next-themes";
import clsx from "clsx";

import ProjectItemImage from "./ProjectItemImage";
import styles from "./style.module.css";

export type IProjectItem = {
  name: string;
  description: string;
  responsible: string;
  keywords: string[];
  image: string;
  color?: string;
  colorDark?: string;
  urlBrowser?: string;
};

export type Props = {
  project: IProjectItem;
  className?: string;
};
export default function ProjectItem({ project, className }: Props) {
  const { resolvedTheme } = useTheme();
  let colorHeading = project.color;
  if (resolvedTheme === "dark" && project.colorDark) {
    colorHeading = project.colorDark;
  }

  return (
    <div className={clsx(className, "w-full p-5 sm:p-[5rem]")}>
      <div className="relative inset-0 flex h-full w-full -translate-x-1 -translate-y-1 flex-col items-center bg-white dark:bg-slate-800 sm:flex-row lg:flex lg:max-w-full">
        <div className="flex-0 relative sm:order-2 sm:w-1/2">
          <figure className={styles.latestProjects}>
            <div
              className={clsx(
                styles.latestProjectsHeader,
                project.urlBrowser ? "visible" : "invisible",
              )}
            >
              <div className={styles.latestProjectsHeaderBtnList}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.latestProjectsHeaderBrowserBar}>
                {project.urlBrowser}
              </div>
            </div>
            <div className={styles.latestProjectsFrame}>
              <ProjectItemImage alt={project.name} src={project.image} />
            </div>
            <div
              className={clsx(
                "bg-gradient-to-tl from-white",
                styles.latestProjectsBgFrame,
              )}
              style={{ backgroundColor: project.color }}
            ></div>
          </figure>
        </div>

        <div className="flex-1 pt-8 sm:pt-0">
          <div className="leading-normal sm:pr-[4rem]">
            <p
              className="mt-2 text-lg font-light dark:drop-shadow-[2px_2px_8px_rgba(255,255,255,0.35)] md:mt-0 md:text-2xl"
              style={{ color: colorHeading }}
            >
              {project.name}
            </p>
            <p className="opacity-55">{project.description}</p>
            <p className="mt-3">{project.responsible}</p>
            <ul className="mt-3 flex flex-wrap space-x-2">
              {project.keywords.map((keyword, index) => (
                <li
                  key={index}
                  className="mb-2 border border-dotted border-slate-300 px-2 text-sm text-slate-700 dark:text-slate-200"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
