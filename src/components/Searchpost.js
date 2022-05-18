import React from 'react'
import Nav from './Nav'

const Searchpost = () => {
  return (
    <div>  <Nav/><div class="container div row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div class="row g-3">
            <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <label for="" class="form-label"><b>Title</b></label>
                  <input type="text" class="form-control" placeholder="enter your title"/>
            </div>
            <div class="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                  <input type="button" value="search" class="btn btn-success"/>
            </div>
      </div>    
    </div>
</div>
</div>
  )
}

export default Searchpost