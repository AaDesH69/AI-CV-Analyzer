import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {resume} from "react-dom/server";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVmind" },
    { name: "description", content: "Your smart way to make CV!" },
  ];
}

export default function Home() {
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />


    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Keep Record of Your Application & CV ratings</h1>
        <h2>Review Your Cv with AI-powered Feedback</h2>
      </div>


        {resumes.length > 0 && (
            <div className="resumes-section">
                {resumes.map((resume) => (
                    <ResumeCard key={resume.id} resume={resume}/>
                ))}
            </div>
        )}
    </section>




    </main>
}
