import Link from "next/link";
import clsx from "clsx";

export default function SocialMediaContact({
  className,
}: ReactFCPropsWithClassName) {
  return (
    <div
      className={clsx(className, "flex items-center justify-center text-sm")}
    >
      <span className="text-sky-700 hover:text-sky-600 dark:text-sky-400">
        WhatsApp or phone number: 0989851497
      </span>
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
      <span className="mx-2 text-slate-100 dark:text-slate-800">|</span>
      <Link
        href="https://www.facebook.com/lvtd.hhd"
        rel="nofollow noreferrer"
        className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
        target="_blank"
      >
        facebook: <strong>@lvtd.hhd</strong>
      </Link>
      <span className="mx-2 text-slate-100 dark:text-slate-800">|</span>
      {/* <Link
        href="https://www.tiktok.com/@dailetd"
        rel="nofollow noreferrer"
        className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
        target="_blank"
      >
        tiktok: <strong>@dailetd</strong>
      </Link> */}
    </div>
  );
}
