import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Base_url = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(Base_url);

        try {
            // Uncomment and update API endpoint
            const response = await axios.post(`${Base_url}/login`, { email, password });
            console.log(response.data);
            if(response.data.success) {
                navigate("/home");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <Form style={{ color: "#fff" }} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Link to="/forgot" className="text-white lnk">
                    Forgot Password?
                </Link>
                <br />
                <br />
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <br />
                <p className="text-white lnk">
                    Don't Have An Account?{" "}
                    <Link to="/register" className="text-white lnk">
                        Register
                    </Link>
                </p>
            </Form>
        </>
    );
}

export default Login;
