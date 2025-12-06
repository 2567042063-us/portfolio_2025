import Link from "next/link";

export default function DownloadResume() {
  return (
    <Link
      href="/resume.pdf"
      // download
      rel="noopener noreferrer"
      target="_blank"
      locale={false}
      className="group relative px-12 py-3 font-bold"
    >
      <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-red-300 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 dark:bg-primary-dark"></span>
      <span className="absolute inset-0 h-full w-full border-4 border-black dark:border-2 dark:border-slate-200"></span>
      <span className="relative tracking-widest text-black dark:text-slate-200">
        download resume
      </span>
    </Link>
  );
}
