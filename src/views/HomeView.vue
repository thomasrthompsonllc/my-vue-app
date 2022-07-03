
// import TheWelcome from '@/components/TheWelcome.vue'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
<template>


 
                        
                   






  <div class="home">
   <Container>
      <Row>
  <img class="hero-image" src="/Images/Hero2.jpg" />
    <div class="hero-text">Tommy Thompson</div>  
   <div class="hero-text2">Software Engineer</div> 
      </Row>      
  </Container>
   
     <div>  
                    <div>
                        <Container>
                            <Row>
                                  
                                    <div class="tomtext1">I am a Software Engineer working with various software tools to solve problems. For front-end work
                                    I use JavaScript, HTML, CSS, SCSS, Wordpress, React, Vue, and Angular.                        
                                    </div> 
                                      <div class="tomtext1">This website was built with Vue.                        
                                    </div> 
                               
                      </Row>
                    </Container>


                     <Container>
                            <Row>
                                  
                                    <h2 className="tomtext2"> For additional examples of my work product please review the websites below.  
                                    </h2> 
                                    <h2 className="tomtext2">To view my WordPress website visit https://thomasrthompsonllc.com</h2>
                                    <h2 className="tomtext2">To view my HTML, CSS, JavaScript website visit https://thomasrthompsonllc.github.io/github.io/</h2>
                                    <h2 className="tomtext2">To view my React website visit https://www.react.thomasrthompsonllc.com/</h2>
                                    <h2 className="tomtext2">To view my Angular website visit https://www.angular.thomasrthompsonllc.com/</h2>
                      </Row>
                    </Container>

  <div class="container">
      
     
          
           
        </div>





                </div>
</div>
		
  </div>

  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.height-100vh {
    height: 100vh;
    background: rgb(13, 226, 169);
  }
  
  .center-aligned {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  
.background-image {
  position: relative;
  opacity: .85;
  width: 100%;

  height: 50%;
 
}
  
  
  .tomtext1 {
    text-align: center;
    position: relative;
    color: black;
    font-family:  'Gill Sans', 'Gill Sans MT';
    font-size: 50px;
    background: transparent  ; 
    padding: 90px;
    opacity: 100;
  }

  .tomtext2 {

    text-align: center;
    position: relative;
    color: rgb(5, 153, 28);
    font-family:  'Gill Sans ', 'Gill Sans MT ';
    font-size: 40px;
    background: transparent  ; 
    padding: 30px;
  }
 
  .icon-title{  
    text-align: center;
    position: relative;
    color: rgb(139, 0, 81);
    font-family:  'Gill Sans', 'Gill Sans MT';
    background: white;
    padding: 10px;
    font-size: 15pt;
  }

  .section-title{  
    text-align: center;
    position: relative;
    color: rgb(139, 0, 81);
    font-family:  'Gill Sans', 'Gill Sans MT';
    background: rgb(191, 235, 198);
    padding: 10px;
    font-size: 30pt;
  }

  .about-tom{  
    text-align: center;
    position: relative;
    color: rgb(139, 0, 81);
    font-family:  'Gill Sans', 'Gill Sans MT';
    background: white;
    padding: 10px;
    font-size: 25pt;
  }
 
  .h1{
    position: absolute;
    color: rgb(6, 232, 51);
    font-family:  'Gill Sans', 'Gill Sans MT';
    background: white;
    padding: 10px;
    font-size: 10pt;
  }
  
  .h2 {
    text-align: center;
    position: absolute;
    color: darkcyan;
    font-family:  'Gill Sans', 'Gill Sans MT';
    background: white;
    padding: 30px;
  }
  
  h3 {
    position: absolute;
    color: darkcyan;
    font-family:  'Gill Sans', 'Gill Sans MT';
    background: white;
    padding: 20px;
  }

 

 body, html {
    height: 100%;
}

/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Images/hero.jpg");
   opacity: .65;
  /* Set a specific height */
  height: 25%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
   font-size: 70pt;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(25, 22, 230);
}
.hero-text2 {
   font-size: 70pt;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(1, 1, 17);
}
.background{
    background-image: url("/Images/Hero2.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 100%;
 
 
  }

</style>
