# ☕ Coffee Maker Kiosk

> 실제 클라이언트 프로젝트로 제작한 무인 커피 키오스크 UI 프로토타입입니다.  
> An interactive kiosk UI prototype built for a real client — covers the full customer order flow and a complete admin panel.

---

## 🔗 Live Demo

**[👉 주문 화면 · Order Flow](https://seoldi.github.io/coffee-maker-kiosk/demo.html)** &nbsp;|&nbsp; **[⚙️ 관리자 모드 · Admin Panel](https://seoldi.github.io/coffee-maker-kiosk/demo.html?src=admin_intro)**

| 주문 흐름 / Order Flow | 관리자 모드 / Admin Panel |
|---|---|
| 시작 → 회원 선택 → 메뉴 탐색 → 장바구니 → 결제 → 영수증 | 로그인 → 메뉴 CRUD → 재고 관리 → 기기 설정 |
| Start → Member login → Menu → Cart → Payment → Receipt | Login → Menu CRUD → Inventory → Machine settings |

---

## 📸 Screenshots

### 고객용 키오스크 · Customer Kiosk

| 시작 화면 | 주문 시작 | 메뉴 선택 | 카드 결제 |
|:---:|:---:|:---:|:---:|
| ![](screenshots/01_landing.png) | ![](screenshots/02_order_start.png) | ![](screenshots/03_menu_coffee.png) | ![](screenshots/05_card_pay.png) |

### 관리자 패널 · Admin Panel

| 로그인 | 메뉴 관리 |
|:---:|:---:|
| ![](screenshots/06_admin_intro.png) | ![](screenshots/07_admin_coffee.png) |

---

## ✨ Features

### 고객용 키오스크 · Customer-facing Kiosk (1080×1920px portrait)

**주문 흐름 / Order Flow**
- 회원 / 비회원 선택 → 휴대폰 번호 입력 / 회원가입
- Member or guest checkout with phone number input and sign-up flow
- 커피 · 기타음료 · 사이드메뉴 3개 카테고리 탐색
- 3-category menu browsing: Coffee · Other Drinks · Side Menu
- 샷 추가 팝업 모달, 장바구니 실시간 반영
- Shot add-on popup modal, real-time cart update
- 포인트 적립 / 사용 (숫자 키패드 입력)
- Points earn & redeem with on-screen keypad

**결제 / Payment**
- 주문 리스트 확인 → 신용카드 결제 → 영수증 출력 / 번호 발권
- Order summary → Credit card → Receipt & order number display
- 상품 매진 안내 화면
- Sold-out item handling screen

**환불 / Refund**
- 상품 환불 (카드 환불 / 영수증 출력)
- Card refund flow with receipt output

---

### 관리자 패널 · Admin Panel (mobile-optimized)

- 관리자 로그인 및 사용자 정보 관리
- Admin login and profile management
- 메뉴 CRUD — 커피 / 사이드 / 기타음료 카테고리별 등록·수정·삭제
- Menu CRUD — Add, edit, delete items across all 3 categories
- 이미지 업로드, 가격·포인트·재고 설정
- Image upload, price / points / stock configuration
- 기기 설정 (코드 번호 할당)
- Machine settings with numbered slot assignment

---

## 🛠 Stack

- **HTML5 / CSS3 / JavaScript** — jQuery, jQuery Modal
- **Layout** — 1080×1920px portrait kiosk canvas; admin panel in mobile-optimized layout
- **Fonts** — Pretendard (KR), Montserrat (EN)
- **Demo wrapper** — `demo.html` embeds kiosk in a scaled iframe; no changes to kiosk source files
- **Workflow** — AI-assisted development with Claude Code

---

## 📁 Structure

```
demo.html           ← iframe demo wrapper (scaling only)
index.html          ← project landing page
publish/
  ├─ css/           ← style.css (kiosk), admin.css (admin panel)
  ├─ fonts/         ← Pretendard, Montserrat
  ├─ html/          ← all screen pages (order / payment / admin)
  └─ source/        ← icons, images, SVG assets
js/                 ← jQuery, jQuery Modal, shared script
screenshots/        ← preview images
```

---

## 👤 Role

UI/UX 디자인 및 프론트엔드 퍼블리싱 전담 (1인 작업).  
화면 흐름 기획, 컴포넌트 설계, 실제 동작하는 정적 프로토타입 구현까지 전 과정 담당.

Sole designer and front-end developer. Responsible for the full process — UX flow planning, component design, and delivering a fully interactive static prototype.
