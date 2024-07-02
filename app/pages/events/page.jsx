"use client"

import { useState } from "react";
import AllEvents from "@/app/components/common/events/AllEvents";
import { Box } from "@mui/material";

export default function Events() {
  const [admin, setAdmin] = useState(true)
  return (
    <Box>
      <AllEvents admin={admin} />
    </Box>
  );
}
