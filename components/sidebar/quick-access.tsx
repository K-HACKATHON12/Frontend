'use client'

import { Button } from "@nextui-org/react";
import { BsGithub, BsBuildings, BsChatLeftDots } from "react-icons/bs";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { CiUser } from "react-icons/ci";

export function QuickAccess() {
    return (
        <div className="flex flex-col border-b-1 border-gray-200">
            <div className="text-xs">
                Quick Access
            </div>
            <Listbox
                aria-label="Actions"
            // onAction={(key) => alert(key)}
            >
                <ListboxItem key="introduce" startContent={<BsBuildings />}>
                    소개
                </ListboxItem>
                <ListboxItem key="feature" startContent={<BsGithub />}>
                    Github
                </ListboxItem>
                <ListboxItem key="ai-chat" startContent={<BsChatLeftDots />}>
                    AI 채팅
                </ListboxItem>
                <ListboxItem key="auth" className="text-danger" color="danger" startContent={<CiUser />}>
                    로그인
                </ListboxItem>
            </Listbox>
        </div>
    )
}