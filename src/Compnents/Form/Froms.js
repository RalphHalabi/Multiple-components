import React from "react";
import "./Form.css";
import { useState } from "react";
import Validation from "../Validation/Validation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Data from "../Data/Data";



const Froms = () => {

    const [showValues , setShowValues] = useState(false);

    const [values , setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'',
        gender:'',
        country:'',
        subject:'',
        message:''
    });

    const [errors , setErrors] = useState({})

    
// updating the state on input change 
    const handleInput = (event) =>{
        const newObj ={...values , [event.target.name]: event.target.value}
        setValues(newObj)

    };


    //this function will check if the field are all valid it will reset them if not it will  return false
        const resetFields = () => {
            var form = document.getElementById("myForm");
            if (form) {
                setValues({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    gender:'',
                    country:'',
                    subject:'',
                    message:''
                });
            }
        };


        const handleSubmit = (event) =>{
            // not allowing the browser to refresh to not reset the inputs
            event.preventDefault();
            const isEmpty = Object.values(Validation(values)).every((value) => value.trim() === '');

            if(isEmpty){
                resetFields();
                setShowValues(true);
                setErrors(Validation(values))
               
            }

            else{
                
                setErrors(Validation(values));
                setShowValues(false)
            }
           
           
        };

    

  return ( 
        
            <div>            
                <form className="App" onSubmit={handleSubmit}>
                    <label for="firstname"><strong>FirstName:</strong></label>
                    <input type="text" value={values.firstName} placeholder="Enter FirstName"
                    name="firstName" onChange={handleInput}/>
                    {errors.firstName &&<ErrorMessage text={errors.firstName}/>}


                    <label for="lastName"><strong>LastName:</strong></label>
                    <input type="text" value={values.lastName} placeholder="Enter LastName"
                    name="lastName" onChange={handleInput} />
                    {errors.lastName &&<ErrorMessage  text={errors.lastName}/>}


                    <label for="email"><strong>Email:</strong></label>
                    <input type="email" value={values.email} placeholder="Enter Email"
                    name="email" onChange={handleInput} />
                    {errors.email &&<ErrorMessage  text={errors.email}/>}


                    <label for="phoneNumber"><strong>PhoneNumber:</strong></label>
                    <input type="tel" value={values.phoneNumber} placeholder="Enter PhoneNumber"
                    name="phoneNumber" onChange={handleInput} />
                    {errors.phoneNumber &&<ErrorMessage  text={errors.phoneNumber}/>}


                    <label for="gender"><strong>Gender</strong></label>  
                    <br/>
                    <select value={values.gender} placeholder="Country" onChange={handleInput} name="gender">
                        <option value="" disabled defaultValue>
                        Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender &&<ErrorMessage  text={errors.gender}/>}


                    <label for="country"><strong>Country</strong></label>
                    <select value={values.country} placeholder="Country" onChange={handleInput} name="country">
                        <option value="" disabled defaultValue >
                        Select country
                        </option>
                        <option value="lebanon">Lebanon</option>
                        <option value="uae">UAE</option>
                        <option value="qatar">Qatar</option>
                        <option value="dubai">Dubai</option>
                    </select>
                    {errors.country &&<ErrorMessage  text={errors.country}/>}


                    <label for="Subject"><strong>Subject:</strong></label>
                    <input type="text" value={values.subject} placeholder="Enter Enter Subject"
                    name="subject" onChange={handleInput}/>
                    {errors.subject &&<ErrorMessage  text={errors.subject}/>}

                    
                    <label for="Message"><strong>Message:</strong></label>
                    <textarea value={values.message} placeholder="Message"
                    name="message" onChange={handleInput}/>
                    {errors.message &&<ErrorMessage  text={errors.message}/>}

                    <div>
                        <button className="button">Validate</button>
                    </div>
                </form>

                {showValues &&
                    <div class="data-container">
                        <Data
                            firstName={values.firstName}
                            lastName={values.lastName}
                            email={values.email}
                            phoneNumber={values.phoneNumber}
                            gender={values.gender}
                            country={values.country}
                            subject={values.subject}
                            message={values.message}
                        />
                    </div>
                };
            </div>
        );
};

export default Froms;
