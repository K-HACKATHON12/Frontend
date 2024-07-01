import React from 'react';
import { CustomInput } from "./input";
import { ChatHistory } from "./chat-history";

export const Prompt = () => {
	return (
		<div className="grow border-1 border-gray-300 rounded-xl">
			<ChatHistory />
			<CustomInput />
		</div>
	);
}
