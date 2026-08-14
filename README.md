# Hayat Makeup — Frontend & API Integration Readiness

> **Project status:** Frontend is functionally structured and API-ready at the service layer.  
> **Current stage:** Final frontend/API-contract preparation before connecting the real backend.

## Overview

Hayat Makeup is a responsive Arabic RTL React + Vite + Tailwind CSS e-commerce frontend.

The project was implemented from provided reference screenshots with a strong focus on pixel-accurate responsive UI, Arabic RTL support, mobile-first layouts, reusable React components, Zustand-based client state, and complete storefront flows.

The current stage is focused on keeping the existing UI unchanged while making the frontend logically complete and ready to consume real backend responses.

## Current Stage

The intended flow is:

```text
React UI
   ↓
Pages / Hooks / Stores
   ↓
Services
   ↓
API Modules
   ↓
Real Backend

Fallback during development:

React UI
   ↓
Pages / Hooks / Stores
   ↓
Services
   ↓
Mock Data
```

The frontend currently remains usable without a backend through its mock/local data layer.

## What Has Been Completed

### Data layer

Reusable business datasets were moved into `src/data/` so UI components do not need to own large business datasets.

Examples include:

```text
src/data/
├── constants.js
├── filters.js
├── cart.js
├── wishlist.js
├── categories.js
├── products.js
├── bestSellers.js
├── newArrivals.js
├── offers.js
├── packages.js
├── shopByColor.js
├── reviews.js
├── skinTypes.js
├── skinQuiz.js
├── guide.js
├── magazine.js
├── looks.js
├── notifications.js
├── order.js
└── productDetails.js
```

Some small inline datasets may remain where extraction would provide little practical benefit.

### Cart

The cart store supports:

- `addItem`
- `addToCart`
- `increaseQuantity`
- `decreaseQuantity`
- `removeItem`
- `clearCart`
- `totalItems`
- `getItemsCount`
- `subtotal`
- `getSubtotal`

The project uses the `quantity` field consistently.

Cart badges are synchronized across the relevant headers and mobile navigation.

After successful checkout, the cart is cleared.

### Wishlist / Favorites

The existing favorites store is the single source of truth for wishlist state.

It supports:

- toggle favorite
- remove favorite
- clear favorites
- favorite-state checks
- synchronization across product cards and wishlist views

The intended behavior is:

```text
Heart click
   ↓
favoritesStore
   ↓
Add / Remove product
   ↓
UI updates immediately
```

### Functional navigation

Major routes and interactive flows have been reviewed so product cards, wishlist, cart, checkout, offers, packages, magazine, looks, reviews, contact, about, skin flows, and other existing features use their intended destinations.

Broken cart/wishlist behavior and several dead navigation targets were corrected while preserving the current design.

## API Layer

The current API client lives at:

```text
src/api/client.js
```

It reads the base URL from:

```env
VITE_API_BASE_URL
```

Example:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

The API client centralizes HTTP requests, response parsing, headers, and error propagation.

No production API URL should be hardcoded.

`.env.example` documents the required environment variable.

## Service Layer

The frontend includes a service layer for mock/API-ready behavior.

The service layer is the intended replacement point between the UI and the backend:

```text
UI
↓
Service
↓
Mock OR API
```

Current areas include catalog/products, engagement, orders, and mock fallback logic.

The goal is to keep the UI independent from whether its data comes from mock data or a real backend.

## API Contract Reference

The following contract is the current backend handoff reference.

### Base URL

```text
VITE_API_BASE_URL
```

All responses should be JSON.

Errors should provide either a message string or:

```js
{
  message: "..."
}
```

