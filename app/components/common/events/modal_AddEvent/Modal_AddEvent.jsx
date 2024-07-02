import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { InputBox, LineUnderInput } from "./StylesModal_AddEvent.jsx";

export default function Modal_AddEvent() {
  // Responsives
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("../api/products", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      const { message } = await res.json();
      alert(message);
    } catch (error) {
      console.log("Failed to add product", error);
      alert("Failed to add product");
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          className='form-control'
          {...register("title", { required: true })} // Enregistre le changement de valeur // Cette méthode remplace le "onChange"
        />

        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <textarea
          className='form-control'
          {...register("description", { required: true })}
        />

        <label htmlFor='price' className='form-label'>
          Price
        </label>
        <input
          className='form-control'
          {...register("price", { required: true })}
        />
        <Button type='submit' variant='contained'>
          Envoyez
        </Button>
        <div className='mb-3 text-end'>
          <input type='submit' className='btn btn-primary' />
        </div>
      </form>
    </Box>
  );
}
