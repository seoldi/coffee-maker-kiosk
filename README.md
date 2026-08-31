# ☕ Coffee Maker Kiosk

무인 커피 키오스크 UI 프로토타입 — 고객 주문 전 흐름 + 관리자 패널.  
실제 클라이언트 프로젝트 기반, 1080×1920px 세로형 키오스크 + 모바일 관리자 패널.

---

## 🔗 Live Demo

<a href="https://seoldi.github.io/coffee-maker-kiosk/demo.html" target="_blank">👉 Order Flow Demo</a> &nbsp;|&nbsp;
<a href="https://seoldi.github.io/coffee-maker-kiosk/demo.html?src=admin_intro" target="_blank">⚙️ Admin Panel Demo</a>

---

## 📸 Screenshots

### Customer Kiosk

| Landing | Order Start | Menu & Cart | Card Payment |
|:---:|:---:|:---:|:---:|
| ![](screenshots/01_landing.png) | ![](screenshots/02_order_start.png) | ![](screenshots/03_menu_coffee.png) | ![](screenshots/05_card_pay.png) |

### Admin Panel

| Login | Menu Management |
|:---:|:---:|
| ![](screenshots/06_admin_intro.png) | ![](screenshots/07_admin_coffee.png) |

---

## ✨ Features

### Customer Kiosk (1080×1920px portrait)

**Order Flow**
- Member / guest checkout with phone number input and sign-up flow
- 3-category menu browsing: Coffee · Other Drinks · Side Menu
- Shot add-on popup modal (upsell), real-time cart update
- Points earn & redeem with on-screen keypad

**Payment**
- Order summary → Credit card payment → Receipt & order number display
- Sold-out item handling screen

**Refund**
- Card refund flow with receipt output

### Admin Panel (mobile-optimized)

- Admin login and profile management
- Menu CRUD across all 3 categories — image upload, price / points / stock
- Machine settings with numbered slot assignment

---

## 🛠 Stack

- HTML5 / CSS3 / JavaScript — jQuery, jQuery Modal
- Fonts: Pretendard (KR), Montserrat (EN)
- `demo.html` — iframe + `transform: scale` viewer; kiosk source files untouched

---

## 📁 Structure

```
demo.html           ← iframe demo wrapper
index.html          ← project landing page
publish/
  ├─ css/           ← style.css (kiosk), admin.css (admin)
  ├─ fonts/         ← Pretendard, Montserrat
  ├─ html/          ← all screen pages
  └─ source/        ← icons, SVG assets
js/                 ← jQuery, jQuery Modal, shared script
screenshots/        ← preview images
```

---

## 👤 Role

Sole designer and front-end developer. Responsible for the full process — UX flow planning, component design, and delivering a fully interactive static prototype.