# Products

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/products` | GET | List products; filters as query parameters |
| `/products/:id` | GET | Single product |
| `/products/:id/related` | GET | Related products |
| `/products/search?q=` | GET | Search by name/description |
| `/products/best-sellers` | GET | Best sellers |
| `/products/new-arrivals` | GET | New arrivals |

Product shape:

```js
{
  id: 1,
  name: "أحمر شفاه مطفي",
  description: "درجة 07 - وردي فوشيا",
  price: 89,
  oldPrice: 129,
  discount: 23,
  rating: 4.9,
  reviewsCount: 98,
  reviews: "98",
  images: ["/img.png"],
  category: "للمراة",
  variants: [],
  stock: 10
}
```

`price`, `oldPrice`, `discount`, `rating`, `reviewsCount`, and `stock` should use consistent numeric types.

# Categories

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/categories` | GET | List categories |
| `/categories/:id` | GET | Single category |
| `/categories/:id/products` | GET | Products in category |

# Offers

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/offers` | GET | All offers |
| `/offers/featured` | GET | Featured offers |
| `/offers/bundles` | GET | Offer bundles |
| `/offers/limited` | GET | Limited-time offer |

Offer:

```js
{
  id,
  title,
  description,
  discount,
  price,
  oldPrice,
  image,
  badge,
  tag
}
```

# Packages

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/packages` | GET | Packages listing |
| `/packages/:id` | GET | Single package |

Package:

```js
{
  id,
  name,
  items,
  price,
  oldPrice,
  discount,
  image,
  badge
}
```

# Reviews

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/reviews` | GET | Review list |
| `/reviews?filter=` | GET | Filter reviews |
| `/reviews?summary=true` | GET | Rating summary |
| `/reviews` | POST | Create review |

Review:

```js
{
  id: 1,
  name: "سارة العتيبي",
  avatar: "/avatar.png",
  verified: true,
  skinType: "مختلطة",
  rating: 5,
  productId: 4,
  productName: "فاونديشن هيات مات بيرفكت",
  text: "تغطية رائعة...",
  reviewImage: "/img.png",
  date: "12 مايو 2024",
  helpful: 24
}
```

Rating summary:

```js
{
  overall: "4.8",
  total: "(1,256 تقييم)",
  distribution: [
    {
      rating: 5,
      percent: 78
    }
  ]
}
```

# Orders

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/orders` | GET | Orders list; optional status filter |
| `/orders` | POST | Create order |
| `/orders/:id` | GET | Single order |
| `/track-order` or equivalent tracking endpoint | GET | Order tracking |

Create order payload:

```js
{
  customer: {
    name,
    email,
    phone,
    city,
    area,
    address,
    notes
  },
  paymentMethod: "cash" | "bank" | "wallet",
  items: [
    {
      id,
      name,
      quantity,
      price,
      image
    }
  ],
  subtotal,
  shipping,
  discount,
  total
}
```

Order:

```js
{
  id,
  status,
  createdAt,
  items,
  subtotal,
  discount,
  shipping,
  total
}
```

Tracking should provide enough information for:

- order number
- current status
- estimated delivery
- tracking timeline
- order summary

Supported logical statuses:

```text
pending
confirmed
preparing
shipped
out_for_delivery
delivered
cancelled
```

# Notifications

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/notifications` | GET | List notifications |
| `/notifications/:id/read` | PATCH | Mark one notification as read |
| `/notifications/read-all` | PATCH | Mark all as read |

Notification:

```js
{
  id,
  title,
  description,
  time,
  category,
  read
}
```

# Wishlist

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/wishlist` | GET | Wishlist list |
| `/wishlist` | POST | Add product |
| `/wishlist/:id` | DELETE | Remove product |

# Cart

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/cart` | GET | Current cart |
| `/cart` | POST | Sync cart |
| `/cart` | DELETE | Clear cart |

Cart item:

```js
{
  id,
  name,
  description,
  color,
  colorCode,
  price,
  quantity,
  image
}
```

# Auth / Users

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/auth/login` | POST | Login |
| `/auth/register` | POST | Register |
| `/auth/me` | GET | Current user |
| `/auth/logout` | POST | Logout |

Expected auth response:

```js
{
  user,
  token
}
```

When authentication is enabled, the API client should send:

```text
Authorization: Bearer <token>
```

# FAQ

The FAQ page supports:

- question search
- accordion behavior
- customer support CTA
- order tracking navigation

Suggested backend endpoint:

```text
GET /faq
```

