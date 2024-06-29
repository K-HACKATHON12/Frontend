"use client";

import useChatStore from '../../app/stores/chatStore';
import { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";

export function CustomInput() {
    const [inputValue, setInputValue] = useState("");
    const addMessage = useChatStore((state) => state.addMessage);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue.trim()) {
            addMessage({ type: 'user', text: inputValue });
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleButtonClick();
        }
    };


    return (
        <div className="flex items-center p-3 border-t border-gray-300">
            <Textarea
                value={inputValue}
                onChange={handleInputChange as unknown as React.ChangeEventHandler<HTMLInputElement>}
                onKeyDown={handleKeyDown as unknown as React.KeyboardEventHandler<HTMLInputElement>}
                placeholder="Enter your message"
                fullWidth
                color="default"
                size="lg"
                minRows={1}
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