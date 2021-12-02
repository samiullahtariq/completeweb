import React, { useState } from "react";

const Contact = () => {
    const [state , setState]=useState({
        fullname:"",
        email:"",
        phone:"",
        message:""
    });
    let submit=(e)=>{
       e.preventDefault();
       alert(`My name is ${state.fullname}.
        My Email is ${state.email}
        My mobile no is ${state.phone}
        ${state.message}`)
    }

    let InputEvent=(event)=>{
        const {name ,value} =event.target;
        setState((preVal)=>{
            return{
                ...preVal , 
                [name] : value,
            }
        })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                    <form onSubmit={submit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" 
                        name="fullname"
                        value={state.fullname}
                        onChange={InputEvent}
                        placeholder="Enter Your Name " />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" 
                        name="email"
                        value={state.email}
                        onChange={InputEvent}
                        placeholder="Enter Your email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" 
                        name="phone"
                        value={state.phone}
                        onChange={InputEvent}
                        placeholder="name@example.com" />
                    </div>
                        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="message"
                        value={state.message}
                        onChange={InputEvent} rows="3"></textarea>
                            <div class="col-12 mt-3">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </div>
                        
                    </form>
                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
