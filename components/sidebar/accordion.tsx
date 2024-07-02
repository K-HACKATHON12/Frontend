'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { menuItems } from "./example-data";
import { Button as NextUIButton } from "@nextui-org/react";


export function MenuAccordion() {
    const itemClasses = {
        title: "font-normal text-medium",
        // trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium transform rotate-180",
    };

    const [selectedValues, setSelectedValues] = useState<{ [key: string]: string[] }>({
        store_info: [],
        change_indicators: [],
        cost: [],
        facility: [],
        sales: [],
        region: [],
        apartment: [],
        population: [],
        floating_population: [],
        work_population: [],
    });

    const handleButtonClick = (id: string, option: string) => {
        setSelectedValues(prevValues => {
            const currentValues = prevValues[id] || [];
            const newValues = currentValues.includes(option)
                ? currentValues.filter(value => value !== option)
                : [...currentValues, option];
            return { ...prevValues, [id]: newValues };
        });
    };
    return (
        <Accordion
            showDivider={false}
            itemClasses={itemClasses}
            // selectionMode="multiple"
            isCompact
        >
            {menuItems.map((item) => (
                <AccordionItem
                    key={item.id}
                    aria-label={item.name}
                    startContent={<FontAwesomeIcon icon={item.icon} className="w-4 h-4" />}
                    title={item.name}
                >
                    <div className="flex flex-wrap">
                        {item.options.map((option) => (
                            <NextUIButton
                                key={option}
                                className={`m-1 ${selectedValues[item.id]?.includes(option) ? "bg-blue-500 text-white" : "bg-neutral-300 text-gray-50"}`}
                                onClick={() => handleButtonClick(item.id, option)}
                                size="sm"
                            >
                                {option}
                            </NextUIButton>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
}