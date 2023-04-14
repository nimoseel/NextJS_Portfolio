import Head from 'next/head'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'

export default function Home(){
  return(
    <Layout>
      <Head>
        <title>이소민 포트폴리오</title>
        <meta name="description" content="오늘도 코딩코딩"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className="flex h-[calc(100vh-156px)] flex-col items-conter justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center py-20">
          <Hero/>
        </div>
      </section>
    </Layout>
  )
}