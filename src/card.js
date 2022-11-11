import React from 'react'
import './card.css';
// import Header from './header';
import logo from "./img/niet-logo.png";
// import Records from "./records.json";

const Card = ({data}) =>{
  return (
    <div className="card" key={data.id}>
        <div className='imgSec'>
  
          <div className='cdBar'>
            <div className='imgvidCount'>
              <i class="fa-regular fa-image imgicon" />
              <span>{data.imgcount}</span>
            </div>
            <div className='imgvidCount'>
              <i class="fa-brands fa-youtube vidicon" />
              <span>{data.vidcount}</span>
            </div>
            <div className='cdratIco'>
              <i class="fa-solid fa-ranking-star"></i>
            </div>
            <div className='cdRating'>
              <span>COLLEGEDUNIA RATING</span>
              <h3>{data.cdrating}/10</h3>
            </div>
          </div>
  
          <div className='nameBar'>
            <h1>{data.clgname}</h1>
          </div>
  
        </div>
  
        <div className='logoSec'>
          <div className='logo'>
            <img src={logo} alt="LOGO" />
          </div>
          <div className='city'>
            <span>
              <i class="fa-solid fa-location-dot" />
              {data.city}, Uttar Pradesh
            </span>&nbsp;
            <span>
              <i class="fa-solid fa-circle-check" />
              AICTE, NBA
            </span>
          </div>        
        </div>
  
        <div className='feesSec'>
          <div className='sec1'>
            <h2>₹&nbsp;{data.fees}</h2>
            <span>{data.course}&nbsp;-&nbsp;FIRST YEAR FEES</span>
          </div>
          <div className='sec1 leftBorder'>
            <h2>{data.userrating}&nbsp;/&nbsp;10</h2>
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
  );
}

export default Card;