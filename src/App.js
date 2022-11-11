import { useState } from 'react';
import './App.css';
import Card from './card';
import Records from "./records.json";

// sort((a,b) => a.clgname > b.clgname ? 1 : -1).
function App() {

  const [display, setDisplay] = useState(Records);
  const [newsortdata, setNewsortdata] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  // let tempData = [...Records];

  const sortcdrating = () => {
    let newdata;
    let tempdata = [...Records];
    newdata = tempdata.sort((a,b) => a.cdrating < b.cdrating ? 1 : -1);
    setDisplay(newdata)
  }
  const sortuserrating = () => {
    let newdata;
    let tempdata = [...Records];
    newdata = tempdata.sort((a,b) => a.userrating < b.userrating ? 1 : -1);
    setDisplay(newdata)
  }
  const sortfees = () => {
    let newdata;
    let tempdata = [...Records];
    newdata = tempdata.sort((a,b) => b.fees - a.fees);
    setDisplay(newdata)
  }
  const sortascending = () => {
    let newdata;
    let tempdata = [...Records];
    newdata = tempdata.sort((a,b) => a.clgname > b.clgname ? 1 : -1);
    setDisplay(newdata)
  }
  const sortdescending = () => {
    let newdata;
    let tempdata = [...Records];
    newdata = tempdata.sort((a,b) => a.clgname < b.clgname ? 1 : -1);
    setDisplay(newdata)
  }
  

  return (
    <><div className='header'>
      <div className='searchBox'>
            <input type="text" placeholder='Search for Colleges..' className='searchInp' onChange={(e) => {setSearchterm(e.target.value)}} />&nbsp;<i class="fa-solid fa-magnifying-glass" />
        </div>
        <div className='sortBox'>
            <button className='sortBtn' onClick={sortcdrating}>CD Rating&nbsp;<i class="fa-solid fa-arrow-down-wide-short" /></button>
            <button className='sortBtn' onClick={sortuserrating}>User Rating&nbsp;<i class="fa-solid fa-arrow-down-wide-short" /></button>
            <button className='sortBtn' onClick={sortfees}>Fees&nbsp;<i class="fa-solid fa-arrow-down-wide-short" /></button>
            <button className='sortBtn' onClick={sortascending}>Ascending&nbsp;<i class="fa-solid fa-arrow-down-a-z" /></button>
            <button className='sortBtn' onClick={sortdescending}>Descending&nbsp;<i class="fa-solid fa-arrow-down-z-a" /></button>&nbsp;&nbsp;
        </div>
    </div>

    <div className='card-wrapper'>
      {
        display.filter((value) => {
          if (searchterm === "")
              {return value}
          else if (value.clgname.toLowerCase().includes(searchterm.toLowerCase()))
              {return value}
            })
        .map(value => 
          (
            <Card data={value} key={value.id} />
          )
        )
      }
    </div>
    </>
  );
}

export default App;
