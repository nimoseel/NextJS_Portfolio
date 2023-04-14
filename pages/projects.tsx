import Layout from "@/components/layout"
import Head from "next/head"
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";
import { ResultType } from "@/Type";

interface ProjectType {
    projects: {
        results: ResultType[];
    };
}


export default function Projects({projects}:ProjectType){
    console.log(projects)
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
                <Head>
                    <title>소민 포트폴리오</title>
                    <meta name="description" content="오늘도 코딩코딩"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <div className="grid grid-cols-1 pt-0 md:grid-cols-2 py-10 m-6 gap-8">
                    {projects.results.map((aProject: ResultType)=>(
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// 빌드될 때 호출
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Notion-Version': '2022-02-22',
            'content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({page_size: 100})
        // 100페이지 까지 가져오라는 뜻
    };

    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await response.json();

    return {
      props: {projects}, // will be passed to the page component as props
    }
}