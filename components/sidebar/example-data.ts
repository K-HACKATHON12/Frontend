
import {
  faTachometerAlt,
  faExchangeAlt,
  faWallet,
  faStore,
  faChartLine,
  faDollarSign,
  faBuilding,
  faChartBar,
  faMapMarkedAlt,
  faHome,
  faUsers,
  faWalking,
  faBriefcase,
  faCalendarAlt,
  faClock,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import "./customScrollbar.css";

export const quickAccessItems = [
  { name: "Dashboard", icon: faTachometerAlt, id: "dashboard" },
  { name: "Exchange", icon: faExchangeAlt, id: "exchange" },
  { name: "My Wallet", icon: faWallet, id: "my_wallet" },
  { name: "Tradeview", icon: faChartLine, id: "tradeview" },
];

const years = Array.from({ length: 5 }, (_, i) => ({ name: `${new Date().getFullYear() - i} 년도` }));
const quarters = ['1 분기', '2 분기', '3 분기', '4 분기'].map(name => ({ name }));

export const menuItems = [
  {
    name: "상권 정보",
    id: "commercial_area_info",
    icon: faStore,
    subcategories: [
      {
        name: "상권 구분",
        icon: faStore,
        options: ["골목상권", "전통시장"].map(name => ({ name }))
      },
      {
        name: "지역",
        icon: faMapMarkedAlt,
        options: ["자치구", "행정동"].map(name => ({ name }))
      },
      {
        name: "상권",
        icon: faMapMarkedAlt,
        options: ["상권 A", "상권 B"].map(name => ({ name })) // 상권 목록을 추가
      }
    ]
  },
  {
    name: "기간",
    id: "period",
    icon: faCalendarAlt,
    options: [...years, ...quarters]
  },
  {
    name: "점포 정보",
    id: "store_info",
    icon: faStore,
    options: [
      { name: "총 점포 수", icon: faStore },
      { name: "개업 점포 수", icon: faStore },
      { name: "폐업 점포 수", icon: faStore },
      { name: "프렌차이즈 점포 수", icon: faStore },
      { name: "유사 업종 점포 수", icon: faStore }
    ],
  },
  {
    name: "개업율 및 폐업율",
    id: "opening_closing_rate",
    icon: faChartLine,
    options: [
      { name: "개업율", icon: faChartLine },
      { name: "폐업율", icon: faChartLine }
    ],
  },
  {
    name: "운영 및 폐업 개월 평균",
    id: "operation_closing_months",
    icon: faCalendarAlt,
    options: [
      { name: "서울 운영 개월 평균", icon: faCalendarAlt },
      { name: "일반 운영 개월 평균", icon: faCalendarAlt },
      { name: "폐업 개월 평균", icon: faCalendarAlt }
    ],
  },
  {
    name: "상권 변화 지표",
    id: "change_indicators",
    icon: faChartLine,
    options: [
      { name: "다이나믹", icon: faChartLine },
      { name: "상권 확장", icon: faChartLine },
      { name: "정체", icon: faChartLine }
    ],
  },
  {
    name: "근처 집객 시설",
    id: "nearby_facilities",
    icon: faBuilding,
    options: [
      { name: "시설 A", icon: faBuilding },
      { name: "시설 B", icon: faBuilding }
    ],
  },
  {
    name: "추정 매출액 및 건수",
    id: "estimated_sales",
    icon: faDollarSign,
    subcategories: [
      {
        name: "연령대",
        icon: faUsers,
        options: ["10대", "20대", "30대", "40대", "50대", "60대 이상"].map(name => ({ name }))
      },
      {
        name: "시간대",
        icon: faClock,
        options: ["00~06시", "06~11시", "11~14시", "14~17시", "17~21시", "21~24시"].map(name => ({ name }))
      },
      {
        name: "요일",
        icon: faCalendarAlt,
        options: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"].map(name => ({ name }))
      },
      {
        name: "기간",
        icon: faCalendarAlt,
        options: ["주중", "주말", "당월"].map(name => ({ name }))
      }
    ]
  },
  {
    name: "아파트 정보",
    id: "apartment_info",
    icon: faHome,
    subcategories: [
      {
        name: "단지 정보",
        icon: faHome,
        options: ["아파트 단지 수", "아파트 평균 면적", "아파트 평균 시가"].map(name => ({ name }))
      },
      {
        name: "가격 범위",
        icon: faDollarSign,
        options: ["1억 미만", "1억", "2억", "3억", "4억", "5억", "6억 이상"].map(name => ({ name }))
      },
      {
        name: "면적 범위",
        icon: faRulerCombined,
        options: ["66제곱미터 미만", "66제곱미터", "99제곱미터", "132제곱미터", "165제곱미터"].map(name => ({ name }))
      }
    ]
  },
  {
    name: "상주 인구",
    id: "resident_population",
    icon: faUsers,
    subcategories: [
      {
        name: "총 상주 인구",
        icon: faUsers,
        options: ["총 상주 인구"].map(name => ({ name }))
      },
      {
        name: "연령대별",
        icon: faUsers,
        options: ["10대", "20대", "30대", "40대", "50대", "60대 이상"].map(name => ({ name }))
      },
      {
        name: "성별 연령대별",
        icon: faUsers,
        options: ["남성 10대", "남성 20대", "남성 30대", "남성 40대", "남성 50대", "남성 60대 이상",
                  "여성 10대", "여성 20대", "여성 30대", "여성 40대", "여성 50대", "여성 60대 이상"].map(name => ({ name }))
      },
      {
        name: "가구 수",
        icon: faUsers,
        options: ["아파트 가구 수", "비 아파트 가구 수", "총 가구 수"].map(name => ({ name }))
      }
    ]
  },
  {
    name: "유동 인구",
    id: "floating_population",
    icon: faWalking,
    subcategories: [
      {
        name: "성별",
        icon: faUsers,
        options: ["남성", "여성"].map(name => ({ name }))
      },
      {
        name: "요일별",
        icon: faCalendarAlt,
        options: ["일요일", "월요일", "화요일", 
                  "수요일", "목요일", "금요일", "토요일"].map(name => ({ name }))
      },
      {
        name: "연령대별",
        icon: faUsers,
        options: ["10대", "20대", "30대", "40대", "50대", "60대 이상"].map(name => ({ name }))
      },
      {
        name: "시간대별",
        icon: faClock,
        options: ["00~06시", "06~11시", "11~14시", "14~17시", "17~21시", "21~24시"].map(name => ({ name }))
      },
      {
        name: "총 유동 인구",
        icon: faUsers,
        options: ["총 유동 인구"].map(name => ({ name }))
      }
    ]
  },
  {
    name: "직장 인구",
    id: "working_population",
    icon: faBriefcase,
    subcategories: [
      {
        name: "성별 연령대별",
        icon: faUsers,
        options: ["남성 10대", "남성 20대", "남성 30대", "남성 40대", "남성 50대", "남성 60대 이상",
                  "여성 10대", "여성 20대", "여성 30대", "여성 40대", "여성 50대", "여성 60대 이상"].map(name => ({ name }))
      },
      {
        name: "연령대별",
        icon: faUsers,
        options: ["10대", "20대", "30대", "40대", "50대", "60대 이상"].map(name => ({ name }))
      },
      {
        name: "성별",
        icon: faUsers,
        options: ["남성", "여성"].map(name => ({ name }))
      }
    ]
  }
];
