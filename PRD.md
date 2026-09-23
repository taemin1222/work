# [PRD] ONCE, ONE'S BY JOSUN HOTEL — 공간 & 상품 쇼케이스 웹페이지

| 문서 번호 | PRD-2026-JH-SPACE01 | 최초 작성일 | 2026. 09. 23 |
| :--- | :--- | :--- | :--- |
| 프로젝트명 | **ONCE, ONE'S BY JOSUN HOTEL (공간 · 상품 웹 쇼케이스)** | 작성자 | Antigravity AI Assistant |
| 기반 기획 | **ONCE, ONE'S 런칭 전략 기획안 (`once_one_s.md`)** | 개발 형태 | **No-DB, Pure Vanilla JS, HTML5, CSS3** |
| 디자인 테마 | **딥 에메랄드 그린 (`#0F382C`) & 웜 샴페인 골드 (`#C5A880`)** | 대상 환경 | 모바일 / 태블릿 / PC 반응형 웹 |

---

## 1. 프로젝트 개요 (Executive Summary)

### 1.1 추진 배경 및 목적
- **브랜드 콘셉트**: 1인 가구 1,000만 시대 및 2030 세대의 '자발적 솔로 럭셔리(Solo Luxury)' 트렌드를 반영하여 신규 런칭된 조선호텔앤리조트의 1인 전용 프리미엄 호캉스 서브 브랜드 **'ONCE, ONE'S BY JOSUN HOTEL'**의 공식 쇼케이스 웹페이지를 구축합니다.
- **슬로건**:
  > **"혼자인데, 이렇게 대접받아도 되나요?"**  
  > **"한 번 와도, 혼자 와도 우리 사람 — 혼자이기 때문에 더 온전하게 누리는 럭셔리"**
- **웹페이지 목적**:
  1. **공간(Spaces)**: 완벽한 사적 휴식을 보장하는 **Track A(Complete Privacy)**와 취향 기반의 느슨한 연대를 선사하는 **Track B(Soft Connection)**의 호텔 객실 및 살롱 공간을 입체적으로 탐색.
  2. **상품(Products/Packages)**: 1인 전용 스테이 패키지, 인룸 고메 세트, 한정판 웰컴 굿즈(각인 레더 키홀더 등)를 직관적으로 확인하고 시뮬레이션 예약/장바구니 담기 지원.
  3. **브랜드 미디어 에셋 통합**: 폴더 내 보유한 **4컷 비주얼 카드(`01.png`~`04.png`)** 및 **18초 숏폼 브랜드 영상(`3조 원스.mp4`)**을 웹페이지 내 자연스럽게 임베딩하여 압도적인 브랜드 몰입감 선사.
  4. **No-DB 바닐라 자바스크립트 구현**: 별도의 백엔드 데이터베이스 서버 없이 정적 데이터 파일과 브라우저 `localStorage`를 활용하여 순수 프론트엔드 환경에서 100% 자립 구동.

---

## 2. 타깃 사용자 & 핵심 페르소나

| 구분 | 주요 특징 | 웹페이지에서의 핵심 니즈 |
| :--- | :--- | :--- |
| **주 타깃** | 28~39세 전문직 및 고소득 1인 가구 (남/여) | 복잡한 탐색 없이 나에게 딱 맞는 1인 공간과 패키지를 3초 안에 발견하고 싶음 |
| **페인 포인트** | 호텔 시설 이용 시 2인 기준 패키지 강요 및 타인의 시선(눈치) | "혼자 왔기에 더 극진히 환대받는" 1인 전용 공간 및 차별화된 혜택을 시각적으로 확인 |
| **소비 성향** | 선택 피로도(Decision Fatigue) 극혐, 감각적 럭셔리 소비 지향 | 취향 태그 몇 번 클릭으로 최적의 공간/상품 추천받기, 세련된 비주얼 감상 |

---

## 3. 핵심 사용자 경험 (User Journey & Stories)

