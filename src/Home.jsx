import React from 'react'
import Lolo from "./lolo"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Nomi from './nomi';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  return (
    
    <div style={{paddingLeft:"50px",backgroundImage:"url('https://img.freepik.com/free-vector/line-style-colorful-volunteers-group-hands-up-with-love-heart-vector_1017-48491.jpg?size=626&ext=jpg&uid=R121066045&ga=GA1.1.1977216938.1680318996&semt=ais_hybrid')"}}>
    <div className="heading">

      
      <h2 style={{color:"gray",textAlign:"center",fontFamily:"fantasy",padding:"25px"}}>Volunteers do not necessarily have the time; they just have the heart 
</h2>
    </div><br></br>
<div style={{textAlign:"center",fontFamily:"cursive",fontSize:"20px"}}>

<input type='text' placeholder='Search Your City Name Here' style={{border:"2px solid black"}} ></input>    
<button style={{background:"grey",color:"white",border:"1px solid black",borderRadius:"50%",marginLeft:"7px"}}>Opportunities <ArrowForwardIcon /></button>

</div>
   <div className="d-flex align-items-center fullvHeight" >
   <Nomi  /><br></br> <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Lolo/></div>
   <div style={{backgroundImage:"url('https://img.freepik.com/free-vector/line-style-colorful-volunteers-group-hands-up-with-love-heart-vector_1017-48491.jpg?size=626&ext=jpg&uid=R121066045&ga=GA1.1.1977216938.1680318996&semt=ais_hybrid')",backgroundRepeat:"repeat-x"}}>
   <h2 style={{color:"gray",textAlign:"center",fontFamily:"fantasy"}}>
   Happiness is not so much in having as sharing. We make a living by what we get, but we make a life by what we give
   </h2><br></br><br></br>
 <div>
<InstagramIcon style={{fontSize:"23px"}}/>&nbsp;&nbsp;&nbsp;
<LinkedInIcon style={{fontSize:"25px"}}/>&nbsp;&nbsp;&nbsp;<YouTubeIcon style={{fontSize:"29px"}}></YouTubeIcon>
<p> ©Volunifyy 2024 | Terms of Service</p>
</div>
    </div></div> 
  )
}

export default Home;
