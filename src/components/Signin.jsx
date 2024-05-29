import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom"; 

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); 
  const projectId = 'treoo5dhf86s';

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'projectId': projectId,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: 'bookingportals'
        })
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(result)); 
        alert('Sign in successful');
        navigate('/'); 
      } else {
        alert(result.message || 'Sign in failed');
      }
    } catch (error) {
      alert('Error signing in');
    }
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="  bg-white p-8 rounded shadow-md">
        <h3 className="text-center inline">Sign In</h3>
        <Input
          isRequired
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-xs"
        />
        <br />
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="max-w-xs"
        />
        <br />
        <div>
          <Button className="w-80 bg-slate-700 text-orange-500" variant="shadow" onClick={handleSubmit}>
            Sign In
          </Button>
          <h5>Don't have an account? <a href="/signup" className="text-blue-600">Register Here</a></h5>
        </div>
      </div>
    </div>

    
  );
}
