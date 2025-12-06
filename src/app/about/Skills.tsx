const MY_SKILLS = [
  "JavaScript",
  "React/NextJS",
  "Redux",
  "Tailwind CSS",
  "TypeScript",
  "Highcharts",
  "Git",
  "Agile/Scrum",
];

export default function Skills() {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {MY_SKILLS.map((skill, index) => (
        <li key={index}>
          <span className="inline-block min-w-20 border border-dotted border-white  bg-gradient-to-tr from-primary via-tertiary to-primary text-sm text-slate-700 sm:min-w-0 dark:border-slate-900 dark:text-slate-200">
            <span className="block h-full w-full items-center justify-center bg-white p-1.5 dark:bg-slate-800">
              {skill}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
