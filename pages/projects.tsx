import Layout from '@/components/layout';
import { TOKEN, DATABASE_ID } from '@/config';
import ProjectItem from '@/components/projects/project-item';
import { ResultType } from '@/Type';

interface ProjectType {
    projects: {
        results: ResultType[];
    };
}

export default function Projects({projects}:ProjectType){
    return (
        <Layout>
            <div className='flex flex-col items-center justify-center min-h-screen mb-10 px-6'>
                <div className='grid grid-cols-1 pt-0 md:grid-cols-2 m-6 gap-8'>
                    {projects.results.map((aProject: ResultType)=>(
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

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
    };

    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await response.json();

    return {
        props: {projects},
        revalidate: 1 
    }
}