import { Prompt } from "@/components/chat/background";
import { Chart } from "@/components/chart/chart";
export default function Home() {
	return (
		<div className="flex flex-col mr-4 h-screen">
			<Chart />
			<Prompt />
		</div>
	);
}
