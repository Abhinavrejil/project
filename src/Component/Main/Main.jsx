import React, { useState } from 'react'
import './Main.css'
import { BsSearch } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
import { BiCart } from "react-icons/bi"
import { Link } from 'react-router-dom'
import Body from '../Body/Body'
import Details from '../Details'
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import { apiData } from '../Api/AbhiraApi'
import Search from '../Search'
const Main = () => {

const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);

const [productDetails,setProductDetails]=useState(null);

const [activeNav,setActiveNav]=useState(0);

const handleNavigationClick=(index)=>{
    setActiveNav(index)
}



const handleSearch = () => {
    // Ensure that the search query is not empty or consists only of spaces
    if (searchQuery.trim() !== '') {
      // Convert the search query to lowercase for case-insensitive search
      const lowerCaseQuery = searchQuery.toLowerCase();
  
      // Use filter to find items that match the search query
      const results = apiData.filter((item) => {
        const itemTitle = item.title.toLowerCase();
        const itemCategory = item.category.toLowerCase();
        const itemType = item.type.toLowerCase();
  
        return itemTitle.includes(lowerCaseQuery) || itemCategory.includes(lowerCaseQuery) || itemType.includes(lowerCaseQuery);
      });
  
      // Update the UI with the search results
      setSearchResults(results);
  
      // Set the active navigation to the search results page (assuming 7 represents it)
      setActiveNav(3);
    }
  };
  
    return (
        <div>

            <div className='nav'>
                <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>

                <div className='main-div'>
                    <div className="navbar-container">
                        <div className='nav-logo'>Abhira</div>
                        <div className='nav-content'>
                            <div className="content"><button className='btn' onClick={()=>handleNavigationClick(0)} >Home</button></div>


                            <div className="content">
                                
                                <button className='btn'onClick={()=>handleNavigationClick(2)} >Shop</button> 
                            </div>


                            <div className="content">
                                <button className='btn'>Pages</button>
                            </div>

                            <div className="content">
                                <button className='btn'>AboutUs</button>
                            </div>
                            <div className="content">
                                <button className='btn'>Looksup</button>
                            </div>
                        </div>

                        <div className='search-button'>
                            <input type="text" placeholder="Search saylor" value={searchQuery} />
                            <span><BsSearch onClick={handleSearch}/></span>

                        </div>

                        <div className="person-cart-icon">
                            <div class="drpdown">
                                <button className="drp-button"><BsPerson style={{ fontSize: 26, color: ' black' }} className='profile-icon' /></button>
                                <div className="drpdown-content">
                                    <a href="#">SignUp</a>
                                    <a href="#">Signin</a>
                                </div>
                            </div>
                            <div className='cart-icon'>
                                <button className='cart'>
                                    <BiCart style={{ fontSize: 26, color: ' black' }} />
                                </button>
                            </div>
                        </div>


                        <div className='nav-cartprofile'></div>
                    </div>
                </div>

            </div>
            {/* <div><Body /></div> */}
            <div>
            {activeNav===0 && <Body setActiveNav={setActiveNav} setProductDetails={setProductDetails}/>}
            {activeNav ===1 && <Details productDetails={productDetails}/>}
            {activeNav ===2 && <Shop />}
            {activeNav ===3 && <Search searchQuery={searchQuery} searchResults={searchResults}/>}
            </div>
        </div>
    )
}

export default Main