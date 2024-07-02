"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
// FUNCTIONS
// import CurrentDate from "@/app/utils/helpers/functions/CurrentDate";
// ICONS
import { MdOutlineAddCircleOutline } from "react-icons/md";
// STYLES
import { BoxDateCurrent, RootListEvents } from "./StylesAllEvents";
import Link from "next/link";
import Event from "./event/Event";
import { Custom_ModalLayout } from "../../layouts";
import Modal_AddEvent from "./modal_AddEvent/Modal_AddEvent";

export default function AllProducts({ admin }) {
  const [openModal_AddEvent, setOpenModal_AddEvent] = useState(false);
  const handleOpenModal_AddEvent = () => setOpenModal_AddEvent(true);
  const handleCloseModal_AddEvent = () => setOpenModal_AddEvent(false);

  const [openModal_DeleteAllData, setOpenModal_DeleteAllData] = useState(false);
  const handleOpenModal_DeleteAllData = () => setOpenModal_DeleteAllData(true);
  const handleCloseModal_DeleteAllData = () =>
    setOpenModal_DeleteAllData(false);

  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Error fetching products");
        }

        const { products } = await res.json();
        setAllEvents(products);
      } catch (error) {
        console.log("Error fetching products");
      }
    }
    getAllProducts();
  }, []);
  return (
    <RootListEvents>
      <BoxDateCurrent>
        {/* <CurrentDate /> */}
        {admin ? (
          <Box sx={{ display: "flex", flexWrap: "no-wrap" }}>
            <MdOutlineAddCircleOutline
              onClick={handleOpenModal_AddEvent}
              style={{ cursor: "pointer" }}
              size={45}
            />

            <Custom_ModalLayout
              open={openModal_AddEvent}
              setOpen={setOpenModal_AddEvent}
              height='300px'
            >
              <Modal_AddEvent />
            </Custom_ModalLayout>
          </Box>
        ) : null}
      </BoxDateCurrent>
      <Event allEvents={allEvents} admin={admin} />
    </RootListEvents>
  );
};
