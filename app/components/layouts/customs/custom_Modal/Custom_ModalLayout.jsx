import { Box, Modal } from "@mui/material";
// STYLES
import { BoxModal, stylesIconClose } from "./StylesCustom_ModalLayout";
// ICONS
import { MdClose } from "react-icons/md";

export default function Custom_ModalLayout({
  children,
  open,
  setOpen,
  height,
}) {
  return (
    <Modal open={open}>
      <BoxModal height={height}>
        <Box>
          <MdClose
            color='#F00'
            onClick={() => setOpen(!open)}
            size={40}
            style={stylesIconClose}
          />
        </Box>
        <Box sx={{ justifyContent: "space-between", height: "100%" }}>
          {children}
        </Box>
      </BoxModal>
    </Modal>
  );
}
