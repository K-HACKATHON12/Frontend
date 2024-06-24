"use client";

import { useState, useEffect, useRef } from "react";
import { Card, Input, Button } from "@nextui-org/react";

export default function Home() {
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

	return (<div>
		<div style={{ display: 'flex', height: '100vh' }}>

			<div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
				<Card style={{ width: "400px", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
					<div style={{ padding: '20px', borderBottom: '1px solid #e0e0e0' }}>
						<h2 style={{ margin: 0 }}>Chat with GPT</h2>
					</div>
					<div
						ref={chatContainerRef}
						style={{ height: "400px", overflowY: "auto", padding: '20px' }}
					>
						{chatHistory.map((chat, index) => (
							<div key={index} style={{ display: 'flex', justifyContent: chat.type === 'user' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
								<div style={{
									backgroundColor: chat.type === 'user' ? '#0070f3' : '#e0e0e0',
									color: chat.type === 'user' ? '#fff' : '#000',
									padding: '10px 15px',
									borderRadius: '20px',
									maxWidth: '80%',
									wordWrap: 'break-word'
								}}>
									{chat.text}
								</div>
							</div>
						))}
					</div>
					<div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', borderTop: '1px solid #e0e0e0' }}>
						<Input
							value={inputValue}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							placeholder="Enter your message"
							fullWidth
							style={{ marginRight: '10px' }}
						/>
						<Button onClick={handleButtonClick} >
							Send
						</Button>
					</div>
				</Card>
			</div>
		</div>
	</div>
	);
}
