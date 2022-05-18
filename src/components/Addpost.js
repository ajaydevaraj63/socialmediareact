import React from 'react'
import Nav from './Nav'

const Addpost = () => {
  return (
    <div>
          <Nav/> <div class="container div row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div class="row g-3">
            <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <label for="" class="form-label"><b>Title</b></label>
                  <input type="text" class="form-control" placeholder="enter your title"/>
            </div>
            <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <label for="" class="form-label"><b>message</b></label>
               <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>           </div>
      </div>    
    </div>
</div></div>
  )
}

export default Addpost