import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const Login = () => {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <React.Fragment>

      <div style={{
        maxWidth: "300px",
        background: "rgb(244 244 244)",
        padding: "40px 20px",
        borderRadius: "10px",
        margin: "auto"
      }}>
        <p 
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "500"
          }}
        >Login Page</p>
        <Input 
          name="username"
          label={"User Name"}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p style={{marginTop: "8px"}}></p>
        <Input
          name="password" 
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <Button 
            name="Submit"
            color={"#040404"}
          />
        </div>
      </div>
    </React.Fragment>
  )
 
}

export default Login;