import { Box, styled } from "@mui/material";

export const BoxModal = styled(Box)(({ height }) => ({
  // alignItems: "center",
  background: "rgba(255, 255, 255, 0.10)",
  backdropFilter: "blur(50px)",
  border: "none",
  // border: "2px solid #000",
  borderRadius: "25px",
  // boxShadow: 24,
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  height: height,
  justifyContent: "space-between",
  left: "50%",
  padding: 15,
  position: "absolute",
  textAlign: "center",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
}));

export const stylesIconClose = {
  cursor: "pointer",
  position: "absolute",
  right: 40,
};
