import React from 'react'
import fbico from '../Assets/fb-icon.png'
import homeicon from '../Assets/home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import groups from '../Assets/group.png'
import menu from '../Assets/hello.png'


const Navbar = () => {
  return (
    <div>

<div className="App">
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <img src={fbico} style={{width:"40px"}} className='m-3 '/>
  <form class="d-flex">
  <i class="bi bi-search"></i><input class="form-control me-2 bord bck" type="search" placeholder="Search Facebook" aria-label="Search"/>
      </form>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav-lft ">
        <li class="nav-item">
        <FontAwesomeIcon icon="fa-regular fa-house" />
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-user-group" style={{fontSize:"20px"}}></i>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-user-group" style={{fontSize:"20px"}}></i>
        </li>
        

      </ul>
      <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0  nav-rgt">
      <li class="nav-item mx-auto ml-3 ">
      <i class="fa-solid fa-user-group" style={{fontSize:"20px"}}></i>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-user-group" style={{fontSize:"20px"}}></i>
        </li>
        <li class="nav-item ">
        <i class="fa-solid fa-user-group" style={{fontSize:"20px"}}></i>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-user-group" style={{fontSize:"20px"}}></i>
 

        </li>
        </ul>
      </div>
    
    </div>
  </div>
</nav>
    </div>


    </div>
  )
}

export default Navbar