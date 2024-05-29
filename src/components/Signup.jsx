import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); 
  const projectId = 'treoo5dhf86s'; 

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'projectId': projectId,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          appType: 'bookingportals'
        })
      });
      const result = await response.json();
      console.log(result)
      if (response.ok) {
        localStorage.setItem('userObj', result)
        alert('Sign up successful');
        navigate('/');
      } else {
        alert(result.message || 'Sign up failed');
      }
    } catch (error) {
      alert('Error signing up');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="  bg-white p-8 rounded shadow-md">
        <h3 className="text-center mb-4">Create an Account</h3>
        <Input
          isRequired
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-xs"
        />
        <br />
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
          <Button className=" w-56 bg-slate-700 text-orange-500" variant="shadow" onClick={handleSubmit}>
            Sign Up
          </Button>
          <p>Already have an account? <a href="/signin" className="text-blue-600">Sign In</a></p>
        </div>
      </div>
    </div>
  );
}