1. **US-01 (브랜드 비주얼 및 스토리 감상)**:
   - 사용자는 첫 화면(Hero)에서 후킹 카피("혼자인데, 이렇게 대접받아도 되나요?")와 함께 숏폼 영상(`3조 원스.mp4`)을 원클릭으로 감상할 수 있다.
2. **US-02 (공간 탐색 - Spaces Showcase)**:
   - 사용자는 상단 탭에서 **[공간 (Spaces)]**을 선택하고, `Track A(프라이빗)`와 `Track B(소셜 살롱)` 필터를 전환하며 레스케이프, 웨스틴 조선의 공간 무드와 시설을 둘러본다.
   - 공간 카드를 클릭하면 고화질 갤러리, 1인 맞춤 어메니티, 공간 스토리텔링이 담긴 상세 모달을 확인할 수 있다.
3. **US-03 (상품 & 패키지 탐색 - Products Showcase)**:
   - 사용자는 **[상품 (Products)]** 탭으로 전환하여 `1인 숙박 패키지`, `고메 & 와인 세트`, `브랜드 굿즈(레더 키홀더, 가운)`를 카테고리별로 탐색한다.
   - 원하는 패키지나 굿즈를 '장바구니 담기(위시리스트)'에 넣거나 '예약 시뮬레이션'을 진행할 수 있다.
4. **US-04 (스마트 AI 취향 큐레이터)**:
   - "나만의 온전한 휴식 취향" 3문항 퀴즈(원하는 무드, 선호 주류, 휴식 스타일)를 선택하면, Track A 또는 Track B에 해당하는 최적의 공간과 패키지가 즉시 추천된다.
5. **US-05 (1인 예약/주문 시뮬레이터 - No DB)**:
   - 투숙 날짜, 인원(1인 고정), 옵션(턴다운 서비스, 와인 페어링 등)을 선택하면 실시간 견적이 계산되고, 예약 신청 완료 알림(토스트/완료 모달)을 경험한다.

---

## 4. 데이터 아키텍처 (No-DB Data Architecture)

데이터베이스를 사용하지 않고 브라우저 정적 자바스크립트 객체(`data/spaces.js`, `data/products.js`) 및 브라우저 로컬스토리지(`localStorage`)를 통해 데이터를 관리합니다.

### 4.1 공간 데이터 스키마 (`data/spaces.js`)

