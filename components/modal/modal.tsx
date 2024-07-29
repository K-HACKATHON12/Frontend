'use client';

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MapComponent } from "./map";

export function MapModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button isIconOnly onPress={onOpen} className="w-64 h-auto ml-5 mb-10 mt-2 bg-black text-white shadow-lg text-9xl">
                <FaMapMarkedAlt />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">지역을 선택해 주세요</ModalHeader>
                            <ModalBody>
                                <MapComponent />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    닫기
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
