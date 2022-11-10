import React from 'react'
import './card.css';
import logo from "./img/niet-logo.png";
import Records from "./records.json";

function Card() {
  return (
  <>
  {
    Records && Records.map( record => {
      return(
        <div className="card" key={record.id}>
      <div className='imgSec'>

        <div className='cdBar'>
          <div className='imgvidCount'>
            <i class="fa-regular fa-image imgicon" />
            <span>424</span>
          </div>
          <div className='imgvidCount'>
            <i class="fa-brands fa-youtube vidicon" />
            <span>158</span>
          </div>
          <div className='cdratIco'>
            <i class="fa-solid fa-ranking-star"></i>
          </div>
          <div className='cdRating'>
            <span>COLLEGEDUNIA RATING</span>
            <h3>7.5/10</h3>
          </div>
        </div>

        <div className='nameBar'>
          <h1>{record.clgname}</h1>
        </div>

      </div>

      <div className='logoSec'>
        <div className='logo'>
          <img src={logo} alt="LOGO" />
        </div>
        <div className='city'>
          <span>
            <i class="fa-solid fa-location-dot" />
            Greator Noida, Uttar Pradesh
          </span>&nbsp;
          <span>
            <i class="fa-solid fa-circle-check" />
            AICTE, NBA
          </span>
        </div>        
      </div>

      <div className='feesSec'>
        <div className='sec1'>
          <h2>₹ 1,59,300</h2>
          <span>BE/B.TECH - FIRST YEAR FEES</span>
        </div>
        <div className='sec1 leftBorder'>
          <h2>7.8 / 10</h2>
          <span>BASED ON 226 USER REVIEWS</span>
        </div>
      </div>

      <div className='rankSec'>
        <div className='rank'>
          <span>RANKED 1 OUT OF 300</span><br/>
          <strong>NIRF</strong>
        </div>
        <div className='rank'>
          <span>RANKED 26 OUT OF 216</span><br/>
          <strong>The Week</strong>
        </div>
        <div className='rank'>
          <span>RANKED 26 OUT OF 216</span><br/>
          <strong>NIRF</strong>
        </div>
        
      </div>

      <div className='linkSec'>
        <span>Admission 2022</span>
        <span>Reviews</span>
        <span>Courses & Fees</span>
      </div>

      <div className='btnSec'>
        <button className='btnOrange btnBottom'><i class="fa-solid fa-file-export" />Apply Now</button>
        <button className='btnWhite btnBottom'><i class="fa-solid fa-download" />Brochure</button>
      </div>
    </div>

      )
    })
  }
    
  </>   
  )
}

export default Card;