```javascript
const SPACE_DATA = [
  {
    id: "sp-01",
    name: "아틀리에 스위트 (Track A 전용)",
    hotel: "레스케이프 호텔",
    track: "trackA", // "trackA" (Complete Privacy) | "trackB" (Soft Connection)
    trackName: "Track A: Complete Privacy",
    theme: "19세기 파리지앵 부티크 스위트",
    tagline: "눈치 볼 필요 없이 완벽하게 누리는 나만의 은신처",
    capacity: "1인 전용 (최대 1인)",
    bedType: "시몬스 뷰티레스트 프리미엄 킹",
    size: "52㎡",
    features: ["객실 내 프라이빗 디너 트롤리", "하이파이 LP 사운드 시스템", "딥 릴랙싱 욕조 & 배스 솔트", "시크릿 턴다운 서비스"],
    image: "02.png", // 폴더 내 에셋 연계
    gallery: [
      "02.png",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    pricePerNight: 420000,
    rating: 4.9,
    description: "화려한 프렌치 벨벳 인테리어와 클래식한 브라스 가구가 어우러진 공간. 외부와의 소음을 차단하고 온전히 자신만의 사유에 몰입할 수 있도록 설계된 1인 럭셔리의 정점."
  },
  {
    id: "sp-02",
    name: "마크 다모르 와인 살롱 (Track B 전용)",
    hotel: "레스케이프 호텔 26층",
    track: "trackB",
    trackName: "Track B: Soft Connection",
    theme: "스타라이트 스카이 살롱",
    tagline: "어색한 대화 없는 취향 기반의 고품격 소셜 공간",
    capacity: "1인 투숙객 전용 라운지 바",
    bedType: "-",
    size: "스카이라운지 전체",
    features: ["웰컴 샴페인 글라스 프리패스", "소믈리에 1:1 테이스팅 노트", "독립형 1인 벨벳 체어", "Lo-Fi 재즈 라이브 세션"],
    image: "01.png", // 폴더 내 01.png 연계
    gallery: [
      "01.png",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
    ],
    pricePerNight: 0, // 살롱 공간
    rating: 4.8,
    description: "타인의 시선에서 자유로운 독립 좌석 배치와 은은한 무드 조명 속에서, 프리미엄 와인과 함께 자연스러운 영감을 교류하는 세련된 취향 공동체 공간."
  },
  {
    id: "sp-03",
    name: "웨스틴 헤리티지 이그제큐티브 스위트",
    hotel: "웨스틴 조선 서울",
    track: "trackA",
    trackName: "Track A: Complete Privacy",
    theme: "환구단 전망의 클래식 럭셔리",
    tagline: "100년 역사의 품격으로 완성되는 가장 극진한 환대",
    capacity: "1인 전용",
    bedType: "헤븐리 베드 킹",
    size: "60㎡",
    features: ["환구단 프라이빗 뷰", "웨스틴 클럽 1인 전용 좌석", "조선델리 웰컴 고메 바스켓", "네스프레소 버츄오 머신"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
    ],
    pricePerNight: 480000,
    rating: 4.95,
    description: "유서 깊은 환구단을 내려다보며 구름 위의 휴식을 선사하는 헤븐리 베드와 함께, 번잡한 일상을 벗어나 완벽한 웰빙 리셋을 경험할 수 있는 공간."
  },
  {
    id: "sp-04",
    name: "살롱 드 환구 (소셜 티 & 와인 라운지)",
    hotel: "웨스틴 조선 서울 1층",
    track: "trackB",
    trackName: "Track B: Soft Connection",
    theme: "한국적 정취와 모던 살롱의 조화",
    tagline: "낮에는 티 마스터의 오마카세, 밤에는 내추럴 와인 살롱",
    capacity: "1인 웰컴 살롱",
    bedType: "-",
    size: "라운지 전용 구역",
    features: ["시그니처 애프터눈 티 페어링", "월간 북 큐레이션 서가", "무소음 헤드폰 대여", "소프트 네트워킹 매칭"],
    image: "03.png", // 폴더 내 03.png 연계
    gallery: ["03.png"],
    pricePerNight: 0,
    rating: 4.75,
    description: "사계절의 정취를 품은 환구단을 배경으로 잔잔한 음악과 함께 독서와 티, 와인을 자유롭게 음미하는 1인 친화형 문화 살롱."
  }
];
```

### 4.2 상품/패키지 데이터 스키마 (`data/products.js`)

