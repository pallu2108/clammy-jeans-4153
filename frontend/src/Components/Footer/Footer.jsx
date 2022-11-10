import { Button, Input } from '@chakra-ui/react';
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footerdiv">
      <div className="footermain1">
        <div className="footernvcsb">
          <h2 className="h2ndgbd">OUR POLICIES</h2>
          <p className="pasdbud">Covid-19 Precautions</p>
          <p className="pasdbud">Our Promise</p>
          <p className="pasdbud">Terms & Conditions</p>
          <p className="pasdbud">Customs tariffs and fees</p>
          <p className="pasdbud">Privacy Policy</p>
        </div>
        <div className="footernvcsb">
          <h2 className="h2ndgbd">CORPORATE</h2>
          <p className="pasdbud">Sell With Us</p>
          <p className="pasdbud">Career Opportunities</p>
          <p className="pasdbud">Our Blog</p>
          <p className="pasdbud">Sitemap</p>
        </div>
        <div className="footernvcsb">
          <h2 className="h2ndgbd">HELP</h2>
          <p className="pasdbud">How MeanBuy Works</p>
          <p className="pasdbud">My Orders</p>
          <p className="pasdbud">Exchanges, Returns and Refunds</p>
          <p className="pasdbud">Contact Us</p>
          <p className="pasdbud">FAQ</p>
        </div>
        <div className="footernvcsb">
          <h2 className="h2ndgbd">SELL WITH US</h2>
          <p className="pasdbud">General Information</p>
          <p className="pasdbud">Signup</p>
        </div>
        <div className="footernvcsb">
          <Input
            style={{
              background: 'white',
              width: '150px',
              height: '30px',
            }}
            placeholder="Your Email Address"
          />
          <Button
            style={{ height: '25px', marginLeft: '5px' }}
            colorScheme="orange"
          >
            Subscribe
          </Button>
          <div className="footerimgwbxx">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174883.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
              alt=""
            />
          </div>
          <div className="footerimgwbxx">
            <img
              src="https://cdn-icons-png.flaticon.com/128/349/349221.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/825/825454.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1086/1086741.png"
              alt=""
            />
            <img
              src="https://t3.ftcdn.net/jpg/04/09/12/30/240_F_409123074_t1FkZC1srbMhXyAziSQtzzZjzAxzrlma.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footermain2">
        <h1
          style={{
            fontSize: '16px',
            color: '#f3921f',
            marginLeft: '20px',
          }}
        >
          Meanbuy Is Your One Stop Destination For Online Shopping
        </h1>
        <p
          style={{
            fontSize: '12px',
            marginLeft: '20px',
          }}
        >
          Meanbuy is a comprehensive platform for you to choose how
          you shop, whether it is buying instantly, waiting to save or
          to pick up your order from the store after freezing it.
        </p>
        <p
          style={{
            fontSize: '12px',
            marginLeft: '20px',
            marginTop: '10px',
          }}
        >
          Everyone will agree that it is not easy to go down to the
          market in massive traffic, driving through crowds, all
          striving for the same trendy clothing, expecting in line to
          try on the picked up items in the trial rooms, and finally
          deciding on the product you buy. Some people like to
          personally analyze the product before purchasing it in the
          store. Although some people do not like to shop online,
          others beg to differ by using the internet to do things. For
          all you internet enthusiasts who like online shopping,
        </p>
        <h1
          style={{
            fontSize: '16px',
            color: '#f3921f',
            marginLeft: '20px',
            marginTop: '20px',
          }}
        >
          Get The Best Of Your Online Shopping Experience{' '}
        </h1>
        <p
          style={{
            fontSize: '12px',
            marginLeft: '20px',
          }}
        >
          Keeping mind the fact that everything is just a tap away in
          today's world, fashion and clothing have no escape from the
          cyberspace. Online shopping is made easier with various
          categories and filters that let you get the best result of
          what you're looking for. At Meanbuy.com we specialize in
          categorizing the required fields as per your convenience to
          provide you the best online shopping experience. Categories
          like Online shopping for kids, online shopping for men,
          online shopping for women, online shopping for accessories,
          etc. is curated to make this experience even more
          convenient. Find the Best Online Shopping in Hyderabad only
          at Meanbuy.
        </p>
        <h1
          style={{
            fontSize: '16px',
            color: '#f3921f',
            marginLeft: '20px',
            marginTop: '20px',
          }}
        >
          Meanbuy Let You choose At Your Convenience
        </h1>
        <p
          style={{
            fontSize: '12px',
            marginLeft: '20px',
          }}
        >
          What if you belong to the former kind, where you like to buy
          the product from the shop after analyzing it personally? But
          don't want to miss out on a fantastic product in the
          process? We got your back! At Meanbuy.com, you can freeze
          the product and pick up from your neighboring store without
          the worry of missing the product. Another additional feature
          of this website is, you can wait and save on the products
          you like.
        </p>
      </div>
      <div style={{ height: '30px' }}></div>
    </div>
  );
}
