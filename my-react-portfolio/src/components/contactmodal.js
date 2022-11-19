
function Contactmodal() {
    return (
        <div id="myModal" class="modal container-fluid">
  <div class="modal-content row">
    <div class="row mb-4 ">
      <div class="col">
        <span class="close">&times;</span>
        <p class="fw-bold">CONTACT ME</p>
        <h3 class="text-start ">Get a Quote for Your New Website</h3>
      </div>
    </div>
    <div class="row">
    
    <div class="col-6 m-6">
    
    <form>
      <div class="form-group">
        <label for="putName">Name</label>
        <div class="row">
          <div class="col">
            <input type="email" class="form-control" id="putName" aria-describedby="emailHelp" placeholder="First Name" />
          </div>
          <div class="col">
            <input type="email" class="form-control" id="putName" aria-describedby="emailHelp" placeholder="Last Name" />
          </div>
        </div>
        
      </div><br/>

      <div class="form-group">
        <label for="businessName">Business/Organization</label>
        <input type="email" class="form-control" id="businessName" aria-describedby="emailHelp" placeholder="" />
      </div><br/>

      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="businessName" aria-describedby="emailHelp" placeholder="Enter email" />
        
      </div><br/>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="email" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter your number" />
      </div><br/>

      <div class="form-group">
        <label for="req">Request</label>
        <input type="email" class="form-control" id="request" aria-describedby="emailHelp" placeholder="Your Message here" />
      </div><br/>
      
      <div class="d-grid gap-2">
      <button id="submit" type="submit" class="btn btn-lg btn-dark w-5">Submit</button>
      </div>
    </form>
    </div>
    <div class="col-6 ps-5">
      <div class="row gx-5">
        <div class="col-2">
          <i class="fa-solid fa-location-dot text-dark fs-1"></i>
        </div>
        <div class="col-10">
          <p >Address</p>
          <h5 class="lh-1">Magarao, Camarines Sur</h5>
        </div>
      </div>
      <div class="row gx-5">
        <div class="col-2">
          <i class="fa-solid fa-envelope text-dark fs-1"></i>
        </div>
        <div class="col-10">
          <p >Mail</p>
          <h5 class="lh-1">jayrdelima139@gmail.com</h5>
        </div>
      </div>
      <div class="row gx-5">
        <div class="col-2">
          <i class="fa-solid fa-phone-flip text-dark fs-1"></i>
        </div>
        <div class="col-10">
          <p >Phone</p>
          <h5 class="lh-1">09165603070</h5>
        </div>
      </div>
      <div class="row gx-5">
        <div class="col-2">
          <i class="fa-solid fa-share-nodes text-dark fs-1"></i>
        </div>
        <div class="col-10">
          <p >Social</p>
          <h5 class="lh-1">Fb. Tw. In. Li.</h5>
        </div>
      </div>
  </div>
    </div>
  </div>
</div>
    )
    
}

export default Contactmodal;