```javascript
const PRODUCT_DATA = [
  // ── [1. 올인원 호캉스 패키지] ──
  {
    id: "pkg-01",
    category: "package",
    categoryName: "1인 스테이 패키지",
    track: "trackA",
    name: "ONCE Solo Track A 풀코스 럭셔리 패키지",
    badge: "BEST CHOICE",
    price: 490000,
    originalPrice: 620000,
    discountRate: "21%",
    image: "02.png",
    summary: "스위트 객실 1박 + 인룸 고메 4코스 디너 + 하프 샴페인 + 한정판 레더 키홀더",
    benefits: [
      "아틀리에 스위트 or 헤리티지 스위트 1박",
      "객실 내 1인 파인다이닝 디너 코스 서빙 (골드 트롤리)",
      "루이 로드레 하프 보틀 샴페인 1병 & 캐비어 카나페",
      "조선호텔 금박 각인 브라운 레더 키홀더 증정",
      "레이트 체크아웃 (14:00까지 무료 연장)"
    ],
    isLimited: false
  },
  {
    id: "pkg-02",
    category: "package",
    categoryName: "1인 스테이 패키지",
    track: "trackB",
    name: "ONCE Solo Track B 취향 살롱 네트워킹 패키지",
    badge: "MD PICK",
    price: 450000,
    originalPrice: 550000,
    discountRate: "18%",
    image: "03.png",
    summary: "스위트 객실 1박 + 마크 다모르 와인 살롱 프리패스 + 테이스팅 노트 + 웰컴 기프트",
    benefits: [
      "디럭스 스위트 객실 1박",
      "26층 마크 다모르 1인 와인 살롱 올데이 입장권",
      "전문 소믈리에 3종 와인 테이스팅 & 치즈 플래터",
      "JOSUN ONE'S 취향 커뮤니티 초대권",
      "조선델리 시그니처 구움과자 웰컴 세트"
    ],
    isLimited: false
  },

  // ── [2. 인룸 고메 & 식음 상품] ──
  {
    id: "food-01",
    category: "gourmet",
    categoryName: "고메 & 룸서비스",
    track: "trackA",
    name: "팔레드신 1인 시그니처 고메 테이스팅 세트",
    badge: "MICHELIN",
    price: 135000,
    originalPrice: 160000,
    discountRate: "15%",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
    summary: "미쉐린 가이드 선정 팔레드신의 북경오리와 딤섬 4종, 1인용 맞춤 페어링 코스",
    benefits: [
      "시그니처 바삭한 북경오리 롤 (1인 서빙)",
      "수제 딤섬 4종 (트러플 쇼마이 등)",
      "소흥주 마리네이드 특선 냉채",
      "보이차 팟 서빙"
    ],
    isLimited: false
  },
  {
    id: "food-02",
    category: "gourmet",
    categoryName: "고메 & 룸서비스",
    track: "trackB",
    name: "살롱 나이트 와인 & 샤퀴테리 셀렉션",
    badge: "POPULAR",
    price: 85000,
    originalPrice: 105000,
    discountRate: "19%",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    summary: "조선호텔 헤리티지 셀렉트 프리미엄 레드/화이트 와인 1병 & 1인 스페인 이베리코 하몽 플래터",
    benefits: [
      "소믈리에 셀렉트 하프 보틀 와인 (레드 or 화이트 택1)",
      "이베리코 베요타 등급 하몽 & 3종 아티잔 치즈",
      "그리시니 & 트러플 올리브 마리네이드"
    ],
    isLimited: false
  },

  // ── [3. 한정판 브랜드 굿즈 & 리빙] ──
  {
    id: "goods-01",
    category: "goods",
    categoryName: "브랜드 굿즈",
    track: "all",
    name: "ONCE 한정판 브라운 레더 키홀더 & 브라스 키",
    badge: "LIMITED EDITION",
    price: 68000,
    originalPrice: 68000,
    discountRate: "0%",
    image: "04.png", // 폴더 내 04.png 연계
    summary: "조선호텔 엠블럼이 금박 각인된 최상급 이탈리안 베지터블 레더 키홀더",
    benefits: [
      "이탈리아 최고급 베지터블 소가죽 100%",
      "조선호텔 앤 리조트 시그니처 엠블럼 24K 금박 각인",
      "이니셜 무료 각인 서비스 (영문 최대 3자)",
      "고급 하드케이스 & 보증서 패키지"
    ],
    isLimited: true
  },
  {
    id: "goods-02",
    category: "goods",
    categoryName: "브랜드 굿즈",
    track: "all",
    name: "ONCE 시그니처 에메랄드 벨벳 가운 & 슬리퍼",
    badge: "EXCLUSIVE",
    price: 180000,
    originalPrice: 220000,
    discountRate: "18%",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80",
    summary: "극상의 부드러움을 선사하는 조선호텔 1인 전용 딥 에메랄드 벨벳 배스로브 세트",
    benefits: [
      "극세사 고밀도 벨벳 원단으로 보온성과 우아한 드레이프성 극대화",
      "골드 자수 브랜드 로고 포인트",
      "메모리폼 컴포트 슬리퍼 동봉"
    ],
    isLimited: false
  }
];
```

---

## 5. 상세 기능 요구사항 (Functional Requirements)

