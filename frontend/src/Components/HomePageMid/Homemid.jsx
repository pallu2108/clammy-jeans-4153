import React, { useEffect } from 'react';
import './Homemid.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import HomePagemid from '../../Pages/HomePagemid';

export default function Homemid() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/flash')
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);
  console.log(data);
  return (
    <div className="Homemidmain">
      <div className="firstcrosal">
        <Carousel>
          <div>
            <img
              src="https://d64lkarmo2mrq.cloudfront.net/img/home/international-banner-02.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d64lkarmo2mrq.cloudfront.net/img/home/watch-offer-banner.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d64lkarmo2mrq.cloudfront.net/img/home/turkey-fashion.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d64lkarmo2mrq.cloudfront.net/img/home/made-in-turkey.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d64lkarmo2mrq.cloudfront.net/img/home/34535_new_arrivals.webp"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div style={{ textAlign: 'left', display: 'flex' }}>
        <h1 className="h1asdfvui">Fast moving products</h1>
        <hr
          style={{
            border: '1px solid black',
            width: '950px',
            marginLeft: '10px',
            marginTop: '15px',
          }}
        />
      </div>
      <div className="mainproducts1">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '20px',
          }}
        >
          {data.map((elem) => {
            return <HomePagemid key={elem.name} {...elem} />;
          })}
        </div>
      </div>
    </div>
  );
}
