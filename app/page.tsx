import { Prompt } from "@/components/chat/background";

export default function Home() {
	return (
		<div className="flex flex-col h-screen">
			<div className="grow flex-none h-1/6 bg-gray-500 flex items-center justify-center">
				01
			</div>
			<div className="grow flex flex-none h-5/6 justify-center items-center dark:bg-stone-800 p-5">
				<div className="w-full h-full">
					<Prompt />
				</div>
			</div>
		</div>
	);
}
