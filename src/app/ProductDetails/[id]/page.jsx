"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/productItem/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Product Image */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 md:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold ">{product.title}</h2>
          <p className=" text-lg">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600">
            {product.price} BDT
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              Buy Now
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition">
              Add to Cart
            </button>
          </div>

          <Link href="/AllProduct" className="btn btn-secondary rounded-2xl">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
