import Footer from "../common/Footer";
import Header from "../common/Header";
import ProjectItem, { IProjectItem } from "./ProjectItem";

const myProjects: IProjectItem[] = [
  {
    name: "SaaS app supports fast-food chains",
    description:
      "helps fast-food chains manage their orders from the kitchen to customers.",
    responsible: "I am in charge of the website for customers.",
    keywords: ["Tailwind CSS", "Next.js", "Redux", "Diqit"],
    image: "diqit_wdtejs",
    color: "#ef4427",
  },
  {
    name: "AirAsia food",
    description: "orders food delivery in Malaysia and Indonesia.",
    responsible:
      "I handle the website: analyze and estimate tasks, make plans for the front-end team, code, support testing, and deploy fortnight.",
    keywords: ["React", "Next.js", "AirAsia"],
    image: "airasia-food_b50ryj",
    color: "#f90103",
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
    image: "inspectorio_vzhmqo",
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
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="le vu trang dai | projects, portfolio" canonical="https://levutrangdai.id.vn/projects"/>
      <div className="container flex-1">
        <div className="mt-10 text-center">
          <h2 className="my-5 text-2xl font-extralight">
            Here are a few past projects I&apos;ve worked on.{" "}
          </h2>
        </div>
        <div className="mx-auto max-w-[768px]">
          {myProjects.map((project: IProjectItem, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
