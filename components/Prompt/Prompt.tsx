"use client";

import { useState, useEffect, useRef } from "react";
import { Card, Input, Button } from "@nextui-org/react";
import "./customScrollbar.css";

export const Prompt = () => {
	const [inputValue, setInputValue] = useState("");
	const [chatHistory, setChatHistory] = useState<{ type: string, text: string }[]>([]);
	const chatContainerRef = useRef<HTMLDivElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleButtonClick = () => {
		if (inputValue.trim()) {
			setChatHistory([...chatHistory, { type: 'user', text: inputValue }]);
			setInputValue("");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleButtonClick();
		}
	};

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [chatHistory]);

	return (
		<Card className="w-full h-full shadow-lg flex flex-col px-10 pt-5 dark:bg-zinc-800 shadow-xl">
			<div className="p-5 border-b border-gray-300">
				<h2 className="m-0">GPT인듯 GPT아닌 GPT같은 프롬포트</h2>
			</div>
			<div
				ref={chatContainerRef}
				className="flex-1 overflow-y-auto p-5 custom-scrollbar"
			>
				{chatHistory.map((chat, index) => (
					<div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
						<div className={`${chat.type === 'user' ? ' dark:bg-stone-600 text-white' : 'bg-gray-300 text-black'} p-3 rounded-lg max-w-xs break-words`}>
							{chat.text}
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center p-3 border-t border-gray-300">
				<Input
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder="Enter your message"
					fullWidth
					color="default"
					size="lg"
					className="m-5"
					radius="full"
					classNames={{
						label: "text-black/50 dark:text-white/90",
						input: [
							"bg-transparent",
							"text-black/90 dark:text-white/90",
							"placeholder:text-default-700/50 dark:placeholder:text-white/60",
						],
						innerWrapper: "bg-transparent",
						inputWrapper: [
							"bg-default-200/50",
							"dark:bg-default/60",
							"backdrop-blur-xl",
							"backdrop-saturate-200",
							"hover:bg-default-200/70",
							"dark:hover:bg-default/70",
							"group-data-[focus=true]:bg-default-200/50",
							"dark:group-data-[focus=true]:bg-default/60",
							"!cursor-text",
						],
					}}
				/>
				<Button
					onClick={handleButtonClick}
					radius="full"
				>
					Send
				</Button>
			</div>
		</Card>
	);
}
