# Order and Reservation Web Application  
## Capstone Project – Full Project Explanation

---

## 1. Project Title
**Order and Reservation Web Application**

---

## 2. Project Type
Capstone Project (Full-Stack Web Application)

---

## 3. Project Introduction
This capstone project involves the design and development of a full-stack **Order and Reservation Web Application**. The system is designed to help businesses such as restaurants, cafés, salons, or service providers manage customer orders and reservations digitally.

The application replaces traditional manual processes such as phone calls, paper notes, or messaging apps with an automated, web-based system that improves efficiency, accuracy, and customer experience.

---

## 4. Project Background
Many small and medium businesses face challenges in managing orders and reservations due to:
- Manual record keeping
- Order mistakes
- Double booking of reservations
- Lack of centralized data
- Difficulty tracking customer activity

With increasing digital adoption, there is a strong need for a simple, user-friendly system that allows customers to place orders and make reservations online while enabling administrators to manage everything from one dashboard.

---

## 5. Problem Description
The main problems addressed by this project are:
- Inefficient manual order handling
- Reservation conflicts
- Lack of real-time order and reservation tracking
- No proper data storage for customers and transactions
- Increased workload for staff

These problems reduce business efficiency and negatively affect customer satisfaction.

---

## 6. Project Objectives
The objectives of this capstone project are:
- To design and implement a real-world web application
- To automate order and reservation management
- To reduce human errors
- To provide real-time access to orders and reservations
- To implement secure user authentication
- To apply frontend, backend, and database development skills

---

## 7. Roles and Team

### 7.1 User Roles
The application uses three user roles:
- `Customer`: browse products or services, place orders, make reservations, and view order and reservation history
- `Seller`: manage products or services, orders, and reservations, including tracking customer-selected time inputs
- `Admin`: manage users, role assignments, and system-wide monitoring

### 7.2 Group Members and Project Roles
| Member(s) | Role | Main Responsibilities |
| --- | --- | --- |
| Roni | Project Manager | Project coordination, scheduling, documentation overview, communication |
| Rex, Jingya | Backend Developer | API development, authentication, database logic |
| Raman, Jony | Frontend Developer | UI development, user flows, responsiveness |
| Roni, Rex | Database and Security Lead | Database design, data validation, security practices |
| Jingya | Testing and Deployment Lead | Testing strategy, bug tracking, deployment setup |

### 7.3 Example Seller Types
- Local farmers
- Bakeries
- Repairs and service shops
- Activity parks
- Workshops
- Wellness services
- Barbers
- Pet services
- Rental services

---

## 8. Project Scope

### 8.1 Customer Functionality
- User registration and login
- Browse available products or services
- Place orders online with selected pickup time
- Make reservations for reservable services with selected time and optional details
- View own order history and order status
- View own reservation history and reservation status

### 8.2 Seller Functionality
- Secure seller login
- Product and service management (add, update, and delete catalog items)
- Order management (view, update status, and track customer-selected pickup times)
- Reservation management (view, update status, and track reservation schedules)
- Inventory tracking (stock quantity and low-stock alert threshold)
- Seller settings management (business name, opening hours, pickup rules, reservation rules)

### 8.3 Admin Functionality
- Secure admin login
- Manage users and role assignments (Customer, Seller, Admin)
- Monitor sellers, orders, reservations, and system data
- Manage platform-level moderation and controls

---

## 9. System Architecture
The project follows a **client-server architecture**.

---

## 9. Technology Stack

### Frontend
- React
- JavaScript (JSX)  
- Tailwind CSS
- Axios / Fetch API  

### Backend
- Node.js  
- Express.js  
- RESTful APIs  
- JSON Web Token (JWT)  
- bcrypt

### Database
- MongoDB


## 10. Database Design

### 10.1 Users Collection
- `name: String`
- `email: String` (unique)
- `password: String`
- `role: String` (`customer` | `seller` | `admin`, default: `customer`)

### 10.2 Products Collection
- `sellerId: ObjectId` (ref: `User`)
- `name: String`
- `type: String` (`product` | `service`, default: `product`)
- `price: Number`
- `description: String`
- `category: String`
- `durationMin: Number`
- `isReservable: Boolean` (default: `false`)

### 10.3 Orders Collection
- `customerId: ObjectId` (ref: `User`)
- `sellerId: ObjectId` (ref: `User`)
- `items: Array`
- `items[].productId: ObjectId` (ref: `Product`)
- `items[].quantity: Number`
- `pickupTime: Date`
- `status: String` (default: `pending`)

