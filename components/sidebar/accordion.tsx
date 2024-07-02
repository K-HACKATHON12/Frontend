'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { menuItems } from "./example-data";
import { Button as NextUIButton } from "@nextui-org/react";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export function MenuAccordion() {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium transform rotate-180",
        content: "text-small px-2",
    };

    const [selectedValues, setSelectedValues] = useState<{ [key: string]: string[] }>({
        commercial_area_info: [],
        period: [],
        store_info: [],
        opening_closing_rate: [],
        operation_closing_months: [],
        change_indicators: [],
        nearby_facilities: [],
        estimated_sales: [],
        apartment_info: [],
        resident_population: [],
        floating_population: [],
        working_population: [],
    });

    const [exclusiveSelection, setExclusiveSelection] = useState<{ [key: string]: string | null }>({
        resident_population: null,
        floating_population: null,
        working_population: null,
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

    const handleExclusiveButtonClick = (id: string, option: string) => {
        setExclusiveSelection(prevSelection => ({
            ...prevSelection,
            [id]: prevSelection[id] === option ? null : option
        }));
    };

    const isIconOption = (option: any): option is { name: string; icon: IconDefinition } => {
        return option.icon !== undefined;
    };

    return (
        <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 w-full"
            itemClasses={itemClasses}
            selectionMode="multiple"
        >
            {menuItems.map((item) => (
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
                        {item.options && item.options.map((option) => (
                            <NextUIButton
                                key={option.name}
                                className={`m-2 ${selectedValues[item.id]?.includes(option.name) ? "bg-blue-500 text-white" : "dark:bg-neutral-700 dark:text-gray-50"}`}
                                onClick={() => handleButtonClick(item.id, option.name)}
                            >
                                {isIconOption(option) && <FontAwesomeIcon icon={option.icon} className="mr-2" />}
                                {option.name}
                            </NextUIButton>
                        ))}
                        {item.subcategories && item.subcategories.map((subcategory) => (
                            <div key={subcategory.name} className="w-full mb-2">
                                <h3 className="text-sm font-semibold mb-2">{subcategory.name}</h3>
                                {subcategory.options && subcategory.options.map((option) => (
                                    <NextUIButton
                                        key={option.name}
                                        className={`m-2 ${exclusiveSelection[item.id] === option.name ? "bg-blue-500 text-white" : "dark:bg-neutral-700 dark:text-gray-50"}`}
                                        onClick={() => handleExclusiveButtonClick(item.id, option.name)}
                                    >
                                        {isIconOption(option) && <FontAwesomeIcon icon={option.icon} className="mr-2" />}
                                        {option.name}
                                    </NextUIButton>
                                ))}
                            </div>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
