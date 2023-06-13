import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '@/components/home/hero';
import { useState, useEffect } from 'react';

export default function Home(){
    const [showPopup, setShowPopup] = useState(true);
    
    const handleCookie = {
      setCookie: function (name: string, val: string, exp: number) {
        const maxAge = exp * 24 * 60 * 60 ;
        document.cookie = `${name}=${val};max-age=${maxAge};path=/`;
      },
      getCookie: function (name: string) {
        const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return value ? value[2] : null;
      }
    };
  
    useEffect(() => {
      console.log(handleCookie.getCookie('today'));
      
      if (handleCookie.getCookie('today') === 'y') {
        setShowPopup(false);
      }
    }, []);
  
    const handleTodayClose = () => {
      handleCookie.setCookie('today', 'y', 1);
      setShowPopup(false);
    };
  
    const handleClose = () => {
      setShowPopup(false);
    };

  
  return(
    <Layout>
      <Head>
        <title>이소민 포트폴리오</title>
        <meta name='description' content='오늘도 코딩코딩'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <section className='flex min-h-screen flex-col items-center justify-center text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <Hero/>
        </div>

        <div className={`main_popup ${showPopup ? 'on' : ''}`}>
          <div className='layer_cont'>
            <div className='flex w-64 h-64 justify-center	items-center'>
              <img className='w-full h-full object-cover' src='./popup.png' alt='' />
            </div>

            <div className='btn_wrap flex place-content-between px-2'>
              
              {/* <!-- 오늘 하루 보지 않기 ---> */}
              <button className='btn_today_close' onClick={handleTodayClose}>
                <form name='frm' className='flex items-center' >
                  <label className='mr-1' htmlFor='checkAgree'>
                    오늘 하루 열지 않음
                  </label>
                  <input className='' type='checkbox' name='isAgree' id='checkAgree' value='' />
                </form>
              </button>

              {/* <!-- 그냥 닫기 ---> */}
              <button className='btn_close' onClick={handleClose}>
                닫기 X
              </button>
            </div>

          </div>
        </div>


      </section>
    </Layout>
  )
}