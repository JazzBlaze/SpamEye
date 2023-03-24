import React, { useEffect, useState } from "react";
import { useRef } from "react";
function Report(){
const [selects,setSelects]=useState();
const [value,setvalue]=useState();
const [formError, setFormError] = useState(null);

    return (
        
        <div class="container slider-one-active">
            
            
            <div class="slider-ctr">
                <div class="slider">
                    <form class="slider-form slider-one">
                        <h2>Report a spam</h2>
                        <label class="input">
                            <p>{selects}</p>
                            <select  value={selects} className="dropd" onChange={e=>setSelects(e.target.value)}>
                                <option >Phone Number</option>
                                <option value="Email">Email</option>
                                <option value="SMS">SMS</option>
                                <option value="UPI ID">UPI ID</option>
                            </select>
                       <input value={value} onChange={(e)=>setvalue(e.target.value)} className="inputarea" type="text"></input> 
                        </label>
                    
                        <button class="first next" onClick={handlesubmit}>Submit</button>
                    </form>
                    <form class="slider-form slider-two">
                        <h2>Are you happy with our service?</h2>
                        <div class="label-ctr">
                            <label class="radio">
                                <input type="radio" value="happy" name="condition" />
                                <div class="emot happy">
                                    <div class="mouth sad"></div>
                                </div>
                            </label>
                            <label class="radio">
                                <input type="radio" value="happy" name="condition" />
                                <div class="emot happy">
                                    <div class="mouth smile"></div>
                                </div>
                            </label>
                        </div>
                        <button class="second next">Next Step</button>
                    </form>
                    <div class="slider-form slider-three">
                        <h2>Hello, <span class="yourname"></span></h2>
                        <h3>Thank you for your input!</h3>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Report;