# 🛍️ MyShop – Modern E-Commerce Website

MyShop is a full-featured e-commerce web application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Firebase Authentication**. The platform supports user registration, secure login, product browsing, cart management, and a complete checkout flow.

## 🚀 Features

* 🔐 **Firebase Authentication** (Register/Login)
* 🛒 **Add to Cart** functionality
* ✅ **Select to Buy** option during checkout
* 📦 **Product Details Page** with image and description
* 💳 **Checkout** flow with form validation
* 🎉 **Order Success** confirmation screen
* 🌗 **Colorful & Responsive UI** with light/dark themes
* 📱 **Mobile-friendly design**
* 🔀 **Cart Persistence** using localStorage
* 🔍 **Product Search & Filters** *(optional if implemented)*

## 🖼️ Screenshots

> Add screenshots of your Home page, Product Details, Cart, Checkout, etc.

## ⚙️ Tech Stack

| Frontend     | Backend    | Auth         | Styling           |
| ------------ | ---------- | ------------ | ----------------- |
| React.js     | Node.js    | Firebase     | Custom CSS        |
| React Router | Express.js | Firebase SDK | Responsive Design |

## 🧑‍💻 How to Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/myshop.git
   cd myshop
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

   * Create a Firebase project.
   * Enable **Email/Password Authentication**.
   * Get your Firebase config and add it to `firebase.js`.

4. **Start the frontend**

   ```bash
   npm start
   ```

> 💡 If you have a backend, start it in another terminal.

## 📁 Project Structure

```
myshop/
├── src/
│   ├── components/     # Navbar, Footer, PrivateRoute, Loader
│   ├── context/        # CartContext, UserContext, AuthContext
│   ├── pages/          # Home, Products, Cart, Checkout, Login, Register, OderSuccess, ProductDetails
│   ├── firebase.js     # Firebase config
│   ├── App.js          # Route setup
│   └── index.js        # React root
```

## 🔐 Environment Variables

Create a `.env` file and store:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
...
```

## 📦 APIs Used

* [FakeStoreAPI](https://fakestoreapi.com/) – for product data

## 📌 Future Improvements

* Add product reviews & ratings
* Admin dashboard
* Payment gateway integration (Razorpay, Stripe)
* Wishlist feature

## 📝 License

This project is licensed under the MIT License.

---

Made with ❤️ by \ Muzammil Shaikh 
