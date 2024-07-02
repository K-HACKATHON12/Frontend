import IntroduceCard from '@/components/introduce-card'
import { Button } from "@nextui-org/react";

export default function IntroducePage() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-8xl mb-5">서울 인사이터.</h1>
            <p className="mb-10 text-gray-400">소상공인들을 위한 완벽한 AI 에이전트.</p>

            <div className="flex space-x-5 mb-32">
                <IntroduceCard
                    title="커스텀 AI 챗봇"
                    subtitle="소상공인을 위한 맞춤형 AI 서비스"
                    description="서울 열린데이터 광장의 소상공인 데이터를 활용하여 맞춤형 AI 챗봇을 제공합니다. 소상공인의 요구에 맞춘 대화형 서비스를 통해 비즈니스 운영을 돕습니다."
                    link='/chat'
                    linkTitle='AI 챗봇 바로가기'
                />

                <IntroduceCard
                    title="데이터 비주얼라이제이션"
                    subtitle="소상공인 데이터를 쉽게 이해할 수 있게"
                    description="소상공인이 데이터를 쉽게 분석하고 활용할 수 있도록 서울 열린데이터 광장의 데이터를 시각화합니다. 직관적인 그래프와 차트를 통해 데이터 이해를 돕습니다."
                    link='/chat'
                    linkTitle='데이터 한눈에 보기'
                />
                <IntroduceCard
                    title="예상 손익분석"
                    subtitle="사업의 재정적 예측 지원"
                    description="사업 시작 전에 예상 손익을 분석하여 재정적 계획을 세울 수 있도록 도와줍니다. 소상공인이 현실적인 목표를 설정하고 효율적으로 운영할 수 있도록 지원합니다."
                    link='/chat'
                    linkTitle='손인분석 바로가기'
                />

                <IntroduceCard
                    title="창업 온도"
                    subtitle="창업 환경 평가"
                    description="서울 열린데이터 광장의 데이터를 기반으로 특정 지역의 창업 환경을 평가하여 소상공인들이 최적의 창업 지역을 선택할 수 있도록 돕습니다."
                    link='/chat'
                    linkTitle='창업 온도 평가하기'
                />
            </div>

            <h1 className="text-6xl mb-10">사용한 오픈소스</h1>
            <div className="flex space-x-5 mb-10">
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Nextjs
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    NextUI
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    FastAPI
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    SQLArchemy
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Docker
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    PostgreSQL
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    LlaMA
                </Button>
            </div>
            <div className="flex space-x-5">
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    dotenv
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    React Icon
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    tailwindcss
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    langchain
                </Button>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Uvicorn
                </Button>
            </div>
        </div>
    )
}