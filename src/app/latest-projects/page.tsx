import Footer from "../common/Footer";
import Header from "../common/Header";
import ProjectItem, { IProjectItem } from "./project-item/ProjectItem";

const myProjects: IProjectItem[] = [
  {
    name: "re-design callparts.vn",
    description: "a website for selling auto parts.",
    responsible:
      "I design new UI and support the front-end team to implement the new UI.",
    keywords: ["2024", "Figma", "Bootstrap v5.0", "Callparts"],
    image: "autoparts_syr5id",
    color: "#003399",
    colorDark: "#3796fc",
    urlBrowser: "https://callparts.vn/",
  },
  {
    name: "Library for Educhain",
    description: "a part of the Educhain platform",
    responsible: `I'm working with my friend, a lecturer at NLU. We are a team of five members focusing on the Library module. All of us hope this project will become a great place for students and next generations to study.

I’m in charge of task management and front-end development. I also support API testing for the mobile apps, and I developed the admin web portal using Next.js, Bootstrap 5.0, and Redux.`,
    keywords: ["2024", "Next.js", "Bootstrap v5.0", "Redux", "Educhain"],
    image: "educhain_j16kxc",
    color: "#389e0d",
    colorDark: "#4cff00",
    urlBrowser: "https://callparts.vn/",
  },
  {
    name: "SaaS app supports fast-food chains",
    description:
      "helps fast-food chains manage their orders from the kitchen to customers.",
    responsible: "I am in charge of the website for customers.",
    keywords: ["2023", "Tailwind CSS", "Next.js", "Redux", "Diqit"],
    image: "diqit_wdtejs",
    color: "#ef4427",
  },
  {
    name: "AirAsia food",
    description: "orders food delivery in Malaysia and Indonesia.",
    responsible:
      "I handle the website: analyze and estimate tasks, make plans for the front-end team, code, support testing, and deploy fortnight.",
    keywords: ["2022", "React", "Next.js", "AirAsia"],
    image: "airasia-food_b50ryj",
    color: "#f90103",
    urlBrowser: "https://www.airasia.com/food",
  },
  {
    name: "a part of the SaaS app of Inspectorio",
    description: "use Highcharts for visualization data.",
    responsible: "I developed the charts and wrote unit tests for every code.",
    keywords: [
      "Angular",
      "TypeScript",
      "Unit Test",
      "Highcharts",
      "Inspectorio",
    ],
    image: "inspectorio_djzbfz",
    color: "#0778f5",
  },
  {
    name: "Sentifi's widget for financial news",
    description:
      "appears on the websites of financial news platforms and stock exchanges, providing readers with alternative information on listed stocks.",
    responsible:
      "I am in charge of the widgets based on the client's requirements.",
    keywords: ["React", "Redux", "Highcharts", "Sentifi"],
    image: "sentifi-product_sw8rzi",
    color: "#f47b21",
    urlBrowser: "[Legacy Website] https://sentifi.com/",
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="le vu trang dai | projects, portfolio"
        canonical="https://levutrangdai.id.vn/projects"
      />
      <div className="container mb-0 flex-1 sm:mb-5">
        <div className="mx-auto max-w-[992px]">
          {myProjects.map((project: IProjectItem, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