FAQ item:

```js
{
  id,
  question,
  answer
}
```

The frontend can continue using mock FAQ data until the endpoint is ready.

# Search

Suggested backend endpoint:

```text
GET /products/search?q=
```

Search should work against relevant product fields such as:

- name
- description
- category
- tags

Search results should use the same product shape as the rest of the application.

# Account

Account data can use:

```text
GET /auth/me
```

Potential account capabilities include:

- profile
- orders
- wishlist
- cart
- notifications
- account actions

Authentication details should follow the final backend contract.

## Helping the Backend Discover the Required Data

This frontend preparation was also intentionally done to help the backend team understand what the frontend needs.

The documented contract shows:

- required entities
- required fields
- expected response shapes
- required CRUD operations
- order creation payloads
- order tracking data
- review structure
- product relationships
- cart/wishlist synchronization
- authentication response structure

This gives the backend a concrete reference for producing responses that the frontend can consume directly.

The goal is:

```text
Backend response
      ↓
Expected frontend shape
      ↓
Service layer
      ↓
Existing UI
```

The backend should return predictable domain data rather than forcing the frontend to perform large response transformations.

This significantly reduces integration time and avoids unnecessary frontend rewrites.

## Current Backend Handoff Stage

At this stage, the frontend is no longer just a screenshot/static implementation.

The frontend is:

- responsive
- RTL
- componentized
- state-aware
- using Zustand for shared client state
- using mock data
- prepared with an API client
- prepared with service boundaries
- documented with the expected API contract
- prepared for functional flows such as cart, wishlist, checkout, reviews, search, FAQ, and order tracking

The next major stage is backend implementation and final service wiring.

The backend team can use this README as the initial response/data contract reference.

Some frontend areas may still read mock data directly until the final service wiring is completed. That is expected during this handoff stage and does not require redesigning the UI.

## Project Size — A Note and Apology

We apologize for the relatively large project size.

The main reason is **not unnecessary application code**.

The project was built from many reference screenshots and requires a large number of visual assets to reproduce the pages accurately.

The repository contains many:

- product images
- category images
- offer banners
- package images
- magazine images
- looks images
- skin/quiz images
- review images
- promotional graphics
- page-specific visual assets

These assets are necessary for the screenshot-based pixel-accurate implementation.

Therefore, a significant portion of the repository size comes from the **large number of required images**, not from unnecessary JavaScript or React logic.

For production, the asset footprint can be reduced through:

- WebP/AVIF conversion
- image compression
- responsive image sizes
- lazy loading
- CDN/object storage
- optimized delivery for mobile

These optimizations can reduce download size without changing the visual design.

## Development

Install:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Environment

Create `.env` locally:

```env
VITE_API_BASE_URL=
```

For a local backend:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Do not commit secrets.

## Design Freeze

The existing UI should remain visually unchanged during backend integration.

Backend work should primarily modify:

- API modules
- services
- stores
- state handling
- data mapping

It should not require redesigning the existing React components.

## Final Status

**Frontend:** Ready for backend handoff.

**Mock data:** Available and functional.

**State management:** Implemented through Zustand.

**API client:** Prepared.

**Service layer:** Prepared for API/mock switching.

**API contract:** Documented.

**Backend discovery support:** Complete enough to begin backend implementation.

**Next major step:** Implement the real backend endpoints according to this contract, connect `VITE_API_BASE_URL`, and complete any remaining service wiring that still uses local mock data.

## Backend Handoff Checklist

- [ ] Products API
- [ ] Categories API
- [ ] Offers API
- [ ] Packages API
- [ ] Reviews + rating summary
- [ ] Orders API
- [ ] Order tracking
- [ ] Notifications API
- [ ] Wishlist API
- [ ] Cart API
- [ ] Authentication
- [ ] User/profile
- [ ] FAQ API if FAQ content becomes dynamic
- [ ] Product search
- [ ] Consistent numeric field types
- [ ] Consistent error responses
- [ ] Auth token handling
- [ ] Final service-to-API wiring
- [ ] End-to-end testing
