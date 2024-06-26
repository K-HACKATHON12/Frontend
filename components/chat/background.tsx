import { Card } from "@nextui-org/react";
import { CustomInput } from "./input";
import "./customScrollbar.css";
import { ChatHistory } from "./chat-history";

export const Prompt = () => {
	return (
		<Card className="w-full h-full shadow-lg flex flex-col px-10 pt-5 dark:bg-zinc-800 shadow-xl">
			<div className="p-5 border-b border-gray-300">
				<h2 className="m-0">GPT인듯 GPT아닌 GPT같은 프롬포트</h2>
			</div>
			<ChatHistory />
			<div className="flex items-center p-3 border-t border-gray-300">
				<CustomInput />
			</div>
		</Card>
	);
}
