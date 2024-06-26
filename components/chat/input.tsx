"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export function CustomInput() {
    const [inputValue, setInputValue] = useState("");
    const [chatHistory, setChatHistory] = useState<{ type: string, text: string }[]>([]);
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
    return (
        <>
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
        </>
    )
}