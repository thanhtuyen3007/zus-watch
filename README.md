# ZUS Watch - Website Bán Đồng Hồ
A modern e-commerce web application for watch collections, built with React, Redux Toolkit, React Router, and Bootstrap.
This project demonstrates a full-featured product catalog, shopping cart, admin management, and image upload functionality.

## Features:
Product Catalog: Browse collections and detailed product pages.
Shopping Cart: Add, remove, and manage products in your cart (with localStorage persistence).
Admin Panel: Add new products, manage existing products, and upload images.
Image Upload: Upload product images directly to Cloudinary.
Responsive Design: Built with Bootstrap for mobile and desktop.
Routing: Uses React Router v6 for nested and dynamic routes.
State Management: Uses Redux Toolkit for global state (cart, products, images).
## Getting Started:
### Prerequisites
Node.js (v16 or newer recommended)
npm or yarn
### Installation:
1.Clone the repository:
```bash
git clone https://github.com/your-username/zusWatch.git
cd zusWatch
```
2.Install dependencies:
```bash
npm install
#or
yarn install
```
3.Start the mock API server (using json-server):
```bash
npx json-server --watch src/data.json --port 3001
```
4.Start the development server:
```bash
npm start
#or
yarn start
```
5.Open your browser:
Visit http://localhost:3000

## Project Structure:
```bash
src/
├── components/       # Reusable UI components (Product List, Cart Item, Upload Image, etc.)
├── layouts/          # Layout components (Header, Footer, DefaultLayout)
├── Pages/            # Page components (Home, Cart, Admin, ProductIntro, etc.)
├── redux/            # Redux store and slices
├── types/            # TypeScript type definitions
├── data.json         # Mock data for collections and products
└── App.tsx           # Main app and route definitions
```
## Key Technologies:
React (with Hooks)
Redux Toolkit
React Router v6
Bootstrap & React-Bootstrap
Cloudinary (for image uploads)
json-server (for mock API)
Customization:
Cloudinary:
Update your Cloudinary cloud name and upload preset in UploadImage.tsx if you use your own account.

API Endpoints:
Adjust API URLs in components if your backend runs on a different port or path.

## Scripts:
```bash
npm start#Start the React development server
```
```bash
npm run build#Build for production
```
```bash
 npx json-server --watch [data.json](http://_vscodecontentref_/1) --port 3001#Start mock API server
```



## License:
This project is for educational/demo purposes.
Feel free to fork and adapt for your own use!
