import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Routes,Route} from "react-router-dom"
import FbHeader from './FbHeader'
import FbHeader2 from './FbHeader2'

const SideBarNew = () => {

   const[showArrowDown,setShowArrowDown]=useState(false)

   const showit=()=>{
      setShowArrowDown(!showArrowDown)
   }
  return (
    <div className='p-4'>
        <div className="container-fluid">
         <div className='row'>
       
       <div className='col-md-3'>
      
      <ul >
        
         <li className='bgclr'><i class="fa-solid fa-user-tie mx-3"></i>
<span className='txt-edit'>Bhuban Pandey</span>
</li>
         
      <Link to='/friends'><li className='bgclr'><i class="fa-solid fa-user-group fai mx-3"></i>
      <span className='txt-edit' >Friends</span></li></Link>


  
      <Link to='/admanager'>
<li className='bgclr'>
<i class="fa-solid fa-user-group fai mx-3"></i>
<span className='txt-edit'>Ad Manager</span></li>
</Link>



<Link to='/memories'>
<li className='bgclr'><i class="fa-solid fa-memory fai mx-3"></i>
<span className='txt-edit'>Memories</span></li>
</Link>

<Link to='/saved'>
  <li className='bgclr'><i class="fa-solid fa-bookmark fai mx-3"></i>
<span className='txt-edit'>Saved</span></li>
</Link>



<Link to='/groups'>
  <li className='bgclr'><i class="fa-solid fa-user-group fai mx-3"></i>
<span className='txt-edit'>Groups</span>
</li>
</Link>

<Link to='/videos'>
  <li className='bgclr'>
  <i class="fa-solid fa-video fai mx-3"></i>
<span className='txt-edit'>Videos</span>
 
</li></Link>


<li className='bgclr' onClick={showit}>
<i class="fa-solid fa-chevron-down fai mx-3" ></i>
<span className='txt-edit'>See More</span>
</li>


{showArrowDown?(<div>
<li className='bgclr'>
  <i class="fa-solid fa-video fai mx-3"></i>
<span className='txt-edit'>Videos</span>
 
</li>
<li className='bgclr'>
  <i class="fa-solid fa-video fai mx-3"></i>
<span className='txt-edit'>Videos</span>
 
</li>

</div>):(
   <div>
   </div>
)}


</ul>

   
   </div>
   <div className='col-md-9'>
    <Routes>
         <Route path='/fbheader' element={<FbHeader/>}/>
         <Route path='/fbheader2' element={<FbHeader2/>}/>
    </Routes>
   </div>

       
</div>
        </div>
        
</div>
)
}
export default SideBarNew






   
 


