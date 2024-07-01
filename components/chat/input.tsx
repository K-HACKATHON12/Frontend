"use client";

import useChatStore from '../../app/stores/chatStore';
import { useState } from "react";
import { Chip, Textarea, Button, Switch } from "@nextui-org/react";

export function CustomInput() {
    const [inputValue, setInputValue] = useState("");
    const addMessage = useChatStore((state) => state.addMessage);
    const isGPTEnabled = useChatStore((state) => state.isGPTEnabled);
    const setGPTEnabled = useChatStore((state) => state.setGPTEnabled);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = async () => {
        if (inputValue.trim()) {
            addMessage({ type: 'user', text: inputValue });
            setInputValue("");

            if (isGPTEnabled) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/v1/example/query/?query=${encodeURIComponent(inputValue)}`);
                    const data = await response.json();
                    addMessage({ type: 'gpt', text: data.response });
                } catch (error) {
                    console.error("Failed to fetch from FastAPI server:", error);
                }
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleButtonClick();
        }
    };

    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGPTEnabled(e.target.checked); // GPT 사용 여부를 업데이트
    };

    return (
        <div className="flex items-center p-3 border-t border-gray-300">
            <Chip
                className="mx-2 h-14"
                size="lg"
                radius="lg"
                variant="flat"
                endContent={
                    <Switch
                        checked={isGPTEnabled}
                        onChange={handleSwitchChange}
                        size="sm"
                        color="primary"
                    />
                }
            >
                Use GPT💡
            </Chip>
            <Textarea
                value={inputValue}
                onChange={handleInputChange as unknown as React.ChangeEventHandler<HTMLInputElement>}
                onKeyDown={handleKeyDown as unknown as React.KeyboardEventHandler<HTMLInputElement>}
                placeholder="Enter your message"
                fullWidth
                color="default"
                size="lg"
                minRows={2}
                className="m-2"
                radius="full"
            />
            <Button
                onClick={handleButtonClick}
                radius="full"
                className="ml-2"
            >
                Send
            </Button>
        </div>
    );
}