import { Prompt } from "@/components/chat/background";
import { Chart } from "@/components/chart/chart";
import { MapModal } from "@/components/modal";

async function fetchData(url: string) {
	const response = await fetch(url, { cache: 'force-cache' });
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return response.json();
}

export default async function Home() {
	const expenditureData = await fetchData('http://158.180.75.20:8000/query/expenditure/total');

	return (
		<div className="flex flex-col mr-4 h-screen w-full">
			<div className="w-full flex">
				<Chart expenditureData={expenditureData} />
				{/* <div className="w-64 h-auto ml-5 border-1 border-gray-300 rounded-xl mb-10 mt-2">
					a
				</div> */}
				<MapModal />
			</div>
			<Prompt />
		</div>
	);
}
