import { Typography, useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import "moment/locale/fr";

var now = moment();
const currentDate = `${moment(now).format("dddd DD MMMM YYYY")}`;

export default function CurrentDate({}) {
  // Responsives
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Typography
      style={{
        color: "#C3FFFE",
        fontWeight: "bold",
        // textAlign: "center",
      }}
      variant={matches ? "body1" : "h6"}
    >
      {currentDate}
    </Typography>
  );
}
