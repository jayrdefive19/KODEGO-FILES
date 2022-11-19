import {FaBezierCurve} from "../../node_modules/react-icons/fa"
import {FaPenNib} from "../../node_modules/react-icons/fa"
import {FaDesktop} from "../../node_modules/react-icons/fa"
import {FaPhotoVideo} from "../../node_modules/react-icons/fa"
import {FaUsers} from "../../node_modules/react-icons/fa"

function Services() {
    return (
        <div id="services" class="container">
  <div class="row mb-4 ">
    
    <div class="col">
      <p class="fw-bold">SERVICES</p>
      <h3 class="text-start ">What I Do</h3>
    </div>
  </div>
  
  <div  class="row text-white gx-5">
    <div class="col-4">
      <div class="box shadow">
        <FaBezierCurve class="icons"/>
  
        <h3>Creative design</h3>
        <p>Create visuals, brainstorm concepts, work with team members to develop concepts, and ensure that the final product is aligned with the company or client standards.</p>
      </div>
    </div>
    <div class="col-4 ">
      <div class="box shadow">
        <FaPenNib class="icons"/>
        <h3>Graphic Design</h3>
        <p>Develop the overall layout and production design for advertisements, print media, branding identity, and corporate reports, etc.</p>
      </div>
    </div>

    <div class="col-4 ">
      <div class="box shadow">
        <FaDesktop class="icons"/>
        <h3>Web Design</h3>
        <p>Planning, creating and coding internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p>
      </div>
    </div>
  </div>

  <div class="row text-white mt-5 gx-5">
    <div class="col-4 ">
      <div class="box shadow-lg">
        <FaPhotoVideo class="icons"/>
        <h3>Video Editing</h3>
        <p>Responsible for editing and assembling recorded raw material into a suitable, finished product ready for presentation.<br/></p>
      </div>
    </div>
    <div class="col-4 ">
      <div class="box shadow">
        <div class="boxanim">
        <FaUsers class="icons"/>
        <h3>Social Media Mgmt</h3>
        <p>responsible for overseeing a company's interactions with the public by implementing social media strategies.</p>
        </div>
      </div>
    </div>
  </div> 
</div>
    )
}

export default Services;