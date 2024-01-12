import { useState } from "react"
import "./Registration.css"
import facebook from "../image/fb.svg"
import axios from 'axios'
function Registration() {
  const [gender, setGender] = useState("")
  const [firstName, setFirstName] = useState("")
  const [surName, setSurName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [date, setDate] = useState("")


  const regist = ()=>{
    if(!firstName || !gender || !surName || !email ||!password || !year || !month ||!date ){
      alert("Please fill all the Blanks")
      return
    }
    try {
      axios.post("https://backend-self-delta.vercel.app/api/registration",{
      FirstName :firstName,
      SurName:surName,
      DateofBirth : `${date}/ ${month}/ ${year}`,
      Gender:gender,
      email:email,
      password:password
    })
    .then(res=>{
      if(res.data.status === true){
        setSurName("")
        setDate("")
        setEmail("")
        setFirstName("")
        setGender("")
        setPassword("")
      }
    })
    } catch (error) {
      console.log(error)
    }
    
    
    }
    
    
    const login = ()=>{
      if( !email ||!password ){
        alert("Please fill all the Blanks")
        return
      }
      try {
        axios.post("https://backend-self-delta.vercel.app/api/login",{
        email:email,
        password:password
      })
      .then(res=>{
        if(res.data.status === "true"){
         alert("Congratulations you are successfully loged in")
         setEmail("")
         setPassword("")
        }else{
          alert("Invalid Email or Password")
        }
      })
      } catch (error) {
        console.log(error)
        alert("Invalid Email or Password")
    
      }
      
      
      }
  return (
    <div className="maindiv">
      <div className="container ">
        <div className="row">
          <div className="col-md-1">

          </div>
          <div className="col-md-6">
            <img src={facebook} alt="facebook" width="259px" height="120px" /><br>
            </br>
            <span className="facetest">
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="col-md-5">
            <div className="loginfoam">
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address or Phone number" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
              <button className="btn btn-primary loginbtn"  onClick={login}><b>Login</b></button>
              <a className="mt-2 mb-2 d-flex justify-content-center forget" href="#">Forget Password</a>
              <hr></hr>
              <div className=" d-flex justify-content-center">
                <button className="btn btn-success  " data-bs-toggle="modal"
                  data-bs-target="#exampleModal" type="button"><b>Create new Account</b></button>

              </div>

            </div>
            
          </div>
        </div>
        <strong>User Name:</strong>{firstName}<br></br>
        <strong>Sur Name:</strong>{surName}<br></br>
        <strong>User Email:</strong>{email}<br></br>
        <strong>User DATE OF BIRTH:</strong>{year},{month},{date}<br></br>
        <strong>User Password:</strong>{password}<br></br>

      </div>






      {/* Modal */}
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
                <span style={{ color: "grey", fontSize: "14px" }}>
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
                  <input type="text" onChange={(e) => { setFirstName(e.target.value) }} class="modalinput" id="exampleFormControlInput1" placeholder="First Name" />

                </div>
                <div className="col-md-6">
                  <input type="text" class=" modalinput" onChange={(e) => { setSurName(e.target.value) }} id="exampleFormControlInput1" placeholder="Sur Name" />

                </div></div>
              <div className="mt-3">
                <input type="email" class=" modalinput" onChange={(e) => { setEmail(e.target.value) }} id="exampleFormControlInput1" placeholder="Email" />

              </div>
              <div className="mt-3">
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} class=" modalinput" id="exampleFormControlInput1" placeholder="Password" />

              </div>
              <div className="row mt-3">
                <label>Date of birth<i class="fa-solid fa-question"></i></label>
                <div className="col-md-4">
                  <select onChange={(e) => { setDate(e.target.value) }} className="modalinput">
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
                  <select onChange={(e) => { setMonth(e.target.value) }} className="modalinput">
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
                  <select onChange={(e) => { setYear(e.target.value) }} className="modalinput">
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

                <div className="col-md-4 ">
                  <div className="modalinput d-flex">
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
                gender === "Custom" ? (
                  <>
                    <div className="mt-3">
                      <input type="email" class=" modalinput" id="exampleFormControlInput1" placeholder="Sur Name" />

                    </div>
                    <div className="mt-3">
                      <input type="email" class=" modalinput" id="exampleFormControlInput1" placeholder="Sur Name" />

                    </div>

                  </>
                ) : (
                  <>
                  </>
                )
              }


            </div>



            <button className="btn btn-success"  onClick={regist}>Create Account</button>

          </div>
        </div>
      </div>
      {/* data-bs-dismiss="modal" */}

    </div>
  )
}
export default Registration