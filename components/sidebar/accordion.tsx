'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { menuItems } from "./example-data";
import { Button as NextUIButton } from "@nextui-org/react";

export function MenuAccordion() {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium transform rotate-180",
        content: "text-small px-2",
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

    const categories = ["연령대", "시간대", "요일", "성별", "기간", "기타"];

    return (
        <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 w-full"
            itemClasses={itemClasses}
            selectionMode="multiple"
        >
            {menuItems.map((item) => {
                const itemCategories = categories.filter(category => item.options.some(option => option.category === category));

                return (
                    <AccordionItem
                        key={item.id}
                        aria-label={item.name}
                        title={
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 mr-6 dark:text-gray-50" />
                                {item.name}
                            </div>
                        }
                    >
                        <div className="flex flex-wrap">
                            {itemCategories.map(category => (
                                <div key={category} className="w-full mb-2">
                                    <h3 className="text-sm font-semibold mb-2">{category}</h3>
                                    {item.options.filter(option => option.category === category).map((option) => (
                                        <NextUIButton
                                            key={option.name}
                                            className={`m-2 ${selectedValues[item.id]?.includes(option.name) ? "dark:bg-blue-500 text-white" : "dark:bg-neutral-700 dark:text-gray-50"}`}
                                            onClick={() => handleButtonClick(item.id, option.name)}
                                        >
                                            {option.name}
                                        </NextUIButton>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
