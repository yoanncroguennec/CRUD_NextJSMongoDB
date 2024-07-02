"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ViewProduct = ({ id }) => {
  const { register } = useForm({
    defaultValues: async () => {
      const { product } = await getProduct(id);
      return product;
    },
  });

  const getProduct = async (id) => {
    try {
      const res = await fetch(`../api/products/${id}`);
      if (!res.ok) {
        throw new Error("Failed to get product");
      }

      return await res.json();
    } catch (error) {
      alert("Failed to get product");
    }
  };

  return (
    <div>
      <h4 className="mb-2">View Product</h4>
      <div className="mb-2">
        <div className="row">
          <div className="col-md-6">
            <form method="POST">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  className="form-control"
                  {...register("title", {
                    disabled: true,
                  })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  {...register("description", { disabled: true })}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  className="form-control"
                  {...register("price", { disabled: true })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
