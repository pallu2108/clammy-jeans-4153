import './Navbar.css';
import img_1 from '../../Images/img_1.png';
import React from 'react';

export default function Navbar() {
  const handlechange = () => {
    alert('hello ajay');
  };
  return (
    <div className="div">
      <div className="maindiv">
        <div className="firstnavdiv">
          <img className="img_1" src={img_1} alt="" />
          <input type="text" placeholder="Search.." />
          <button>
            <img
              className="img_2sdf"
              src="https://cdn-icons-png.flaticon.com/128/2811/2811790.png"
              alt=""
            />
          </button>
        </div>
        <div style={{ display: 'flex', marginTop: '20px',marginLeft:"300px"}}>
          <p className="ptagdub">
            Seller's Corner | Feedback | Blog | Delivery Info
          </p>
          <div style={{ marginLeft: '30px' }}>
            <div style={{ display: 'flex' }}>
              <a href="">Login</a>&ensp;/&ensp;<a href="">SignUp</a>
            </div>
            <div style={{ fontWeight: 'bolder' }}>Welcome Guest</div>
          </div>
        </div>
        <button onClick={handlechange}>
          <img
            style={{
              marginTop: '20px',
              width: '45px',
              marginLeft: '20px',
              height: '45px',
            }}
            src="https://cdn-icons-png.flaticon.com/128/1972/1972372.png"
            alt=""
          />
        </button>
      </div>
      fgg
    </div>
  );
}
