import {React} from 'react'
import {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'
function Security () {
  
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [email, setEmail] = useState();
    const [e_otp, setE_otp] = useState();
    const [phone, setPhone] = useState();
    const [p_otp, setP_otp] = useState();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const navigate=useNavigate();
      const handlenext = ()=>{
        try {
          const response = axios.post(`${BASE_URL}/Security`,{
            question,
            answer,
            email,
            e_otp,
            phone,
            p_otp
          });
          console.log(response.data);
          navigate ("/login")
    
        } catch (error) {
          console.log(error)
        }
      }
    return(
    <>
    <h1 className="text-white text-center">Securiy & Verification</h1>
    <h2 className="text-white text-center mt-5" >Password & Recovery</h2>
    <Form>
    <Form.Group controlId="formSecurityQuestion" className="mt-3">
        <Form.Label className="text-white">Security Question</Form.Label>
        <Form.Select name="securityQuestion" className="security-select" required>
            <option value="">Select a security question</option>
            <option value="birthplace">What is your birthplace?</option>
            <option value="petName">What was the name of your first pet?</option>
            <option value="school">What was the name of your first school?</option>
            <option value="favoriteFood">What is your favorite food?</option>
            <option value="bestFriend">What is the name of your childhood best friend?</option>
        </Form.Select>
        </Form.Group>

        <Form.Group controlId="formSecurityAnswer" className="mt-3">
        <Form.Label className="text-white">Your Answer</Form.Label>
        <Form.Control 
            type="text" 
            name="securityAnswer" 
            placeholder="Enter your answer" 
            className="security-input" 
            required 
        />
        <Form.Group controlId="formEmail" className="mt-3">
  <Form.Label className="text-white">Email</Form.Label>
  <div className="d-flex">
    <Form.Control type="email" name="email" placeholder="Enter your email" className="security-input" required />
    <Button variant="primary" className="ms-2" onClick={() => alert('OTP Sent to Email')}>Send OTP</Button>
  </div>
</Form.Group>

<Form.Group controlId="formEmailOTP" className="mt-3">
  <Form.Label className="text-white">Enter OTP (Email)</Form.Label>
  <Form.Control type="text" name="emailOtp" placeholder="Enter OTP" className="security-input" required />
</Form.Group>

<Form.Group controlId="formPhone" className="mt-3">
  <Form.Label className="text-white">Phone Number</Form.Label>
  <div className="d-flex">
    <Form.Control type="tel" name="phone" placeholder="Enter phone number" className="security-input" required />
    <Button variant="primary" className="ms-2" onClick={() => alert('OTP Sent to Phone')}>Send OTP</Button>
  </div>
</Form.Group>

<Form.Group controlId="formPhoneOTP" className="mt-3">
  <Form.Label className="text-white">Enter OTP (Phone)</Form.Label>
  <Form.Control type="text" name="phoneOtp" placeholder="Enter OTP" className="security-input" required />
</Form.Group>

        </Form.Group>
        <Button
            type="submit"
            className=" text-center mt-3 btnStyle" onClick={handlesubmit}
            > Submit
        </Button>

    </Form>
    </>
    )
}
export default Security