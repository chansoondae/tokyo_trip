import { notFound } from "next/navigation";
import { DayHeader } from "@/components/day/DayHeader";
import { TransportBadge } from "@/components/day/TransportBadge";
import { TimelineItem } from "@/components/day/TimelineItem";
import { MealInfo } from "@/components/day/MealInfo";
import { HotelCard } from "@/components/day/HotelCard";

const dayData: Record<number, {
  dayNumber: number;
  date: string;
  weekday: string;
  region: string;
  transport: string;
  summary: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  accommodation: string;
  hotelMapsUrl: string;
  spots: {
    time: string;
    name: string;
    description: string;
    address?: string;
    imagePath: string;
    mapsUrl?: string;
  }[];
}> = {
  1: {
    dayNumber: 1,
    date: "4월 25일",
    weekday: "토요일",
    region: "도쿄",
    transport: "OZ1085 08:40 → 10:45",
    summary: "하네다 도착 → 국립서양미술관 → 솜포 미술관 → 국립신미술관",
    breakfast: "불포함",
    lunch: "현지식",
    dinner: "현지식",
    accommodation: "도쿄 프린스 호텔",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
    spots: [
      {
        time: "10:45",
        name: "하네다공항 도착 (아시아나 OZ1085)",
        description: "✈️ 아시아나 OZ1085 (김포 08:40 → 하네다 10:45) 도착\n✈️ 대한항공 KE2101 (김포 09:00 → 하네다 11:20) 도착\n\n아시아나 팀은 입국 후 짐을 가지고 바로 전용차량으로 도쿄 프린스 호텔로 이동합니다.\n\n🚗 대한항공 팀 (@하루의위로님+지인 @바람의서님 @방울토마토님): 별도 픽업 차량으로 공항에서 호텔로 이동 예정. 인솔자가 공항에서 따로 안내해 드립니다. 호텔에서 합류합니다.",
        address: "羽田空港, Tokyo",
        imagePath: "/images/spot-1-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=羽田空港",
      },
      {
        time: "13:00",
        name: "도쿄 프린스 호텔 (짐 보관 & 집결)",
        description: "호텔에 짐을 맡기고 전체 합류합니다.\n\n· 아시아나 팀 + 대한항공 팀: 호텔에서 만나 짐 보관\n· 호텔 지하 로손 편의점 이용 가능\n· 호텔 앞 도쿄타워를 보며 대기\n\n🚆 나리타 입국 팀 (@이제님): 나리타공항 → 스카이라이너 → 우에노역 이동 후 국립서양미술관에서 합류. 짐은 우에노역 또는 미술관 근처에 보관. 이후 전용차량에 짐 싣고 함께 이동합니다.",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-1-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "13:30",
        name: "국립서양미술관",
        description: "르 코르뷔지에가 설계한 유네스코 세계문화유산 건물로, 로댕의 조각품과 다양한 서양 미술 작품을 소장하고 있습니다.\n\n🎨 특별전 · 가쓰시카 호쿠사이: 이우치 컬렉션으로 보는 '후지산 서른여섯 경'\n(2026.3.28 ~ 6.14)\n\n『붉은 후지(개풍쾌청)』와 『가나가와 해변의 높은 파도 아래』를 포함한 '후지산 서른여섯 경' 시리즈 전편을 감상할 수 있습니다. 인상파 화가들에게 어떤 영감을 주었는지 탐구하는 기획이 포함되어 있어 관내 서양화 작품들과 비교하며 관람하기 좋습니다. 같은 기간 리투아니아 거장 'M.K. 츄를료니스' 특별전도 함께 개최 중입니다.",
        address: "7-7 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/spot-1-3.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7-7+Uenokoen,+Taito+City,+Tokyo+110-0007",
      },
      {
        time: "점심",
        name: "Cafe Suiren",
        description: "국립서양미술관 내 카페 수이렌에서 점심 식사를 즐깁니다.",
        address: "7-7 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/spot-1-4.jpg",
        mapsUrl: "https://maps.app.goo.gl/yZW3sFq1cfS66Tmp8",
      },
      {
        time: "15:30",
        name: "솜포 미술관",
        description: "개관 50주년을 기념하여 인상주의의 선구자와 고흐의 작품을 집중 조명하고 있습니다.\n\n🎨 특별전 · 외젠 부댕 (Eugène Boudin)\n(2026.4.11 ~ 6.21)\n\n'외광파의 거장'이자 클로드 모네의 스승으로 알려진 외젠 부댕의 일본 약 30년 만의 대규모 회고전. 프랑스 노르망디의 해변과 하늘을 담은 유화·파스텔화 약 100점이 전시됩니다. 찰나의 빛을 포착한 그의 화풍이 인상주의 탄생에 어떤 영향을 미쳤는지 확인할 수 있습니다.\n\n🌻 상설 전시 · 반 고흐 <해바라기>\n아시아에서 유일하게 직접 볼 수 있는 고흐의 해바라기 연작 중 하나입니다. 특별전 티켓 구매 시 상설 전시실에서 함께 관람 가능하며, 우크라이나 인도적 지원 활동과 연계된 전시 연출이 더해져 더욱 뜻깊은 관람이 가능합니다.",
        address: "1 Chome-26-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023",
        imagePath: "/images/spot-1-5.jpg",
        mapsUrl: "https://maps.app.goo.gl/o9QZba5NUw8gpxsb8",
      },
      {
        time: "18:00",
        name: "국립신미술관",
        description: "롯폰기에 위치한 국립신미술관을 관람합니다. 웅장한 유리 외관이 인상적인 현대 미술관으로, 다양한 기획전시를 선보입니다.",
        address: "7 Chome-22-2 Roppongi, Minato City, Tokyo 106-8558",
        imagePath: "/images/spot-1-6.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7+Chome-22-2+Roppongi,+Minato+City,+Tokyo+106-8558",
      },
      {
        time: "저녁",
        name: "Brasserie Paul Bocuse Le Musée",
        description: "국립신미술관 3층에 위치한 프렌치 레스토랑에서 저녁 식사를 즐깁니다.\n\n🍽️ 메뉴 베르 (Menu Vert) · 7,040엔\n전채 + 메인 + 디저트 + 커피로 구성된 디너 프리픽스 코스입니다.\n\n· 전채: 제철 채소 테린 또는 훈제 연어 타르타르 (봄철 아스파라거스·완두콩 곁들임)\n· 메인(택 1): 도미 구이 (봄 양배추·화이트 와인 소스) / 돼지 등심 또는 닭고기 (크림 또는 모렐 버섯 소스)\n· 디저트: 바닐라 크렘 브륄레 또는 봄 한정 딸기 앙상블\n· 식후 커피 또는 차 포함",
        address: "7 Chome-22-2 Roppongi, Minato City, Tokyo 106-8558",
        imagePath: "/images/spot-1-7.jpg",
        mapsUrl: "https://maps.app.goo.gl/R3xsPM6zVkMqEYCf6",
      },
      {
        time: "20:00",
        name: "도쿄 프린스 호텔 귀환",
        description: "호텔로 복귀합니다.",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-1-8.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
    ],
  },
  2: {
    dayNumber: 2,
    date: "4월 26일",
    weekday: "일요일",
    region: "후지 / 도쿄 후지 미술관",
    transport: "🚌 전용차량 이동",
    summary: "후지 모토스코 리조트 → 도쿄 후지 미술관 → 샤부젠 롯폰기",
    breakfast: "호텔식",
    lunch: "후지 모토스코 리조트",
    dinner: "샤부젠 롯폰기",
    accommodation: "도쿄 프린스 호텔",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
    spots: [
      {
        time: "08:00",
        name: "도쿄 프린스 호텔 출발",
        description: "전용차량으로 후지 모토스코 리조트를 향해 출발합니다. 총 18명 (짐 없이).",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-2-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "10:00",
        name: "후지 모토스코 리조트 · 시바자쿠라 축제",
        description: "🌸 후지 시바자쿠라 축제 (2026.4.18 ~ 5.31)\n운영: 08:00 ~ 16:00\n\n약 50만 송이의 시바자쿠라(잔디벚꽃)가 후지산을 배경으로 펼쳐지는 간토 최대 규모의 봄 축제입니다.\n\n· 후지산 & 핑크 카펫: 분홍·흰·보라색 시바자쿠라가 후지산 모양으로 심어진 메인 포토존. 맑은 날엔 눈 덮인 후지산과 꽃밭이 한 프레임에 담깁니다.\n· 피터 래빗™ 잉글리시 가든: 영국식 정원과 봄꽃, 피터 래빗 테마 카페 & 굿즈 숍.\n· 음식 축제: 코슈 고기 우동, 후지산 모양 어묵 & 디저트 등 현지 먹거리.",
        address: "212 Motosu, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0337",
        imagePath: "/images/spot-2-2.jpg",
        mapsUrl: "https://maps.app.goo.gl/AafLgc2YuTRuAfPE7",
      },
      {
        time: "13:00",
        name: "후지 모토스코 → 도쿄 후지 미술관 이동",
        description: "전용차량으로 하치오지의 도쿄 후지 미술관으로 이동합니다.",
        imagePath: "/images/spot-2-3.jpg",
      },
      {
        time: "14:00",
        name: "도쿄 후지 미술관",
        description: "하치오지에 위치한 도쿄 후지 미술관을 관람합니다. 서양 근대미술부터 일본 회화까지 폭넓은 컬렉션을 자랑합니다.\n\n🎨 특별전 · 우키요에의 부활 — 메이지 개화기 그림부터 신판화까지\n(2026.4.12 ~ 6.21)\n\n에도 우키요에가 메이지 문명개화를 거쳐 '신판화(Shin-hanga)'로 거듭나는 과정을 보여주는 전시입니다. 서구 기법과 일본 전통 판화의 정교함이 결합된 작품들을 감상할 수 있습니다.\n\n🖼️ 상설 특별 전시 · 타볼라 도리아 (Tavola Doria)\n레오나르도 다 빈치의 잃어버린 걸작 '앙기아리 전투'의 수수께끼를 담은 희귀 회화를 특별 공개합니다.\n\n🖼️ 상설전 · 서양 회화 500년\n르네상스부터 20세기까지 바로크, 로코코, 인상주의를 거쳐 현대 미술에 이르는 서양 미술의 흐름을 한자리에서 감상합니다.",
        address: "492-1 Yanomachi, Hachioji, Tokyo 192-0016",
        imagePath: "/images/spot-2-4.jpg",
        mapsUrl: "https://maps.app.goo.gl/7Du6J8sQpyuF7GGy6",
      },
      {
        time: "16:00",
        name: "도쿄 후지 미술관 → 도쿄 이동",
        description: "전용차량으로 도쿄 시내로 복귀합니다.",
        imagePath: "/images/spot-2-5.jpg",
      },
      {
        time: "18:00",
        name: "샤부젠 롯폰기 (저녁)",
        description: "롯폰기의 샤부젠에서 저녁 식사를 즐깁니다.",
        address: "〒106-0032 Tokyo, Minato City, Roppongi, 3 Chome-16-33 B1",
        imagePath: "/images/spot-2-6.jpg",
        mapsUrl: "https://maps.app.goo.gl/8M3KW9GTBnXiL7rLA",
      },
    ],
  },
  3: {
    dayNumber: 3,
    date: "4월 27일",
    weekday: "월요일",
    region: "하코네 / 시즈오카",
    transport: "🚌 전용차량 이동",
    summary: "하코네 폴라 미술관 → 베르나르 뷔페 미술관 → 도쿄 복귀",
    breakfast: "호텔식",
    lunch: "폴라 미술관 내 식당",
    dinner: "토리키조쿠 (닭꼬치)",
    accommodation: "도쿄 프린스 호텔",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
    spots: [
      {
        time: "08:00",
        name: "도쿄 프린스 호텔 출발",
        description: "전용차량으로 하코네를 향해 출발합니다. 총 18명 (짐 없이).",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-3-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "10:00",
        name: "하코네 폴라 미술관",
        description: "하코네 숲 속에 자리한 폴라 미술관은 모네, 르누아르, 피카소 등 인상파부터 현대미술까지 약 9,500점의 작품을 소장하고 있습니다. 자연과 예술이 어우러진 아름다운 공간입니다.",
        address: "〒250-0631 Kanagawa, Ashigarashimo District, Hakone, Sengokuhara, 小塚山１２８５",
        imagePath: "/images/spot-3-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pola+Museum+of+Art+Hakone+Sengokuhara",
      },
      {
        time: "13:00",
        name: "폴라 미술관 → 베르나르 뷔페 미술관 이동",
        description: "전용차량으로 시즈오카현의 베르나르 뷔페 미술관으로 이동합니다.",
        imagePath: "/images/spot-3-3.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=515-57+Higashino,+Nagaizumi,+Sunto+District,+Shizuoka+411-0931",
      },
      {
        time: "14:00",
        name: "베르나르 뷔페 미술관",
        description: "프랑스 화가 베르나르 뷔페의 작품을 전문으로 소장한 미술관입니다. 독특한 선묘와 강렬한 색채가 특징인 뷔페의 작품 세계를 감상합니다.",
        address: "515-57 Higashino, Nagaizumi, Sunto District, Shizuoka 411-0931",
        imagePath: "/images/spot-3-4.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=515-57+Higashino,+Nagaizumi,+Sunto+District,+Shizuoka+411-0931",
      },
      {
        time: "16:00",
        name: "베르나르 뷔페 미술관 → 도쿄 이동",
        description: "전용차량으로 도쿄로 복귀합니다.",
        imagePath: "/images/spot-3-5.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "18:00",
        name: "도쿄 프린스 호텔 도착",
        description: "호텔로 복귀합니다.",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-3-6.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "저녁",
        name: "토리키조쿠 (鳥貴族)",
        description: "일본 전국 체인의 인기 야키토리(닭꼬치) 전문점입니다. 모든 메뉴가 균일가로 제공되며, 신선한 닭꼬치와 생맥주를 즐길 수 있습니다.",
        imagePath: "/images/spot-3-7.jpg",
        mapsUrl: "https://maps.app.goo.gl/uinEFKyeHhxXmzDM7",
      },
    ],
  },
  4: {
    dayNumber: 4,
    date: "4월 28일",
    weekday: "화요일",
    region: "도쿄 / 귀국",
    transport: "OZ 하네다 → 김포",
    summary: "도쿄도 미술관 → 아티존 미술관 → 하네다 귀국",
    breakfast: "호텔식",
    lunch: "미술관 내 식당",
    dinner: "기내식",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        time: "09:00",
        name: "도쿄 프린스 호텔 출발",
        description: "전용차량으로 도쿄도 미술관으로 출발합니다. 총 18명 (짐 없이).",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-4-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "09:30",
        name: "도쿄도 미술관",
        description: "우에노 공원 내에 위치한 도쿄도 미술관을 관람합니다. 개관 100주년 기념 특별전 오픈 당일 방문합니다.\n\n🎨 특별전 · 앤드류 와이어스: 경계 또는 창\n(2026.4.28 ~ 7.5) · 기획전시실\n\n미국 사실주의 거장 앤드류 와이어스(1917~2009) 타계 후 일본 최초 대규모 회고전입니다.\n\n· 핵심 테마: 창문·문·문턱 등의 모티프를 통해 안과 밖, 삶과 죽음, 화가의 내면과 외부 세계를 탐구\n· 일본 최초 공개작: <겨울 들판(1942)>, <냉각 오두막(1953)> 등 휘트니·필라델피아 미술관 소장 걸작 10여 점\n· 달걀 노른자를 사용하는 중세 전통 템페라 기법으로 그린 고독하고 서정적인 풍경화의 정수",
        address: "8-36 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/spot-4-2.jpg",
        mapsUrl: "https://maps.app.goo.gl/eGVQ4mZYER1mi7E6A",
      },
      {
        time: "13:00",
        name: "도쿄도 미술관 → 아티존 미술관 이동",
        description: "전용차량으로 교바시의 아티존 미술관으로 이동합니다.",
        imagePath: "/images/spot-4-3.jpg",
      },
      {
        time: "13:30",
        name: "아티존 미술관",
        description: "브리지스톤 재단이 운영하는 아티존 미술관을 관람합니다.\n\n🎨 특별전 · 클로드 모네: 자연에 대한 의문\n(2026.2.7 ~ 5.24) · 5·6층 갤러리\n\n모네 서거 100주년을 기념해 프랑스 오르세 미술관과 공동 기획한 대규모 특별전으로, 약 140여 점이 전시됩니다. 오르세 소장 모네 유화 41점 포함.\n\n· 아르장퇴유·베퇴유·지베르니 등 시기별 대표작 총망라\n· 모네에게 영향을 준 우키요에 판화·아르누보 오브제 함께 전시\n· 모네의 광학적 세계관을 현대적으로 풀이한 몰입형 영상 설치 미술",
        address: "1 Chome-7-2 Kyobashi, Chuo City, Tokyo 104-0031",
        imagePath: "/images/spot-4-4.jpg",
        mapsUrl: "https://maps.app.goo.gl/eGVQ4mZYER1mi7E6A",
      },
      {
        time: "16:00",
        name: "아티존 미술관 → 도쿄 프린스 호텔",
        description: "전용차량으로 호텔로 복귀합니다.",
        imagePath: "/images/spot-4-5.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=3+Chome-3-1+Shibakoen,+Minato+City,+Tokyo+105-8560",
      },
      {
        time: "16:30",
        name: "도쿄 프린스 호텔 → 하네다공항",
        description: "짐을 가지고 전용차량으로 하네다공항으로 출발합니다. 총 14명 (짐 있음).",
        address: "3 Chome-3-1 Shibakoen, Minato City, Tokyo 105-8560",
        imagePath: "/images/spot-4-6.jpg",
      },
      {
        time: "17:00",
        name: "하네다공항 도착 & 귀국",
        description: "하네다공항에 도착하여 출국 수속을 진행합니다. 3박 4일의 도쿄 아트 투어를 마칩니다.",
        address: "羽田空港, Tokyo",
        imagePath: "/images/spot-4-7.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=羽田空港",
      },
    ],
  },
};

export default async function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam, 10);
  const data = dayData[dayNum];

  if (!data) notFound();

  return (
    <div className="space-y-6 px-4 py-6">
      <DayHeader
        dayNumber={data.dayNumber}
        date={data.date}
        weekday={data.weekday}
        region={data.region}
        summary={data.summary}
      />
      <TransportBadge transport={data.transport} />

      <section className="space-y-0">
        {data.spots.map((spot, i) => (
          <TimelineItem
            key={i}
            spotId={`spot-${data.dayNumber}-${i + 1}`}
            time={spot.time}
            name={spot.name}
            description={spot.description}
            address={spot.address}
            imagePath={spot.imagePath}
            mapsUrl={spot.mapsUrl}
            isLast={i === data.spots.length - 1}
          />
        ))}
      </section>

      <MealInfo
        breakfast={data.breakfast}
        lunch={data.lunch}
        dinner={data.dinner}
      />

      {data.accommodation !== "귀국" && (
        <HotelCard
          name={data.accommodation}
          mapsUrl={data.hotelMapsUrl}
        />
      )}
    </div>
  );
}
