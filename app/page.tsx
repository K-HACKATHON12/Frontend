"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Textarea } from "@nextui-org/react";

export default function Home() {
	const [inputValue, setInputValue] = useState("");
	const [chatHistory, setChatHistory] = useState<string[]>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleButtonClick = () => {
		if (inputValue.trim()) {
			setChatHistory([...chatHistory, inputValue]);
			setInputValue("");
		}
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Card style={{ width: "400px" }}>
				<CardHeader>
					<h2>Chat</h2>
				</CardHeader>
				<CardBody style={{ height: "200px", overflowY: "auto" }}>
					<Textarea
						readOnly
						value={chatHistory.join("\n")}
						style={{ width: "100%", height: "100%" }}
					/>
				</CardBody>
				<CardFooter style={{ display: 'flex', alignItems: 'center' }}>
					<Input
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Enter your prompt"
						fullWidth
					/>
					<Button onClick={handleButtonClick} >
						Submit
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
