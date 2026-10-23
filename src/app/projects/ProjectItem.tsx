import clsx from "clsx";

import ProjectItemImage from "./ProjectItemImage";

export type IProjectItem = {
  name: string;
  description: string;
  responsible: string;
  keywords: string[];
  image: string;
  color?: string;
};

export type Props = {
  project: IProjectItem;
  className?: string;
};
export default function ProjectItem({ project, className }: Props) {
  return (
    <div className={clsx(className, "w-full p-5")}>
      <div
        className="bg-gradient-to-tr from-white"
        style={{ backgroundColor: project.color }}
      >
        <div className="relative inset-0 flex h-full w-full -translate-x-1 -translate-y-1 flex-col border border-slate-100 bg-white sm:flex-row lg:flex lg:max-w-full dark:border-slate-700 dark:bg-slate-800">
          <div className="px-2 sm:w-5/12">
            <div className="relative min-h-48 overflow-hidden sm:min-h-56">
              <ProjectItemImage
                alt={project.name}
                src={project.image}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="px-5 pb-5 leading-normal sm:py-5">
              <p className="text-lg font-bold mt-2 md:mt-0" style={{ color: project.color }}>
                {project.name}
              </p>
              <p className="text-sm opacity-55">{project.description}</p>
              <p className="mt-3 text-sm">{project.responsible}</p>
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
    </div>
  );
}
