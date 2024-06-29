import React from 'react';
import { CustomInput } from "./input";
import { ChatHistory } from "./chat-history";

export const Prompt = () => {
	return (
		<div className="w-full h-full flex flex-col border-1 border-gray-300 rounded-xl mb-28 overflow-y-auto">
			<ChatHistory />
			<CustomInput />
		</div>
	);
}
