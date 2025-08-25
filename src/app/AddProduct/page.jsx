"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imageUrl, setImageUrl] = useState(""); // store uploaded image URL
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const imgbbApiKey = "7016716d0341eb373bc3539c7ae17a0b";
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    try {
      setLoading(true);
      const res = await axios.post(uploadUrl, formData);
      setImageUrl(res.data.data.url); // save the uploaded image URL
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (!imageUrl) {
      alert("Please upload an image first!");
      return;
    }

    try {
      const payload = {
        ...data,
        image: imageUrl,
      };
      console.log(payload);
      const response = await axios.post(
        "http://localhost:5000/api/addproducts",
        payload
      );

      console.log("Product added:", response.data);
      reset();
      setImageUrl("");
      alert("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* File input */}
        <div>
          <input
            type="file"
            accept="image/*"
            className="input w-full"
            onChange={handleImageUpload}
          />
        </div>

        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <input
            type="number"
            placeholder="Quantity"
            className="input input-bordered w-full"
            {...register("quantity", { required: "Quantity is required" })}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>

        {/* Brand */}
        <div>
          <select
            className="select select-bordered w-full"
            {...register("brand", { required: "Brand is required" })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Brand
            </option>
            <option value="Lungi">Lungi</option>
            <option value="Sharee">Sharee</option>
            <option value="Gamsa">Gamsa</option>
          </select>
          {errors.brand && (
            <p className="text-red-500 text-sm">{errors.brand.message}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full"
            {...register("description", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
