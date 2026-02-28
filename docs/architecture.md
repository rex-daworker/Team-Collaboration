# Architecture Overview

## System Style

This project follows a client-server architecture:
- `frontend` (React/Vite in `frontend/`) handles UI and API requests.
- `backend` (Express + MongoDB in `backend/`) handles business logic and persistence.
- MongoDB stores users, products/services, inventory, orders, reservations, and seller settings.

## Core Domains

- Identity and access: `User` with role-based authorization (`customer`, `seller`, `admin`).
- Catalog: `Product` supports both physical products and services (`type`).
- Fulfillment: `Order` with item list, pickup time, and status.
- Scheduling: `Reservation` for service bookings.
- Operations: `Inventory` and `SellerSettings`.

## Data Flow

1. Client sends request to backend API.
2. Backend validates auth/role and request payload.
3. Backend reads/writes MongoDB via Mongoose models.
4. Backend returns normalized API response.
5. Client updates UI state.

## Design Constraints

- Only services should be reservable:
  - `Product.type` must be `service`
  - `Product.isReservable` should be `true`
- Reservation and order creation should be restricted to `customer` users.
- Seller and admin users manage statuses and operations.
