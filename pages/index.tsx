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
      <section className="flex min-h-screen flex-col items-conter justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>
    </Layout>
  )
}