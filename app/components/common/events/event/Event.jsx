import Link from "next/link";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
        const res = await fetch(`../api/products/${id}`, {
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
        const { _id, title, description, price } = individualEvent;

        return (
          <RootEvent key={i}>
            <Box>
              <Typo_Event_Completed variant='h6'>{title}</Typo_Event_Completed>
              <>
                <Typo_Event_Not_Completed variant={matches ? "body2" : "h6"}>
                  {description.substring(0, 40).concat("...")}
                </Typo_Event_Not_Completed>
                <Typography variant={matches ? "body2" : "h6"}>
                  {/* {dateOfEvent_formatedLocal} */}
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
                  <PiPencilLineDuotone color='#FFF' size={35} />
                </StylesBtnAction>
                <StylesBtnAction onClick={() => handlerDelete(_id)}>
                  <MdOutlineDeleteForever color='#F00' size={35} />
                </StylesBtnAction>
              </BoxBtnsActions>
            ) : (
              ""
            )}
            {/* <div className='d-flex gap-1'>
                <Link
                  className='btn btn-info btn-sm'
                  href={`../view/${individualEvent?._id}`}
                >
                  View
                </Link>
                <Link
                  className='btn btn-warning btn-sm'
                  href={`../edit/${individualEvent?._id}`}
                >
                  Edit
                </Link>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => handlerDelete(individualEvent?._id)}
                >
                  Trash
                </button>
              </div> */}
          </RootEvent>
        );
      })}
    </>
  );
};
