import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="images/hero1.jpg"
            alt="hero"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div>
          <img
            src="images/hero2.jpg"
            alt="hero"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div>
          <img
            src="images/hero3.jpg"
            alt="hero"
            style={{ display: "block", width: "100%" }}
          />
        </div>
      </Slider>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h1">Welcome to the shop!</Typography>
      </Box>
    </>
  );
};

export default HomePage;
