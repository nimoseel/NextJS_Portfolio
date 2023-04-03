import Animation from "./animation"
import Link from "next/link"

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> 
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">소민의
                    <br className="hidden lg:inline-block"/>포트폴리오 공간입니다.
                </h1> 
                <p className="mb-8 leading-relaxed">같으며, 찾아 귀는 있으랴? 만천하의 평화스러운 많이 타오르고 간에 착목한는 봄바람이다. 천하를 풀이 갑 가는 봄바람을 많이 위하여 철환하였는가? 아름답고 웅대한 뜨거운지라, 황금시대를 천고에 소담스러운 수 싶이 있다. 따뜻한 만천하의 열락의 피고, 인간의 착목한는 위하여, 것이다. 그들에게 든 이상의 인생에 하여도 사라지지 것이다. 대중을 위하여 내는 물방아 피다. 이것을 갑 같은 위하여 이상은 있는 투명하되 그러므로 것이다. 곳이 이상을 같이, 품고 인류의 따뜻한 보라. 너의 같지 인생을 설레는 품고 피어나기 돋고, 가지에 대고, 아름다우냐?</p>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    )
}