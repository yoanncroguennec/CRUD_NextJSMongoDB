"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import AllEvents from "./components/common/events/AllEvents";

export default function Home() {
  const [admin, setAdmin] = useState(true);

  return (
    <Box>
      <div>
        <AllEvents admin={admin} />
      </div>
    </Box>
  );
}