### 5.1 히어로 섹션 (Brand Hero & Media Integration)
- **FR-01 (도발적 후킹 비주얼)**:
  - 헤더 아래 메인 배너: `01.png` 비주얼과 "혼자인데, 이렇게 대접받아도 되나요?" 헤드카피.
  - 서브 카피: "오직 한 사람만을 위한 5성급 럭셔리 케어 — ONCE, ONE'S BY JOSUN HOTEL".
- **FR-02 (18초 숏폼 비디오 모달 연동)**:
  - "🎬 18초 브랜드 스토리 감상하기" 버튼 클릭 시, 폴더 내 비디오(`3조 원스.mp4`)가 모던 팝업 플레이어로 재생.
  - 음소거(Mute) 해제 및 일시정지, 닫기 인터랙션 지원.
- **FR-03 (4컷 카드뉴스 캐러셀 뷰어)**:
  - 기획안 속 카드뉴스 4컷(`01.png`, `02.png`, `03.png`, `04.png`)을 한눈에 넘겨볼 수 있는 슬라이더/캐러셀 모달 제공.

### 5.2 탭 네비게이션 & 듀얼 트랙 필터 (Dual-Track Navigation)
- **FR-04 (공간 vs 상품 메인 탭 전환)**:
  - 상단 탭: `🏛️ 공간 (SPACES)` | `🎁 상품 · 패키지 (PRODUCTS)`
  - 탭 클릭 시 화면 전환 없이 부드러운 페이드인 애니메이션과 함께 해당 콘텐츠 목록 렌더링.
- **FR-05 (트랙 & 카테고리 서브 필터)**:
  - **공간 탭 선택 시**: `전체`, `Track A (Complete Privacy)`, `Track B (Soft Connection)`, `호텔 지점별 (레스케이프 / 웨스틴조선)`
  - **상품 탭 선택 시**: `전체`, `1인 스테이 패키지`, `고메 & 룸서비스`, `브랜드 굿즈`
  - 필터 클릭 시 즉각적인 바닐라 JS 렌더링(0.1초 미만 반응 속도).

### 5.3 공간(Spaces) 쇼케이스 기능
- **FR-06 (공간 카드 렌더링)**:
  - 고화질 공간 이미지, 호텔명, 트랙 배지(Track A 에메랄드 / Track B 골드), 평점, 1인 맞춤 시설 태그, 1박 기준 가격.
  - 카드 호버 시 이미지 줌인 및 금색 테두리 글로우 효과.
- **FR-07 (공간 상세 모달)**:
  - 카드 클릭 시 오픈되는 풀스크린 팝업.
  - 갤러리 슬라이드, 객실 상세 제원(면적, 침대 타입, 정원 1인 엄수 원칙), 공간 스토리, 프라이빗 혜택 리스트.
  - "이 공간으로 1인 패키지 예약하기" CTA 버튼.

### 5.4 상품/패키지(Products) 쇼케이스 기능
- **FR-08 (상품 카드 렌더링)**:
  - 대표 이미지, 할인율 뱃지, 원가 및 할인가 표시, 핵심 혜택 3줄 요약.
  - [장바구니 담기] 및 [상세보기] 액션 버튼.
- **FR-09 (상품 상세 및 혜택 안내)**:
  - 포함 혜택 5종 체크리스트, 취소/환불 규정, 증정 굿즈 안내.

### 5.5 No-DB 장바구니 & 예약 시뮬레이터 (Local Cart & Booking Engine)
- **FR-10 (로컬 장바구니 Drawer)**:
  - 브라우저 `localStorage`에 선택한 상품/공간 보관.
  - 우측 상단 플로팅 장바구니 아이콘(담긴 개수 뱃지 표시).
  - 클릭 시 우측에서 슬라이드 인되는 드로어 패널.
  - 담긴 항목 수량 조절, 삭제, 총 결제 예상 금액 자동 합산.
