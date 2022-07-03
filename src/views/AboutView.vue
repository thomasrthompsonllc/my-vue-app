

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"



<template>
  <div class="about">
  
     <div>    
              

                        <Container>
                            <Row>
                                <h2 className="section-title">Introducing Thomas R. Thompson</h2>
                            </Row>
                        </Container>
                       <div class="container h-100">
                             <div class="row align-items-center h-100">
                                     <div class="col-3 mx-auto">
                                             <div class="img-circle">
                                                    <img class="tomimage12" src="/Images/Tom4.png" alt="" />     
                                             </div>
                                    </div>
                               </div>
                        </div>
                        <Container>
                            <Row>
                                <h2 className="about-tom">My name is Tom or Tommy Thompson and I solve business problems with software.  
                                I have six years of Website experience and over 25 years of business experience in Virginia 
                                State Government as Director of Utilites for Virginia Commonwealth University and Energy Manager for the Virginia 
                                Department of Energy.  In the private sector my focus was building environmental controls using the Java-based 
                                Niagara Framework  .    

                With a BS in Mathematics/Computer Science and MBA my education and experience gives me the background to understand and 
                solve business problems.
                
                
                </h2>
                                


                            </Row>
                        </Container>
                    
                
                    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
.height-100vh {
    height: 100vh;
    background: lightgrey;
  }
  
  .center-aligned {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .background-image {
    
    opacity: .3;
    width: 100%;
    object-fit:cover; 
    height: 100%;
   
  }
  .tomimage12 {

    border-radius: 100%;
    width: 350px;
    object-fit: cover;
    height:auto;
    border: 10px solid rgb(79, 34, 185);

  }

  
  
  .text {
    text-align: center;
    position: relative;
    color: black;
    font-family:  'Gill Sans', 'Gill Sans MT';
    font-size: 100px;
    background: transparent  ; 
    padding: 90px;
    opacity: 100;
  }

  .text1 {

    text-align: center;
    position: relative;
    color: rgb(20, 16, 236);
    font-family:  'Gill Sans ', 'Gill Sans MT ';
    font-size: 60px;
    background: transparent  ; 
    padding: 60px;
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
</style>
