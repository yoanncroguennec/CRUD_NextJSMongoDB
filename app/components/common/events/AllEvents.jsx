"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
// FUNCTIONS
import CurrentDate from "../../../utils/helpers/functions/CurrentDate";
// ICONS
import { MdOutlineAddCircleOutline } from "react-icons/md";
// STYLES
import { BoxDateCurrent, RootListEvents } from "./StylesAllEvents";
import Link from "next/link";
import Event from "./event/Event";
import { Custom_ModalLayout } from "../../layouts";
import Modal_AddEvent from "./modal_AddEvent/Modal_AddEvent";

export default function AllEvents({ admin }) {
  const [openModal_AddEvent, setOpenModal_AddEvent] = useState(false);
  const handleOpenModal_AddEvent = () => setOpenModal_AddEvent(true);
  const handleCloseModal_AddEvent = () => setOpenModal_AddEvent(false);

  const [openModal_DeleteAllData, setOpenModal_DeleteAllData] = useState(false);
  const handleOpenModal_DeleteAllData = () => setOpenModal_DeleteAllData(true);
  const handleCloseModal_DeleteAllData = () =>
    setOpenModal_DeleteAllData(false);

    const [allData, setAllData] = useState([]);

    useEffect(() => {
      async function getAllData() {
        try {
          const res = await fetch("/api/events");
          if (!res.ok) {
            throw new Error("Error fetching events");
          }

          const { events } = await res.json();
          setAllData(events);
        } catch (error) {
          console.log("Error fetching events");
        }
      }
      getAllData();
    }, []);

  return (
    <RootListEvents>
      <BoxDateCurrent>
        <CurrentDate />
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
              height='400px'
            >
              <Modal_AddEvent
                open={openModal_AddEvent}
                setOpen={setOpenModal_AddEvent}
              />
            </Custom_ModalLayout>
          </Box>
        ) : null}
      </BoxDateCurrent>
      <Event allEvents={allData} admin={admin} />
    </RootListEvents>
  );
};
