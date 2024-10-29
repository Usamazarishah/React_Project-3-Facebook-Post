import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import dp from './assets/dp.jpg'
import postImage from './assets/post_img.jpg'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'

function Test(Props){
  console.log('props=>',Props.postDiscription);

  return(
    <div className='postContainer'>
      <div className='postHeader'>
        <div className='post-user-details'>
          <img src={Props.postDp} alt="" className='postDp' />
          <div className='postName'>
            <h5>{Props.name}<LuDot style={{marginTop:'10px'}}/> <a href="">Follow</a></h5>
            <span>{Props.postTime}<BsDot/><TiWorld className='world-icon'/></span> 
          </div> 
        </div>
        <div className='header-icon'>
           <BiDotsHorizontalRounded />
           <MdClose />
        </div>
       
      </div>
      <p className='post-para'>{Props.postDiscription} </p>
      {Props.type =='image' ? <img src={Props.postImage} alt="" className='post-photo'/> : Props.type == 'video' ? <video src={Props.postImage} width='100%' controls muted={false}/> : null }
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
    <div style={{display:'flex', flexDirection:'column'}}>
      <Test name='Muhammad Usama' postImage={postImage} postDp={dp}
       postTime='April 15'
       postDiscription='Lorem ipsum dolor, sit amet consectetur adipisicing elit...'
       type='image'
      />
      <Test name='Startup Karachi' 
       postTime='3 days ago'
       postDiscription='A vibrant New York-style food street has opened in DHA, Karachi, featuring an ambiance designed to resemble the iconic streets of NYC. This exciting new destination offers a variety of delights, from food trucks to trendy eateries, all set against a backdrop of creativity. Residents and visitors can enjoy a unique dining experience that combines local flavors with the essence of New York’s culinary scene.' 
       postImage='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/464008396_430541183403521_2212593012187716831_n.jpg?stp=dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFuW3aqksMSkGMbsDjWOH3390QDMKTy26n3RAMwpPLbqQaoJ2huyp6P6zLbt7Uchja9Pk9VLy-ZNT76qmqyp4Zj&_nc_ohc=vQrkSkC5FuQQ7kNvgHekcPz&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=ACw1i0yc8B9mszeQItzan0H&oh=00_AYAehmzzSXyjQ62AKR7GVH8rmwEICya7-Wx22mWYFrZ6XA&oe=67242089'
       postDp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqc7fcD6U6t_0Awch8OR-3jA5LLFUQRWSAw&s'
       type='image'
       />
      <Test name='Fazal Ghani'
       postTime='October 10 at 11:34 PM'
       postImage='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/462365571_122176857410241318_3065211222916837843_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEeN_L-3FR8WnCC9MaoL7v9dZmP5uKzAJR1mY_m4rMAlIIdk8qf0Igukqo9waA-Y3dPNiQqfeexG3oXJh34SULj&_nc_ohc=0XxV7JoiC7EQ7kNvgHXZzMF&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=Acgq1PFSzxB2UEqmvL0_nXz&oh=00_AYAuBSArK5at-Wf8k2zUqckd1TpmlKxlWVIFnlXLTrYloQ&oe=67242253'
       postDp='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-1/275285659_1161749917965766_3399786432285456156_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFtrIUzRtdA9ILOiSx6m9FxQUkLMn6NGs1BSQsyfo0azWNocfmMe28JZEWgDzNc596wemVQiYrnkM9QKtrMWs6X&_nc_ohc=J1RswhXQc44Q7kNvgF8jDJt&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=AsHz9PnZmVjoefwSJEBloLY&oh=00_AYBXuYWBhHISff4O0bRzxdBM7bt5nn43P_7Ylrs8RMUcUQ&oe=672440DE'
       type='image'
       />
      <Test name='Crazy Mood'
       postTime='4 hours ago'
       postDp='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/435112679_122095577708283211_1461756018362719407_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFBHIb8RvFuzFl5IKdPhGHjCxirqtKZrC4LGKuq0pmsLhNpCh-_pCZGWFAPs2pQ8k5ghsuRJ73-MnJSdYVA1gDO&_nc_ohc=Z1imm6VFmIYQ7kNvgFFE8mv&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=ASGwWo3pev6CnHH8bBzhU9t&oh=00_AYCT5iXIvIhgLtQ0QgSEwqSuZWdGpnTPsh55yFICZ2zLpw&oe=67244554'
       postImage='https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-6/464422808_122149827680283211_980878153980118740_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOz_SIPbog2k0PkS2KEwNJYbprLGGkj_JhumssYaSP8vPbJY-I0oXOCzSWqtNR-6_lpqzz88xsShwGF6ZwSgrR&_nc_ohc=tBc2N-HdVU0Q7kNvgFc6b2x&_nc_ht=scontent.fkhi4-4.fna&_nc_gid=AmNy9AaQvixLQWthSfX9mnF&oh=00_AYABlXvLfRT5ChvCeCy3j1loec9Z1iWK7WMSs-Nz2I1prw&oe=67244A28'
       type='image'
      />
      <Test name='Allen Roy'
       postTime='a day ago'
       postDp='https://images.generated.photos/1kim4kDxVGZiKYyg2qZ4-5Z2L-_xiuQlHU0O0DfyAa4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDg4MzI5LmpwZw.jpg'
       postImage={video1} 
       type='video'
      />
      <Test name='Jasper Adkins'
       postTime='30 minutes ago'
       postDp='https://images.generated.photos/SU7HUEmteW8qL1q20VjA3ND0nTj4OpaQG5DCdhWAJd0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDM5MzM4LmpwZw.jpg'
       postImage={video2}
       type='video'
      />
      <Test name='Visit Melbourne'
       postTime='September 4'
       postDp='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/419803434_767400015424130_4916268589028019724_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkTAT-QTdqXmd_DB4vAmnDE1hDwCvufBcTWEPAK-58FzHuhHP0Be_lMn9gQoCYns_cUnmWjIec9S_jp_NEkInG&_nc_ohc=WM1wjrvHWlsQ7kNvgEQZDnS&_nc_zt=23&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=AtdYLNyEE7f2ZqNmtwI9XVo&oh=00_AYDWmDDFDitzlscpXeyAN8OnFSAnvdd8E78o4NgAVTUI2Q&oe=67255E45'
       postDiscription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti explicabo quos provident?'/>
      <Test name='Life Thougths'
       postTime='March 15'
       postDp='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-1/452043115_1054966843295496_31750210608095804_n.jpg?stp=c236.402.968.969a_dst-jpg_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEc-XkPY6mxuLDwZ1yevjs7a4iCXRXSK1lriIJdFdIrWYDCPaRrNJNFTFeQ9NMJhppSZafcgZDjJrewVaUgec7_&_nc_ohc=7VljKMue_LoQ7kNvgG4ZIqW&_nc_zt=24&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=AuWetQa7dQThv0CjEqbCNYq&oh=00_AYAaClaI4yzZ_L1XgX6KuoXU3vHOdxWjbLoCW_G9G6mZIQ&oe=67245C71'
       postDiscription='Dont lose your sleep for people who sleep hapily after hurting you.'
      />
      <Test name='Shahbaz Ahmad'
       postDp='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/460364926_499369753069635_7741611374976516546_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFtTptDlXKwb8dUwtwLQfQaNKiBcRWs3Rw0qIFxFazdHGIprq13qfkEsnFNAsA_XPkVPwDvr-C5UpJKoeXq_aut&_nc_ohc=ax9TA4aKFeUQ7kNvgF7DOpn&_nc_zt=23&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=AthNxqfmlXocxy0-fFNbFuj&oh=00_AYDqqHfs6DM0jBwmnihv__ZQsfL2RnWYCoZ_gLtA-QrY3Q&oe=67255DE6'
       postTime='5 days ago'
       postImage ='https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-6/463965143_525913647081912_3360420626976350042_n.jpg?stp=dst-jpg_s640x640&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHec6Tx54AtC-_ouHfDatvTCxiMEcU-C9ELGIwRxT4L0QFPcygo8sOM2CKH8a3-TKs7_OA58nz0X3igKVt9Ymee&_nc_ohc=cJxF2Ihd3jMQ7kNvgFtErc5&_nc_zt=23&_nc_ht=scontent.fkhi28-1.fna&_nc_gid=A_LEGNZSSq8PgH19TwPjiI3&oh=00_AYDATqDdJxIDeVWuJCAo1nKSTLQzKKxtPcsk7eyFPsRNrw&oe=672573BB'    
       type='image'
      />
    </div>

    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
