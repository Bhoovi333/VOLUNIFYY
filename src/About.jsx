import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function CarouselPage() {
  return (
   <div>
    <Carousel style={{color:"black"}}>
    <Carousel.Item style={{color:"black"}}>
    <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://img.freepik.com/free-photo/top-view-paper-heart-paper-hand-with-copy-space_23-2148635150.jpg?size=626&ext=jpg&uid=R121066045&ga=GA1.1.1977216938.1680318996&semt=ais_hybrid"
        alt="Third slide"
      />
      
      <Carousel.Caption style={{color:"black",fontFamily:"cursive",paddingBottom:"120px"}}>
        
        <h2>Welcome to Volunifyy</h2>
        <p>
We believe that volunteering is a powerful force for good, and we're on a mission to make it easy, accessible, and fun for everyone.

Volunifyy was born out of a passion for community service and a desire to simplify the volunteer experience. We saw an opportunity to harness technology to connect volunteers with meaningful projects, streamline the management process, and amplify the impact of volunteer work.

We envision a world where volunteering is a seamless and enjoyable experience, where individuals can find purpose and connection, and where communities can thrive.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{color:"black"}}>
    <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://img.freepik.com/free-photo/flat-lay-composition-still-life-friendship-day-elements_23-2148970484.jpg?uid=R121066045&ga=GA1.1.1977216938.1680318996&semt=ais_hybrid"
        alt="Third slide"
      />

      <Carousel.Caption style={{fontFamily:"cursive"}} >
        <h3>Our Values</h3>
        <p>At Volunifyy, we're guided by a set of core values that shape our mission, culture, and actions. These values are the foundation of our community, and we strive to embody them in everything we do.<br></br>

- Simplify: We believe that volunteering should be effortless, efficient, and enjoyable. We're committed to streamlining the volunteer experience, eliminating unnecessary complexity, and making it easy for individuals to find and engage with meaningful projects.
<br></br>
- Connect: We're passionate about building bridges between volunteers, organizations, and communities. We foster meaningful relationships, facilitate open communication, and create opportunities.
<br></br>
- Empathy: We understand that volunteering is a personal journey, and we're committed to supporting our community with compassion, kindness, and understanding. 
<br></br>
- Integrity: We operate with transparency, honesty, and integrity in everything we do. We're accountable for our actions, transparent in our decision-making.
<br></br>
These values are the heartbeat of our organization, and we invite you to join us in living them out through your volunteer journey!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://img.freepik.com/free-photo/origami-chain-people-with-globe_23-2148621072.jpg?size=626&ext=jpg&uid=R121066045&ga=GA1.1.1977216938.1680318996&semt=ais_hybrid"
        alt="Third slide"
      />

      <Carousel.Caption style={{color:"black",paddingBottom:"150px",fontFamily:"cursive"}}>
        <h3>Join Us</h3>
        <p>
Ready to make a difference? Join our community of passionate volunteers, organizations, and changemakers who are dedicated to creating positive impact.
<br></br>


        Together, let's:

- Build stronger, more compassionate communities<br></br>
- Drive positive change and social impact<br></br>
- Celebrate the power of volunteering and the difference it makes
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
<br></br>
<div style={{backgroundImage:"url('https://img.freepik.com/free-vector/line-style-colorful-volunteers-group-hands-up-with-love-heart-vector_1017-48491.jpg?size=626&ext=jpg&uid=R121066045&ga=GA1.1.1977216938.1680318996&semt=ais_hybrid')"}}>

  <h2 style={{textAlign:"center"}}>“Sometimes miracles are just good people with kind hearts.”</h2>
  <h1 style={{textAlign:"center"}}>“You can be the one"</h1>
  <button style={{background:"grey",color:"white",border:"1px solid black",borderRadius:"10%",marginLeft:"560px",height:"45px",width:"120px",padding:"2px 2px 2px 2px"}}>JOIN NOW <ArrowForwardIcon /></button>
  </div></div>

  )
}

export default CarouselPage;