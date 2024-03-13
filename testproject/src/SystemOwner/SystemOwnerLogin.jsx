import React from "react";
import "./SystemOwnerLogin.css";
import "../assets/shared/Title";
import "../assets/shared/PrimaryButton";


import "./SystemOwnerLogin.css"
import Title from "../assets/shared/Title";
import PrimaryButton from "../assets/shared/PrimaryButton";

function SystemOwnerLogin() {
  return(
   <div> 
    <div className="LoginContainer">
      <div className="LoginInside">
        <Title additionalClassName="Title36B" customTitle={"Login"}/>

        <div class="input-wrapper">
  <input autocomplete="off" class="input" type="text" id="name" placeholder="Name" />
  <label class="label" for="name">
    Name
  </label>
  <button class="clear" aria-label="Clear input">
 
  </button>
</div>

<div class="input-wrapper">
  <input autocomplete="off" class="input" type="email" id="email" placeholder="Email" />
  <label class="label" for="email">
    Email
  </label>
  <button class="clear" aria-label="Clear input">

  </button>
</div>

<a class="anchor" href="#">Forgot Password ?</a>

<PrimaryButton

    customTitle="Login"
    additionalClassName="so-login-btn"
/>


        
      </div>
    </div>

   </div>
   );
}


export default SystemOwnerLogin;