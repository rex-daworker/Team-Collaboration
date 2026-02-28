# Roles and Permissions

## Roles

- `customer`
- `seller`
- `admin`

## Access Matrix

### Customer

- Can register/login.
- Can browse products/services.
- Can create orders.
- Can create reservations.
- Can view own orders/reservations.
- Cannot manage catalog, inventory, or other users.

### Seller

- Can manage own products/services.
- Can manage inventory for own products.
- Can view/update order statuses for own business.
- Can view/update reservation statuses for own services.
- Can manage own seller settings.
- Cannot manage global users or platform-wide settings.

### Admin

- Can access all seller/customer operational data.
- Can manage roles/users.
- Can manage or override operational statuses.
- Can monitor system-level activity and moderation.

## Enforcement Pattern

- Authenticate request first.
- Authorize route by role.
- Enforce ownership checks for seller-scoped resources.
