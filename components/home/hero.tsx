import Animation from './animation';
import Link from 'next/link';

export default function Hero(){
    return (
        <>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-20'> 
                <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 inline-block'>
                    즐겁게 꾸준하게 !<br/>안녕하세요, 이소민입니다.
                </h1> 
                <p className='mb-8 leading-relaxed'>
                    '정원을 가꾸고 싶으면 몸을 구부리고 흙을 만져야 한다. 정원을 가꾸는 일은 생각이 아니라 몸으로 하는 일이다.' , 최근 읽은 책에 나온 구절입니다. 프로그래밍을 공부하며 머리로 이해하는 것과 그것을 사용해보는 것은 별개라는 것을 느꼈습니다. 그런 점에서 이 곳은 정원까진 아니더라도 흙을 만지는 놀이터 정도는 되겠습니다. 경험은 휘발되는 것이 아니라 쌓이는 것이라고 하지요. 느리더라도 튼튼한 뿌리를 내리겠다는 마음으로 공부하고 있습니다.
                </p>
                <div className='flex justify-center'>
                    <Link href='/projects' legacyBehavior>
                        <a className='btn-styled text-lg'>
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10'>
                <Animation/>
            </div>
        </>
    )
}