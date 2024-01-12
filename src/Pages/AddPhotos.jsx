import React from 'react'

const AddPhotos = () => {
  return (
    <div>
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static backdrop modal
    </button>
    
   
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Post</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>  What's on Your Mind,  Bhuban?</div>
            <div>
            <i class="bi bi-emoji-laughing"></i>
            </div>
          
          </div>
          <div class="modal-footer">
           <div className='model-footer-box'>
            <div class='model-footer-box-in'>
              <label for="fileInput" class="upload-icon">
            <span>📸</span> <br/>Add Photos/Videos<br/>
            <p>or drag and drop</p>
  </label></div>
           
           </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>

   
  )
}

export default AddPhotos