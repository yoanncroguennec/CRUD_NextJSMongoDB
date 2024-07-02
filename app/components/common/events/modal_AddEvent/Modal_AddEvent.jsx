"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { InputBox, LineUnderInput } from "./StylesModal_AddEvent.jsx";
import InputEmoji from "react-input-emoji";

export default function Modal_AddEvent({ open, setOpen }) {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
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
      const res = await fetch("../api/events", {
        method: "POST",
        body: JSON.stringify(data, text),
      });

      if (!res.ok) {
        throw new Error("Failed to add events");
      }

      const { message } = await res.json();
      alert(message);
      setOpen(!open);
      location.reload();
    } catch (error) {
      console.log("Failed to add events", error);
      alert("Failed to add events");
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} method='POST'>
        {/* <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder='Type a message'
        /> */}
        <input
          className='form-control'
          placeholder="Titre de l'événement"
          {...register("title", { required: true })} // Enregistre le changement de valeur // Cette méthode remplace le "onChange"
        />

        <input
          type='date'
          name='date'
          {...register("date", { required: true })}
        />

        <textarea
          className='form-control'
          placeholder="Description de l'événement"
          {...register("desc", { required: true })}
        />

        <Button type='submit' variant='contained'>
          Envoyez
        </Button>
      </form>
    </Box>
  );
}
