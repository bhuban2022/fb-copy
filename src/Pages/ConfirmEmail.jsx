import React, { useState } from 'react';
import { FaCheck,FaArrowRight } from 'react-icons/fa';

const ConfirmEmail = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [confirmemail, setConfirmemail]=useState("")
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Validate email format (you can use a more sophisticated validation method)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };


  return (
    <div style={{padding:"50px"}}>
      <label>Email:</label><br></br>
      <input type="email" value={email} onChange={handleEmailChange} />

      {
      isValidEmail ? (
        <div>
           <label>Confirm Email:</label><br></br>
                <input type="email" onChange={(e)=>{setConfirmemail(e.target.value)}}  />
        </div>
      ):(<>
      </>)
    
    }

 
    </div>
  );
};

export default ConfirmEmail;