- **FR-11 (1인 예약 시뮬레이션 모달)**:
  - 체크인 날짜 선택 (HTML5 date picker).
  - 트랙 선택 (Track A vs Track B).
  - 예약자 성명, 연락처 입력 후 [예약 신청] 클릭 시 축하 애니메이션과 함께 예약 번호 생성 및 완료 모달 표출 (실제 DB 없이 프론트엔드 목업 완결).

### 5.6 AI 취향 큐레이터 (JOSUN ONE'S Mini-Quiz)
- **FR-12 (취향 진단 인터랙션)**:
  - 3가지 질문:
    1. 오늘 나의 피로도 상태는? (A: 사람 마주칠 힘도 없음 / B: 가벼운 분위기 전환 필요)
    2. 선호하는 저녁 시간은? (A: 실크 가운 입고 침대 위 룸서비스 / B: 라운지 바에서 칵테일 한잔)
    3. 나를 위한 보상은? (A: 완벽한 숙면과 사색 / B: 새로운 취향 발견과 영감)
  - 선택 결과에 따라 "당신에게 추천하는 코스는 **[Track A 아틀리에 스위트 + 고메 패키지]** 입니다" 결과 카드 즉시 도출 및 바로 담기 지원.

---

## 6. 비기능 요구사항 (Non-Functional Requirements)

- **NFR-01 (완전한 정적 자립 구동)**: 외부 백엔드 API 호출, 데이터베이스 서버 없이 로컬 환경 및 정적 호스팅(GitHub Pages, Vercel 정적 등)에서 단일 실행.
- **NFR-02 (Zero Framework)**: React, Vue 없이 순수 **Vanilla JS (ES6+)**로 컴포넌트 렌더링, 이벤트 리스너, 상태 관리(State Manager 패턴) 구현.
- **NFR-03 (시각적 심미성 - Luxury Aesthetics)**:
  - 조선호텔의 100년 품격을 상징하는 딥 에메랄드 그린(`--color-emerald: #0F382C`)과 샴페인 골드(`--color-gold: #C5A880`)를 주조색으로 사용.
  - 고급스러운 Serif 폰트와 Pretendard의 조화, 부드러운 글래스모피즘 오버레이 적용.
- **NFR-04 (반응형 최적화)**:
  - 모바일(375px~), 태블릿(768px~), 데스크톱(1200px+) 전 해상도에서 완벽한 가독성과 레이아웃 유지.
- **NFR-05 (로컬 에셋 100% 활용)**:
  - 폴더 내 실제 파일인 `01.png`, `02.png`, `03.png`, `04.png`, `3조 원스.mp4`를 마크업에 직접 연결하여 동작 보장.

---

