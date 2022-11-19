import {FaHtml5} from "../../node_modules/react-icons/fa"
import {FaCss3} from "../../node_modules/react-icons/fa"
import {FaBootstrap} from "../../node_modules/react-icons/fa"
import {FaJsSquare} from "../../node_modules/react-icons/fa"
import {FaReact} from "../../node_modules/react-icons/fa"
import {FaFigma} from "../../node_modules/react-icons/fa"
import {FaCheck} from "../../node_modules/react-icons/fa"



function Skills() {
return (
  <div class="row p-5 bg-dark text-white">
    <section id="skills">
    
    <h2 class="lh-1">SKILLS</h2>
    <br/>
    <div class="row">
    <div class="col">
    <h4 class="mb-3">PROGRAMMING LANGUAGE AND TOOLS</h4>
    <div class="mb-5 display-inline-block ">
    <FaHtml5 class="text-warning fs-1 me-2"/>
    <FaCss3 class="text-warning fs-1 me-2"/>
    <FaBootstrap class="text-warning fs-1 me-2"/>
    <FaJsSquare class="text-warning fs-1 me-2"/>
    <FaFigma class="text-warning fs-1 me-2"/>
    <FaReact class="text-warning fs-1 me-2"/>

    </div>

    </div>
    <div class="col">
   
    <ul>
    <h4>WORK FLOW</h4>
      <li><FaCheck/> STRUCTURE PAGE WITH HTML</li>
      <li><FaCheck/> DESIGNING USING CSS & BOOTSTRAP</li>
      <li><FaCheck/> ADD SOME JAVASCRIPT</li>
      <li><FaCheck/> CONVERTING REACT COMPONENTS</li>
    </ul>

    </div>
    </div>
   
  </section>
</div>
    )
}

export default Skills;