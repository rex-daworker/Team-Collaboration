# API Spec (Starter)

Base URL: `/api`

## Health

- `GET /health`
- `GET /api/health`

## Auth

- `POST /auth/register`
- `POST /auth/login`

## Products

- `GET /products`
- `POST /products` (seller/admin)
- `PUT /products/:id` (seller/admin)
- `DELETE /products/:id` (seller/admin)

## Orders

- `POST /orders` (customer)
- `GET /orders/customer` (customer)
- `GET /orders/seller` (seller/admin)
- `PATCH /orders/:id/status` (seller/admin)

## Reservations

- `POST /reservations` (customer)
- `GET /reservations/customer` (customer)
- `GET /reservations/seller` (seller/admin)
- `PATCH /reservations/:id/status` (seller/admin)

## Inventory

- `GET /inventory/:productId` (seller/admin)
- `PATCH /inventory/:productId` (seller/admin)

## Seller Settings

- `GET /seller/settings` (seller/admin)
- `PUT /seller/settings` (seller/admin)

## Validation Notes

- Reservation creation must validate `serviceId`:
  - referenced product exists
  - `type === "service"`
  - `isReservable === true`
- Order payload must validate product references and quantities.
- Status transitions should be controlled server-side.
