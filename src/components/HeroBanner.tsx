import { Box, Typography, Stack, Button } from "@mui/material";

function HeroBanner() {
  return (
    <Box
      position="relative"
      p="20px"
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    >
      <Typography fontWeight="600" fontSize="26px" color="#ff2625">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mt="30px"
        mb="23px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        color="#ff2625"
        fontSize="200px"
        fontWeight="700"
        mt="10px"
        sx={{ opacity: "0.1", display: { xs: "none", lg: "block" } }}
      >
        Exercise
      </Typography>
      <img
        className="hero-banner-img"
        src="/assets/images/banner.png"
        alt="hero-banner-img"
      />
    </Box>
  );
}

export default HeroBanner;
