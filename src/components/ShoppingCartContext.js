import React, { createContext, useState } from "react";
import angelFish from "../images/Angel-Fish.jpeg";
import bettaFish from "../images/Betta-Fish.jpeg";
import corydorasCatfish from "../images/Corydoras-Catfish.jpeg";
import guppy from "../images/Guppy.webp";
import goldfish from "../images/goldfish.jpeg";
import neontatra from "../images/Neon-Tetra.webp";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Betta Fish",
      quantity: 0,
      imageUrl: bettaFish,
      price: 12.99,
      description:
        "Vibrant Betta fish, known for their striking colors and elegant fins.",
    },
    {
      id: 2,
      name: "Goldfish",
      quantity: 0,
      imageUrl: goldfish,
      price: 15.99,
      description:
        "Classic Goldfish, a popular and hardy pet with a variety of color patterns.",
    },
    {
      id: 3,
      name: "Neon Tetra",
      quantity: 0,
      imageUrl: neontatra,
      price: 22.99,
      description:
        "Bright Neon Tetra, famous for their vivid blue and red stripes, perfect for community tanks.",
    },
    {
      id: 4,
      name: "Angelfish",
      quantity: 0,
      imageUrl: angelFish,
      price: 9.99,
      description:
        "Elegant Angelfish, known for their unique shape and variety of patterns.",
    },
    {
      id: 5,
      name: "Guppy",
      quantity: 0,
      imageUrl: guppy,
      price: 29.99,
      description:
        "Colorful Guppies, small and vibrant, known for their easy care and breeding.",
    },
    {
      id: 6,
      name: "Corydoras Catfish",
      quantity: 0,
      imageUrl: corydorasCatfish,
      price: 18.99,
      description:
        "Friendly Corydoras Catfish, a peaceful bottom-dweller perfect for community aquariums.",
    },
  ]);

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Update the product quantity in the products state
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter((item) => item.id !== productId);
      }
    });

    // Update the product quantity in the products state
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p
      )
    );
  };

  const updatePaymentDetails = (details) => {
    setPaymentDetails(details);
  };

  const updateShippingDetails = (details) => {
    setShippingDetails(details);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        products,
        setProducts,
        addToCart,
        removeFromCart,
        paymentDetails,
        updatePaymentDetails,
        shippingDetails,
        updateShippingDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
