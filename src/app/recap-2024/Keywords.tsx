export default function Keywords({ keywords }: { keywords: string[] }) {
  return (
    <ul className="flex flex-wrap space-x-2">
      {keywords.map((keyword, index) => (
        <li
          key={index}
          className="mb-2 border border-dotted border-slate-300 px-2 text-sm text-slate-700 dark:text-slate-200"
        >
          {keyword}
        </li>
      ))}
    </ul>
  );
}
