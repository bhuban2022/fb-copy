import React,{useState} from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Loginform = () => {


    const[email1,setEmail1]=useState("")
    const[password1,setPassword1]=useState("");
    const [gender,setGender]=useState("")
    const [firstName, setFirstName]=useState("")
    const [surName, setSurName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [year,setYear]=useState("")
    const [month,setMonth]=useState("")
    const [date,setDate]=useState("")

 
    const handleClick=()=>{
    const navigate=useNavigate;
    axios.post("https://backend-self-delta.vercel.app/api/registration",{
    email,
    password
  })
  
  .then(response=>{
    console.log(response.data)
if(response.data.status === "true"){
const token = response.data.token
localStorage.setItem("userId",token)
navigate("/")
}else{
alert("the password not match")
}
})

  }

  
  
  return (
    <div className='maindiv'>

       <div className='container'>

      <div className='row'>
        <div className='col-md-2 '>
       
         
            </div>
            
            
     
        <div className='col-md-4'>
       
        <img src="fb.svg" alt="fb logo" width="250px"/><br/>
        <span className='text-new'>
          Connect with friends and the world around you on Facebook.
            </span>
        </div>
     
     
      <div className=' col-md-6'>


<form className='align-form'>
  
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  placeholder="Email or phone number" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
   <label for="exampleInputPassword1" class="form-label">Password</label>
   <input type="password" placeholder='Password' class="form-control p-3" id="exampleInputPassword1" />
 </div>
  
  <button type="submit" class="btn btn-primary p-3 " style={{width:"100%"}}>Log In</button>
<hr/>
<p className='mt-3 txt '>Forgot password?</p>
<div className='c-btn'>
<button className="btn btn-success  "  data-bs-toggle="modal"
    data-bs-target="#exampleModal" type="button"><b>Create new Account</b></button>
</div>
</form>


</div>

      </div>
 
 <p>Create a Page for a celebrity, brand or business.</p>
    </div>

    <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header" >
          <h1 className="modal-title fs-5" id="exampleModalLabel">
          Sign Up<br>
          </br>
          <span style={{color:"grey",fontSize:"14px"}}>
          It's quick and easy.
          </span>
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="mainsingnup">
              <div className=" row">
            <div className="col-md-6">
            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} class="modalinput" id="exampleFormControlInput1" placeholder="First Name"/>

            </div>
            <div className="col-md-6">
            <input type="text" class=" modalinput"  onChange={(e)=>{setSurName(e.target.value)}} id="exampleFormControlInput1" placeholder="Sur Name"/>

            </div></div>
            <div className="mt-3">
                                                <input type="email" class=" modalinput"  onChange={(e)=>{setEmail(e.target.value)}} id="exampleFormControlInput1" placeholder="Email"/>

            </div>
            <div className="mt-3">
                                                <input type="password"  onChange={(e)=>{setPassword(e.target.value)}} class=" modalinput" id="exampleFormControlInput1" placeholder="Sur Name"/>

            </div>
            <div className="row mt-3">
                <label>Date of birth<i class="fa-solid fa-question"></i></label>
            <div className="col-md-4">
<select  onChange={(e)=>{setDate(e.target.value)}} className="modalinput">
    <option>23</option>
    <option>22</option>
    <option>21</option>
    <option>20</option>
    <option>19</option>
    <option>18</option>
    <option>17</option>
    <option>16</option>
    <option>15</option>
    <option>14</option>
    <option>13</option>

</select>
            </div>
            <div className="col-md-4">
            <select  onChange={(e)=>{setMonth(e.target.value)}} className="modalinput">
    <option>DEC</option>
    <option>NOV</option>
    <option>SEP</option>
    <option>AUG</option>
    <option>JULY</option>
    <option>JUNE</option>
    <option>MAY</option>
    <option>APPRIL</option>
    <option>MARCH</option>
    <option>FEB</option>
    <option>JAN</option>

</select>
            </div>
            <div className="col-md-4">
            <select  onChange={(e)=>{setYear(e.target.value)}} className="modalinput">
    <option>2023</option>
    <option>2022</option>
    <option>2021</option>
    <option>2020</option>
    <option>2019</option>
    <option>2018</option>
    <option>2017</option>
    <option>2016</option>
    <option>2015</option>
    <option>2014</option>
    <option>2013</option>

</select>
            </div>
            
            </div>


            <div className="row mt-3">
  <label>Select Gender </label>

  <div className="col-md-4 d-flex">
    <div className="modalinput">
      <label htmlFor="male">Male</label>
      <input type="radio" id="male" name="gender" value="Male" onChange={() => setGender("Male")} />
    </div>
  </div>

  <div className="col-md-4 d-flex">
    <div className="modalinput">
      <label htmlFor="female">Female</label>
      <input type="radio" id="female" name="gender" value="Female" onChange={() => setGender("Female")} />
    </div>
  </div>

  <div className="col-md-4 d-flex">
    <div className="modalinput">
      <label htmlFor="custom">Custom</label>
      <input type="radio" id="custom" name="gender" value="Custom" onChange={() => setGender("Custom")} />
    </div>
  </div>
</div>

{
    gender === "Custom"?(
        <>
          <div className="mt-3">
                                                <input type="email" class=" modalinput" id="exampleFormControlInput1" placeholder="Sur Name"/>

            </div>
            <div className="mt-3">
                                                <input type="email" class=" modalinput" id="exampleFormControlInput1" placeholder="Sur Name"/>

            </div>
        
        </>
    ):(
        <>
        </>
    )
}


        </div>
      


            <button className="btn btn-success" data-bs-dismiss="modal" >Create Account</button>
       
      </div>
    </div>
  </div>
    </div>
   
  
  )
}

export default Loginform