## 7. UI 와이어프레임 & 페이지 구조

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [ONCE, ONE'S 로고]     [공간 SPACES]   [상품 PRODUCTS]   [취향테스트]  [🛍️ Cart (2)] │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   HERO BANNER (Background: 01.png / Emerald & Gold Gradient)           │
│   "혼자인데, 이렇게 대접받아도 되나요?"                                 │
│   한 번 와도, 혼자 와도 우리 사람 — 오직 한 사람을 위한 5성급 환대      │
│   [🎬 18초 숏폼 영상 감상]    [✨ 나만의 1인 코스 추천받기]             │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│   [ MAIN NAVIGATION TABS ]                                             │
│   ┌───────────────────────────────┬────────────────────────────────┐   │
│   │     🏛️ 공간 (SPACES)          │     🎁 상품 · 패키지 (PRODUCTS) │   │
│   └───────────────────────────────┴────────────────────────────────┘   │
│                                                                        │
│   [ Sub Filter Chips ]                                                 │
│   (● 전체)  (Track A 프라이빗)  (Track B 소셜살롱)  (레스케이프)  (웨스틴조선) │
│                                                                        │
│   [ GRID CARDS CONTAINER ]                                             │
│   ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐ │
│   │ [Img: 02.png]       │ │ [Img: 01.png]       │ │ [Img: 03.png]       │ │
│   │ [Track A] ★ 4.9     │ │ [Track B] ★ 4.8     │ │ [Track A] ★ 4.95    │ │
│   │ 아틀리에 스위트     │ │ 마크 다모르 와인살롱│ │ 웨스틴 헤리티지     │ │
│   │ 52㎡ · 1인전용      │ │ 스카이라운지        │ │ 60㎡ · 환구단전망   │ │
│   │ ₩420,000 / 1박      │ │ 투숙객 전용 입장    │ │ ₩480,000 / 1박      │ │
│   │ [상세보기] [예약하기]│ │ [살롱보기] [패키지] │ │ [상세보기] [예약하기]│ │
│   └─────────────────────┘ └─────────────────────┘ └─────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│   FOOTER: ONCE, ONE'S BY JOSUN HOTEL & RESORTS · Solo Luxury Heritage │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 8. 파일 시스템 구조 설계

```
c:\Users\User\Desktop\2일차/
├── index.html                # 통합 메인 페이지 (공간/상품 탭 전환 뷰)
├── PRD.md                    # 본 PRD 기획 문서
├── PRD_STORE_MAP.md          # 이전 상점 지도 PRD 백업본
├── once_one_s.md             # 원본 브랜드 전략 기획안
├── 01.png ~ 04.png           # 기획 핵심 비주얼 카드뉴스 에셋
├── 3조 원스.mp4              # 18초 숏폼 브랜드 영상
├── css/
│   ├── reset.css             # 기본 CSS 리셋
│   ├── variables.css         # 브랜드 럭셔리 토큰 (에메랄드, 골드, 다크우드)
│   └── showcase.css          # 공간/상품 카드, 모달, 탭, 장바구니 스타일
├── js/
│   ├── appShowcase.js        # 쇼케이스 엔트리포인트 및 탭/이벤트 컨트롤러
│   ├── spaceService.js       # 공간 데이터 필터링 및 카드 렌더러
│   ├── productService.js     # 상품/패키지 데이터 필터링 및 카드 렌더러
│   ├── cartService.js        # 로컬스토리지 기반 장바구니 & 견적 계산기
│   ├── quizService.js        # AI 1인 취향 큐레이터 퀴즈 로직
│   └── modalService.js       # 비디오 모달, 공간/상품 상세 모달, 예약 모달
└── data/
    ├── spaces.js             # 공간 정적 데이터셋 (SPACE_DATA)
    └── products.js           # 상품/패키지 정적 데이터셋 (PRODUCT_DATA)
```

---

## 9. 단계별 개발 마일스톤 (Milestones)

| 단계 | 마일스톤 명칭 | 주요 구현 내용 | 산출물 |
| :---: | :--- | :--- | :--- |
| **M1** | **데이터셋 구축** | `once_one_s.md` 및 폴더 내 에셋을 반영한 정적 데이터 작성 | `data/spaces.js`, `data/products.js` |
| **M2** | **럭셔리 디자인 시스템** | 에메랄드/골드 톤앤매너, 카드 그리드, 헤더, 배너 스타일링 | `css/variables.css`, `css/showcase.css` |
| **M3** | **공간(Spaces) 뷰 구축** | 트랙 A/B 필터, 공간 카드 렌더링, 고화질 상세 모달 연동 | `js/spaceService.js`, `index.html` |
| **M4** | **상품(Products) 뷰 구축** | 패키지/고메/굿즈 탭, 가격 할인 표시, 상품 상세 모달 | `js/productService.js` |
| **M5** | **미디어 & 큐레이터 연동** | `3조 원스.mp4` 숏폼 비디오 팝업 플레이어, 3문항 취향 진단 퀴즈 | `js/modalService.js`, `js/quizService.js` |
| **M6** | **장바구니 & 예약 시뮬레이션** | 로컬스토리지 장바구니 드로어, 1인 예약 신청 완료 플로우 | `js/cartService.js`, `js/appShowcase.js` |

---

## 10. 제외 사항 (Out of Scope)
- PG사 실결제 연동 (No-DB 예약 시뮬레이션 및 장바구니로 구현)
- 회원가입/로그인 백엔드 인증
- 실시간 객실 재고(GDS/PMS) API 실시간 통신
