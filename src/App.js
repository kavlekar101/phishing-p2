import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUs from "./components/ContactUs";
import ProductsPage from "./components/ProductsPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import PaymentEntry from "./components/PaymentEntry";
import ShippingEntry from "./components/ShippingEntry";
import ViewOrder from "./components/ViewOrder";
import ViewConfirmation from "./components/ViewConfirmation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";

function App() {
  return (
    <Router>
      <ShoppingCartProvider>
        {/* Wrap your components with ShoppingCartProvider */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/purchase" element={<ProductsPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
          <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
          <Route path="/purchase/viewOrder" element={<ViewOrder />} />
          <Route path="/purchase/viewConfirmation" element={<ViewConfirmation />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </Router>
  );
}

export default App;
