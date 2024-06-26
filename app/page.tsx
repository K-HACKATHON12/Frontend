"use client";

import { Prompt } from "@/components/Prompt/Prompt";

export default function Home() {
	return (
		<div className="flex flex-row h-screen">
			<div className="grow flex-none w-4/6 bg-gray-500 flex items-center justify-center">
				01
			</div>
			<div className="grow flex flex-none w-2/6 justify-center items-center dark:bg-stone-800 p-5">
				<div className="w-full h-full pb-20">
					<Prompt />
				</div>
			</div>
		</div>
	);
}
