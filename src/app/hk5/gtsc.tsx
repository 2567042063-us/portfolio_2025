import Link from "next/link";

import { listGTSC } from "./config";

export default function GTSC() {
  return (
    <div className="container flex-1">
      <div className="mx-auto text-center">
        <h1 className="text-md mb-2 border-b-2 border-t-2 border-dashed border-sky-300 py-3 font-extralight leading-tight text-sky-500 dark:text-primary-dark">
          Giải đề Giao tiếp SC
        </h1>
      </div>

      <div className="flex flex-col justify-center gap-2">
        {Object.keys(listGTSC).map((filename) => {
          const routeSlug = filename.replace(/\.html$/, "");
          return (
            <Link
              key={filename}
              href={`/hk5/${routeSlug}`}
              className="ztai__fkaiti mt-3 inline-block px-5 text-2xl text-sky-700 hover:text-amber-600 dark:text-sky-400 dark:hover:text-primary-dark"
            >
              {listGTSC[filename].title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
