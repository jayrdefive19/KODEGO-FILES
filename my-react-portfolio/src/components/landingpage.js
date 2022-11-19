import background from "./image/BG1.jpg"
import {FaLinkedin} from "../../node_modules/react-icons/fa"
import {FaFacebook} from "../../node_modules/react-icons/fa"
import {FaGithub} from "../../node_modules/react-icons/fa"
import {FaTwitter} from "../../node_modules/react-icons/fa"

function Landpage() {
    return (
        <div id="intro" class="row vh-7 position-relative" style={{backgroundImage: `url(${background})`}}>
  <div class="col-6 text-end top-50 position-absolute">
  <h1>SANDY DE LIMA</h1>
  <h4 class="text-white">GRAPHIC DESIGNER / ASPIRING WEB DEVELOPER </h4><br/>
  <div class="socials d-flex flex-row-reverse">
    <a href="https://www.linkedin.com/in/jayrdefive19" target="_blank"><FaLinkedin/></a> 
    <a href="https://www.facebook.com/jayrdelima.19" target="_blank"><FaFacebook/></a>
    <a href="https://github.com/jayrdefive19" target="_blank" ><FaGithub/></a>
    <a href="https://twitter.com/jayrdefive" target="_blank"><FaTwitter/></a>
  </div>
  <button id="myBtn" class="contact btn btn-dark">REQUEST A QUOTE </button>
</div>
</div>
    )
}

export default Landpage;