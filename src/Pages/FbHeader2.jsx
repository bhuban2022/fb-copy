import React from 'react'
// import './FbHeader.css'
import ins from  '../Assets/insta.webp'
import pers from '../Assets/person1.jpeg'

const FbHeader2 = () => {
  return (
    <div className='hdrnew'>
        
        <div className='stlimg'>
            <img src={ins}  className='mx-3' />
            <div >
<p>Ratopati</p>
            <span className='timedura'>1h</span>

            </div>
            
         
        </div>
        <p>Lorem ipsum dolor sit amet.
        </p>
        <div>
        <i class="fa-solid fa-star"></i>
          <span className='text3 mx-2'>See original</span>
          <span className='text3'>Rate this translation</span>
        </div>
        <div className='img-align'>
          <img src={pers} style={{width:"100%"}}/>
        </div>
        <div><p>RATOPATI.COM</p>
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        <p>Lorem ipsum dolor sit amet.

        </p></div>
        
        <div className='d-flex'>


        </div>
        </div>
  )
}

export default FbHeader2