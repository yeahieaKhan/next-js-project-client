"use client"; // 👈 must be first line
import React, { useEffect, useState } from "react";

export default function Lungi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  console.log(products);
  return <div></div>;
}
