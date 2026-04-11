import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "CVmind" },
        { name: "description", content: "Your smart way to make CV!" },
    ];
}

export default function Home() {
    const { auth, kv} = usePuterStore();
    const navigate = useNavigate();
    const[resume, setResumes] = useState<Resume[]>([]);
    const[loadingResumes, setLoadingResumes] = useState(false);

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

    useEffect(() => {
        const loadResumes = async () => {
            setLoadingResumes(true);

            const resumes = (await kv.list(`resume:*`, true)) as KVItem[];

            const parsedResumes = resumes?.map((resume) => (
                JSON.parse(resume.value) as Resume
            ))

            console.log("parsedResumes", parsedResumes);
            setResumes(parsedResumes || []);
            setLoadingResumes(false);
        }
        loadResumes()
    }, []);


    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />


        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Keep Record of Your Application & CV ratings</h1>
                {!loadingResumes && resumes?.length === 0 ? (
                    <h2>No Resume Found Upload your first resume to get feedback.</h2>
                ): (
                    <h2>Review Your Cv with AI-powered Feedback</h2>
                )}
            </div>

            {loadingResumes && (
                <div className="flex flex-col item-center justify-center">
                    <img src="/images/resume-scan-2.gif" className="w-[200px]" />
                </div>
            )}

            {!loadingResumes && resumes.length > 0 && (
                <div className="resumes-section">
                    {resumes.map((resume) => (
                        <ResumeCard key={resume.id} resume={resume}/>
                    ))}
                </div>
            )}

            {!loadingResumes && resume?.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-10 gap-4">
                    <Link to="/upload" className="primary-button text-xl font-semibold">
                        Upload Resume
                    </Link>
                </div>
            )}
        </section>
    </main>
}