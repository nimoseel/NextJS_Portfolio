import Layout from "@/components/layout"
import Head from "next/head"

export default function Todo(){
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
                <Head>
                    <title>소민 포트폴리오</title>
                    <meta name="description" content="오늘도 코딩코딩"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <div className="grid grid-cols-1 pt-0 md:grid-cols-2 m-6 gap-8">
                    <p>todo list content</p>
                </div>
            </div>
        </Layout>
    )
}