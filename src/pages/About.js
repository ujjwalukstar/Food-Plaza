import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        At Food-Plaza, we're more than just a place to eat; we're a culinary experience that combines passion, creativity, and flavor to provide you with unforgettable moments. Nestled in the heart of Rajpura, we've been serving up delectable dishes since 2023, and we're thrilled to share our culinary journey with you.

        Our Philosophy:
        At Food-Plaza, we believe in the power of food to bring people together. Our dishes are crafted with love, using locally sourced, fresh ingredients to ensure every bite is a celebration of taste. Whether you're a first-time visitor or a regular patron, we aim to make every dining experience a memorable one.
        
        The Cuisine:
        Indulge in a mouthwatering journey through our diverse menu, which features a fusion of flavors from around the world. From savory to sweet, we have something to satisfy every palate. Our chefs are dedicated to creating dishes that excite your taste buds and leave you craving for more.
        
        Ambiance:
        Our restaurant offers a warm and inviting atmosphere, perfect for intimate dinners, family gatherings, or special occasions. The cozy décor and friendly staff create an environment that feels like home.
        
        Community Commitment:
        We're proud to be an integral part of the Rajpura community. Sustainability and supporting local businesses are values we hold dear. We partner with local farmers and suppliers to ensure that our dishes are not only delicious but also eco-friendly.
        
        Catering and Events:
        In addition to our restaurant dining, we offer catering services for special events, such as weddings, parties, and corporate functions. Let us bring our culinary expertise to your next celebration.
        
        </p>
        <br />
        <p>
        Come join us at Food-Plaza and savor the flavors, create memories, and become a part of our food-loving family. We look forward to sharing our passion for food and hospitality with you.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
