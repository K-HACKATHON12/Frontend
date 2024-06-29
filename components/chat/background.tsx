import { Card } from "@nextui-org/react";
import { CustomInput } from "./input";
import "./customScrollbar.css";
import { ChatHistory } from "./chat-history";

export const Prompt = () => {
	return (
		<div className="w-full h-full border-1 border-gray-300 rounded-xl mb-28">
			<ChatHistory />
			<div className="flex items-center p-3 border-t border-gray-300">
				<CustomInput />
			</div>
		</div>
	);
}
