import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="30px" px="40px" pt="20px" sx={{ alignItems: "center" }}>
        <img src={Logo} alt="logo" width="200px" height="40px" loading="lazy" />
        <Typography variant="h5" mb="30px">
          Made with ❤️ By Abhishek Holani.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
