import React from 'react'
import { useEffect } from 'react';
<script src="https://vyaparapp.authlink.me/js/sdk/otpless.js"></script>
    

export default function Login() {
    useEffect(() => {

        //@ts-ignore
        
        window["otpless"] = () => otpless();
        
        }, );
        
        const otpless = () => {
            
        //@ts-ignore
        
        const waId = window.otplessWaId?.();
        
        //Once you signup/sign a user, you can redirect the user to your signup/signin flow.
        
        // history.push("/home.html")
        
        }
    
  return (
    <div>

 <button id="whatsapp-login">login</button> 


    </div>
  )
}
