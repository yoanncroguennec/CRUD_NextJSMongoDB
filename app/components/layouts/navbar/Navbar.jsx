import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const dataNavbar = [
    {
      title: "Liste des produits",
      url: "/pages/products",
    },
    {
      title: "Liste des événements",
      url: "/pages/events",
    },
  ];

  return (
    <Box>
      <Box>
        {dataNavbar.map(({ title, url }) => (
          <Link href={url} key={url}>
            <Typography variant='h5'>{title}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
