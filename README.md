# ☕ Coffee Maker Kiosk

무인 커피 키오스크(주문 · 결제 · 관리자 모드) UI 프로토타입입니다. 실제 클라이언트 프로젝트로 진행한 화면 설계 및 퍼블리싱 작업물입니다.

## 🔗 Live Demo

**[👉 주문 화면 데모](https://seoldi.github.io/coffee-maker-kiosk/demo.html)** &nbsp;|&nbsp; **[⚙️ 관리자 모드 데모](https://seoldi.github.io/coffee-maker-kiosk/demo.html?src=admin_intro)**

| 주문 흐름 | 관리자 모드 |
|-----------|------------|
| 시작 화면 → 메뉴 선택 → 장바구니 → 카드 결제 | 로그인 → 메뉴/재고 관리 → 매출/환불 |

## 📸 Screenshots

### 주문 흐름

| 랜딩 | 주문 시작 | 메뉴 선택 · 장바구니 | 카드 결제 |
|:---:|:---:|:---:|:---:|
| ![랜딩](screenshots/01_landing.png) | ![주문시작](screenshots/02_order_start.png) | ![메뉴선택](screenshots/03_menu_coffee.png) | ![카드결제](screenshots/05_card_pay.png) |

### 관리자 모드

| 관리자 로그인 | 메뉴 관리 |
|:---:|:---:|
| ![관리자로그인](screenshots/06_admin_intro.png) | ![메뉴관리](screenshots/07_admin_coffee.png) |

## 🛠 Stack
- HTML5 / CSS3 / JavaScript (jQuery, jQuery Modal)
- 반응형 레이아웃 (키오스크 · 태블릿 화면비 대응)
- 클로드 코드(Claude Code)를 활용한 AI 협업 개발 워크플로우

## 📁 Structure
```
publish/
  ├─ css/       # 스타일시트
  ├─ fonts/     # Pretendard, Montserrat
  ├─ html/      # 화면별 페이지 (주문/결제/관리자)
  └─ source/    # 아이콘, 이미지 에셋
js/             # jQuery, jQuery Modal, 공통 스크립트
```

## ✨ Role
UI/UX 디자인 및 반응형 퍼블리싱 전담. 화면 흐름 설계부터 실제 동작하는 정적 프로토타입 구현까지 진행했습니다.
