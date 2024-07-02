import Link from "next/link";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import "moment/locale/fr";
// ICONS
import { PiPencilLineDuotone } from "react-icons/pi";
import {
  MdOutlineDeleteForever,
  MdOutlineRadioButtonUnchecked,
  MdOutlineCheckCircle,
} from "react-icons/md";
// STYLES
import {
  BoxBtnsActions,
  RootEvent,
  StylesBtnAction,
  Typo_Event_Completed,
  Typo_Event_Not_Completed,
} from "./StylesEvent";

export default function Event({ allEvents, admin }) {
  // Responsives
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Functions
  const handlerDelete = async (id) => {
    if (confirm("Are you sure you want to delete")) {
      try {
        const res = await fetch(`../api/events/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Couldn't delete");
        }
        location.reload();
        const { message } = await res.json();
        alert(message);
      } catch (error) {
        alert("Error deleting");
      }
    }
  };

  return (
    <>
      {allEvents.map((individualEvent, i) => {
        const { _id, title, desc, dateOfEvent } = individualEvent;

            const dateOfEvent_formatedLocal = `${moment(dateOfEvent).format(
              "dddd DD MMMM YYYY"
            )}`;

        return (
          <RootEvent key={i}>
            <Box>
              <Typo_Event_Completed variant='h6'>{title}</Typo_Event_Completed>
              <>
                <Typo_Event_Not_Completed variant={matches ? "body2" : "h6"}>
                  {desc}
                  {/* {desc.substring(0, 40).concat("...")} */}
                </Typo_Event_Not_Completed>
                <Typography variant={matches ? "body2" : "h6"}>
                  {dateOfEvent_formatedLocal}
                </Typography>
                {/* <Typography variant="h6">Créé le : {createdAt} </Typography> */}
              </>
              {/* // )} */}
            </Box>

            {admin ? (
              <BoxBtnsActions>
                <StylesBtnAction
                  onClick={() => handleCompleteEvent(_id)}
                ></StylesBtnAction>

                <StylesBtnAction onClick={() => handlerDelete(_id)}>
                  <PiPencilLineDuotone color='#FFF' size={30} />
                </StylesBtnAction>
                <StylesBtnAction onClick={() => handlerDelete(_id)}>
                  <MdOutlineDeleteForever color='#F00' size={30} />
                </StylesBtnAction>
              </BoxBtnsActions>
            ) : (
              ""
            )}
          </RootEvent>
        );
      })}
    </>
  );
};
