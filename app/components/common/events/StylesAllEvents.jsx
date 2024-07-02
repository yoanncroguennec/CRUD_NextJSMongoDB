// Link linear-gradiaent generator : "https://www.joshwcomeau.com/gradient-generator/"
import { Box, styled } from "@mui/material";

export const RootListEvents = styled(Box)(({ theme }) => ({
  backgroundImage:
    "linear-gradient(45deg, hsl(240deg 100% 20%) 0%, hsl(251deg 100% 26%) 11%, hsl(262deg 100% 31%) 22%, hsl(273deg 99% 37%) 33%, hsl(284deg 99% 43%) 44%, hsl(295deg 98% 48%) 56%, hsl(306deg 98% 54%) 67%, hsl(317deg 98% 60%) 78%, hsl(328deg 98% 65%) 89%, hsl(339deg 97% 71%) 100%)", // Link linear-gradiaent generator : "https://www.joshwcomeau.com/gradient-generator/"
  borderRadius: "40px",
  boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  margin: "128px auto",
  height: "500px",
  overflow: "hidden",
  overflowY: "scroll",
  padding: "45px",
  textAlign: "center",
  width: "520px",
  [theme.breakpoints.down("sm")]: {
    padding: "50px 25px",
    width: "80%",
  },
}));

export const BoxDateCurrent = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "no-wrap",
  justifyContent: "space-around",
  paddingBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0px",
  },
}));
