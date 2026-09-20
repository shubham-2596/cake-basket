# 🍰 The Cake Basket

A full-stack online cake ordering platform built with **React, Node.js, Express.js, and MySQL**.

The Cake Basket allows customers to browse cakes, search products, add cakes to their cart, manage wishlists, place orders, request custom cakes, and track their orders. An admin panel is included for managing products, orders, customers, and custom cake requests.

---

## 📌 Project Overview

**The Cake Basket** is designed as a modern and responsive cake-ordering website with a premium bakery-style user interface.

### Customer Features

* Browse available cakes
* Search cakes
* View cake details
* Add cakes to cart
* Update cart quantities
* Remove products from cart
* Add/remove cakes from wishlist
* User registration and login
* JWT-based authentication
* Checkout and order placement
* Cash on Delivery payment option
* View previous orders
* View individual order details
* Request custom cakes
* Upload custom cake reference images
* Responsive design for desktop and mobile

### Admin Features

* Admin authentication
* Admin dashboard
* Product management
* Add new cakes
* Edit products
* Delete products
* View customer orders
* View ordered cake details
* Update order status
* Delete orders
* Manage custom cake requests
* Update custom cake request status
* Set estimated custom cake price
* Customer and order management

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* React Router
* Axios
* Tailwind CSS
* Framer Motion
* React Icons
* React Toastify
* Swiper

## Backend

* Node.js
* Express.js
* MySQL
* MySQL2
* JWT Authentication
* Multer
* CORS
* dotenv

## Database

* MySQL

---

# 📂 Project Structure

```text
cake project/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── adminAnalyticsController.js
│   │   ├── cartController.js
│   │   ├── customCakeController.js
│   │   ├── orderController.js
│   │   ├── orderManagementController.js
│   │   ├── productController.js
│   │   └── wishlistController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   │
│   ├── models/
│   │   ├── cartModel.js
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── adminAnalyticsRoutes.js
│   │   ├── adminCustomCakeRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── customCakeRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── orderManagementRoutes.js
│   │   ├── productRoutes.js
│   │   └── wishlistRoutes.js
│   │
│   ├── uploads/
│   │   └── ...
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CakeCard.jsx
│   │   │   └── ...
│   │   │
│   │   ├── context/
│   │   │   ├── CartContext.jsx
│   │   │   └── WishlistContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Cakes.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── OrderDetails.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── CustomCakePage.jsx
│   │   │   ├── CustomCakeRequest.jsx
│   │   │   └── ...
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── cartService.js
│   │   │   ├── productService.js
│   │   │   └── ...
│   │   │
│   │   ├── utils/
│   │   │   └── navigation.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

```bash
cd "cake project"
```

---

# ⚙️ Backend Setup

Open a terminal in the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Backend Environment Variables

Create a `.env` file inside:

```text
backend/.env
```

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=cake_basket

JWT_SECRET=your_super_secret_jwt_key
```

Replace the database credentials with your local MySQL credentials.

---

# 🗄️ Database Setup

Make sure MySQL is installed and running.

Create the database:

```sql
CREATE DATABASE cake_basket;
```

Select the database:

```sql
USE cake_basket;
```

The project requires tables for:

```text
users
products
cart
wishlist
orders
order_items
custom_cake_requests
newsletter
```

Import the project's SQL/database setup if available.

---

# ▶️ Run the Backend

From the `backend` directory:

```bash
npm run dev
```

or:

```bash
node server.js
```

The backend should run on:

```text
http://localhost:5000
```

You can test it by opening:

```text
http://localhost:5000
```

Expected response:

```text
Cake Basket Backend Running
```

---

# 💻 Frontend Setup

Open another terminal.

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display a local URL similar to:

```text
http://localhost:5173
```

Open that URL in your browser.

---

# 🔑 Authentication

The application uses **JWT-based authentication**.

After login, the frontend stores:

```text
token
user
```

in `localStorage`.

Authenticated API requests use:

```text
Authorization: Bearer <token>
```

The backend verifies the JWT using authentication middleware.

---

# 👤 User Roles

The application supports two primary roles:

```text
Customer
Admin
```

The user's role is stored in the database.

Example:

```sql
SELECT id, name, email, role
FROM users;
```

---

# 👑 Creating an Admin User

First register a normal account through the website.

Then update the user's role in MySQL:

```sql
USE cake_basket;

UPDATE users
SET role = 'admin'
WHERE email = 'YOUR_EMAIL';
```

Verify:

```sql
SELECT id, name, email, role
FROM users
WHERE email = 'YOUR_EMAIL';
```

The result should contain:

```text
admin
```

After changing the role, **logout and login again** so that the new role is included in the JWT.

The admin panel can then be accessed through:

```text
/admin/dashboard
```

---

# 🛒 Shopping Cart

Customers can:

* Add products
* Increase quantity
* Decrease quantity
* Remove products
* View cart total
* Continue to checkout

Cart data is stored in MySQL and associated with the authenticated user.

---

# ❤️ Wishlist

Customers can add cakes to their wishlist.

Wishlist functionality includes:

* Add to wishlist
* Remove from wishlist
* View wishlist
* Wishlist count in Navbar

The wishlist is associated with the logged-in user.

---

# 🎂 Custom Cakes

Customers can request a custom cake by providing information such as:

* Name
* Phone
* Flavour
* Weight
* Shape
* Occasion
* Delivery date
* Message
* Reference image

The uploaded image is handled using **Multer** and stored in the backend uploads directory.

---

# 📦 Orders

Customers can place orders using the checkout page.

An order contains:

```text
Order
├── Customer
├── Address
├── Total Amount
├── Payment Method
├── Status
└── Order Items
      ├── Product
      ├── Quantity
      └── Price
```

