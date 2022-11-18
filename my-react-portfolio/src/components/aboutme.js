import projpic from "./image/3.jpg";


function Aboutme() {
    return (
        <div id="about" class="row">
    <div class="col text-end p-5">
        <img src={projpic} alt="Logo" id="mypic"/>;
    </div>
    <div class="col p-5">
      <br />
      <p class="fw-bold">ABOUT ME</p>
      <h3 class="text-start mt-4"> Sandy Delima is a Graphic Designer / Virtual Assistant based in the Philippines.</h3>
        <br />
        <p class="text-start text-secondary"> I am currently working as a freelance graphic artist and virtual assistant. I am living in Bicol with my parents. I own two cats named Loki and Ash. I like playing guitar and ukulele, video games and biking for exercise, but right now I spend most of my time on my computer working on improving my skills while also doing my jobs to earn.</p><br />
        <a href="./Resume_Delima.pdf" target="_blank" download>
         <button class="btn btn-dark">DOWNLOAD CV</button>
        </a>
    </div>
</div>
    )
}

export default Aboutme;