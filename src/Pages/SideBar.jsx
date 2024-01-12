import React,{useState} from 'react'

const SideBar = () => {

   const[showArrowDown,setShowArrowDown]=useState(false)

   const showit=()=>{
      setShowArrowDown(!showArrowDown)
   }
  return (
    <div className='p-4'>
        
        <div className='row'>
       
<div className='col-md-2 nalign'>
<i class="fa-solid fa-user-tie"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>Bhuban Pandey</span>
</div>

<div class="col-md-9 nalign"></div>
        
   </div>

       

<div class="col-md-10"></div>



<div className='row'>

<div className='col-md-2 nalign'>
<i class="fa-solid fa-user-group fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit' >Friends</span>
</div>

<div class="col-md-10"></div>
        
   </div>
   <div className='row'>

<div className='col-md-2 nalign'>
<i class="fa-solid fa-user-group fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>Ad Manager</span>
</div>

<div class="col-md-10"></div>
        
   </div>
   {/* <button onClick={showit} >CLick me</button> */}
   <div className='row'>

<div className='col-md-2'>
<i class="fa-solid fa-memory fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>Memories</span>
</div>

<div class="col-md-10"></div>
        
   </div>
   <div className='row'>

<div className='col-md-2 nalign'>
<i class="fa-solid fa-bookmark fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>Saved</span>
</div>
</div>
   <div className='row'>

<div className='col-md-2 nalign'>
<i class="fa-solid fa-user-group fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>Groups</span>
</div>

<div class="col-md-10"></div>
        
   </div>
   <div className='row'>

<div className='col-md-2 nalign'>
<i class="fa-solid fa-video fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>Videos</span>
</div>

<div class="col-md-10"></div>
        
   </div>
   <div className='row'>

<div className='col-md-2 nalign ' onClick={showit}>
<i class="fa-solid fa-chevron-down fai" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span className='txt-edit'>See More</span>
</div>

<div class="col-md-10"></div>
        
   </div>

/* addition 3 rows */


{showArrowDown?(
   <div>
    <div className='row'>

    <div className='col-md-2 nalign'>
    <i class="fa-solid fa-user-group fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className='txt-edit'>Groups</span>
    </div>
    
    <div class="col-md-10"></div>
            
       </div>
       <div className='row'>
    
    <div className='col-md-2 nalign'>
    <i class="fa-solid fa-user-group fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className='txt-edit'>Groups</span>
    </div>
    
    <div class="col-md-10"></div>
            
       </div>
       <div className='row'>
    
    <div className='col-md-2 nalign'>
    <i class="fa-solid fa-user-group fai"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className='txt-edit'>Groups</span>
    </div>
    
    <div class="col-md-10"></div>
            

               <div>
                  </div>
            
       </div>
       </div>

):(
   <div></div>
)}
   
  
   </div>
   
 

  )
}

export default SideBar