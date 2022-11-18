import background from "./image/BG1.jpg"

function Landpage() {
    return (
        <div id="intro" class="row vh-7 position-relative" style={{backgroundImage: `url(${background})`}}>
  <div class="col-6 text-end top-50 position-absolute ">
  <h1>SANDY DE LIMA</h1>
  <h4 class="text-white">GRAPHIC DESIGNER / ASPIRING WEB DEVELOPER </h4><br/>
  <div class="socials display-inline-block mt-0">
    <a href="https://www.linkedin.com/in/jayrdefive19" target="_blank"><i class="bi bi-linkedin fs-1"></i></a> 
    <a href="https://www.facebook.com/jayrdelima.19" target="_blank"><i class="bi bi-facebook fs-1"></i></a>
    <a href="https://github.com/jayrdefive19" target="_blank"><i class="bi bi-github fs-1"></i></a>
    <a href="https://twitter.com/jayrdefive" target="_blank"><i class="bi bi-twitter fs-1"></i></a>
  </div>
  <button id="myBtn" class="contact btn btn-dark">REQUEST A QUOTE </button>
</div>
</div>
    )
}

export default Landpage;