The current payment option is:

```text
Cash on Delivery (COD)
```

---

# 📋 Order Status

Orders can have statuses such as:

```text
Pending
Confirmed
Preparing
Out for Delivery
Delivered
Cancelled
```

Admins can update the order status from the Admin Orders page.

---

# 🛡️ Admin Panel

The admin panel provides management functionality for:

```text
Admin Dashboard
       │
       ├── Products
       │     ├── Add Product
       │     ├── Edit Product
       │     └── Delete Product
       │
       ├── Orders
       │     ├── View Orders
       │     ├── View Ordered Cakes
       │     ├── Update Status
       │     └── Delete Order
       │
       └── Custom Cakes
             ├── View Requests
             ├── Update Status
             └── Set Estimated Price
```

---

# 📊 Analytics

An analytics system is planned for the Admin Dashboard.

Planned analytics include:

* Total revenue
* Total orders
* Total customers
* Total products
* Average order value
* Revenue trends
* Order trends
* Best-selling cakes
* Category performance
* Order status distribution
* Customer statistics

---

# 🖼️ Product Images

Product images are stored in:

```text
backend/uploads/
```

The Express server exposes uploads through:

```text
/uploads
```

Example:

```text
http://localhost:5000/uploads/cake.jpg
```

Frontend image handling supports both uploaded backend images and external image URLs.

---

# 🔌 API Structure

The backend API uses:

```text
http://localhost:5000/api
```

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

## Products

```text
GET    /api/products
GET    /api/products/:id
```

## Cart

```text
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/:id
DELETE /api/cart/:id
```

## Wishlist

```text
GET    /api/wishlist
POST   /api/wishlist/add
DELETE /api/wishlist/:id
```

## Orders

```text
POST /api/order
GET  /api/order
GET  /api/order/:id
```

## Custom Cakes

```text
POST /api/custom-cakes
GET  /api/custom-cakes/my-requests
```

## Admin Orders

```text
GET    /api/admin/orders
PUT    /api/admin/orders/:id/status
DELETE /api/admin/orders/:id
```

## Admin Custom Cakes

```text
GET /api/admin/custom-cakes
PUT /api/admin/custom-cakes/:id
```

---

# 🔒 Session & Authentication Handling

The frontend uses a centralized Axios instance.

Authenticated requests automatically receive:

```text
Authorization: Bearer <JWT>
```

If the JWT expires or becomes invalid, the frontend clears the stored authentication data and redirects the user to the login page.

This prevents a stale user session from appearing logged in after the JWT has expired.

---

# 🎨 UI & Design

The website follows a premium bakery-inspired design.

### Main Theme

```text
Chocolate Brown
#4E342E
```

Combined with:

* Soft pink
* Cream
* White
* Light beige
* Rounded cards
* Soft shadows
* Smooth hover animations
* Responsive layouts

The UI is designed to work across:

```text
Desktop
Tablet
Mobile
```

---

# 📱 Responsive Design

The application uses Tailwind CSS responsive utilities.

Major pages are optimized for:

* Desktop screens
* Tablets
* Mobile phones

The Navbar includes a responsive mobile menu.

---

# 🧪 Testing

Before testing the application, make sure both servers are running.

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

Then test:

### Customer Flow

```text
Register
   ↓
Login
   ↓
Browse Cakes
   ↓
View Product
   ↓
Add to Wishlist
   ↓
Add to Cart
   ↓
Checkout
   ↓
Place Order
   ↓
View Order
```

### Admin Flow

```text
Admin Login
   ↓
Admin Dashboard
   ↓
Products
   ↓
Add/Edit/Delete Product
   ↓
Orders
   ↓
Update Order Status
   ↓
Custom Cake Requests
   ↓
Manage Requests
```

---

# ⚠️ Common Issues

## MySQL Access Denied

If you see:

```text
Access denied for user 'root'@'localhost'
```

check:

```env
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=cake_basket
```

Make sure the password matches your MySQL installation.

---

## Backend Not Connecting

Check that MySQL is running.

Then restart:

```bash
npm run dev
```

---

## Frontend Cannot Access Backend

Make sure the backend is running on:

```text
http://localhost:5000
```

and the frontend API configuration points to:

```text
http://localhost:5000/api
```

---

## Product Images Not Showing

Check that images exist inside:

```text
backend/uploads/
```

and that the backend contains:

```js
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
```

---

## JWT Expired

If an old session stops working, login again.

The frontend automatically handles invalid/expired authentication tokens.

---

# 🔐 Security Notes

Do not commit `.env` to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
uploads/
dist/
```

Never expose:

* Database passwords
* JWT secrets
* API keys
* Private credentials

---

# 🚧 Future Enhancements

Planned improvements include:

* Advanced admin analytics
* Revenue charts
* Sales reports
* Product performance analytics
* Customer analytics
* Online payment integration
* Coupon and discount system
* Product reviews and ratings
* Email notifications
* Order tracking
* Delivery management
* Better search and filtering
* Personalized cake recommendations
* Inventory management
* Stock alerts
* Customer notifications

---

# 👨‍💻 Development

The project follows a separated frontend/backend architecture:

```text
React Frontend
      │
      │ Axios / REST API
      ▼
Node.js + Express Backend
      │
      ▼
     MySQL
```

This separation makes the application easier to maintain, test, and extend.

---

# 📄 License

This project is developed for educational, academic, and project demonstration purposes.

---

# ❤️ The Cake Basket

**Freshly baked happiness, delivered to your doorstep.**

```text
🍰 Browse
   ↓
🎂 Choose
   ↓
🛒 Order
   ↓
❤️ Celebrate
```
