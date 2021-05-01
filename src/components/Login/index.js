import { Button } from "@material-ui/core";
import React from "react";
import { LoginContainer, LoginInnerContainer } from "./Login.styled";
import { auth, provider } from "../../firebase";
function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"
          alt="Slack Logo"
        />
        <h1>Sign in to Pratik's Slack Clone</h1>
        <p>PratikSlackClone.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
