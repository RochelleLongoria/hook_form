import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    // Setting up validations for firstName, lastName, Email, password
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");


    // Validating first name input
    const firstNameHandler = (e) => {
        setfirstName(e.target.value)
        console.log(firstName)
        if(e.target.value.length < 3){
            setfirstNameError("First Name must be more than two characters")
        }
        else{
            setfirstNameError("")
        }

    }
       // Validating last name input
    const lastNameHandler = (e) => {
        setlastName(e.target.value)
        if(e.target.value.length < 3){
            setlastNameError("Last Name must be more than two characters")
        }
        else{
            setlastNameError("")
        }

    }
         // Validating email input
        const emailHandler = (e) => {
            setEmail(e.target.value)
            if(e.target.value.length < 5){
                setemailError("Email must be more than five characters")
            }
            else{
                setlastNameError("")
            }
    
        }
        // Validating password input
        const passwordsHandler = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 8){
                setpasswordError("password must be more than eight characters")
            }
            else{
                setpasswordError("")
            }

        }
        
        // Validating confirm password input
        const confirmPasswordsHandler = (e) => {
            setconfirmPassword(e.target.value)
            if(e.target.value.length < 8){
                setpasswordError("password must be more than eight characters")
            }
            else if(e.target.value !== password){
                setpasswordError("passwords must be the same")
            }
            else{
                setpasswordError("")
            }

        }


    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <fieldset>
            <legend>Form</legend>
            <fieldset>
            <legend>UserInfo</legend>
                First Name: {JSON.stringify(firstName)} <br/>
                Last Name: {JSON.stringify(lastName)} <br/>
                E-mail: {JSON.stringify(email)} <br/>
                Password: {JSON.stringify(password)} <br/>
            </fieldset>
            <form onSubmit={ createUser }>
                <div>
                    {
                        firstNameError ? <p style={{color:"red"}}>{firstNameError}</p>:null
                    }
                    <label>First Name:</label> 
                    <input type="text" onChange={firstNameHandler} />
                </div>
                <div>
                    {
                        lastNameError ? <p style={{color:"red"}}>{lastNameError}</p>:null
                    }
                    <label>Last Name:</label> 
                    <input type="text" onChange={lastNameHandler} />
                </div>
                    {
                        emailError ? <p style={{color:"red"}}>{emailError}</p>:null
                    }
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={emailHandler} />
                </div>
                <div>
                    {
                        passwordError ? <p style={{color:"red"}}>{passwordError}</p>:null
                    }
                    <label>Password: </label>
                    <input type="text" onChange={passwordsHandler} />
                </div>
                 <div>
                    {
                        confirmPasswordError ? <p style={{color:"red"}}>{confirmPasswordError}</p>:null
                    }
                    <label>Confirm Password: </label>
                    <input type="text" onChange={confirmPasswordsHandler} />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </fieldset>
    );
};
    
export default UserForm;
