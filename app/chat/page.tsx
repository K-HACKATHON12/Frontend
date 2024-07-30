import { Prompt } from "@/components/chat/background";
import { Chart } from "@/components/chart/chart";
import { MapModal } from "@/components/modal/modal";


export default async function Home() {

	return (
		<div className="flex flex-col mr-4 h-screen w-full">
			<div className="w-full flex">
				<Chart />
				{/* <div className="w-64 h-auto ml-5 border-1 border-gray-300 rounded-xl mb-10 mt-2">
					a
				</div> */}
				<MapModal />
			</div>
			<Prompt />
		</div>
	);
}
