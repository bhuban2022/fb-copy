import React from 'react'
import dai from '../Assets/duraramesh.jpg'
import './FbHeader'
const AddFriend = () => {
  return (
    <div>

<div class="card" style={{width: "10rem"}}>
  <img className="" src={dai}/>
  <div class="card-body">
    <h5 class="card-title">Dura Ramesh</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary new-btn1">Confirm</a>
    <div className='new-btn'>Delete</div>

  </div>
</div>
    </div>
  )
}

export default AddFriend