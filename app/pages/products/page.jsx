"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import AllProducts from "../../components/common/products/AllProducts";

export default function Products() {
  const [admin, setAdmin] = useState(true);

  return (
    <Box>
      <AllProducts admin={admin} />
    </Box>
  );
}