### 10.4 Reservations Collection
- `customerId: ObjectId` (ref: `User`)
- `sellerId: ObjectId` (ref: `User`)
- `serviceId: ObjectId` (ref: `Product`)
- `reservationTime: Date`
- `partySize: Number`
- `notes: String`
- `status: String` (default: `pending`)

### 10.5 Inventory Collection
- `productId: ObjectId` (ref: `Product`)
- `quantity: Number`
- `lowStockAlert: Number`

### 10.6 SellerSettings Collection
- `sellerId: ObjectId` (ref: `User`)
- `businessName: String`
- `openingHours: String`
- `pickupRules: String`
- `reservationRules: String`

---

## 11. Functional Requirements

- Role-based access control must be implemented with three roles: Customer, Seller, Admin  
- Customers must be able to browse products or services  
- Customers must be able to place orders with pickup time input (`pickupTime`)  
- Customers must be able to make reservations with time input (`reservationTime`)  
- Customers must be able to view order history  
- Customers must be able to view reservation history  
- Sellers must be able to manage products or services  
- Sellers must be able to define catalog item type (`product` or `service`) and reservability  
- Sellers must be able to manage and track order pickup schedules and statuses  
- Sellers must be able to manage and track reservation schedules and statuses  
- Sellers must be able to manage inventory levels and low-stock alert thresholds  
- Sellers must be able to configure business settings including pickup and reservation rules  
- Admins must be able to manage users, roles, and system-wide operations  

---

## 12. Non-Functional Requirements

- The system should be responsive  
- The system should be secure  
- The application should be easy to use  
- The system should support multiple users  
- The system should be scalable  

---

## 13. Backend API Design

### Authentication
- POST `/api/register`  
- POST `/api/login`  

### Products
- GET `/api/products`  
- POST `/api/products` (Seller/Admin, includes `type`, optional `durationMin`, `isReservable`)  
- PUT `/api/products/:id` (Seller/Admin, includes `type`, optional `durationMin`, `isReservable`)  
- DELETE `/api/products/:id` (Seller/Admin)  

### Orders
- POST `/api/orders` (Customer, includes `pickupTime`)  
- GET `/api/orders/customer`  
- GET `/api/orders/seller`  
- PATCH `/api/orders/:id/status` (Seller/Admin)  

### Reservations
- POST `/api/reservations` (Customer, includes `serviceId` and `reservationTime`)  
- GET `/api/reservations/customer`  
- GET `/api/reservations/seller`  
- PATCH `/api/reservations/:id/status` (Seller/Admin)  

### Inventory
- GET `/api/inventory/:productId` (Seller/Admin)  
- PATCH `/api/inventory/:productId` (Seller/Admin)  

### Seller Settings
- GET `/api/seller/settings` (Seller/Admin)  
- PUT `/api/seller/settings` (Seller/Admin)  

---

## 14. Security Implementation

- Passwords are encrypted using bcrypt  
- JWT is used for authentication  
- Role-based authorization is applied  
- Protected routes prevent unauthorized access  

---

## 15. Development Process

### Phase 1: Planning
- Requirement analysis  
- System design  
- Database design  

### Phase 2: Backend Development
- Server setup  
- Database connection  
- API development  
- Authentication implementation  

### Phase 3: Frontend Development
- UI development  
- API integration  
- Form validation  
- Protected routes  

### Phase 4: Testing and Deployment
- Manual testing  
- API testing  
- Bug fixing  
- Deployment  

---

## 16. Testing Strategy

- Manual testing of user workflows  
- API testing using Postman  
- Authentication testing  
- Input validation testing  

---

## 17. Limitations

- Online payment is not included  
- Notification system is basic  
- Mobile application is not included  

---

## 18. Future Enhancements

- Online payment integration  
- Email and SMS notifications  
- Admin analytics dashboard  
- Mobile application  
- AI-based demand prediction  

---

## 19. Learning Outcomes

This capstone project helped develop skills in:
- Full-stack web development  
- REST API design  
- Database modeling  
- Authentication and security  
- Deployment and testing  
- Solving real-world problems  

---

## 20. Conclusion

The Order and Reservation Web Application is a complete full-stack solution that improves business efficiency by automating order and reservation processes. This capstone project demonstrates practical implementation of modern web technologies and provides a strong foundation for future enhancements and professional use.

---
