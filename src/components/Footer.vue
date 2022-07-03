
import Vue from 'vue'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


<template>
    <div class="footer-container">
      
     
            <div class="container">
                <div class="row">
                  
                    <div class="col">
                        <h4>Thomas R. Thompson, LLC </h4>
                        <ul className="list-unstyled">
                        <li>Phone - 804-513-1423</li>
                        <li>Fax - 804-968-4411</li> 
                       
                        </ul>
                    </div>
                  
                    <div class="col">
                        <h4>Address</h4>
                        <ul class="list-unstyled">
                        <li>Thomas R. Thompson, LLC</li>
                        <li>10307 West Broad Street #114</li> 
                        <li>Glen Allen, VA 23060</li> 
                        </ul>
                    </div>
                  
                    <div class="col">
                        <h4>Hours</h4>
                        <ul className="list-unstyled">
                        <li>Monday - Friday</li>
                        <li>8:00am - 4:00pm</li> 
                        
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <p class="col-sm">
                            Thomas R. Thompson, LLC | 2022 | All rights reserved

                    </p>



                </div>
            </div>
           
        </div>
    

</template>


<style>
.footer-container {
    color: white;
    background-color: #493ffcdc;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:25vh;
    bottom: 0;
  }



</style>
