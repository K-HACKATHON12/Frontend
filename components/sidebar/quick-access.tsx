'use client'

import { BsGithub, BsBuildings, BsChatLeftDots } from "react-icons/bs";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { CiUser } from "react-icons/ci";

export function QuickAccess() {
    return (
        <div className="flex flex-col border-b-1 border-gray-200">
            <div className="text-xs">
                빠른 이동
            </div>
            <Listbox
                aria-label="Actions"
            // onAction={(key) => alert(key)}
            >
                <ListboxItem
                    key="introduce"
                    startContent={<BsBuildings />}
                    href="/introduce">
                    소개
                </ListboxItem>
                <ListboxItem
                    key="feature"
                    startContent={<BsGithub />}
                    href="https://github.com/orgs/K-HACKATHON12/repositories"
                    target="_black">
                    Github
                </ListboxItem>
                <ListboxItem
                    key="ai-chat"
                    startContent={<BsChatLeftDots />}
                    href="/">
                    AI 채팅
                </ListboxItem>
                <ListboxItem
                    key="auth"
                    className="text-danger"
                    color="danger"
                    startContent={<CiUser />}
                    href="/">
                    로그인
                </ListboxItem>
            </Listbox>
        </div>
    )
}