import Footer from "../common/Footer";
import Header from "../common/Header";
import SocialMediaContact from "../common/SocialMediaContact";
import DownloadResume from "./DownloadResume";
import Hobbies from "./Hobbies";
import PersonalityTrait from "./PersonalityTrait";
import RecentAchievement from "./RecentAchievement";
import Skills from "./Skills";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="le vu trang dai | about "
        canonical="https://levutrangdai.id.vn/about"
      />
      <div className="container flex-1">
        <div className="text-center">
          <h2 className="my-5 text-3xl font-extralight">
            About Me (Before 2025)
          </h2>
          <div className="mx-auto max-w-[768px] font-light">
            <p>
              Hi there! My name&apos;s <strong>Đài</strong>,
            </p>
            <p className="mt-1">
              a front-end developer with 7+ years of hands-on experience with
              modern techniques based on JavaScript.
            </p>
            <p className="mt-1">
              I have experience working with Agile/Scrum methodology and
              participating in the Scrum ceremonies to plan, develop, review
              software deliverables. I&apos;m able to analyze, propose, and
              implement solutions to business features of own products.
            </p>
          </div>
        </div>

        <div className="mt-10"></div>

        <div className="relative mt-2 text-center">
          <DownloadResume />
        </div>

        <div className="mt-10 text-center">
          <h2 className="my-5 text-3xl font-extralight">my skills</h2>
          <div className="mx-auto max-w-[768px]">
            <Skills />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="my-5 text-3xl font-extralight">
            my personality traits
          </h2>
          <div className="mx-auto max-w-[768px]">
            <PersonalityTrait />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="my-5 text-3xl font-extralight">
            my recent achievements
          </h2>
          <div className="mx-auto max-w-[768px]">
            <RecentAchievement />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="my-5 text-3xl font-extralight">my free time</h2>
          <div className="mx-auto max-w-[768px] font-light">
            <Hobbies />
          </div>
        </div>
        <div className="mb-5 mt-10 text-center">
          <h2 className="my-5 text-3xl font-extralight">let&apos;s connect</h2>
          <div className="mx-auto max-w-[768px] font-light">
            <p>
              if you ever want to chat or have questions, feel free to reach out
              me on social media
            </p>
            <SocialMediaContact className="mt-1" />
            <p className="mt-1">
              or you can send me an email:{" "}
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                trangdai.levu@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
