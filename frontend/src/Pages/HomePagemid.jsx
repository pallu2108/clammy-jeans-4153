import React from 'react';
import './HomePagemid.css';

export default function HomePagemid(props) {
  return (
    <div className="maindivbwe">
      <img className="imadsf" src={props.image} alt="" />
      <p style={{ textAlign: 'left' }} className="pasdfb">
        {props.name}
      </p>
      <div style={{ textAlign: 'right' }}>
        <button className="buttonasdf">
          {props.rating}
          <i style={{ marginLeft: '3px' }}>★</i>
        </button>
        <hr style={{ marginTop: '10px' }} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h1 className="pastsdfn">₹{props.price}</h1>
        <p className="pasdiysbd">flat 67% OFF</p>
      </div>
    </div>
  );
}
