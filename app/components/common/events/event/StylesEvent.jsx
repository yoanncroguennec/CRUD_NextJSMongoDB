import { Box, styled, Typography } from "@mui/material";

export const RootEvent = styled(Box)(({ theme }) => ({
  background: "#0f056b",
  border: "2px solid #FFF",
  borderRadius: "40px",
  color: "#FFF",
  display: "flex",
  flexDirection: "no-wrap",
  justifyContent: "space-between",
  margin: "10px",
  padding: "10px 40px",
  [theme.breakpoints.down("sm")]: {
    margin: "5px",
    padding: "5px 15px",
  },
}));

export const Typo_Event_Completed = styled(Typography)({
  // textDecoration: "line-through",
  textDecorationColor: "#F00",
  textDecorationThickness: "4px",
});

export const Typo_Event_Not_Completed = styled(Typography)({});

export const BoxBtnsActions = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

export const StylesBtnAction = styled(Box)({
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  margin: "4px",
});
