import IntroduceCard from '@/components/introduce-card'
import { Button } from "@nextui-org/react";

export default function IntroducePage() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-8xl mb-5">Seoul Insighter.</h1>
            <p className="mb-10 text-gray-400">소상공인들을 위한 완벽한 AI 에이전트.</p>

            <div className="flex space-x-5 mb-32">
                <IntroduceCard />
                <IntroduceCard />
                <IntroduceCard />
                <IntroduceCard />
            </div>

            <h1 className="text-6xl mb-10">Used Open Source</h1>
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