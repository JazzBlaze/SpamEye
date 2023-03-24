import React, { useEffect, useState } from "react";
import { useRef } from "react";
import supabase from "./Supabaseclient"
function Report() {
    const [selects, setSelects] = useState();
    const [value, setvalue] = useState();
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (selects == "Phone Number") {
            const { data, error } = await supabase
                .from('phoneno')
                .insert([{ value }])

            if (error) {
                console.log(error)
                setFormError('Please fill in all the fields correctly.')
            }
            if (data) {
                console.log(data)
                setFormError(null)

            }
        }
        if (selects == "UPI ID") {
            const { data, error } = await supabase
                .from('upiid')
                .insert([{ value }])

            if (error) {
                console.log(error)
                setFormError('Please fill in all the fields correctly.')
            }
            if (data) {
                console.log(data)
                setFormError(null)

            }
        }
    }



    return (

        <div class="report-container slider-one-active">


            <div class="slider-ctr">
                <div class="slider">
                    <form class="slider-form slider-one">
                        <h2>Report a spam</h2>
                        <label class="input">
                            <p>{selects}</p>
                            <select value={selects} className="dropd" onChange={e => setSelects(e.target.value)}>
                                <option >Phone Number</option>
                                <option value="Email">Email</option>
                                <option value="SMS">SMS</option>
                                <option value="UPI ID">UPI ID</option>
                            </select>
                            <input value={value} onChange={(e) => setvalue(e.target.value)} className="inputarea" type="text"></input>
                        </label>

                        <button class="first next" onClick={handleSubmit}>Submit</button>
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