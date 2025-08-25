import Link from "next/link";
import React from "react";

export default function Product() {
  const productsData = [
    {
      productId: 1,
      name: "Elegant Red Sharee",
      category: "Sharee",
      description:
        "Bright red traditional female attire, perfect for festivals and weddings.",
      price: 1500,
      currency: "BDT",
      image: "https://i.ibb.co.com/JRXsGR0R/recipe-8-630x785.jpg",
      stock: 10,
    },
    {
      productId: 2,
      name: "Golden Silk Sharee",
      category: "Sharee",
      description:
        "Luxurious silk sharee with golden embroidery, ideal for special occasions.",
      price: 2500,
      currency: "BDT",
      image: "/images/sharee2.jpg",
      stock: 5,
    },
    {
      productId: 3,
      name: "Cotton Printed Sharee",
      category: "Sharee",
      description:
        "Lightweight cotton sharee with vibrant prints for casual wear.",
      price: 900,
      currency: "BDT",
      image: "/images/sharee3.jpg",
      stock: 20,
    },
    {
      productId: 4,
      name: "Designer Blue Sharee",
      category: "Sharee",
      description:
        "Stylish designer sharee in royal blue, suitable for parties and gatherings.",
      price: 2000,
      currency: "BDT",
      image: "/images/sharee4.jpg",
      stock: 8,
    },
    {
      productId: 5,
      name: "Traditional Cotton Lungi",
      category: "Lungi",
      description: "Comfortable cotton lungi for everyday wear.",
      price: 400,
      currency: "BDT",
      image: "/images/lungi1.jpg",
      stock: 25,
    },
    {
      productId: 6,
      name: "Striped Lungi",
      category: "Lungi",
      description:
        "Stylish striped pattern lungi for casual and semi-formal use.",
      price: 550,
      currency: "BDT",
      image: "/images/lungi2.jpg",
      stock: 18,
    },
    {
      productId: 7,
      name: "Silk Lungi",
      category: "Lungi",
      description: "Luxurious silk lungi for special occasions.",
      price: 1200,
      currency: "BDT",
      image: "/images/lungi3.jpg",
      stock: 7,
    },
    {
      productId: 8,
      name: "Checked Cotton Lungi",
      category: "Lungi",
      description: "Soft checked cotton lungi, ideal for home wear.",
      price: 500,
      currency: "BDT",
      image: "/images/lungi4.jpg",
      stock: 30,
    },
    {
      productId: 9,
      name: "Classic White Gamsa",
      category: "Gamsa",
      description: "Soft cotton gamsa for daily use and hygiene.",
      price: 150,
      currency: "BDT",
      image: "/images/gamsa1.jpg",
      stock: 40,
    },
    {
      productId: 10,
      name: "Striped Gamsa",
      category: "Gamsa",
      description: "Durable striped gamsa, perfect for home and travel.",
      price: 180,
      currency: "BDT",
      image: "/images/gamsa2.jpg",
      stock: 35,
    },
    {
      productId: 11,
      name: "Soft Cotton Gamsa",
      category: "Gamsa",
      description: "Highly absorbent soft cotton gamsa for comfort.",
      price: 200,
      currency: "BDT",
      image: "/images/gamsa3.jpg",
      stock: 50,
    },
    {
      productId: 12,
      name: "Colored Gamsa Set",
      category: "Gamsa",
      description: "Set of 3 colorful gamsas, ideal for daily household use.",
      price: 500,
      currency: "BDT",
      image: "/images/gamsa4.jpg",
      stock: 20,
    },
  ];

  console.log(productsData);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <div key={product.productId} className="border rounded shadow p-4">
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="font-bold mt-2">
              {product.price} {product.currency}
            </p>
            <p className="text-xs mt-1 text-gray-500">
              Product ID: {product.productId}
            </p>
            <Link href={`/product/${product.productId}`}>View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
