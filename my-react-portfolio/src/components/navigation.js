import logo from "./image/Sign.png";

function Navbar() {
    return (
        <div class="row sticky-top bg-dark shadow" id="navigation">
          <div  class=" col"> 
            <a href="#top">
            <img id="sign" src={logo}/>
            </a>
          </div>
          <div class="col">
          <div class="d-flex justify-content-end">
            <a href="#portfolio"><button class="btn btn-outline-secondary text-white" >PORTFOLIO</button></a>
            <a href="#services"><button class="btn btn-outline-secondary text-white" >SERVICES</button></a>
            <a href="#about"><button class="btn btn-outline-secondary text-white" >ABOUT</button></a>
          </div>
    </div>
    </div>
    )
}

export default Navbar;