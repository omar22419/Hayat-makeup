# Hayat Makeup — API Contract Reference

Internal reference for wiring a real backend. Frontend calls the **service**
layer (`src/services/*`) — never the API modules directly. Services switch to
the API automatically when `VITE_API_BASE_URL` is set, otherwise they resolve
mock data from `src/data/*`.

Base URL: `VITE_API_BASE_URL` (e.g. `http://localhost:8000/api`).
All responses are JSON. Errors return a message string or `{ message }`.

## Products

| Endpoint                 | Method | Purpose                     |
| ------------------------ | ------ | --------------------------- |
| `/products`              | GET    | list (filters as query)     |
| `/products/:id`          | GET    | single product              |
| `/products/:id/related`  | GET    | related products            |
| `/products/search?q=`    | GET    | search by name/description  |
| `/products/best-sellers` | GET    | best sellers                |
| `/products/new-arrivals` | GET    | new arrivals                |

Product shape:

```js
{
  id: 1,
  name: "أحمر شفاه مطفي",
  description: "درجة 07 - وردي فوشيا",
  price: 89,            // number (normalized)
  oldPrice: 129,        // number | null
  discount: 23,         // percent | 0
  rating: 4.9,          // number
  reviewsCount: 98,     // number
  reviews: "98",        // string used for display badges
  images: ["/img.png"], // array of urls
  category: "للمراة",
  variants: [],         // array of { id, label, colorCode }
  stock: 10
}
```

## Categories

| Endpoint          | Method | Purpose          |
| ----------------- | ------ | ---------------- |
| `/categories`     | GET    | list categories  |
| `/categories/:id` | GET    | single           |
| `/categories/:id/products` | GET | products in category |

## Offers & Packages

| Endpoint          | Method | Purpose               |
| ----------------- | ------ | --------------------- |
| `/offers`         | GET    | all offers            |
| `/offers/featured`| GET    | featured offers       |
| `/offers/bundles` | GET    | offer bundles         |
| `/offers/limited` | GET    | limited-time offer    |
| `/packages`       | GET    | packages listing      |
| `/packages/:id`   | GET    | single package        |

Offer: `{ id, title, description, discount, price, oldPrice, image, badge, tag }`.
Package: `{ id, name, items, price, oldPrice, discount, image, badge }`.

## Reviews

| Endpoint    | Method | Purpose                    |
| ----------- | ------ | -------------------------- |
| `/reviews`  | GET    | list (`?filter=`, `?summary=true`) |
| `/reviews`  | POST   | create a review            |

Review shape:

```js
{
  id: 1,
  name: "سارة العتيبي",
  avatar: "/avatar.png",   // optional
  verified: true,
  skinType: "مختلطة",
  rating: 5,                // number, drives stars when backend is ready
  productId: 4,
  productName: "فاونديشن هيات مات بيرفكت",
  text: "تغطية رائعة...",
  reviewImage: "/img.png",  // optional
  date: "12 مايو 2024",
  helpful: 24
}
```

Rating summary (`GET /reviews?summary=true`):
`{ overall: "4.8", total: "(1,256 تقييم)", distribution: [{ rating, percent }] }`.

## Orders

| Endpoint     | Method | Purpose                     |
| ------------ | ------ | --------------------------- |
| `/orders`    | GET    | list `?status=`             |
| `/orders`    | POST   | create (checkout payload)   |
| `/orders/:id`| GET    | single order                |

Create order payload (from `Checkout.jsx`):

```js
{
  customer: { name, email, phone, city, area, address, notes },
  paymentMethod: "cash" | "bank" | "wallet",
  items: [{ id, name, quantity, price, image }],
  subtotal, shipping, discount, total
}
```

Order: `{ id, status, createdAt, items, subtotal, discount, shipping, total }`.

## Notifications

| Endpoint                       | Method | Purpose          |
| ------------------------------ | ------ | ---------------- |
| `/notifications`               | GET    | list             |
| `/notifications/:id/read`      | PATCH  | mark one read    |
| `/notifications/read-all`      | PATCH  | mark all read    |

Notification: `{ id, title, description, time, category, read }`.

## Wishlist & Cart

| Endpoint             | Method | Purpose            |
| -------------------- | ------ | ------------------ |
| `/wishlist`          | GET    | list               |
| `/wishlist`          | POST   | `{ product }` add  |
| `/wishlist/:id`      | DELETE | remove             |
| `/cart`              | GET    | list               |
| `/cart`              | POST   | `{ items }` sync   |
| `/cart`              | DELETE | clear              |

Cart item: `{ id, name, description, color, colorCode, price, quantity, image }`.

## Auth / Users

| Endpoint        | Method | Purpose        |
| --------------- | ------ | -------------- |
| `/auth/login`   | POST   | `{ phone/password }` |
| `/auth/register`| POST   | customer info  |
| `/auth/me`      | GET    | current user   |
| `/auth/logout`  | POST   | session end    |

Auth responses should return `{ user, token }`; the client stores the token
and sends it as `Authorization: Bearer <token>`.