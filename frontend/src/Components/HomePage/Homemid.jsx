import React, { useEffect } from "react";
import "./Homemid.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import HomePagemid from "../../Pages/HomePagemid";
import Navbar from "../Navbar/Navbar";
import { Box, Heading } from "@chakra-ui/react";
import Slider from "../slider/Slider";

export default function Homemid() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://truebuy.onrender.com/products")
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);
  console.log(data);
  return (
    <div className="Homemidmain">
      <Navbar />
      <Slider />
      <Box style={{ textAlign: "left", display: "flex" }}>
        <Heading fontSize={"20px"} className="h1asdfvui">
          Fast moving products
        </Heading>
        <hr
          style={{
            border: "1px solid black",
            width: "950px",
            marginLeft: "10px",
            marginTop: "15px",
          }}
        />
      </Box>
      <div className="mainproducts1">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {data.map((elem) => {
            return <HomePagemid key={elem.name} {...elem} />;
          })}
        </div>
      </div>
      <Box style={{ textAlign: "left", display: "flex" }}>
        <Heading fontSize={"20px"} className="h1asdfvui">
          Fast moving products
        </Heading>
        <hr
          style={{
            border: "1px solid black",
            width: "950px",
            marginLeft: "10px",
            marginTop: "15px",
          }}
        />
      </Box>
      <Box style={{ textAlign: "left", display: "flex" }}>
        <Heading fontSize={"20px"} className="h1asdfvui">
          Fast moving products
        </Heading>
        <hr
          style={{
            border: "1px solid black",
            width: "950px",
            marginLeft: "10px",
            marginTop: "15px",
          }}
        />
      </Box>
    </div>
  );
}
