"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";

const menuItems = [
  {
    name: "구 선택",
    id: "district",
    options: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
  },
  {
    name: "상권종류",
    id: "business_area",
    options: ["상권", "상권 배후지"],
  },
  {
    name: "상권",
    id: "special_area",
    options: ["관광특구", "전통시장", "발달상권", "골목상권"],
  },
];

export const Menu = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const [selectedValues, setSelectedValues] = React.useState<{ [key: string]: string[] }>({
    district: [],
    business_area: [],
    special_area: [],
  });

  const handleCheckboxChange = (id: string) => (values: string[]) => {
    setSelectedValues((prevValues) => ({ ...prevValues, [id]: values }));
  };

  return (
    <aside
      style={{
        marginTop: "60px",
        width: "335px",
        backgroundColor: "#18181B",
        padding: "10px",
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Accordion
        showDivider={false}
        className="p-2 flex flex-col gap-1 w-full"
        itemClasses={itemClasses}
        selectionMode="multiple"
      >
        {menuItems.map((item) => (
          <AccordionItem key={item.id} aria-label={item.name} title={item.name}>
            <CheckboxGroup
              value={selectedValues[item.id]}
              onChange={handleCheckboxChange(item.id)}
            >
              {item.options.map((option) => (
                <Checkbox key={option} value={option}>
                  {option}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default Menu;
