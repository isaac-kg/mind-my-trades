import React, { useState } from "react";
import Input from "../common/Input";

const Login = () => {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <React.Fragment>
      <Input 
        name="username"
        label={"User Name"}
        value={username}
      />
      <Input
        name="password" 
        label={"Password"}
        value={password}
      />
    </React.Fragment>
  )
 
}

export default Login;