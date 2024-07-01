import { Prompt } from "@/components/chat/background";
import { Chart } from "@/components/chart/chart";
export default function Home() {
	return (
		<div className="h-full flex flex-col flex-grow">
			<Chart />
			<Prompt />
		</div>
	);
}
