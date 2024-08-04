import React from 'react'
import headShot from '../assets/Images/headShot.jpg';
import homeData from '../Home.json'
import './Home.css'
import { Social } from './Social';
export const HomePage = () => {
  const downloadCv = () => {
    window.open(`${process.env.PUBLIC_URL}/Najam-Ul-Hassan -CV.pdf`);
  };
  return (
    <>
      <div className="main">
        <Social />
        {homeData.map((v, i) => {
          return (
            <div className="headData" key={i}>
              <h3>{v.h3}</h3>
              <h1>{v.name}</h1>
              <h3>{v.about}</h3>
              <h5>{v.description}</h5>
              <button onClick={downloadCv}>{v.button}</button>
            </div>
          )
        })}
        <div className="headShot">
          <img src={headShot} alt="" />
        </div>
      </div>


    </>
  )
}
