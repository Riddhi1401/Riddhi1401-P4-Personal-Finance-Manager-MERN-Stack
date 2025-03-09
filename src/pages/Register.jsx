import axios from 'axios';
import { useState } from 'react';
import {Form,Button} from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'

function Register()
{
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEamil] = useState();
  const [dob, setDOB] = useState();
  const [gender, setGender] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
const navigate=useNavigate();
  const handlenext = ()=>{
    try {
      const response = axios.post(`${BASE_URL}/register`,{
        name,
        phone,
        email,
        dob,
        gender,
        maritalStatus,
        username,
        password
      });
      console.log(response.data);
      navigate ("/Finance")

    } catch (error) {
      console.log(error)
    }
  }
    return (
        <>
        <h1 className="text-white text-center">Welcome to Finance Management App</h1>
        <h2 className="text-white text-center mt-5" >Registration</h2>
          <Form>
            <Form.Group controlId="formBasicName" className="mt-3" >
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control type="text"  name="name" placeholder="Full name" onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formBasicContact" className="mt-3" >
              <Form.Label className="text-white">Contact</Form.Label>
              <Form.Control type="tel"  name="Contact" placeholder="Enter Mobile No." onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email"  name="email" placeholder="Enter email" onChange={(e) => setEamil(e.target.value)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicDoB" className="mt-3" >
              <Form.Label className="text-white">Date Of Birth</Form.Label>
              <Form.Control type="date"  name="DOB" onChange={(e) => setDOB(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formBasicGender" className="mt-3">
            <Form.Label className="text-white">Gender</Form.Label>
            <div className='radio-group' style={{backgroundColor:"white"}}>
            <Form.Check 
              type="radio"
              label="Male"
              name="gender"
              value="male"
              className="text-black custom-radio"
              onChange={(e) => setGender(e.target.value)}
              required
              />
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="female"
              className="text-black custom-radio"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <Form.Check
              type="radio"
              label="Other"
              name="gender"
              value="other"
              className="text-black custom-radio"
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
          </Form.Group>

          <Form.Group controlId="formBasicMaritalStatus" className="mt-3">
          <Form.Label className="text-white">Marital Status</Form.Label>
          <Form.Select name="maritalStatus" onChange={(e) => setMaritalStatus(e.target.value)} required>
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formBasicUsername" className="mt-3">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
          <Form.Label className="text-white">Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" placeholder="Re-enter password" required />
        </Form.Group>
            <div>
              <Button
                  type="submit"
                  className=" text-center mt-3 btnStyle" onClick={handlenext}
                > Register
                </Button>

              <p className="mt-3" style={{color: "#9d9494"}}>Already have an account? <Link to="/" className="text-white lnk" >Login</Link></p>
            </div>
          </Form>
        </>
    )
}

export default Register