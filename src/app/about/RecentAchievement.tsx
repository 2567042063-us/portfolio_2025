import Link from "next/link";

export default function RecentAchievement() {
  return (
    <div className="mx-auto max-w-[768px] font-light">
      <p>
        I am so happy to have completed the online course{" "}
        <Link
          href="https://www.mexoxo.com/e-cornell"
          rel="nofollow noreferrer"
          className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
          target="_blank"
        >
          <strong>TAKE THE LEAD</strong>
        </Link>{" "}
        powered by Mexoxo with the support of L&apos;Oréal Fund for Women, which collaborates with eCornell University .
      </p>
    </div>
  );
}
