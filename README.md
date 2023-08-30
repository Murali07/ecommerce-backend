<div align="center">
  
  <h1>Ecommerce Application</h1>
  <br />

  <p>A Full-Stack Ecommerce application that built using React, Redux, MongoDB, Nodejs, ExpressJS and JWT Authentication with Stripe payment system that allows admin to create, update and delete products and buyers to save products to cart and purchase via Stripe API.</p>
  
  <h4>
    <a href="https://idyllic-gaufre-afe0d9.netlify.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Murali07/ecommerce-frontend#readme">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Murali07/ecommerce-frontend/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Murali07/ecommerce-frontend/issues">Request Feature</a>
  </h4>  
  
  ![home](https://github.com/Murali07/ecommerce-frontend/assets/18513537/d5662af8-c40a-4220-b7fe-79fb17d908c1)

</div>

## 📝 Table of Contents
- [About](#about)
- [Built Using](#built_using)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment) 
- [TODO](#todo)
- [Contact](#contact)
  
## 🧐 About <a name = "about"></a>
A Full-Stack Ecommerce application that built using React, Redux, MongoDB, Nodejs, ExpressJS and JWT Authentication with Stripe payment system that allows admin to create, update and delete products and buyers to save products to cart and purchase via Stripe card payment system. I have used cloudinary for Image Management and socket.io for real-time notifications. Also, I have implemented pagination. 

**Features**
- Login/Signup User Account
- Cart Add/Remove Items
- Purchase products
- Products Pagination
- Product Search
- My Orders
- Admin: Dashboard access to only admin roles
- Admin: Update Order Status
- Admin: Add/Update Products


## ⛏️ Built Using <a name = "built_using"></a>
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [NodeJs](https://nodejs.org/en/)
- [Cloudinary](https://cloudinary.com/)
- [Stripe](https://stripe.com/en-in)
- [Socket.IO](https://socket.io/)

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
Install latest version of npm

- npm
  ```
  npm install npm@latest -g
  ```

### :gear: Installation

1. Clone the project
   ```
   git clone https://github.com/Murali07/ecommerce-backend.git
   ```
2. Go to project directory and Install NPM packages
   ```
   npm install
   ```
3. Create .env file
   
4. Create database at MongoDB Atlas and add url to config.env
   ```
   MONGO_URL="your mongo url"
   CLOUD_NAME="your cloud name"
   CLOUD_API_KEY="your cloud api key"
   CLOUD_API_SECRET="your cloud api secret"
   STRIPE_SECRET="your stripe secret"
   ```
5. Start the application
   ```
   npm run dev
   ```

## 🎈 Usage <a name="usage"></a>

**Creating an Account**

![image](https://github.com/Murali07/ecommerce-frontend/assets/18513537/8cd6c647-05ff-4665-8748-b9e3b93ac32e)


1. Go to Signup page.
   - From the signup page, enter your email and password and click on 'Create account' button.   
   - From Login page, click on the 'create account' link. 
2. Input the necessary fields. 
   - You need to enter the correct email format. (ex: name@example.com)
   - Your password should be at least 6 characters length.
   - Your email and password will be stored in MongoDB database with Bcrypt hash password.
3. You'll be redirected to the home page.

<br />

**Logging In**

![image](https://github.com/Murali07/ecommerce-frontend/assets/18513537/2eb70859-d1d7-45ab-bc91-514096d2cdc1)


1. Go to Login page.
   - By default you will be redirected to Ecommerce home page.
   - From home page click on 'Login' button to go to Login page.
   - From the create account page, click on 'Login' button right top corner (or) click on 'Login' link. 
2. Input the necessary fields and proceed.
   - You can sign in using email and password which is created in the above steps.
   - For admin account use the below credentials to login
   ```
   Email: admin@gmail.com
   Password: 123456
   ```
   - For customers, buyers, and clients accounts, you can create your own account by going to the Create Account page.

<br />   

**User Account Usage**


https://github.com/Murali07/ecommerce-frontend/assets/18513537/50f3b91b-403c-4689-935d-3883316dba56



1. You can view, search, and add products to your cart.
2. You can search by category.
3. You can search by product name by typing in the search bar.
4. You can view the last products (recently added products).
5. You can add products to your shopping cart and order them later.
6. You can increase or decrease the product quantity in your cart.
7. You can buy products by adding your address and card details and making payment with the Stripe API payment system.
8. You can track your order status by clicking on 'My Orders' from the drop-down options on your account.

<br />

**Admin Account Usage**

https://github.com/Murali07/ecommerce-frontend/assets/18513537/a207973a-d732-4e17-adc6-11d81903ac39


1. You will be directed to admin dashboard.
2. You have two drop down options
   - Dashboard
   - Create Product
3. Click on the Dashboard and you have three tabs
   - Products
   - Orders
   - Clients
4. Click on the Products tab, here you can Delete and Edit products.
5. Click on the Orders tab, here you can view and update orders by clicking on 'Mark as Shipped' button.
6. Click on the Clients tab, here you can view the clients account details.
7. Click on the 'Create Product' drop down to create products.
8. You can upload product images using cloudinary image management. Cloudinary provides a cloud-based, end-to-end image and video management solution for websites and mobile apps.


## 🚀 Deployment <a name = "deployment"></a>

- Deploy the front-end and back-end separately, either on platforms like [Vercel](https://vercel.com/)/[Netlify](https://www.netlify.com/) (front-end) and [Render](https://render.com/) (back-end) or any other hosting service you prefer.
- Ensure that the environment variables and sensitive data are handled securely during deployment.

## <img src="https://www.anythingit.net/wp-content/uploads/2020/04/todo.png" width="28" height="auto" /> TODO <a name = "todo"><a />

**1. Frontend: React, Redux, Cloudinary, Socket.IO:**

- Set up your project using Create React App or another preferred method.
- Create components for different parts of your application: product listing, product details, cart, checkout, user profile, etc.
- Implement Redux for managing the application state, including cart items and user authentication status. 
- Cloudinary is used for image management, allowing you to upload, store, and retrieve product images efficiently.
- Socket.IO enables real-time communication, which could be used for features like live chat support or instant notifications to users about order updates.

**2. Backend: Node.js and Express:**

- Set up a Node.js project and initialize it using npm or yarn.
- Create routes and controllers for various functionalities such as product management, user authentication, cart management, and payment processing.
- Implement JWT (JSON Web Tokens) authentication for user login and registration.
- Connect your backend to MongoDB to store user data, product information, cart items, etc.

**3. Database: MongoDB:**

- Design your database schema to store products, users, carts, and orders.
- Use a library like Mongoose to interact with MongoDB from your Node.js application.
- Create models for products, users, carts, and orders, and define their relationships.

**4. Authentication: JWT (JSON Web Tokens):**

- Implement a user authentication system using JWT.
- Allow users to sign up and log in securely, generating tokens upon successful authentication.
- Protect certain routes on your backend using middleware that verifies JWT tokens.

**5. Admin Panel:**

- Implement an admin panel that's protected by authentication.
- Create functionalities for admin to manage products: create, update, and delete products.

**6. Stripe Integration for Payments:**

- Set up a Stripe account and get your API keys.
- Integrate Stripe on the frontend by using Stripe Elements to create a secure payment form.
- Handle the frontend and backend communication for processing payments.
- Create routes and controllers to handle the payment process using the Stripe API.

**7. User Experience:**

- Design a user-friendly and responsive interface for your application.
- Implement features like adding/removing items from the cart, viewing cart contents, and checking out.
- Provide feedback to users about the status of their orders and payments.

**8. Deployment:**

- Deploy your frontend and backend to separate hosting platforms (like Netlify, Vercel, Heroku, etc.) or on a cloud service.
- Configure environment variables to keep sensitive information (API keys, database URLs, etc.) secure.


## :handshake: Contact <a name = "contact"></a>

LinkedIn: https://www.linkedin.com/in/murali-selvaraj/

Project Links:
- Demo: https://idyllic-gaufre-afe0d9.netlify.app/
- Frontend: https://github.com/Murali07/ecommerce-frontend.git
- Backend: https://github.com/Murali07/ecommerce-backend.git


