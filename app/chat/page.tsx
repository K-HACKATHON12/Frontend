import { Prompt } from "@/components/chat/background";
import { Chart } from "@/components/chart/chart";

async function fetchData(url: string) {
    const response = await fetch(url, { cache: 'force-cache' });
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return response.json();
}

export default async function Home() {
	const expenditureData = await fetchData('http://localhost:8000/query/expenditure/total');

	return (
		<div className="flex flex-col mr-4 h-screen w-full">
			<Chart expenditureData={expenditureData} />
			<Prompt />
		</div>
	);
}
