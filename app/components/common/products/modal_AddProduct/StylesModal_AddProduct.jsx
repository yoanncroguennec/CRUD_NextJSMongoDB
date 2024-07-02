import { Box, styled } from "@mui/material";

export const InputBox = styled(Box)(({ theme }) => ({
  margin: "20px",
  position: "relative",
  width: "250px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const LineUnderInput = styled(Box)(({ theme }) => ({
  background: "#FF69B4",
  bottom: 0,
  left: 0,
  height: "2px",
  overflow: "hidden",
  position: "absolute",
  width: "100%",
  "&::before": {
    content: "''",
    background: "#FF69B4",
    left: "-100%",
    height: "100%",
    position: "absolute",
    transition: "0.5s",
    width: "100%",
  },
}));
