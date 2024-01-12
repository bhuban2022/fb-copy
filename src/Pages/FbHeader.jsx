import React from 'react'
import './FbHeader.css'
import img1 from '../Assets/img1.jpg'
import camer from '../Assets/camera.png'
const FbHeader = () => {
  return (
    <div>
        <div className='wrapper '>
          <div className='d-flex wrapper-one'>
          <img src={img1}/>
          <div className='in-box mx-3'>
        What's on your mind Bhuban
          </div>
  
          </div>
          <hr/>
          <div className='d-flex wrapper-inside'>
            <div className='d-flex text1'>
              <img src={camer}/>
              <span className='mx-2 '>Live/Video</span>
            </div>
            <div className='d-flex text1 '>
              <img src={camer}/>
              <span className='mx-2 '>Photo/Video</span>
            
            </div>
            <div className='d-flex text1 '>
              <img src={camer}/>
              <span className='mx-2 '>Feeling/Activity</span>
            </div>
          </div>
        </div>

       
       </div>
       
  )
}

export default FbHeader