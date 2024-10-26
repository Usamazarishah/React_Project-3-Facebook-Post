import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import dp from './assets/dp.jpg'
import postImage from './assets/post_img.jpg'
import { SlOptions } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

function Test(){
  return(
    <div className='postContainer'>
      <div className='postHeader'>
        <div className='post-user-details'>
          <img src={dp} alt="" className='postDp' />
          <div className='postName'>
            <h5>Muhammad Usama</h5>
            <span>April 15</span> 
          </div>
        </div>
        <SlOptions className='options-icon'/>
      </div>
      <p className='post-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <img src={postImage} alt="" className='post-photo'/>
      <div className='icon-section'>
        <div className='icons'>
          <FaHeart/>
          <BiSolidLike/>
          <BsEmojiSmileFill/>
          <span>Lorem ipsum and 291 others</span>
        </div>
        <div>55 comments</div>
      </div>
      <div className='footer-section'>
        <span><BiSolidLike/> Like</span>
        <span><GoComment/> Comment</span>
        <span><FaWhatsapp/> Send</span>
        <span><IoIosShareAlt/> Share</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
    <div style={{display:'flex', flexWrap:'wrap', padding:'0 50px'}}>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
      <Test/>
    </div>

    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
