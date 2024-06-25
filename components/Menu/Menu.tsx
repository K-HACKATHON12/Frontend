"use client";
import React, { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faExchangeAlt, faWallet, faStore, faChartLine, faDollarSign, faBuilding, faChartBar, faMapMarkedAlt, faHome, faUsers, faWalking, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Button as NextUIButton } from "@nextui-org/react";
import './customScrollbar.css';

const quickAccessItems = [
  { name: "Dashboard", icon: faTachometerAlt, id: "dashboard" },
  { name: "Exchange", icon: faExchangeAlt, id: "exchange" },
  { name: "My Wallet", icon: faWallet, id: "my_wallet" },
  { name: "Tradeview", icon: faChartLine, id: "tradeview" },
];


const menuItems = [
  {
    name: "점포 정보",
    id: "store_info",
    icon: faStore,
    options: ["점포 수", "개업 점포 수", "폐업 점포 수", "프렌차이즈 점포 수", "유사 업종 점포 수", "개업율", "폐업율"],
  },
  {
    name: "변화 지표",
    id: "change_indicators",
    icon: faChartLine,
    options: ["영업 개월 평균 (서울)", "영업 개월 평균", "상권 변화 지표명", "폐업 영업 개월 평균(서울)", "폐업 영업 개월 평균"],
  },
  {
    name: "비용",
    id: "cost",
    icon: faDollarSign,
    options: ["여가 지출", "유흥 지출", "의료비 지출", "교육 지출", "문화 지출", "지출 총금액", "식료품 지출", "의류 신발 지출", "생활 용품 지출", "교통 지출", "소득 구간", "월 평균 소득"],
  },
  {
    name: "시설",
    id: "facility",
    icon: faBuilding,
    options: ["유치원", "버스 정거장", "철도 역", "백화점", "슈퍼마켓", "고등학교", "대학교", "종합병원", "초등학교", "관공서", "은행", "극장", "공항", "버스 터미널", "집객시설", "숙박시설", "중학교", "약국", "일반 병원", "지하철 역"],
  },
  {
    name: "매출",
    id: "sales",
    icon: faChartBar,
    options: ["10대 금액", "10대 건수", "20대 금액", "20대 건수", "30대 금액", "30대 건수", "40대 금액", "40대 건수", "50대 금액", "50대 건수", "60대이상 금액", "60대이상 건수", "0~6시 금액", "0~6시 건수", "6~11시 금액", "6~11시 건수", "11~14시 금액", "11~14시 건수", "14~17시 금액", "14~17시 건수", "17~21시 금액", "17~21시 건수", "21~24시 금액", "21~24시 건수", "월요일 금액", "월요일 건수", "화요일 금액", "화요일 건수", "수요일 금액", "수요일 건수", "목요일 금액", "목요일 건수", "금요일 금액", "금요일 건수", "토요일 금액", "토요일 건수", "일요일 금액", "일요일 건수", "남성 금액", "남성 건수", "여성 금액", "여성 건수", "주중 금액", "주중 건수", "주말 금액", "주말 건수", "당월 금액", "당월 건수"],
  },
  {
    name: "지역",
    id: "region",
    icon: faMapMarkedAlt,
    options: ["자치구", "행정동", "영역 면적"],
  },
  {
    name: "아파트",
    id: "apartment",
    icon: faHome,
    options: ["아파트 단지 수", "아파트 평균 면적", "아파트 평균 시가", "아파트 1억미만 세대 수", "아파트 1억 세대 수", "아파트 2억 세대 수", "아파트 3억 세대 수", "아파트 4억 세대 수", "아파트 5억 세대 수", "아파트 6억이상 세대 수", "아파트 66제곱미터 미만 세대 수", "아파트 66제곱미터 세대 수", "아파트 99제곱미터 세대 수", "아파트 132제곱미터 세대 수", "아파트 165제곱미터 세대 수"],
  },
  {
    name: "인구",
    id: "population",
    icon: faUsers,
    options: ["총 인구 수", "10대 남성 인구 수", "20대 남성 인구 수", "30대 남성 인구 수", "40대 남성 인구 수", "50대 남성 인구 수", "60대 이상 남성 인구 수", "10대 여성 인구 수", "20대 여성 인구 수", "30대 여성 인구 수", "40대 여성 인구 수", "50대 여성 인구 수", "60대 이상 여성 인구 수", "10대 인구 수", "20대 인구 수", "30대 인구 수", "40대 인구 수", "50대 인구 수", "60대 여성 인구 수", "남성 인구 수", "여성 인구 수", "아파트 가구 수", "비 아파트 가구 수", "총 가구 수"],
  },
  {
    name: "유동 인구",
    id: "floating_population",
    icon: faWalking,
    options: ["남성 유동 인구 수", "여성 유동 인구 수", "일요일 유동 인구 수", "월요일 유동 인구 수", "화요일 유동 인구 수", "수요일 유동 인구 수", "목요일 유동 인구 수", "금요일 유동 인구 수", "토요일 유동 인구 수", "10대 유동인구 수", "20대 유동인구 수", "30대 유동인구 수", "40대 유동인구 수", "50대 유동인구 수", "60대이상 유동인구 수", "0~6시 유동인구 수", "6~11시 유동인구 수", "11~14시 유동인구 수", "14~17시 유동인구 수", "17~21시 유동인구 수", "21~24시 유동인구 수"],
  },
  {
    name: "직장",
    id: "work_population",
    icon: faBriefcase,
    options: ["총 직장인구 수", "남성 10대 직장인구 수", "남성 20대 직장인구 수", "남성 30대 직장인구 수", "남성 40대 직장인구 수", "남성 50대 직장인구 수", "남성 60대이상 직장인구 수", "여성 10대 직장인구 수", "여성 20대 직장인구 수", "여성 30대 직장인구 수", "여성 40대 직장인구 수", "여성 50대 직장인구 수", "여성 60대이상 직장인구 수", "10대 직장인구 수", "20대 직장인구 수", "30대 직장인구 수", "40대 직장인구 수", "50대 직장인구 수", "60대이상 직장인구 수", "남성 직장인구 수", "여성 직장인구 수"],
  },
];


export const Menu = () => {
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

  return (
    <aside className="w-80 dark:bg-zinc-900 p-4 h-screen overflow-y-auto custom-scrollbar">
      <h1 className="font-bold text-3xl text-black dark:text-gray-200 py-4 text-center">우리들의 강물</h1>
      <div>
        <h2 className="font-bold text-2xl m-2 text-white dark:text-gray-200 py-4">Quick Access</h2>
        <div className="flex flex-col   gap-2">
          {quickAccessItems.map((item) => (
            <div key={item.id} className="m-2 flex items-center text-white dark:text-gray-200 px-2 py-1 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
              <FontAwesomeIcon icon={item.icon} className="mr-3 p-3" />
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <h2 className="font-bold text-2xl m-2 text-white dark:text-gray-200 py-4">Service</h2>
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
                <FontAwesomeIcon icon={item.icon} className="mr-6 dark:text-gray-50 " />
                {item.name}
              </div>
            }
          >
            <div className="flex flex-wrap">
              {item.options.map((option) => (
                <NextUIButton
                  key={option}
                  className={`m-2 ${selectedValues[item.id]?.includes(option) ? "dark:bg-blue-500 text-white" : "dark:bg-neutral-700 dark:text-gray-50"}`}
                  onClick={() => handleButtonClick(item.id, option)}
                >
                  {option}
                </NextUIButton>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};
